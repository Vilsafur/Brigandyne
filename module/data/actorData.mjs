export class ActorData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const Fields = foundry.data.Fields

    console.debug(`Brigandyne | ActorData`)

    return {
      nom: Fields.StringField({
        required: true,
        label: "Brigandyne.ActorData.Nom"
      })
    }
  }
}