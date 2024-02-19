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
    return `systems/brigandyne/templates/sheets/${this.actor.type}.hbs`
  }

  /** @override */
  getData() {
    const context  = super.getData()
    context.config = CONFIG.BRIGANDYNE

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

    debugger

    console.log('Brigandyne | actorSheet | getData', context)
    return context 
  }

  async _onDropItemCreate(data) {
    console.log('Brigandyne | actorsheet | onDropItemCreate', data)
    await this._onDropItemCreateArchetype(data)
    super._onDropItemCreate(data)
  }

  async _onDropItemCreateArchetype(data) {
    return new Promise(async (resolve, reject) => {
      if (data.type !== 'archetype') {
        resolve()
        return
      }
      data.choices = {}
      for (const caracteristiqueName in data.system.caracteristiques) {
        if (Object.hasOwnProperty.call(data.system.caracteristiques, caracteristiqueName)) {
          const caracteristique = data.system.caracteristiques[caracteristiqueName];
          if (caracteristique.isChoice) {
            if (data.choices[caracteristique.value] === undefined) {
              data.choices[caracteristique.value] = {
                groupName: caracteristique.value,
                choices: {},
                chosen: ''
              }
            }
            data.choices[caracteristique.value].choices[caracteristiqueName] = caracteristiqueName
          }
        }
      }

      ui.notifications.info(`Nombre de choix : ${Object.keys(data.choices).length}`)
      if(Object.keys(data.choices).length == 0) {
        resolve()
        return
      }
      
      const content = await renderTemplate("systems/brigandyne/templates/dialogs/dropArchetype.hbs", data);
      new Dialog({
        title: "Options de l'archetype",
        content: content,
        buttons: {
          validate: {
            label: 'Valider',
            callback: (html) => {
              const values = html.find("input").filter((index, i) => i.checked).map((index, i) => i.value);
              for (const value of values) {
                data.system.effectiveRandom.push(value)
              }
              console.log('Brigandyne | actorSheet | _onDropItemCreateArchetype', data)
              ui.notifications.info("Button #1 Clicked!")
              resolve()
            },
            icon: `<i class="fas fa-check"></i>`
          }
        }
      }).render(true);

    })
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
    const objets = [];
    const sorts = [];

    // Iterate through items, allocating to containers
    for (let i of context.items) {
      i.img = i.img || DEFAULT_TOKEN;
      if (i.type === 'armeMelee') {
        armesMelees.push(i);
      }
      else if (i.type === 'armeDistance') {
        armesDistances.push(i);
      }
      else if (i.type === 'objet') {
        objets.push(i);
      }
      else if (i.type === 'sort') {
        sorts.push(i);
      }
    }

    context.armesDistances = armesDistances
    context.armesMelees = armesMelees
    context.objets = objets
    context.sorts = sorts
  }

  activateListeners(html) {
    html.find(".item-edit").click(this._onItemEdit.bind(this))
    html.find(".item-delete").click(this._onItemDelete.bind(this))
    html.find(".item-roll").click(this._onItemRoll.bind(this))
    html.find(".progression-update-to-20").click(this._onProgressionUpdateTo20.bind(this))
    html.find(".progression-update-to-15").click(this._onProgressionUpdateTo15.bind(this))
    html.find(".progression-update-to-10").click(this._onProgressionUpdateTo10.bind(this))
    html.find(".progression-update-to-5").click(this._onProgressionUpdateTo5.bind(this))
    html.find(".progression-update-to-0").click(this._onProgressionUpdateTo0.bind(this))
    if (this.actor.owner) {
    }

    super.activateListeners(html)
  }

  async _onProgressionUpdateTo20(event) {
    this.form.querySelector(`input[name="data.competences.${event.currentTarget.dataset.competence}.progression"`).value = '20'
    await this.submit()
  }

  async _onProgressionUpdateTo15(event) {
    this.form.querySelector(`input[name="data.competences.${event.currentTarget.dataset.competence}.progression"`).value = '15'
    await this.submit()
  }

  async _onProgressionUpdateTo10(event) {
    this.form.querySelector(`input[name="data.competences.${event.currentTarget.dataset.competence}.progression"`).value = '10'
    await this.submit()
  }
  
  async _onProgressionUpdateTo5(event) {
    this.form.querySelector(`input[name="data.competences.${event.currentTarget.dataset.competence}.progression"`).value = '5'
    await this.submit()
  }
  
  async _onProgressionUpdateTo0(event) {
    this.form.querySelector(`input[name="data.competences.${event.currentTarget.dataset.competence}.progression"`).value = '0'
    await this.submit()
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
