const fields = foundry.data.fields;

const skillField = () => ({
  battle: new fields.SchemaField({
    base: new fields.NumberField({
      initial: 0,
      min: 0
    }),
    progress: new fields.NumberField({
      initial: 0,
      min: 0,
      max: 0,
      step: 5
    })
  })
})

export class CommonActorData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      skills: new fields.SchemaField({
        battle: new fields.SchemaField(skillField()),
        knowledge: new fields.SchemaField(skillField()),
        discretion: new fields.SchemaField(skillField()),
        endurance: new fields.SchemaField(skillField()),
        strength: new fields.SchemaField(skillField()),
        ability: new fields.SchemaField(skillField()),
        magic: new fields.SchemaField(skillField()),
        movement: new fields.SchemaField(skillField()),
        perception: new fields.SchemaField(skillField()),
        sociability: new fields.SchemaField(skillField()),
        survival: new fields.SchemaField(skillField()),
        shooting: new fields.SchemaField(skillField()),
        willingness: new fields.SchemaField(skillField())
      }),
      description: new fields.HtmlField({
        initial: ""
      }),
      vitality: new fields.NumberField({
        min: 0,
        initial: 0
      }),
      size: new fields.NumberField({
        min: 0,
        initial: 0
      }),
      weight: new fields.NumberField({
        min: 0,
        initial: 0
      }),
      coins: new fields.SchemaField({
        gold: new fields.NumberField({
          initial: 0,
          min: 0
        }),
        silver: new fields.NumberField({
          initial: 0,
          min: 0,
          max: 99
        }),
        copper: new fields.NumberField({
          initial: 0,
          min: 0,
          max: 99
        }),
      }),
    }
  }
}
