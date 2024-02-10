/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class BrigandyneActorSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      width: 1162,
      classes: ["brigandyne", "sheet", "actor"]
    })
  }

  /** @override */
  get template() {
    return `systems/brigandyne/templates/sheets/${this.actor.data.type}.hbs`
  }

  /** @override */
  getData() {
    const context  = super.getData()
    context .config = CONFIG.BRIGANDYNE

    // Use a safe clone of the actor data for further operations.
    const actorData = context.data;

    // Add the actor's data to context.data for easier access, as well as flags.
    context.system = actorData.system;

    // Prepare characteritems.
    this._prepareItems(context);


    // Add roll data for TinyMCE editors.
    context.rollData = context.actor.getRollData();

    // Prepare active effects
    // context.effects = prepareActiveEffectCategories(
    //   // A generator that returns all effects stored on the actor
    //   // as well as any items
    //   this.actor.allApplicableEffects()
    // );

    return context 
  }

  /**
   * Organize and classify Items for Character sheets.
   *
   * @param {Object} actorData The actor to prepare.
   *
   * @return {undefined}
   */
  _prepareItems(context) {
    // Initialize containers.
    const armesDistances = [];
    const armesMelees = [];
    const peuples = [];

    // Iterate through items, allocating to containers
    for (let i of context.items) {
      i.img = i.img || DEFAULT_TOKEN;
      if (i.type === 'armeMelee') {
        armesMelees.push(i);
      }
      else if (i.type === 'armeDistance') {
        armesDistances.push(i);
      }
      else if (i.type === 'peuple') {
        peuples.push(i);
      }
    }

    context.armesDistances = armesDistances
    context.armesMelees = armesMelees
  }

  activateListeners(html) {
    html.find(".item-edit").click(this._onItemEdit.bind(this))
    html.find(".item-delete").click(this._onItemDelete.bind(this))
    html.find(".item-roll").click(this._onItemRoll.bind(this))
    if (this.actor.owner) {
    }

    super.activateListeners(html)
  }

  _onItemEdit(event) {
    event.preventDefault();
    let element = event.currentTarget
    let itemId = element.dataset.itemId
    let item = this.actor.items.find(e => e._id == itemId)

    item.sheet.render(true)
  }

  async _onItemDelete(event) {
    event.preventDefault();
    let element = event.currentTarget
    let itemId = element.dataset.itemId
    await this.actor.deleteEmbeddedDocuments('Item', [itemId])
  }

  _onItemRoll(event) {
    console.log(`Brigandyne | onItemRoll.`)
    event.preventDefault();
    let element = event.currentTarget
    const itemId = element.dataset.itemId
    const item = this.actor.items.find(e => e._id == itemId)
    
    item.roll()
  }
}
