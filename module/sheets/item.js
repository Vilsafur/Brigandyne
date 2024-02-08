export default class BrigandyneItemSheet extends ItemSheet {

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      width: 530,
      classes: ["brigandyne", "sheet", "item"]
    })
  }

  get template() {
    console.log(`Brigandyne | Récupération du fichier html ${this.item.data.type}.`)

    return `systems/brigandyne/templates/sheets/${this.item.data.type}.hbs`
  }

  getData() {
    const data = super.getData()
    data.config = CONFIG.brigandyne
    console.log(data)

    return data
  }
}
