export class ActorData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const Fields = foundry.data.fields

    console.debug(`Brigandyne | ActorData`)

    return {
      vitalite: new Fields.NumberField({
        required: true,
        initial: 1,
        min: 0,
        max: 30,
        integer: true,
        positive: true
      }),
      biography: new Fields.HTMLField(),
    }
  }
}