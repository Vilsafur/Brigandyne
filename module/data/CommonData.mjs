const Fields = foundry.data.fields

export class CommonData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new Fields.HTMLField({
        initial: ``,
      }),
    }
  }
}
