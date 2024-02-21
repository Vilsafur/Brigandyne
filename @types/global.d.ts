declare var foundry: {
  /**
   * @description
   * Définitions constantes utilisées dans le cadre du Foundry Virtual Tabletop.
   */
  CONST: {
    /** @description Le nom abrégé du logiciel */
    readonly vtt: string
    /** @description Le nom complet du logiciel */
    readonly VTT: string
    /** @description L'URL du site web du logiciel */
    readonly WEBSITE_URL: string
    /** @description L'URL de l'API serverless */
    readonly WEBSITE_API_URL: string
    /** @description Un message d'accueil ASCII affiché au client */
    readonly ASCII: string
    /** @description Défini le nom de la chaîne utilisée pour le type de document de base lorsque des sous-types spécifiques ne sont pas définis par le système. */
    readonly BASE_DOCUMENT_TYPE: string
    /** @description Défini l'ensemble des langues qui ont un support intégré dans le logiciel de base */
    readonly CORE_SUPPORTED_LANGUAGES: string[]
    /** @description L'illustration par défaut utilisée pour les images de jetons si aucune n'est fournie. */
    readonly DEFAULT_TOKEN: string
    /** @description Défini les types de classes de documents autorisés. */
    readonly DOCUMENT_TYPES: string[]
    /** @description Les types de documents autorisés qui peuvent exister dans un pack Compendium. */
    readonly COMPENDIUM_DOCUMENT_TYPES: string[]
    /** @description Défini les types de documents autorisés qui peuvent être liés dynamiquement dans le chat */
    readonly DOCUMENT_LINK_TYPES: string[]
    /** @description Défini les types de documents autorisés que les dossiers peuvent contenir */
    readonly FOLDER_DOCUMENT_TYPES: string[]
    /** @description Niveau de profondeur maximal autorisé pour l'imbrication des dossiers */
    readonly FOLDER_MAX_DEPTH: number
    /** @description Une liste de noms d'URL de jeux autorisés */
    readonly GAME_VIEWS: string[]
    /** @description La taille minimale de la grille prise en charge par le logiciel. */
    readonly GRID_MIN_SIZE: number
    /** @description Liste des noms d'URL de configuration pris en charge */
    readonly SETUP_VIEWS: string[]
    /** @description Un tableau de valeurs valides pour le champ d'application de la MacroAction */
    readonly MACRO_SCOPES: string[]
    /** @description Les modes de recherche disponibles dans une DirectoryCollection */
    readonly DIRECTORY_SEARCH_MODES: {
      FULL: string
      NAME: string
    }
    /** @description Les types de paquets autorisés */
    readonly PACKAGE_TYPES: string[]
    /** @description Une chaîne de mots de passe sûre qui peut être affichée */
    readonly PASSWORD_SAFE_STRING: string
    /** @description La densité de tri par défaut pour ordonner manuellement les objets enfants à l'intérieur d'un parent */
    readonly SORT_INTEGER_DENSITY: number
    /** @description Alias de l'ancienne définition des modes d'occlusion des tuiles */
    readonly TILE_OCCLUSION_MODES: {
      /** @description Désactive l'occlusion, de sorte que la tuile ne s'efface jamais lorsque des jetons se trouvent en dessous. */
      NONE: number,
      /** @description Fait en sorte que la tuile entière s'estompe lorsqu'un jeton acteur se déplace en dessous d'elle. */
      FADE: number
      /** @description La tuile révèle l'arrière-plan à proximité d'un jeton acteur situé en dessous. Le rayon est déterminé par la taille du jeton. */
      RADIAL: number
      /** 
       * @description Causes the tile to be partially revealed based on the vision of the actor, which does not need to be under the tile to see what's beneath it. \
       * Ceci est utile pour les toits des bâtiments où les joueurs peuvent voir à travers une fenêtre ou une porte, en ne voyant qu'une partie de ce qui est obscurci par le toit lui-même.
       */
      VISION: number
    }
    /** @description Défini les capacités reconnues de l'utilisateur que les utilisateurs individuels ou les niveaux de rôle peuvent être autorisés à exécuter. */
    readonly USER_PERMISSIONS: any
    /** @description Les différentes façons d'interagir avec une porte */
    readonly WALL_DOOR_INTERACTIONS: string[]
    /** @description Les propriétés du mur qui limitent la façon dont l'interaction se produit avec un mur spécifique. */
    readonly WALL_RESTRICTION_TYPES: string[]
    /** @description L'ensemble des extensions de modèles HTML autorisées. */
    readonly HTML_FILE_EXTENSIONS: string[]
    /** @description Les extensions de fichiers prises en charge pour les fichiers de type image, et les types de mime correspondants. */
    readonly IMAGE_FILE_EXTENSIONS: object
    /** @description Les extensions de fichiers prises en charge pour les fichiers de type vidéo, et les types de mime correspondants. */
    readonly VIDEO_FILE_EXTENSIONS: object
    /** @description Les extensions de fichiers prises en charge pour les fichiers de type audio, et les types de mime correspondants. */
    readonly AUDIO_FILE_EXTENSIONS: object
    /** @description Les extensions de fichiers prises en charge pour les fichiers texte, et les types de mime correspondants. */
    readonly TEXT_FILE_EXTENSIONS: object
    /** @description Extensions de fichiers prises en charge pour les fichiers de polices, et leurs types de mime correspondants. */
    readonly FONT_FILE_EXTENSIONS: object
    /** @description Extensions de fichiers supportées pour les fichiers 3D, et leurs types de mime correspondants. */
    readonly GRAPHICS_FILE_EXTENSIONS: object
    /** @description Une cartographie consolidée de toutes les extensions autorisées pour le téléchargement. */
    readonly UPLOADABLE_FILE_EXTENSIONS: object
    /** @description Liste des types MIME qui sont traités comme des "médias" téléchargés et qui sont autorisés à remplacer des fichiers existants. Tout type MIME non multimédia n'est pas autorisé à remplacer un fichier existant. */
    readonly MEDIA_MIME_TYPES: string[]
    /** @description Une énumération de catégories de types de fichiers qui peuvent être sélectionnées */
    readonly FILE_CATEGORIES: {
      HTML: string[]
      IMAGE: object
      VIDEO: object
      AUDIO: object
      TEXT: object
      FONT: object
      GRAPHICS: object
      MEDIA: string[]
    }
    /** @description Un sous-ensemble de types du Compendium qui nécessitent un système spécifique pour être désignés. */
    readonly SYSTEM_SPECIFIC_COMPENDIUM_TYPES: string[]
    /** @description Les options configurées du convertisseur bidirectionnel HTML <-> Markdown. */
    readonly SHOWDOWN_OPTIONS: any
    /** @description La liste des attributs autorisés dans les éléments HTML. */
    readonly ALLOWED_HTML_ATTRIBUTES: { [x: string]: string[] }
    /** @description La liste des domaines de confiance pour les iframes. */
    readonly TRUSTED_IFRAME_DOMAINS: string[]
    /** @description Page de configuration du protocole de progression des paquets. */
    readonly SETUP_PACKAGE_PROGRESS: {
      ACTIONS: any
      STEPS: any
    }
    /** @description Les annonces de combat. */
    readonly COMBAT_ANNOUNCEMENTS: string[]
    /**
     * @description 
     * Défini les modes d'application autorisés de l'ActiveEffect.\
     * D'autres numéros de mode arbitraires peuvent être utilisés par les systèmes et les modules pour identifier des comportements particuliers et sont ignorés.
     */
    readonly ACTIVE_EFFECT_MODES: {
      /** @description Utilisé pour indiquer que la gestion de l'effet est programmée par un système ou un module. */
      readonly CUSTOM: number
      /**
       * @description Multiplie une valeur de base numérique par la valeur d'effet numérique
       * @example
       * 2 (base) * 3 (effet) = 6 (derivé)
       */
      readonly MULTIPLY: number
      /**
       * @description Ajoute une valeur de base numérique à une valeur d'effet numérique, ou concatène des chaînes de caractères.
       * @example
       * 2 (base) + 3 (effet) = 5 (dérivé)
       * @example
       * "Hello" (base) + " World" (effet) = "Hello World" (dérivé)
       */
      readonly ADD: number
      /**
       * @description Conserve la valeur la plus basse entre la valeur de base et la valeur de l'effet
       * @example
       * 2 (base), 0 (effet) = 0 (dérivé)
       * @example
       * 2 (base), 3 (effet) = 2 (dérivé)
       */
      readonly DOWNGRADE: number
      /**
       * @description Conserve la plus grande valeur de la valeur de base et de la valeur de l'effet
       * @example
       * 2 (base), 4 (effet) = 4 (dérivé)
       * @example
       * 2 (base), 1 (effet) = 2 (dérivé)
       */
      readonly UPGRADE: number
      /**
       * @description Remplace directement la valeur de base par la valeur de l'effet
       * @example
       * 2 (base), 4 (effet) = 4 (dérivé)
       */
      readonly OVERRIDE: number
    }
    /**
     * @description
     * Défini les méthodes par lesquelles une carte peut être tirée d'une pile de cartes
     */
    readonly CARD_DRAW_MODES: {
      /** 
       * @description Tirer la première carte de la pile
       * @alias CARD_DRAW_MODES.TOP
       */
      readonly FIRST: number
      /** 
       * @description Tirer la première carte de la pile
       * @alias CARD_DRAW_MODES.FIRST
       */
      readonly TOP: number
      /** 
       * @description Tirer la dernière carte de la pile
       * @alias CARD_DRAW_MODES.BOTTOM
       */
      readonly LAST: number
      /** 
       * @description Tirer la dernière carte de la pile
       * @alias CARD_DRAW_MODES.LAST
       */
      readonly BOTTOM: number
      /** 
       * @description Tirez une carte au hasard dans la pile
       */
      readonly RANDOM: number
    }
    /** @description Types de messages de tchat valides  */
    readonly CHAT_MESSAGE_TYPES: {
      /** @description Un message de chat non catégorisé */
      readonly OTHER: number
      /** @description Le message est prononcé en dehors du personnage (OOC). Les messages OOC seront soulignés par la couleur du joueur afin de les rendre plus facilement reconnaissables. */
      readonly OOC: number
      /** @description Le message est prononcé par un personnage associé. */
      readonly IC: number
      /** @description Le message est une emote exécutée par le personnage sélectionné. En entrant "/emote agite sa main" tout en contrôlant un personnage nommé Simon, vous enverrez le message suivant : "Simon agite sa main". */
      readonly EMOTE: number
      /** @description Un message chuchoté à la cible. Si l'utilisateur qui envoie le message n'a pas la permission "Messages privés", les maîtres de jeu pourront voir le contenu du message même s'ils n'en sont pas les destinataires. Si la cible du chuchotement est un personnage, le chuchotement sera envoyé à la personne qui contrôle le jeton. */
      readonly WHISPER: number
      /** @description Un message qui est un lancé de dés. */
      readonly ROLL: number
    }
    /** @description Les modes de visibilité des jets de dés pris en charge */
    readonly DICE_ROLL_MODES: {
      /** @description Ce jet est visible par tous les joueurs. */
      readonly PUBLIC: string
      /** @description Les jets de ce type ne sont visibles que par le joueur qui les a effectués et par les utilisateurs du maître de jeu. */
      readonly PRIVATE: string
      /** @description Un jet de dés privé visible uniquement par les utilisateurs du maître de jeu. Le joueur qui lance le dé ne verra pas le résultat de son propre jet. */
      readonly BLIND: string
      /** @description Un jet de dés privé qui n'est visible que par l'utilisateur qui l'a lancé. */
      readonly SELF: string
    }
    /** @description Définir les niveaux d'autorisation de l'utilisateur. Chaque niveau se voit attribuer une valeur par ordre croissant. Les niveaux supérieurs accordent davantage de permissions. */
    readonly USER_ROLES: {
      /** @description L'utilisateur est empêché d'effectuer des actions dans Foundry Virtual Tabletop. Vous pouvez utiliser ce rôle pour interdire temporairement ou définitivement à un utilisateur de rejoindre le jeu. */
      readonly NONE: number
      /** @description L'utilisateur peut participer au jeu avec les autorisations dont dispose un joueur standard. Il ne peut pas effectuer certaines actions plus avancées qui nécessitent des autorisations de confiance, mais il dispose des fonctionnalités de base nécessaires pour opérer sur le plateau de jeu virtuel. */
      readonly PLAYER: number
      /** @description Similaire au rôle {@link USER_ROLES.PLAYER}, sauf qu'un utilisateur de confiance a la possibilité d'effectuer des actions plus avancées comme créer des dessins, des modèles mesurés, ou même de télécharger (facultativement) des fichiers multimédias sur le serveur. */
      readonly TRUSTED: number
      /** @description Un utilisateur spécial qui dispose d'un grand nombre des mêmes commandes dans le jeu qu'un utilisateur maître du jeu, mais qui n'a pas la possibilité d'effectuer des actions administratives telles que le changement de rôle des utilisateurs ou la modification des paramètres au niveau du monde. */
      readonly ASSISTANT: number
      /** @description Un utilisateur spécial qui a le contrôle administratif de ce monde spécifique. Les maîtres de jeu ont un comportement très différent de celui des joueurs, car ils ont la possibilité de voir tous les documents et objets du monde, ainsi que de configurer les paramètres du monde. */
      readonly GAMEMASTER: number
    }
    /** @description Inverse le mappage de {@link USER_ROLES} pour récupérer les noms de rôle à partir d'un entier de rôle  */
    readonly USER_ROLE_NAMES: {
      [x: number]: string
    }
  },

  /**
   * @description
   * Définitions de classes abstraites pour les concepts fondamentaux utilisés dans l'ensemble du cadre Foundry Virtual Tabletop.
   */
  abstract: {
    DataModel: DataModelConstructor
    TypeDataModel: TypeDataModelConstructor
    Document: DocumentConstructor
  }

  /**
   * @description
   * Options de configuration de l'application
   */
  config: any

  /**
   * @description
   * Définitions de schémas de données pour les modèles de données.
   */
  data: {
    /**
     * @description
     * Ce module contient des classes de champs de données qui sont utilisées pour définir un schéma de données. Un champ de données est responsable du nettoyage, de la validation et de l'initialisation de la valeur qui lui est attribuée. Chaque champ de données étend la classe DataField pour mettre en œuvre la logique propre au type de données qu'il contient.
     */
    fields: {
      DataField: DataFieldConstructor
      NumberField: NumberFieldConstructor
      AlphaField: AlphaFieldConstructor
      StringField: StringFieldConstructor
      HTMLField: HTMLFieldConstructor
      SchemaField: SchemaFieldConstructor
    }

    validation: {
      DataModelValidationFailure: DataModelValidationFailureConstructor
    }

    validators: any
  }

  /**
   * @description
   * Définitions des documents utilisés dans le cadre du Foundry Virtual Tabletop.
   */
  documents: any

  /**
   * @description
   * Définitions, validations et schémas des données du paquet.
   */
  packages: any

  /**
   * @description
   * Fonctions utilitaires offrant des fonctionnalités utiles.
   */
  utils: any

  types: any
}

interface DataModel {
  /**
   * @type {any}
   * @description
   * L'objet de données source pour cette instance de DataModel. Une fois construit, l'objet source est scellé de manière à ce qu'aucune clé ne puisse être ajoutée ou supprimée.
   */
  _source: any

  /**
   * @type {DataModel}
   * @description
   * Une référence inverse immuable à un DataModel parent auquel ce modèle appartient.
   */
  parent: DataModel

  /**
   * @type {SchemaField}
   * @description
   * Schéma de données pour cette instance de document.
   */
  readonly schema: SchemaField

  /**
   * @type {boolean}
   * @description
   * L'état actuel de ce modèle de données est-il invalide ? Le modèle est invalide s'il existe un échec non résolu.
   */
  readonly invalid: boolean

  /**
   * @type {{
   * fields: DataModelValidationFailure
   * joint: DataModelValidationFailure
   * }}
   * @description
   */
  readonly validationFailures: {
    fields: DataModelValidationFailure
    joint: DataModelValidationFailure
  }

  /**
   * @method
   * @description
   * Réinitialise l'état de cette instance de données pour refléter les données source contenues, en effaçant tout changement.
   */
  reset: () => void

  /**
   * @method
   * @param {any} [data = {}]
   * @param {any} [context = {}]
   * @returns {Promise<_Document> |  _Document}
   * @description
   * Cloner un modèle, en créant un nouveau modèle de données en combinant les données actuelles avec les dérogations fournies.
   */
  clone: (data?: any, context?: any) => Promise<_Document> | _Document

  /**
   * @method
   * @param {{
   * changes: any;
   * clean: boolean;
   * fallback: boolean;
   * dropInvalidEmbedded: boolean;
   * strict: boolean;
   * fields: boolean;
   * joint: boolean;
   * }} options
   * @returns {boolean} Un indicateur permettant de savoir si le document contient des données valides
   * @description
   * Valider les données contenues dans le document pour en vérifier le type et le contenu Cette fonction génère une erreur si les données contenues dans le document ne sont pas valides
   */
  validate: (options?: {
    changes: any
    clean: boolean
    fallback: boolean
    dropInvalidEmbedded: boolean
    strict: boolean
    fields: boolean
    joint: boolean
  }) => boolean

  /**
   * @method
   * @param {any} [changes = {}]
   * @param {any} [options = {}]
   * @returns {any}
   * @description
   * Mettre à jour le modèle de données localement en appliquant un objet de modifications à ses données sources. Les modifications fournies sont nettoyées, validées et stockées dans l'objet de données source pour ce modèle. Les données sources sont ensuite réinitialisées pour appliquer ces changements aux données préparées. La méthode renvoie un objet de changements différentiels qui ont modifié les données d'origine.
   */
  updateSource: (changes?: any, options?: {}) => any

  /**
   * @protected @method
   * @param {{}} [options = {}]
   * @returns {void}
   * @description
   * Configurer l'instance de modèle de données avant que les processus de validation et d'initialisation ne soient exécutés.
   */
  _configure: (options?: {}) => void

  /**
   * @protected @method
   * @param {any} data
   * @param {any} [options = {}]
   * @returns {any} Données sources migrées et nettoyées qui seront stockées dans l'instance de modèle
   * @description
   * Initialiser les données sources pour une nouvelle instance de DataModel. Des migrations ponctuelles et des opérations de nettoyage initiales sont appliquées aux données sources. \
   */
  _initializeSource: (data: any, options?: any) => any

  /**
   * @proteted @method
   * @param {any} [options = {}]
   * @returns {void}
   * @description
   * Initialiser l'instance en copiant les données de l'objet source dans les attributs de l'instance. Cette opération reflète le flux de travail de SchemaField#initialize, mais avec quelques fonctionnalités supplémentaires.
   */
  _initialize: (options?: any) => void
}

/**
 * @abstract @class
 * @description
 * Classe de base abstraite qui définit le schéma de données contenu dans un Document.
 */
interface DataModelConstructor {
  new(
    data?: {},
    __namedParameters?: {
      parent: any
      strict: boolean
    }
  ): DataModel

  readonly prototype: DataModel

  /**
   * @type {SchemaField}
   * @description
   * Le schéma de données pour toutes les instances de ce modèle de données.
   */
  readonly schema: SchemaField

  /**
   * @static @method
   * @returns {any}
   * @description
   * Définir le schéma de données pour les documents de ce type. Le schéma est rempli lors du premier accès et mis en cache pour une réutilisation ultérieure.
   */
  defineSchema: () => any

  /**
   * @static @method
   * @param {any} [source = {}]
   * @param {any} [options = {}]
   * @returns {any} Les données sources nettoyées
   */
  cleanData: (source?: any, options?: any) => any

  /**
   * @static @method
   * @param {any} errors
   * @param {{ label: string, namespace: string }} [options = {}]
   * @returns
   */
  formatValidationErrors: (
    errors: any,
    options?: {
      label: string
      namespace: string
    }
  ) => string

  /**
   * @static @method
   * @param {any} data Données candidates pour le modèle
   * @returns {any}
   * @throws Une erreur si un échec de validation est détecté
   * @description
   * Évaluer les règles de validation communes qui appliquent des conditions de validation à plusieurs champs du modèle. Les règles de validation spécifiques aux champs doivent être définies dans le cadre du schéma de données du modèle. Cette méthode permet de tester des règles agrégées qui imposent des exigences au modèle global.
   */
  validateJoint: (data: any) => any

  /**
   * @static @method
   * @param {any} source Les données du document initial proviennent d'une source fiable.
   * @param {DataValidationOptions} [context = {}] Contexte de la construction du modèle
   * @returns {DataModel}
   * @description
   * Créer une nouvelle instance de ce modèle de données à partir d'un enregistrement source. La source est présumée digne de confiance et n'est pas strictement validée.
   */
  fromSource: (source: any, context?: DataValidationOptions) => DataModel

  /**
   * @static @method
   * @param {string} json Données sérialisées du document sous forme de chaîne de caractères
   * @returns {DataModel} Une instance de modèle de données construit
   * @description
   * Créer une instance de DataModel à partir d'une chaîne JSON sérialisée fournie.
   */
  fromJSON: (json: string) => DataModel

  /**
   * @static @method
   * @param {any} source Les données sources candidates à partir desquelles le modèle sera construit
   * @returns {any} Migration des données sources, si nécessaire
   * @description
   * Migrer les données sources candidates pour ce modèle de données qui peuvent nécessiter un nettoyage ou des transformations initiales.
   */
  migrateData: (source: any) => any

  /**
   * @static @method
   * @param {any} source Les données sources candidates à partir desquelles le modèle sera construit
   * @returns {any} Migration des données sources, si nécessaire
   * @description
   * Envelopper la migration des données dans un try/catch qui la tente en toute sécurité
   */
  migrateDataSafe: (source: any) => any

  /**
   * @static @method
   * @param {any} data Données correspondant au schéma actuel
   * @param { embedded: boolean } [options = {}] Options de calage supplémentaires
   * @returns {any} Données dotées de propriétés supplémentaires compatibles avec le passé
   * @description
   * Prendre des données conformes au schéma de données actuel et leur ajouter des accesseurs rétrocompatibles afin de prendre en charge le code plus ancien qui utilise ces données.
   */
  shimData: (data: any, options?: { embedded: boolean }) => any
}

interface TypeDataModel extends DataModel {
  /**
   * @description
   * Préparer les données relatives à ce modèle de données, avant que les données dérivées ne soient calculées.
   */
  prepareBaseData: () => void

  /**
   * @description
   * Appliquer les transformations des dérivations aux valeurs de l'objet de données source. Calculer les champs de données dont les valeurs ne sont pas stockées dans la base de données.
   */
  prepareDerivedData: () => void
}

/**
 * @abstract @class
 * @description
 * Sous-classe spécialisée de DataModel, destinée à représenter les données spécifiques à un type de document. Les systèmes ou modules qui fournissent des implémentations de DataModel pour des sous-types de documents (tels que les acteurs ou les éléments) doivent sous-classer cette classe au lieu de la classe de base DataModel.
 */
interface TypeDataModelConstructor
  extends Pick<
    DataModelConstructor,
    | `cleanData`
    | `defineSchema`
    | `formatValidationErrors`
    | `fromJSON`
    | `fromSource`
    | `migrateData`
    | `migrateDataSafe`
    | `schema`
    | `shimData`
    | `validateJoint`
  > {
  new(data?: {}): TypeDataModel
  readonly prototype: TypeDataModel
}

interface _Document extends DataModel { }
interface DocumentConstructor
  extends Pick<
    DataModelConstructor,
    | `cleanData`
    | `defineSchema`
    | `formatValidationErrors`
    | `fromJSON`
    | `fromSource`
    | `migrateData`
    | `migrateDataSafe`
    | `schema`
    | `shimData`
    | `validateJoint`
  > {
  new(): _Document
}

interface DataField<T = any> {
  /**
   * @description
   * Les options initialement fournies qui configurent le champ de données
   */
  options: DataFieldOptions<T>

  /**
   * @description
   * Le nom du champ de cette instance de DataField. Il est attribué par SchemaField#initialize.
   */
  name: any

  /**
   * @description
   * Une chaîne de caractères séparée par des points représentant le chemin d'accès au champ dans le schéma parent.
   */
  readonly fieldPath: string

  /**
   * @param {string | Function} fn La fonction à appliquer
   * @param {any} value Valeur actuelle de ce champ
   * @param {any} [options = {}]
   * @returns {any} L'objet des résultats
   * @description
   * Appliquer une fonction à ce champ de données qui se propage de manière récursive à tout schéma de données contenu.
   */
  apply: (fn: string | Function, value: any, options?: any) => any

  /**
   * @param {any} value La valeur initiale
   * @param {{
   * partial: boolean
   * source: any
   * }} options
   * @returns {any} La valeur de la fonte
   * @description
   * Contraindre les données sources pour s'assurer qu'elles sont conformes au type de données correct pour le champ. Les opérations de coercition des données doivent être simples et synchrones, car elles sont appliquées à chaque fois qu'un modèle de données est construit. Pour le nettoyage ponctuel des données fournies par l'utilisateur, il convient d'utiliser la méthode sanitize.
   */
  clean: (value: any, options: { partial: boolean; source: any }) => any

  /**
   * @param {any} data L'objet de données source pour lequel une valeur initiale est requise
   * @returns {any} Une valeur initiale valide
   * @throws Erreur si aucune valeur initiale valide n'est définie.
   * @description
   * Tentative de récupération d'une valeur initiale valide pour le champ DataField.
   */
  getInitialValue: (data: any) => any

  /**
   * @param {any} value La valeur initiale
   * @param {DataFieldValidationOptions} [options = {}]
   * @returns {DataModelValidationFailure} Renvoie un DataModelValidationFailure si un échec de validation s'est produit.
   * @description
   * Valider une entrée candidate pour ce champ, en s'assurant qu'elle répond aux exigences du champ. Un échec de validation peut être fourni sous la forme d'une erreur soulevée (avec un message sous forme de chaîne), en renvoyant false ou en renvoyant une instance DataModelValidationFailure. Un validateur qui renvoie true indique que le résultat est certainement valide et que d'autres validations sont inutiles.
   */
  validate: (
    value: any,
    options?: DataFieldValidationOptions
  ) => DataModelValidationFailure

  /**
   * @param {any} value La valeur source du champ
   * @param {any} model L'instance de modèle de données à laquelle ce champ appartient
   * @param {any} [options = {}]
   * @returns {any} Une copie initialisée des données sources
   * @description
   * Initialiser les données source originales en une copie mutable pour l'instance DataModel.
   */
  initialize: (value: any, model: any, options?: any) => any

  /**
   * @param {any} value La valeur initialisée du champ
   * @returns {any} Une représentation exportée du champ
   * @description
   * Exporte la valeur actuelle du champ dans un objet sérialisable.
   */
  toObject: (value: any) => any
}

/**
 * @abstract @class
 * @description
 * Classe abstraite qui définit le modèle de base d'un champ de données dans un schéma de données.
 */
interface DataFieldConstructor {
  /**
   * @template T
   * @param {DataFieldOptions<T>} [options = {}] Options qui configurent le comportement du champ
   */
  new <T>(options?: DataFieldOptions<T>): DataField

  /**
   * @description
   * Indique si ce champ fait partie de la hiérarchie d'un document ou d'un document intégré.
   */
  hierarchical: boolean

  /**
   * @description
   * Ce type de champ contient-il d'autres champs dans une structure récursive ? Exemples de champs récursifs : SchemaField, ArrayField ou TypeDataField Exemples de champs non récursifs : StringField, NumberField ou ObjectField
   */
  recursive: boolean
}

interface NumberField extends DataField<number> {
  nullable: boolean
  options: NumberFieldOptions
}

interface NumberFieldConstructor
  extends Pick<DataFieldConstructor, `hierarchical` | `recursive`> {
  new(options?: NumberFieldOptions): NumberField
}

interface StringField extends DataField<string> {
  nullable: boolean
  blank: boolean
  initial: string
  options: StringFieldOptions
}

interface StringFieldConstructor
  extends Pick<DataFieldConstructor, `hierarchical` | `recursive`> {
  new(options?: StringFieldOptions): StringField
}

interface BooleanField extends DataField<boolean> { }

/**
 * @abstract @class
 * @description
 * Une sous-classe de DataField qui traite les données de type booléen.
 */
interface BooleanFieldConstructor
  extends Pick<DataFieldConstructor, `hierarchical` | `recursive`> {
  new(options?: DataFieldOptions<boolean>): BooleanField
}

interface AlphaField extends NumberField { }

interface AlphaFieldConstructor extends Pick<NumberFieldConstructor, `hierarchical` | `recursive`> {
  new(options?: DataFieldOptions<0 | 1>): AlphaField
}

interface ArrayField<T = any> extends DataField<T[]> {
  /** @description Le type de données de chaque élément de ce tableau */
  element: DataField<T>
}

/**
 * @abstract @class
 * @description
 * Une sous-classe de DataField qui traite les données de type tableau.
 */
interface ArrayFieldConstructor extends Pick<DataFieldConstructor, `hierarchical` | `recursive`> {
  new <T>(element: DataField<T>, options?: DataFieldOptions<T>): ArrayField<T>
}

interface HTMLField extends DataField {
  nullable: boolean
  blank: boolean
  initial: string
  options: StringFieldOptions
}

interface HTMLFieldConstructor
  extends Pick<DataFieldConstructor, `hierarchical` | `recursive`> {
  new(options?: StringFieldOptions): HTMLField
}

interface SchemaField extends DataField { }

interface SchemaFieldConstructor
  extends Pick<DataFieldConstructor, `hierarchical` | `recursive`> {
  new(fields: DataSchema, options?: DataFieldOptions): SchemaField
}

interface DocumentIdField extends StringField { }

/**
 * @abstract @class
 * @description
 * Une sous-classe de StringField qui fournit l'identifiant primaire d'un document. Le champ peut être initialement nul, mais il doit être non nul lorsqu'il est enregistré dans la base de données.
 */
interface DocumentIdFieldConstructor extends Pick<StringFieldConstructor, `hierarchical` | `recursive`> {
  new(options?: DataFieldOptions<string> & { blank?: any }): DocumentIdField
  prototype: DocumentIdField
}

interface ForeignDocumentField<T extends DataModel> extends DocumentIdField {
  model: T
}

/**
 * @abstract @class
 * @description
 * Classe spéciale de champ StringField qui fait référence à un autre DataModel par son identifiant. Ce champ peut également être nul pour indiquer qu'aucun modèle étranger n'est lié.
 */
interface ForeignDocumentFieldConstructor extends Pick<DocumentIdFieldConstructor, `hierarchical` | `recursive`> {
  new <T extends DataModel>(
    /**
     * @description
     * La définition de la classe du modèle de données étranger à laquelle ce champ doit être lié.
     */
    model: T,
    options?: DataFieldOptions<string> & { blank?: any }
  ): ForeignDocumentField<T>
  prototype: ForeignDocumentField
}

interface DataFieldOptions<T> {
  /** @description Ce champ doit-il être renseigné ? */
  required?: boolean
  /** @description Ce champ peut-il avoir des valeurs nulles ? */
  nullable?: boolean
  /** @description La valeur initiale d'un champ, ou une fonction qui attribue cette valeur initiale. */
  initial?: T
  /** @description Une fonction de validation des données qui accepte un argument avec la valeur actuelle. */
  validate?: Function
  /** @description Une étiquette localisable affichée sur les formulaires qui affichent ce champ. */
  label?: string
  /** @description Texte d'aide localisable affiché sur les formulaires qui affichent ce champ. */
  hint?: string
  /** @description Chaîne d'erreur de validation personnalisée. Lorsqu'elle est affichée, elle est précédée du nom du document, du nom du champ et de la valeur candidate. */
  validationError?: string
}

interface NumberFieldOptions extends DataFieldOptions<number> {
  /** @description Une valeur minimale autorisée */
  min?: number
  /** @description Une valeur maximale autorisée */
  max?: number
  /** @description Une taille de pas autorisée */
  step?: number
  /** @description Le nombre doit-il être un entier ? */
  integer?: boolean
  /** @description Le nombre doit-il être positif ? */
  positive?: boolean
  /** @description Un tableau de valeurs ou un objet de valeurs/étiquettes représentant les choix autorisés pour le champ. Une fonction peut être fournie pour renvoyer dynamiquement le tableau de choix. */
  choices?: number[] | object | Function
}

interface StringFieldOptions extends DataFieldOptions<string> {
  /** @description La chaîne peut-elle être vide ? */
  blank?: boolean
  /** @description Faut-il couper les ficelles fournies dans le cadre du nettoyage ? */
  trim?: boolean
  /** @description Un tableau de valeurs ou un objet de valeurs/étiquettes représentant les choix autorisés pour le champ. Une fonction peut être fournie pour renvoyer dynamiquement le tableau de choix. */
  choices?: string[] | object | Function
}

interface DataSchema {
  [field: string]: DataField
}

interface DataModelValidationFailure { }
interface DataModelValidationFailureConstructor {
  new(__namedParameters?: any): DataModelValidationFailure
}