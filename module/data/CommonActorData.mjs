const fields = foundry.data.fields;

export class CommonActorData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      skills: new fields.SchemaField({
        combat: new fields.SchemaField({
          base: new fields.NumberField({
            initial: 0,
            min: 0
          }),
          progression: new fields.NumberField({
            initial: 0,
            min: 0,
            max: 0,
            step: 5
          })
        }),
        connaissances: new fields.SchemaField({
          base: new fields.NumberField({
            initial: 0,
            min: 0
          }),
          progression: new fields.NumberField({
            initial: 0,
            min: 0,
            max: 0,
            step: 5
          })
        }),
        discretion: new fields.SchemaField({
          base: new fields.NumberField({
            initial: 0,
            min: 0
          }),
          progression: new fields.NumberField({
            initial: 0,
            min: 0,
            max: 0,
            step: 5
          })
        }),
        endurance: new fields.SchemaField({
          base: new fields.NumberField({
            initial: 0,
            min: 0
          }),
          progression: new fields.NumberField({
            initial: 0,
            min: 0,
            max: 0,
            step: 5
          })
        }),
        force: new fields.SchemaField({
          base: new fields.NumberField({
            initial: 0,
            min: 0
          }),
          progression: new fields.NumberField({
            initial: 0,
            min: 0,
            max: 0,
            step: 5
          })
        }),
        habilete: new fields.SchemaField({
          base: new fields.NumberField({
            initial: 0,
            min: 0
          }),
          progression: new fields.NumberField({
            initial: 0,
            min: 0,
            max: 0,
            step: 5
          })
        }),
        magie: new fields.SchemaField({
          base: new fields.NumberField({
            initial: 0,
            min: 0
          }),
          progression: new fields.NumberField({
            initial: 0,
            min: 0,
            max: 0,
            step: 5
          })
        }),
        mouvement: new fields.SchemaField({
          base: new fields.NumberField({
            initial: 0,
            min: 0
          }),
          progression: new fields.NumberField({
            initial: 0,
            min: 0,
            max: 0,
            step: 5
          })
        }),
        perception: new fields.SchemaField({
          base: new fields.NumberField({
            initial: 0,
            min: 0
          }),
          progression: new fields.NumberField({
            initial: 0,
            min: 0,
            max: 0,
            step: 5
          })
        }),
        sociabilite: new fields.SchemaField({
          base: new fields.NumberField({
            initial: 0,
            min: 0
          }),
          progression: new fields.NumberField({
            initial: 0,
            min: 0,
            max: 0,
            step: 5
          })
        }),
        survie: new fields.SchemaField({
          base: new fields.NumberField({
            initial: 0,
            min: 0
          }),
          progression: new fields.NumberField({
            initial: 0,
            min: 0,
            max: 0,
            step: 5
          })
        }),
        tir: new fields.SchemaField({
          base: new fields.NumberField({
            initial: 0,
            min: 0
          }),
          progression: new fields.NumberField({
            initial: 0,
            min: 0,
            max: 0,
            step: 5
          })
        }),
        volonte: new fields.SchemaField({
          base: new fields.NumberField({
            initial: 0,
            min: 0
          }),
          progression: new fields.NumberField({
            initial: 0,
            min: 0,
            max: 0,
            step: 5
          })
        })
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
