declare var foundry: {
  CONST: any,

  abstract: {
    DataModel: DataModelConstructor
    TypeDataModel: TypeDataModelConstructor
    Document: DocumentConstructor
  }

  config: any

  data: {
    fields: {
      DataField: DataFieldConstructor
      NumberField: NumberFieldConstructor
      StringField: StringFieldConstructor
      HTMLField: HTMLFieldConstructor
      SchemaField: SchemaFieldConstructor
    }

    validation: {
      DataModelValidationFailure: DataModelValidationFailureConstructor
    }

    validators: any
  }

  documents: any

  packages: any

  utils: any

  types: any
}

interface DataModel {
  /**
   * @type {any}
   * @description
   * L'objet de données source pour cette instance de DataModel. Une fois construit, l'objet source est scellé de manière à ce qu'aucune clé ne puisse être ajoutée ou supprimée.
   * @public
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
 * Classe de base abstraite qui définit le schéma de données contenu dans un document.
 */
interface DataModelConstructor {
  new (
    data?: {},
    __namedParameters?: {
      parent: any
      strict: boolean
    }
  ): DataModel

  /**
   * @type {SchemaField}
   * @description
   * The Data Schema for all instances of this DataModel.
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
  new (data?: {}): TypeDataModel
}

interface _Document extends DataModel {}
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
  new (): _Document
}

interface DataField {
  /**
   * @description
   * Les options initialement fournies qui configurent le champ de données
   */
  options: DataFieldOptions

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

interface DataFieldConstructor {
  /**
   * @param {DataFieldOptions} [options = {}] Options qui configurent le comportement du champ
   */
  new (options?: DataFieldOptions): DataField

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

interface NumberField extends DataField {
  nullable: boolean
  options: NumberFieldOptions
}

interface NumberFieldConstructor
  extends Pick<DataFieldConstructor, `hierarchical` | `recursive`> {
  new (options?: NumberFieldOptions): NumberField
}

interface StringField extends DataField {
  nullable: boolean
  blank: boolean
  initial: string
  options: StringFieldOptions
}

interface StringFieldConstructor
  extends Pick<DataFieldConstructor, `hierarchical` | `recursive`> {
  new (options?: StringFieldOptions): StringField
}

interface HTMLField extends DataField {
  nullable: boolean
  blank: boolean
  initial: string
  options: StringFieldOptions
}

interface HTMLFieldConstructor
  extends Pick<DataFieldConstructor, `hierarchical` | `recursive`> {
  new (options?: StringFieldOptions): HTMLField
}

interface SchemaField extends DataField {}

interface SchemaFieldConstructor
  extends Pick<DataFieldConstructor, `hierarchical` | `recursive`> {
  new (fields: DataSchema, options?: DataFieldOptions): SchemaField
}

interface DataFieldOptions {
  /** @description Ce champ doit-il être renseigné ? */
  required?: boolean
  /** @description Ce champ peut-il avoir des valeurs nulles ? */
  nullable?: boolean
  /** @description La valeur initiale d'un champ, ou une fonction qui attribue cette valeur initiale. */
  initial?: any
  /** @description Une fonction de validation des données qui accepte un argument avec la valeur actuelle. */
  validate?: Function
  /** @description Une étiquette localisable affichée sur les formulaires qui affichent ce champ. */
  label?: string
  /** @description Texte d'aide localisable affiché sur les formulaires qui affichent ce champ. */
  hint?: string
  /** @description Chaîne d'erreur de validation personnalisée. Lorsqu'elle est affichée, elle est précédée du nom du document, du nom du champ et de la valeur candidate. */
  validationError?: string
}

interface NumberFieldOptions extends DataFieldOptions {
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

interface StringFieldOptions extends DataFieldOptions {
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

interface DataModelValidationFailure {}
interface DataModelValidationFailureConstructor {
  new (__namedParameters?: any): DataModelValidationFailure
}