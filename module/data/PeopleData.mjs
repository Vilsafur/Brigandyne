import { CommonItemData } from "./CommonItemData.mjs"

const Fields = foundry.data.fields

const SkillField = () =>
  new Fields.NumberField({
    min: 0,
    initial: 0,
    step: 5,
    integer: true,
  })

export class PeopleData extends CommonItemData {
  static defineSchema() {
    const commonSchema = super.defineSchema()

    const skillsBase = new Fields.SchemaField({
      battle: SkillField(),
      knowledge: SkillField(),
      discretion: SkillField(),
      stamina: SkillField(),
      strength: SkillField(),
      ability: SkillField(),
      magic: SkillField(),
      movement: SkillField(),
      perception: SkillField(),
      sociability: SkillField(),
      survival: SkillField(),
      shooting: SkillField(),
      will: SkillField(),
    })

    return {
      ...commonSchema,
      skillsBase,
    }
  }
}
