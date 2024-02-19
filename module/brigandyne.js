// Import document classes.
import { BrigandyneItem } from "./documents/item.mjs"
import { BrigandyneActor } from "./documents/actor.mjs"
// Import helper/utility classes and constants.
import { preloadHandlebarsTemplates } from "./helpers/templates.mjs"
import { brigandyne } from './helpers/config.mjs'
// Import sheet classes.
import { BrigandyneItemSheet } from "./sheets/itemSheet.mjs"
import { BrigandyneActorSheet } from "./sheets/actorSheet.mjs"

/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */
Hooks.once('init', () => {
  console.log("Brigandyne | Initialisation du système Brigandyne")

  // Add utility classes to the global game object so that they're more easily
  // accessible in global contexts.
  game.brigandyne = {
    BrigandyneActor,
    BrigandyneItem,
  };

  // Add custom constants for configuration.
  CONFIG.BRIGANDYNE = brigandyne

  // Define custom Document classes
  CONFIG.Item.documentClass = BrigandyneItem
  CONFIG.Actor.documentClass = BrigandyneActor

  // Register sheet application classes
  Items.unregisterSheet("core", ItemSheet)
  Items.registerSheet("brigandyne", BrigandyneItemSheet, {
    markDefault: true,
    label: 'BRIGANDYNE.SheetLabels.Item',
  })
  Actors.unregisterSheet("core", ActorSheet)
  Actors.registerSheet("brigandyne", BrigandyneActorSheet, {
    markDefault: true,
    label: 'BRIGANDYNE.SheetLabels.Actor',
  })

  /* -------------------------------------------- */
  /*  Handlebars Helpers                          */
  /* -------------------------------------------- */
  Handlebars.registerHelper('loud', function (aString) {
    return aString.toUpperCase()
  })

  Handlebars.registerHelper('ucfirst', function (aString) {
    return aString.charAt(0).toUpperCase() + aString.slice(1)
  })

  Handlebars.registerHelper('modifier', function (base) {
    return base != 0 ? 50 - base : null
  })

  Handlebars.registerHelper('lookupProp', function (obj, key) {
    return obj ? obj[key] : '';
  });

  Handlebars.registerHelper('check-carriere-competence-value', function (competences, competenceName, value) {
    if (!competences) return
    return competences[competenceName] == value;
  });

  Handlebars.registerHelper('check-progression', function (competences, value) {
    return competences.progression >= value;
  });

  return preloadHandlebarsTemplates()
})

/* -------------------------------------------- */
/*  Ready Hook                                  */
/* -------------------------------------------- */

Hooks.once("ready", function() {
  // Include steps that need to happen after Foundry has fully loaded here.
});