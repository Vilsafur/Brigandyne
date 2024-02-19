import { getModo } from "../utils/actor.mjs";

/**
 * Extend the basic Item with some very simple modifications.
 * @extends {Item}
 */
export class BrigandyneItem extends Item {

  chatTemplate = {
    "armeDistance": "systems/brigandyne/templates/partials/armeDistance-card.hbs",
    "armeMelee": "systems/brigandyne/templates/partials/armeMelee-card.hbs",
  }

  /**
   * Augment the basic Item data model with additional dynamic data.
   */
  prepareData() {}

  /**
   * Prepare a data object which is passed to any Roll formulas which are created related to this Item
   * @private
   */
   async getRollData() {
   }

  /**
   * Handle clickable rolls.
   * @param {Event} event   The originating click event
   * @private
   */
  async roll() {
    const item = this;

    // Initialize chat data.
    const speaker = ChatMessage.getSpeaker({ actor: this.actor });
    const rollMode = game.settings.get('core', 'rollMode');
    const label = `[${item.type}] ${item.name}`;

    let caracteristique = undefined

    switch (this.type) {
      case 'armeMelee':
        caracteristique = 'combat'
        break;
      case 'armeDistance':
        caracteristique = 'tir'
        break;
    }
    // If there's no roll data, send a chat message.
    if (caracteristique) {
      // Retrieve roll data.
      const rollData = await this.getRollData();

      const target = game.user.targets.first()?.actor
      const modo = await getModo(target)
      
      // Invoke the roll and submit it to chat.
      const roll = new Roll("1d100", rollData);
      // If you need to store the value first, uncomment the next line.
      const result = await roll.evaluate();
      const data = {
        result: result.result,
        target: game.user.targets.first()?.actor,
        actor: this.actor,
        success: this._isRollSuccess(this.actor, caracteristique, modo, result),
        competence: this.actor.system.calculatedCaracteristiques[caracteristique],
        modo,
        degats: this._getDegats(this.actor, result)
      }

      const cont = await renderTemplate("systems/brigandyne/templates/chat/itemRoll.hbs", data);

      ChatMessage.create({
        speaker: speaker,
        rollMode: rollMode,
        flavor: label,
        content: cont,
      });
      return roll;
    }
    // Otherwise, create a roll and send a chat message from it.
    else {
      ChatMessage.create({
        speaker: speaker,
        rollMode: rollMode,
        flavor: label,
        content: this.description ?? '',
      });
    }
  }

  _isRollSuccess(actor, competence, modo, result) {
    return result.result < actor.system.calculatedCaracteristiques[competence] + modo
  }
  _getDegats(actor, result) {
    return (result.result % 10) + this.system.degats
  }
}
