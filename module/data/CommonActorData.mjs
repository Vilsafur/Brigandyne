import { CommonData } from "./CommonData.mjs"

const Fields = foundry.data.fields

const skillField = () => ({
  battle: new Fields.SchemaField({
    base: new Fields.NumberField({
      initial: 0,
      min: 0,
    }),
    progress: new Fields.NumberField({
      initial: 0,
      min: 0,
      max: 0,
      step: 5,
    }),
  }),
})

export class CommonActorData extends CommonData {
  static defineSchema() {
    const commonSchema = super.defineSchema()

    return {
      ...commonSchema,
      skills: new Fields.SchemaField({
        battle: new Fields.SchemaField(skillField()),
        knowledge: new Fields.SchemaField(skillField()),
        discretion: new Fields.SchemaField(skillField()),
        endurance: new Fields.SchemaField(skillField()),
        strength: new Fields.SchemaField(skillField()),
        ability: new Fields.SchemaField(skillField()),
        magic: new Fields.SchemaField(skillField()),
        movement: new Fields.SchemaField(skillField()),
        perception: new Fields.SchemaField(skillField()),
        sociability: new Fields.SchemaField(skillField()),
        survival: new Fields.SchemaField(skillField()),
        shooting: new Fields.SchemaField(skillField()),
        willingness: new Fields.SchemaField(skillField()),
      }),
      vitality: new Fields.NumberField({
        min: 0,
        max: 0,
        initial: 0,
        integer: true,
      }),
      fortune: new Fields.NumberField({
        min: 0,
        max: 0,
        initial: 0,
        integer: true,
      }),
      size: new Fields.NumberField({
        min: 1,
        initial: 1,
        positive: true,
      }),
      weight: new Fields.NumberField({
        min: 1,
        initial: 1,
        positive: true,
      }),
      coins: new Fields.SchemaField({
        gold: new Fields.NumberField({
          initial: 0,
          min: 0,
        }),
        silver: new Fields.NumberField({
          initial: 0,
          min: 0,
          max: 99,
        }),
        copper: new Fields.NumberField({
          initial: 0,
          min: 0,
          max: 99,
        }),
      }),
      age: new Fields.NumberField({
        min: 1,
        initial: 1,
        positive: true,
        integer: true,
      }),
    }
  }
}
