import { CommonItemData } from "./CommonItemData.mjs"

export class SkillData extends CommonItemData {
  static defineSchema() {
    const commonSchema = super.defineSchema()

    return {
      ...commonSchema
    }
  }
}