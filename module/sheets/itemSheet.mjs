/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
export class BrigandyneItemSheet extends ItemSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      width: 530,
      classes: ["brigandyne", "sheet", "item"]
    })
  }

  /** @override */
  get template() {
    return `systems/brigandyne/templates/sheets/${this.item.data.type}.hbs`
  }

  getData() {
    const data = super.getData()
    data.config = CONFIG.BRIGANDYNE

    return data
  }
}
