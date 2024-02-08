export default class BrigandyneActorSheet extends ActorSheet {

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      width: 1162,
      classes: ["brigandyne", "sheet", "actor"]
    })
  }

  get template() {
    console.log(`Brigandyne | Récupération du fichier html ${this.actor.data.type}.`)

    return `systems/brigandyne/templates/sheets/${this.actor.data.type}.hbs`
  }

  getData() {
    const data = super.getData()
    data.config = CONFIG.brigandyne
    data.armesMelees = data.items.filter(item => item.type == "armeMelee")
    data.armesDistances = data.items.filter(item => item.type == "armeDistance")
    let peuples = data.items.filter(item => item.type == "peuple")

    if (peuples.length > 1) {
      data.items = [
        data.items.filter(item => item.type != "peuple")
      ]
      data.items.push(peuples[peuples.length - 1])
    }

    data.peuple = peuples.pop()

    console.log(data)

    return data
  }

  activateListeners(html) {
    html.find(".item-edit").click(this._onItemEdit.bind(this))
    html.find(".item-delete").click(this._onItemDelete.bind(this))
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
}
