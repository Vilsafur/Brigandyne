export class ActorData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const Fields = foundry.data.fields

    console.debug(`Brigandyne | ActorData`)

    return {
      nom: new Fields.StringField({
        required: true,
        label: "Brigandyne.ActorData.Nom"
      })
    }
  }
}