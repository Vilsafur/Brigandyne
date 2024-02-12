/**
 * Extend the base Actor document by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class BrigandyneActor extends Actor {

  /** @override */
  prepareData() {
    // Prepare data for the actor. Calling the super version of this executes
    // the following, in order: data reset (to clear active effects),
    // prepareBaseData(), prepareEmbeddedDocuments() (including active effects),
    // prepareDerivedData().
    super.prepareData();
  }

  /** @override */
  prepareBaseData() {
    // Data modifications in this step occur before processing embedded
    // documents or derived data.
  }

  /**
   * @override
   * Augment the actor source data with additional dynamic data. Typically,
   * you'll want to handle most of your calculated/derived data in this step.
   * Data calculated in this step should generally not exist in template.json
   * (such as ability modifiers rather than ability scores) and should be
   * available both inside and outside of character sheets (such as if an actor
   * is queried and has a roll executed directly from it).
   */
  prepareDerivedData() {
    const actorData = this;

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    this._prepareCharacterData(actorData);
    this._prepareNpcData(actorData);
  }

  /**
   * Override getRollData() that's supplied to rolls.
   */
  getRollData() {
    const data = super.getRollData();

    // Prepare character roll data.
    this._getCharacterRollData(data);
    this._getNpcRollData(data);

    return data;
  }

  /**
   * Prepare character roll data.
   */
  _getCharacterRollData(data) {
    if (this.type !== 'personnage') return;
  
    // Copy the ability scores to the top level, so that rolls can use
    // formulas like `@str.mod + 4`.
    if (data.abilities) {
      for (let [k, v] of Object.entries(data.abilities)) {
        data[k] = foundry.utils.deepClone(v);
      }
    }
  }
  
  /**
   * Prepare NPC roll data.
   */
  _getNpcRollData(data) {
    if (this.type !== 'pnj') return;
  
    // Process additional NPC data here.
  }

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData) {
    if (actorData.type !== 'personnage') return;

    // Make modifications to data here. For example:
    const systemData = actorData.system;

    let peuples = actorData.items.filter(item => item.type == "peuple")

    systemData.peuple = peuples.pop()

    let archetypes = actorData.items.filter(item => item.type == "archetype")

    systemData.archetype = archetypes.pop()

    systemData.calculatedCaracteristiques = {}

    for (const competenceName in systemData.competences) {
      if (Object.hasOwnProperty.call(systemData.competences, competenceName)) {
        const competence = systemData.competences[competenceName];
        const peupleValue = systemData?.peuple?.system?.caracteristiques[competenceName] ?? "0"
        const archetypeData = systemData?.archetype?.system ?? undefined
        let archetypeValue = archetypeData?.caracteristiques[competenceName].value ?? 0
        if (archetypeData?.caracteristiques[competenceName].isChoice && archetypeData?.effectiveRandom.indexOf(competenceName) == -1) {
          archetypeValue = 0
        }
        systemData.calculatedCaracteristiques[competenceName] = parseInt(competence.base) + parseInt(competence.progression) + parseInt(archetypeValue) + parseInt(peupleValue)
      }
    }
  }

  /**
   * Prepare NPC type specific data.
   */
  _prepareNpcData(actorData) {
    if (actorData.type !== 'npc') return;

    // Make modifications to data here. For example:
    const systemData = actorData.system;
    systemData.xp = (systemData.cr * systemData.cr) * 100;
  }
}
