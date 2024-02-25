import { CommonActorData } from './CommonActorData.mjs'

const Fields = foundry.data.fields

export class CharacterData extends CommonActorData {
  static defineSchema() {
    const commonSchema = super.defineSchema()

    return {
      ...commonSchema,
      hair: new Fields.StringField({
        initial: '',
      }),
      experience: new Fields.NumberField({
        min: 0,
        step: 1,
        initial: 0
      }),
      spokenLanguages: new Fields.StringField({
        initial: ''
      }),
      hand: new Fields.StringField({
        initial: 'a'
      }),
      motivation: new Fields.StringField({
        initial: 'a'
      }),
      livingStandards: new Fields.StringField({
        initial: 'a'
      }),
      country: new Fields.StringField({
        initial: 'a'
      }),
      religion: new Fields.StringField({
        initial: 'a'
      }),
    }
  }
}