/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
export class BrigandyneItemSheet extends ItemSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      width: 530,
      classes: ["brigandyne", "sheet", "item"],
      tabs: [
        {
          navSelector: '.sheet-tabs',
          contentSelector: '.sheet-body',
          initial: 'description',
        },
      ],
    })
  }

  /** @override */
  get template() {
    return `systems/brigandyne/templates/sheets/${this.item.data.type}.hbs`
  }

  getData() {
    const context = super.getData()
    context.config = CONFIG.BRIGANDYNE
    
    const itemData = context.data
    context.rollData = this.item.getRollData()

    context.system = itemData.system
    context.flags = itemData.flags

    console.log('Brigandyne | itemSheet | context : ', context)

    return context
  }
}
