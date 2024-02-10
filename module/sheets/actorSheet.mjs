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
    const data = super.getData()
    data.config = CONFIG.BRIGANDYNE

    console.log("BRIGANDYNE | actorSheet | data : ", data)

    return data
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
