export const getModo = (actor) => {
  console.log('Brigandyne | utils actor | getModo')
  return new Promise(async (resolve, reject) => {
    const data = {
      hasTarget: actor !== undefined
    }

    const content = await renderTemplate("systems/brigandyne/templates/dialogs/getModo.hbs", data);
    new Dialog({
      title: "Choix de la caractéristique",
      content: content,
      buttons: {
        validate: {
          label: 'Valider',
          callback: (html) => {
            const caracteristique = html.find("select")[0]?.value;
            const modo = parseInt(html.find("input")[0].value);
            let modoCaracteristique = 0
            if (caracteristique !== undefined) {
              modoCaracteristique = 50 - actor.system.calculatedCaracteristiques[caracteristique]
            }
            resolve(modo + modoCaracteristique)
          },
          icon: `<i class="fas fa-check"></i>`
        }
      }
    }).render(true);
  })
}