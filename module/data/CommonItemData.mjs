import { CommonData } from "./CommonData.mjs"

export class CommonItemData extends CommonData {
  static defineSchema() {
    const commonSchema = super.defineSchema()
    
    return {
      ...commonSchema
    }
  }
}