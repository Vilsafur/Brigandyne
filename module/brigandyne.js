import BrigandyneItemSheet from "./sheets/item.js"
import BrigandyneActorSheet from "./sheets/actor.js"
import { brigandyne } from './config.js'

Hooks.once('init', () => {
  console.log("Brigandyne | Initialisation du système Brigandyne")

  CONFIG.brigandyne = brigandyne

  Handlebars.registerHelper('loud', function (aString) {
    return aString.toUpperCase()
  })

  Handlebars.registerHelper('ucfirst', function (aString) {
    return aString.charAt(0).toUpperCase() + aString.slice(1)
  })

  Handlebars.registerHelper('modifier', function (base) {
    return base != 0 ? 50 - base : null
  })

  Handlebars.registerHelper('actualCompetence', function (competence) {
    return parseInt(competence.base) + parseInt(competence.progression)
  })

  Items.unregisterSheet("core", ItemSheet)
  Items.registerSheet("brigandyne", BrigandyneItemSheet, { markDefault: true })

  Actors.unregisterSheet("core", ActorSheet)
  Actors.registerSheet("brigandyne", BrigandyneActorSheet, { markDefault: true })
})