
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Outline
 * 
 */
export type Outline = $Result.DefaultSelection<Prisma.$OutlinePayload>
/**
 * Model OutlineStatus
 * 
 */
export type OutlineStatus = $Result.DefaultSelection<Prisma.$OutlineStatusPayload>
/**
 * Model Proposal
 * 
 */
export type Proposal = $Result.DefaultSelection<Prisma.$ProposalPayload>
/**
 * Model ProposalStatus
 * 
 */
export type ProposalStatus = $Result.DefaultSelection<Prisma.$ProposalStatusPayload>
/**
 * Model ProposalPembimbing
 * 
 */
export type ProposalPembimbing = $Result.DefaultSelection<Prisma.$ProposalPembimbingPayload>
/**
 * Model Skripsi
 * 
 */
export type Skripsi = $Result.DefaultSelection<Prisma.$SkripsiPayload>
/**
 * Model SkripsiStatus
 * 
 */
export type SkripsiStatus = $Result.DefaultSelection<Prisma.$SkripsiStatusPayload>
/**
 * Model SkripsiPenguji
 * 
 */
export type SkripsiPenguji = $Result.DefaultSelection<Prisma.$SkripsiPengujiPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outline`: Exposes CRUD operations for the **Outline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outlines
    * const outlines = await prisma.outline.findMany()
    * ```
    */
  get outline(): Prisma.OutlineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outlineStatus`: Exposes CRUD operations for the **OutlineStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutlineStatuses
    * const outlineStatuses = await prisma.outlineStatus.findMany()
    * ```
    */
  get outlineStatus(): Prisma.OutlineStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposal`: Exposes CRUD operations for the **Proposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposals
    * const proposals = await prisma.proposal.findMany()
    * ```
    */
  get proposal(): Prisma.ProposalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposalStatus`: Exposes CRUD operations for the **ProposalStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProposalStatuses
    * const proposalStatuses = await prisma.proposalStatus.findMany()
    * ```
    */
  get proposalStatus(): Prisma.ProposalStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposalPembimbing`: Exposes CRUD operations for the **ProposalPembimbing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProposalPembimbings
    * const proposalPembimbings = await prisma.proposalPembimbing.findMany()
    * ```
    */
  get proposalPembimbing(): Prisma.ProposalPembimbingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skripsi`: Exposes CRUD operations for the **Skripsi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skripsis
    * const skripsis = await prisma.skripsi.findMany()
    * ```
    */
  get skripsi(): Prisma.SkripsiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skripsiStatus`: Exposes CRUD operations for the **SkripsiStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkripsiStatuses
    * const skripsiStatuses = await prisma.skripsiStatus.findMany()
    * ```
    */
  get skripsiStatus(): Prisma.SkripsiStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skripsiPenguji`: Exposes CRUD operations for the **SkripsiPenguji** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkripsiPengujis
    * const skripsiPengujis = await prisma.skripsiPenguji.findMany()
    * ```
    */
  get skripsiPenguji(): Prisma.SkripsiPengujiDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role',
    User: 'User',
    Outline: 'Outline',
    OutlineStatus: 'OutlineStatus',
    Proposal: 'Proposal',
    ProposalStatus: 'ProposalStatus',
    ProposalPembimbing: 'ProposalPembimbing',
    Skripsi: 'Skripsi',
    SkripsiStatus: 'SkripsiStatus',
    SkripsiPenguji: 'SkripsiPenguji'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "user" | "outline" | "outlineStatus" | "proposal" | "proposalStatus" | "proposalPembimbing" | "skripsi" | "skripsiStatus" | "skripsiPenguji"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Outline: {
        payload: Prisma.$OutlinePayload<ExtArgs>
        fields: Prisma.OutlineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutlineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutlineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlinePayload>
          }
          findFirst: {
            args: Prisma.OutlineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutlineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlinePayload>
          }
          findMany: {
            args: Prisma.OutlineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlinePayload>[]
          }
          create: {
            args: Prisma.OutlineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlinePayload>
          }
          createMany: {
            args: Prisma.OutlineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OutlineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlinePayload>
          }
          update: {
            args: Prisma.OutlineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlinePayload>
          }
          deleteMany: {
            args: Prisma.OutlineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutlineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutlineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlinePayload>
          }
          aggregate: {
            args: Prisma.OutlineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutline>
          }
          groupBy: {
            args: Prisma.OutlineGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutlineGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutlineCountArgs<ExtArgs>
            result: $Utils.Optional<OutlineCountAggregateOutputType> | number
          }
        }
      }
      OutlineStatus: {
        payload: Prisma.$OutlineStatusPayload<ExtArgs>
        fields: Prisma.OutlineStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutlineStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlineStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutlineStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlineStatusPayload>
          }
          findFirst: {
            args: Prisma.OutlineStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlineStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutlineStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlineStatusPayload>
          }
          findMany: {
            args: Prisma.OutlineStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlineStatusPayload>[]
          }
          create: {
            args: Prisma.OutlineStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlineStatusPayload>
          }
          createMany: {
            args: Prisma.OutlineStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OutlineStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlineStatusPayload>
          }
          update: {
            args: Prisma.OutlineStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlineStatusPayload>
          }
          deleteMany: {
            args: Prisma.OutlineStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutlineStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutlineStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutlineStatusPayload>
          }
          aggregate: {
            args: Prisma.OutlineStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutlineStatus>
          }
          groupBy: {
            args: Prisma.OutlineStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutlineStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutlineStatusCountArgs<ExtArgs>
            result: $Utils.Optional<OutlineStatusCountAggregateOutputType> | number
          }
        }
      }
      Proposal: {
        payload: Prisma.$ProposalPayload<ExtArgs>
        fields: Prisma.ProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findFirst: {
            args: Prisma.ProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findMany: {
            args: Prisma.ProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          create: {
            args: Prisma.ProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          createMany: {
            args: Prisma.ProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          update: {
            args: Prisma.ProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          deleteMany: {
            args: Prisma.ProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          aggregate: {
            args: Prisma.ProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposal>
          }
          groupBy: {
            args: Prisma.ProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalCountAggregateOutputType> | number
          }
        }
      }
      ProposalStatus: {
        payload: Prisma.$ProposalStatusPayload<ExtArgs>
        fields: Prisma.ProposalStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalStatusPayload>
          }
          findFirst: {
            args: Prisma.ProposalStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalStatusPayload>
          }
          findMany: {
            args: Prisma.ProposalStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalStatusPayload>[]
          }
          create: {
            args: Prisma.ProposalStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalStatusPayload>
          }
          createMany: {
            args: Prisma.ProposalStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProposalStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalStatusPayload>
          }
          update: {
            args: Prisma.ProposalStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalStatusPayload>
          }
          deleteMany: {
            args: Prisma.ProposalStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProposalStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalStatusPayload>
          }
          aggregate: {
            args: Prisma.ProposalStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposalStatus>
          }
          groupBy: {
            args: Prisma.ProposalStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalStatusCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalStatusCountAggregateOutputType> | number
          }
        }
      }
      ProposalPembimbing: {
        payload: Prisma.$ProposalPembimbingPayload<ExtArgs>
        fields: Prisma.ProposalPembimbingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalPembimbingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPembimbingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalPembimbingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPembimbingPayload>
          }
          findFirst: {
            args: Prisma.ProposalPembimbingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPembimbingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalPembimbingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPembimbingPayload>
          }
          findMany: {
            args: Prisma.ProposalPembimbingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPembimbingPayload>[]
          }
          create: {
            args: Prisma.ProposalPembimbingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPembimbingPayload>
          }
          createMany: {
            args: Prisma.ProposalPembimbingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProposalPembimbingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPembimbingPayload>
          }
          update: {
            args: Prisma.ProposalPembimbingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPembimbingPayload>
          }
          deleteMany: {
            args: Prisma.ProposalPembimbingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalPembimbingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProposalPembimbingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPembimbingPayload>
          }
          aggregate: {
            args: Prisma.ProposalPembimbingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposalPembimbing>
          }
          groupBy: {
            args: Prisma.ProposalPembimbingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalPembimbingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalPembimbingCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalPembimbingCountAggregateOutputType> | number
          }
        }
      }
      Skripsi: {
        payload: Prisma.$SkripsiPayload<ExtArgs>
        fields: Prisma.SkripsiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkripsiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkripsiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPayload>
          }
          findFirst: {
            args: Prisma.SkripsiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkripsiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPayload>
          }
          findMany: {
            args: Prisma.SkripsiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPayload>[]
          }
          create: {
            args: Prisma.SkripsiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPayload>
          }
          createMany: {
            args: Prisma.SkripsiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SkripsiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPayload>
          }
          update: {
            args: Prisma.SkripsiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPayload>
          }
          deleteMany: {
            args: Prisma.SkripsiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkripsiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkripsiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPayload>
          }
          aggregate: {
            args: Prisma.SkripsiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkripsi>
          }
          groupBy: {
            args: Prisma.SkripsiGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkripsiGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkripsiCountArgs<ExtArgs>
            result: $Utils.Optional<SkripsiCountAggregateOutputType> | number
          }
        }
      }
      SkripsiStatus: {
        payload: Prisma.$SkripsiStatusPayload<ExtArgs>
        fields: Prisma.SkripsiStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkripsiStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkripsiStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiStatusPayload>
          }
          findFirst: {
            args: Prisma.SkripsiStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkripsiStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiStatusPayload>
          }
          findMany: {
            args: Prisma.SkripsiStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiStatusPayload>[]
          }
          create: {
            args: Prisma.SkripsiStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiStatusPayload>
          }
          createMany: {
            args: Prisma.SkripsiStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SkripsiStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiStatusPayload>
          }
          update: {
            args: Prisma.SkripsiStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiStatusPayload>
          }
          deleteMany: {
            args: Prisma.SkripsiStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkripsiStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkripsiStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiStatusPayload>
          }
          aggregate: {
            args: Prisma.SkripsiStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkripsiStatus>
          }
          groupBy: {
            args: Prisma.SkripsiStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkripsiStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkripsiStatusCountArgs<ExtArgs>
            result: $Utils.Optional<SkripsiStatusCountAggregateOutputType> | number
          }
        }
      }
      SkripsiPenguji: {
        payload: Prisma.$SkripsiPengujiPayload<ExtArgs>
        fields: Prisma.SkripsiPengujiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkripsiPengujiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPengujiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkripsiPengujiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPengujiPayload>
          }
          findFirst: {
            args: Prisma.SkripsiPengujiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPengujiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkripsiPengujiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPengujiPayload>
          }
          findMany: {
            args: Prisma.SkripsiPengujiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPengujiPayload>[]
          }
          create: {
            args: Prisma.SkripsiPengujiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPengujiPayload>
          }
          createMany: {
            args: Prisma.SkripsiPengujiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SkripsiPengujiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPengujiPayload>
          }
          update: {
            args: Prisma.SkripsiPengujiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPengujiPayload>
          }
          deleteMany: {
            args: Prisma.SkripsiPengujiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkripsiPengujiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkripsiPengujiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkripsiPengujiPayload>
          }
          aggregate: {
            args: Prisma.SkripsiPengujiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkripsiPenguji>
          }
          groupBy: {
            args: Prisma.SkripsiPengujiGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkripsiPengujiGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkripsiPengujiCountArgs<ExtArgs>
            result: $Utils.Optional<SkripsiPengujiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    user?: UserOmit
    outline?: OutlineOmit
    outlineStatus?: OutlineStatusOmit
    proposal?: ProposalOmit
    proposalStatus?: ProposalStatusOmit
    proposalPembimbing?: ProposalPembimbingOmit
    skripsi?: SkripsiOmit
    skripsiStatus?: SkripsiStatusOmit
    skripsiPenguji?: SkripsiPengujiOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    user: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RoleCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    outline: number
    proposal: number
    skripsi: number
    proposalPembimbing: number
    skripsiPenguji: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outline?: boolean | UserCountOutputTypeCountOutlineArgs
    proposal?: boolean | UserCountOutputTypeCountProposalArgs
    skripsi?: boolean | UserCountOutputTypeCountSkripsiArgs
    proposalPembimbing?: boolean | UserCountOutputTypeCountProposalPembimbingArgs
    skripsiPenguji?: boolean | UserCountOutputTypeCountSkripsiPengujiArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOutlineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutlineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkripsiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkripsiWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProposalPembimbingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalPembimbingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkripsiPengujiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkripsiPengujiWhereInput
  }


  /**
   * Count Type OutlineStatusCountOutputType
   */

  export type OutlineStatusCountOutputType = {
    outline: number
  }

  export type OutlineStatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outline?: boolean | OutlineStatusCountOutputTypeCountOutlineArgs
  }

  // Custom InputTypes
  /**
   * OutlineStatusCountOutputType without action
   */
  export type OutlineStatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutlineStatusCountOutputType
     */
    select?: OutlineStatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OutlineStatusCountOutputType without action
   */
  export type OutlineStatusCountOutputTypeCountOutlineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutlineWhereInput
  }


  /**
   * Count Type ProposalCountOutputType
   */

  export type ProposalCountOutputType = {
    dosenPembimbing: number
  }

  export type ProposalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosenPembimbing?: boolean | ProposalCountOutputTypeCountDosenPembimbingArgs
  }

  // Custom InputTypes
  /**
   * ProposalCountOutputType without action
   */
  export type ProposalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalCountOutputType
     */
    select?: ProposalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProposalCountOutputType without action
   */
  export type ProposalCountOutputTypeCountDosenPembimbingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalPembimbingWhereInput
  }


  /**
   * Count Type ProposalStatusCountOutputType
   */

  export type ProposalStatusCountOutputType = {
    proposal: number
  }

  export type ProposalStatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposal?: boolean | ProposalStatusCountOutputTypeCountProposalArgs
  }

  // Custom InputTypes
  /**
   * ProposalStatusCountOutputType without action
   */
  export type ProposalStatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalStatusCountOutputType
     */
    select?: ProposalStatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProposalStatusCountOutputType without action
   */
  export type ProposalStatusCountOutputTypeCountProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }


  /**
   * Count Type SkripsiCountOutputType
   */

  export type SkripsiCountOutputType = {
    penguji: number
  }

  export type SkripsiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penguji?: boolean | SkripsiCountOutputTypeCountPengujiArgs
  }

  // Custom InputTypes
  /**
   * SkripsiCountOutputType without action
   */
  export type SkripsiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiCountOutputType
     */
    select?: SkripsiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkripsiCountOutputType without action
   */
  export type SkripsiCountOutputTypeCountPengujiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkripsiPengujiWhereInput
  }


  /**
   * Count Type SkripsiStatusCountOutputType
   */

  export type SkripsiStatusCountOutputType = {
    skripsi: number
  }

  export type SkripsiStatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skripsi?: boolean | SkripsiStatusCountOutputTypeCountSkripsiArgs
  }

  // Custom InputTypes
  /**
   * SkripsiStatusCountOutputType without action
   */
  export type SkripsiStatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiStatusCountOutputType
     */
    select?: SkripsiStatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkripsiStatusCountOutputType without action
   */
  export type SkripsiStatusCountOutputTypeCountSkripsiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkripsiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    nama: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    nama: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    nama: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    nama?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    nama?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    nama?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    nama: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    user?: boolean | Role$userArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Role$userArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Role$userArgs<ExtArgs> = {}>(args?: Subset<T, Role$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly nama: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.user
   */
  export type Role$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nama: string | null
    roleId: string | null
    email: string | null
    foto: string | null
    password: string | null
    token: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    roleId: string | null
    email: string | null
    foto: string | null
    password: string | null
    token: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    roleId: number
    email: number
    foto: number
    password: number
    token: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nama?: true
    roleId?: true
    email?: true
    foto?: true
    password?: true
    token?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    roleId?: true
    email?: true
    foto?: true
    password?: true
    token?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    roleId?: true
    email?: true
    foto?: true
    password?: true
    token?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nama: string
    roleId: string
    email: string
    foto: string | null
    password: string
    token: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    roleId?: boolean
    email?: boolean
    foto?: boolean
    password?: boolean
    token?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    outline?: boolean | User$outlineArgs<ExtArgs>
    proposal?: boolean | User$proposalArgs<ExtArgs>
    skripsi?: boolean | User$skripsiArgs<ExtArgs>
    proposalPembimbing?: boolean | User$proposalPembimbingArgs<ExtArgs>
    skripsiPenguji?: boolean | User$skripsiPengujiArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    nama?: boolean
    roleId?: boolean
    email?: boolean
    foto?: boolean
    password?: boolean
    token?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "roleId" | "email" | "foto" | "password" | "token", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    outline?: boolean | User$outlineArgs<ExtArgs>
    proposal?: boolean | User$proposalArgs<ExtArgs>
    skripsi?: boolean | User$skripsiArgs<ExtArgs>
    proposalPembimbing?: boolean | User$proposalPembimbingArgs<ExtArgs>
    skripsiPenguji?: boolean | User$skripsiPengujiArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      outline: Prisma.$OutlinePayload<ExtArgs>[]
      proposal: Prisma.$ProposalPayload<ExtArgs>[]
      skripsi: Prisma.$SkripsiPayload<ExtArgs>[]
      proposalPembimbing: Prisma.$ProposalPembimbingPayload<ExtArgs>[]
      skripsiPenguji: Prisma.$SkripsiPengujiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      roleId: string
      email: string
      foto: string | null
      password: string
      token: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    outline<T extends User$outlineArgs<ExtArgs> = {}>(args?: Subset<T, User$outlineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutlinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proposal<T extends User$proposalArgs<ExtArgs> = {}>(args?: Subset<T, User$proposalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skripsi<T extends User$skripsiArgs<ExtArgs> = {}>(args?: Subset<T, User$skripsiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkripsiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proposalPembimbing<T extends User$proposalPembimbingArgs<ExtArgs> = {}>(args?: Subset<T, User$proposalPembimbingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPembimbingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skripsiPenguji<T extends User$skripsiPengujiArgs<ExtArgs> = {}>(args?: Subset<T, User$skripsiPengujiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkripsiPengujiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nama: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly foto: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.outline
   */
  export type User$outlineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outline
     */
    select?: OutlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outline
     */
    omit?: OutlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineInclude<ExtArgs> | null
    where?: OutlineWhereInput
    orderBy?: OutlineOrderByWithRelationInput | OutlineOrderByWithRelationInput[]
    cursor?: OutlineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutlineScalarFieldEnum | OutlineScalarFieldEnum[]
  }

  /**
   * User.proposal
   */
  export type User$proposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * User.skripsi
   */
  export type User$skripsiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skripsi
     */
    select?: SkripsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skripsi
     */
    omit?: SkripsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiInclude<ExtArgs> | null
    where?: SkripsiWhereInput
    orderBy?: SkripsiOrderByWithRelationInput | SkripsiOrderByWithRelationInput[]
    cursor?: SkripsiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkripsiScalarFieldEnum | SkripsiScalarFieldEnum[]
  }

  /**
   * User.proposalPembimbing
   */
  export type User$proposalPembimbingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalPembimbing
     */
    select?: ProposalPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalPembimbing
     */
    omit?: ProposalPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalPembimbingInclude<ExtArgs> | null
    where?: ProposalPembimbingWhereInput
    orderBy?: ProposalPembimbingOrderByWithRelationInput | ProposalPembimbingOrderByWithRelationInput[]
    cursor?: ProposalPembimbingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalPembimbingScalarFieldEnum | ProposalPembimbingScalarFieldEnum[]
  }

  /**
   * User.skripsiPenguji
   */
  export type User$skripsiPengujiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiPenguji
     */
    select?: SkripsiPengujiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiPenguji
     */
    omit?: SkripsiPengujiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiPengujiInclude<ExtArgs> | null
    where?: SkripsiPengujiWhereInput
    orderBy?: SkripsiPengujiOrderByWithRelationInput | SkripsiPengujiOrderByWithRelationInput[]
    cursor?: SkripsiPengujiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkripsiPengujiScalarFieldEnum | SkripsiPengujiScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Outline
   */

  export type AggregateOutline = {
    _count: OutlineCountAggregateOutputType | null
    _min: OutlineMinAggregateOutputType | null
    _max: OutlineMaxAggregateOutputType | null
  }

  export type OutlineMinAggregateOutputType = {
    id: string | null
    userId: string | null
    file: string | null
    statusId: string | null
  }

  export type OutlineMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    file: string | null
    statusId: string | null
  }

  export type OutlineCountAggregateOutputType = {
    id: number
    userId: number
    file: number
    statusId: number
    _all: number
  }


  export type OutlineMinAggregateInputType = {
    id?: true
    userId?: true
    file?: true
    statusId?: true
  }

  export type OutlineMaxAggregateInputType = {
    id?: true
    userId?: true
    file?: true
    statusId?: true
  }

  export type OutlineCountAggregateInputType = {
    id?: true
    userId?: true
    file?: true
    statusId?: true
    _all?: true
  }

  export type OutlineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outline to aggregate.
     */
    where?: OutlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlines to fetch.
     */
    orderBy?: OutlineOrderByWithRelationInput | OutlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outlines
    **/
    _count?: true | OutlineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutlineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutlineMaxAggregateInputType
  }

  export type GetOutlineAggregateType<T extends OutlineAggregateArgs> = {
        [P in keyof T & keyof AggregateOutline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutline[P]>
      : GetScalarType<T[P], AggregateOutline[P]>
  }




  export type OutlineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutlineWhereInput
    orderBy?: OutlineOrderByWithAggregationInput | OutlineOrderByWithAggregationInput[]
    by: OutlineScalarFieldEnum[] | OutlineScalarFieldEnum
    having?: OutlineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutlineCountAggregateInputType | true
    _min?: OutlineMinAggregateInputType
    _max?: OutlineMaxAggregateInputType
  }

  export type OutlineGroupByOutputType = {
    id: string
    userId: string
    file: string
    statusId: string
    _count: OutlineCountAggregateOutputType | null
    _min: OutlineMinAggregateOutputType | null
    _max: OutlineMaxAggregateOutputType | null
  }

  type GetOutlineGroupByPayload<T extends OutlineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutlineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutlineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutlineGroupByOutputType[P]>
            : GetScalarType<T[P], OutlineGroupByOutputType[P]>
        }
      >
    >


  export type OutlineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    file?: boolean
    statusId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    status?: boolean | OutlineStatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outline"]>



  export type OutlineSelectScalar = {
    id?: boolean
    userId?: boolean
    file?: boolean
    statusId?: boolean
  }

  export type OutlineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "file" | "statusId", ExtArgs["result"]["outline"]>
  export type OutlineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    status?: boolean | OutlineStatusDefaultArgs<ExtArgs>
  }

  export type $OutlinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outline"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      status: Prisma.$OutlineStatusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      file: string
      statusId: string
    }, ExtArgs["result"]["outline"]>
    composites: {}
  }

  type OutlineGetPayload<S extends boolean | null | undefined | OutlineDefaultArgs> = $Result.GetResult<Prisma.$OutlinePayload, S>

  type OutlineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutlineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutlineCountAggregateInputType | true
    }

  export interface OutlineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outline'], meta: { name: 'Outline' } }
    /**
     * Find zero or one Outline that matches the filter.
     * @param {OutlineFindUniqueArgs} args - Arguments to find a Outline
     * @example
     * // Get one Outline
     * const outline = await prisma.outline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutlineFindUniqueArgs>(args: SelectSubset<T, OutlineFindUniqueArgs<ExtArgs>>): Prisma__OutlineClient<$Result.GetResult<Prisma.$OutlinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Outline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutlineFindUniqueOrThrowArgs} args - Arguments to find a Outline
     * @example
     * // Get one Outline
     * const outline = await prisma.outline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutlineFindUniqueOrThrowArgs>(args: SelectSubset<T, OutlineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutlineClient<$Result.GetResult<Prisma.$OutlinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutlineFindFirstArgs} args - Arguments to find a Outline
     * @example
     * // Get one Outline
     * const outline = await prisma.outline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutlineFindFirstArgs>(args?: SelectSubset<T, OutlineFindFirstArgs<ExtArgs>>): Prisma__OutlineClient<$Result.GetResult<Prisma.$OutlinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutlineFindFirstOrThrowArgs} args - Arguments to find a Outline
     * @example
     * // Get one Outline
     * const outline = await prisma.outline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutlineFindFirstOrThrowArgs>(args?: SelectSubset<T, OutlineFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutlineClient<$Result.GetResult<Prisma.$OutlinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outlines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutlineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outlines
     * const outlines = await prisma.outline.findMany()
     * 
     * // Get first 10 Outlines
     * const outlines = await prisma.outline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outlineWithIdOnly = await prisma.outline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutlineFindManyArgs>(args?: SelectSubset<T, OutlineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutlinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Outline.
     * @param {OutlineCreateArgs} args - Arguments to create a Outline.
     * @example
     * // Create one Outline
     * const Outline = await prisma.outline.create({
     *   data: {
     *     // ... data to create a Outline
     *   }
     * })
     * 
     */
    create<T extends OutlineCreateArgs>(args: SelectSubset<T, OutlineCreateArgs<ExtArgs>>): Prisma__OutlineClient<$Result.GetResult<Prisma.$OutlinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Outlines.
     * @param {OutlineCreateManyArgs} args - Arguments to create many Outlines.
     * @example
     * // Create many Outlines
     * const outline = await prisma.outline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutlineCreateManyArgs>(args?: SelectSubset<T, OutlineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Outline.
     * @param {OutlineDeleteArgs} args - Arguments to delete one Outline.
     * @example
     * // Delete one Outline
     * const Outline = await prisma.outline.delete({
     *   where: {
     *     // ... filter to delete one Outline
     *   }
     * })
     * 
     */
    delete<T extends OutlineDeleteArgs>(args: SelectSubset<T, OutlineDeleteArgs<ExtArgs>>): Prisma__OutlineClient<$Result.GetResult<Prisma.$OutlinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Outline.
     * @param {OutlineUpdateArgs} args - Arguments to update one Outline.
     * @example
     * // Update one Outline
     * const outline = await prisma.outline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutlineUpdateArgs>(args: SelectSubset<T, OutlineUpdateArgs<ExtArgs>>): Prisma__OutlineClient<$Result.GetResult<Prisma.$OutlinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Outlines.
     * @param {OutlineDeleteManyArgs} args - Arguments to filter Outlines to delete.
     * @example
     * // Delete a few Outlines
     * const { count } = await prisma.outline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutlineDeleteManyArgs>(args?: SelectSubset<T, OutlineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutlineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outlines
     * const outline = await prisma.outline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutlineUpdateManyArgs>(args: SelectSubset<T, OutlineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Outline.
     * @param {OutlineUpsertArgs} args - Arguments to update or create a Outline.
     * @example
     * // Update or create a Outline
     * const outline = await prisma.outline.upsert({
     *   create: {
     *     // ... data to create a Outline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outline we want to update
     *   }
     * })
     */
    upsert<T extends OutlineUpsertArgs>(args: SelectSubset<T, OutlineUpsertArgs<ExtArgs>>): Prisma__OutlineClient<$Result.GetResult<Prisma.$OutlinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Outlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutlineCountArgs} args - Arguments to filter Outlines to count.
     * @example
     * // Count the number of Outlines
     * const count = await prisma.outline.count({
     *   where: {
     *     // ... the filter for the Outlines we want to count
     *   }
     * })
    **/
    count<T extends OutlineCountArgs>(
      args?: Subset<T, OutlineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutlineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutlineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutlineAggregateArgs>(args: Subset<T, OutlineAggregateArgs>): Prisma.PrismaPromise<GetOutlineAggregateType<T>>

    /**
     * Group by Outline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutlineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutlineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutlineGroupByArgs['orderBy'] }
        : { orderBy?: OutlineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutlineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutlineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outline model
   */
  readonly fields: OutlineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutlineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends OutlineStatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OutlineStatusDefaultArgs<ExtArgs>>): Prisma__OutlineStatusClient<$Result.GetResult<Prisma.$OutlineStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Outline model
   */
  interface OutlineFieldRefs {
    readonly id: FieldRef<"Outline", 'String'>
    readonly userId: FieldRef<"Outline", 'String'>
    readonly file: FieldRef<"Outline", 'String'>
    readonly statusId: FieldRef<"Outline", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Outline findUnique
   */
  export type OutlineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outline
     */
    select?: OutlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outline
     */
    omit?: OutlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineInclude<ExtArgs> | null
    /**
     * Filter, which Outline to fetch.
     */
    where: OutlineWhereUniqueInput
  }

  /**
   * Outline findUniqueOrThrow
   */
  export type OutlineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outline
     */
    select?: OutlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outline
     */
    omit?: OutlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineInclude<ExtArgs> | null
    /**
     * Filter, which Outline to fetch.
     */
    where: OutlineWhereUniqueInput
  }

  /**
   * Outline findFirst
   */
  export type OutlineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outline
     */
    select?: OutlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outline
     */
    omit?: OutlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineInclude<ExtArgs> | null
    /**
     * Filter, which Outline to fetch.
     */
    where?: OutlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlines to fetch.
     */
    orderBy?: OutlineOrderByWithRelationInput | OutlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outlines.
     */
    cursor?: OutlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outlines.
     */
    distinct?: OutlineScalarFieldEnum | OutlineScalarFieldEnum[]
  }

  /**
   * Outline findFirstOrThrow
   */
  export type OutlineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outline
     */
    select?: OutlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outline
     */
    omit?: OutlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineInclude<ExtArgs> | null
    /**
     * Filter, which Outline to fetch.
     */
    where?: OutlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlines to fetch.
     */
    orderBy?: OutlineOrderByWithRelationInput | OutlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outlines.
     */
    cursor?: OutlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outlines.
     */
    distinct?: OutlineScalarFieldEnum | OutlineScalarFieldEnum[]
  }

  /**
   * Outline findMany
   */
  export type OutlineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outline
     */
    select?: OutlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outline
     */
    omit?: OutlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineInclude<ExtArgs> | null
    /**
     * Filter, which Outlines to fetch.
     */
    where?: OutlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outlines to fetch.
     */
    orderBy?: OutlineOrderByWithRelationInput | OutlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outlines.
     */
    cursor?: OutlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outlines.
     */
    skip?: number
    distinct?: OutlineScalarFieldEnum | OutlineScalarFieldEnum[]
  }

  /**
   * Outline create
   */
  export type OutlineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outline
     */
    select?: OutlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outline
     */
    omit?: OutlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineInclude<ExtArgs> | null
    /**
     * The data needed to create a Outline.
     */
    data: XOR<OutlineCreateInput, OutlineUncheckedCreateInput>
  }

  /**
   * Outline createMany
   */
  export type OutlineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outlines.
     */
    data: OutlineCreateManyInput | OutlineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outline update
   */
  export type OutlineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outline
     */
    select?: OutlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outline
     */
    omit?: OutlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineInclude<ExtArgs> | null
    /**
     * The data needed to update a Outline.
     */
    data: XOR<OutlineUpdateInput, OutlineUncheckedUpdateInput>
    /**
     * Choose, which Outline to update.
     */
    where: OutlineWhereUniqueInput
  }

  /**
   * Outline updateMany
   */
  export type OutlineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outlines.
     */
    data: XOR<OutlineUpdateManyMutationInput, OutlineUncheckedUpdateManyInput>
    /**
     * Filter which Outlines to update
     */
    where?: OutlineWhereInput
    /**
     * Limit how many Outlines to update.
     */
    limit?: number
  }

  /**
   * Outline upsert
   */
  export type OutlineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outline
     */
    select?: OutlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outline
     */
    omit?: OutlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineInclude<ExtArgs> | null
    /**
     * The filter to search for the Outline to update in case it exists.
     */
    where: OutlineWhereUniqueInput
    /**
     * In case the Outline found by the `where` argument doesn't exist, create a new Outline with this data.
     */
    create: XOR<OutlineCreateInput, OutlineUncheckedCreateInput>
    /**
     * In case the Outline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutlineUpdateInput, OutlineUncheckedUpdateInput>
  }

  /**
   * Outline delete
   */
  export type OutlineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outline
     */
    select?: OutlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outline
     */
    omit?: OutlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineInclude<ExtArgs> | null
    /**
     * Filter which Outline to delete.
     */
    where: OutlineWhereUniqueInput
  }

  /**
   * Outline deleteMany
   */
  export type OutlineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outlines to delete
     */
    where?: OutlineWhereInput
    /**
     * Limit how many Outlines to delete.
     */
    limit?: number
  }

  /**
   * Outline without action
   */
  export type OutlineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outline
     */
    select?: OutlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outline
     */
    omit?: OutlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineInclude<ExtArgs> | null
  }


  /**
   * Model OutlineStatus
   */

  export type AggregateOutlineStatus = {
    _count: OutlineStatusCountAggregateOutputType | null
    _min: OutlineStatusMinAggregateOutputType | null
    _max: OutlineStatusMaxAggregateOutputType | null
  }

  export type OutlineStatusMinAggregateOutputType = {
    id: string | null
    nama: string | null
  }

  export type OutlineStatusMaxAggregateOutputType = {
    id: string | null
    nama: string | null
  }

  export type OutlineStatusCountAggregateOutputType = {
    id: number
    nama: number
    _all: number
  }


  export type OutlineStatusMinAggregateInputType = {
    id?: true
    nama?: true
  }

  export type OutlineStatusMaxAggregateInputType = {
    id?: true
    nama?: true
  }

  export type OutlineStatusCountAggregateInputType = {
    id?: true
    nama?: true
    _all?: true
  }

  export type OutlineStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutlineStatus to aggregate.
     */
    where?: OutlineStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutlineStatuses to fetch.
     */
    orderBy?: OutlineStatusOrderByWithRelationInput | OutlineStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutlineStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutlineStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutlineStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutlineStatuses
    **/
    _count?: true | OutlineStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutlineStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutlineStatusMaxAggregateInputType
  }

  export type GetOutlineStatusAggregateType<T extends OutlineStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateOutlineStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutlineStatus[P]>
      : GetScalarType<T[P], AggregateOutlineStatus[P]>
  }




  export type OutlineStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutlineStatusWhereInput
    orderBy?: OutlineStatusOrderByWithAggregationInput | OutlineStatusOrderByWithAggregationInput[]
    by: OutlineStatusScalarFieldEnum[] | OutlineStatusScalarFieldEnum
    having?: OutlineStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutlineStatusCountAggregateInputType | true
    _min?: OutlineStatusMinAggregateInputType
    _max?: OutlineStatusMaxAggregateInputType
  }

  export type OutlineStatusGroupByOutputType = {
    id: string
    nama: string
    _count: OutlineStatusCountAggregateOutputType | null
    _min: OutlineStatusMinAggregateOutputType | null
    _max: OutlineStatusMaxAggregateOutputType | null
  }

  type GetOutlineStatusGroupByPayload<T extends OutlineStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutlineStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutlineStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutlineStatusGroupByOutputType[P]>
            : GetScalarType<T[P], OutlineStatusGroupByOutputType[P]>
        }
      >
    >


  export type OutlineStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    outline?: boolean | OutlineStatus$outlineArgs<ExtArgs>
    _count?: boolean | OutlineStatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outlineStatus"]>



  export type OutlineStatusSelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type OutlineStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama", ExtArgs["result"]["outlineStatus"]>
  export type OutlineStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outline?: boolean | OutlineStatus$outlineArgs<ExtArgs>
    _count?: boolean | OutlineStatusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OutlineStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutlineStatus"
    objects: {
      outline: Prisma.$OutlinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
    }, ExtArgs["result"]["outlineStatus"]>
    composites: {}
  }

  type OutlineStatusGetPayload<S extends boolean | null | undefined | OutlineStatusDefaultArgs> = $Result.GetResult<Prisma.$OutlineStatusPayload, S>

  type OutlineStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutlineStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutlineStatusCountAggregateInputType | true
    }

  export interface OutlineStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutlineStatus'], meta: { name: 'OutlineStatus' } }
    /**
     * Find zero or one OutlineStatus that matches the filter.
     * @param {OutlineStatusFindUniqueArgs} args - Arguments to find a OutlineStatus
     * @example
     * // Get one OutlineStatus
     * const outlineStatus = await prisma.outlineStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutlineStatusFindUniqueArgs>(args: SelectSubset<T, OutlineStatusFindUniqueArgs<ExtArgs>>): Prisma__OutlineStatusClient<$Result.GetResult<Prisma.$OutlineStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutlineStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutlineStatusFindUniqueOrThrowArgs} args - Arguments to find a OutlineStatus
     * @example
     * // Get one OutlineStatus
     * const outlineStatus = await prisma.outlineStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutlineStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, OutlineStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutlineStatusClient<$Result.GetResult<Prisma.$OutlineStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutlineStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutlineStatusFindFirstArgs} args - Arguments to find a OutlineStatus
     * @example
     * // Get one OutlineStatus
     * const outlineStatus = await prisma.outlineStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutlineStatusFindFirstArgs>(args?: SelectSubset<T, OutlineStatusFindFirstArgs<ExtArgs>>): Prisma__OutlineStatusClient<$Result.GetResult<Prisma.$OutlineStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutlineStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutlineStatusFindFirstOrThrowArgs} args - Arguments to find a OutlineStatus
     * @example
     * // Get one OutlineStatus
     * const outlineStatus = await prisma.outlineStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutlineStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, OutlineStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutlineStatusClient<$Result.GetResult<Prisma.$OutlineStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutlineStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutlineStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutlineStatuses
     * const outlineStatuses = await prisma.outlineStatus.findMany()
     * 
     * // Get first 10 OutlineStatuses
     * const outlineStatuses = await prisma.outlineStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outlineStatusWithIdOnly = await prisma.outlineStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutlineStatusFindManyArgs>(args?: SelectSubset<T, OutlineStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutlineStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutlineStatus.
     * @param {OutlineStatusCreateArgs} args - Arguments to create a OutlineStatus.
     * @example
     * // Create one OutlineStatus
     * const OutlineStatus = await prisma.outlineStatus.create({
     *   data: {
     *     // ... data to create a OutlineStatus
     *   }
     * })
     * 
     */
    create<T extends OutlineStatusCreateArgs>(args: SelectSubset<T, OutlineStatusCreateArgs<ExtArgs>>): Prisma__OutlineStatusClient<$Result.GetResult<Prisma.$OutlineStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutlineStatuses.
     * @param {OutlineStatusCreateManyArgs} args - Arguments to create many OutlineStatuses.
     * @example
     * // Create many OutlineStatuses
     * const outlineStatus = await prisma.outlineStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutlineStatusCreateManyArgs>(args?: SelectSubset<T, OutlineStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OutlineStatus.
     * @param {OutlineStatusDeleteArgs} args - Arguments to delete one OutlineStatus.
     * @example
     * // Delete one OutlineStatus
     * const OutlineStatus = await prisma.outlineStatus.delete({
     *   where: {
     *     // ... filter to delete one OutlineStatus
     *   }
     * })
     * 
     */
    delete<T extends OutlineStatusDeleteArgs>(args: SelectSubset<T, OutlineStatusDeleteArgs<ExtArgs>>): Prisma__OutlineStatusClient<$Result.GetResult<Prisma.$OutlineStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutlineStatus.
     * @param {OutlineStatusUpdateArgs} args - Arguments to update one OutlineStatus.
     * @example
     * // Update one OutlineStatus
     * const outlineStatus = await prisma.outlineStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutlineStatusUpdateArgs>(args: SelectSubset<T, OutlineStatusUpdateArgs<ExtArgs>>): Prisma__OutlineStatusClient<$Result.GetResult<Prisma.$OutlineStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutlineStatuses.
     * @param {OutlineStatusDeleteManyArgs} args - Arguments to filter OutlineStatuses to delete.
     * @example
     * // Delete a few OutlineStatuses
     * const { count } = await prisma.outlineStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutlineStatusDeleteManyArgs>(args?: SelectSubset<T, OutlineStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutlineStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutlineStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutlineStatuses
     * const outlineStatus = await prisma.outlineStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutlineStatusUpdateManyArgs>(args: SelectSubset<T, OutlineStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OutlineStatus.
     * @param {OutlineStatusUpsertArgs} args - Arguments to update or create a OutlineStatus.
     * @example
     * // Update or create a OutlineStatus
     * const outlineStatus = await prisma.outlineStatus.upsert({
     *   create: {
     *     // ... data to create a OutlineStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutlineStatus we want to update
     *   }
     * })
     */
    upsert<T extends OutlineStatusUpsertArgs>(args: SelectSubset<T, OutlineStatusUpsertArgs<ExtArgs>>): Prisma__OutlineStatusClient<$Result.GetResult<Prisma.$OutlineStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutlineStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutlineStatusCountArgs} args - Arguments to filter OutlineStatuses to count.
     * @example
     * // Count the number of OutlineStatuses
     * const count = await prisma.outlineStatus.count({
     *   where: {
     *     // ... the filter for the OutlineStatuses we want to count
     *   }
     * })
    **/
    count<T extends OutlineStatusCountArgs>(
      args?: Subset<T, OutlineStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutlineStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutlineStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutlineStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutlineStatusAggregateArgs>(args: Subset<T, OutlineStatusAggregateArgs>): Prisma.PrismaPromise<GetOutlineStatusAggregateType<T>>

    /**
     * Group by OutlineStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutlineStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutlineStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutlineStatusGroupByArgs['orderBy'] }
        : { orderBy?: OutlineStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutlineStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutlineStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutlineStatus model
   */
  readonly fields: OutlineStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutlineStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutlineStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    outline<T extends OutlineStatus$outlineArgs<ExtArgs> = {}>(args?: Subset<T, OutlineStatus$outlineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutlinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OutlineStatus model
   */
  interface OutlineStatusFieldRefs {
    readonly id: FieldRef<"OutlineStatus", 'String'>
    readonly nama: FieldRef<"OutlineStatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OutlineStatus findUnique
   */
  export type OutlineStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutlineStatus
     */
    select?: OutlineStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutlineStatus
     */
    omit?: OutlineStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineStatusInclude<ExtArgs> | null
    /**
     * Filter, which OutlineStatus to fetch.
     */
    where: OutlineStatusWhereUniqueInput
  }

  /**
   * OutlineStatus findUniqueOrThrow
   */
  export type OutlineStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutlineStatus
     */
    select?: OutlineStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutlineStatus
     */
    omit?: OutlineStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineStatusInclude<ExtArgs> | null
    /**
     * Filter, which OutlineStatus to fetch.
     */
    where: OutlineStatusWhereUniqueInput
  }

  /**
   * OutlineStatus findFirst
   */
  export type OutlineStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutlineStatus
     */
    select?: OutlineStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutlineStatus
     */
    omit?: OutlineStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineStatusInclude<ExtArgs> | null
    /**
     * Filter, which OutlineStatus to fetch.
     */
    where?: OutlineStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutlineStatuses to fetch.
     */
    orderBy?: OutlineStatusOrderByWithRelationInput | OutlineStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutlineStatuses.
     */
    cursor?: OutlineStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutlineStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutlineStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutlineStatuses.
     */
    distinct?: OutlineStatusScalarFieldEnum | OutlineStatusScalarFieldEnum[]
  }

  /**
   * OutlineStatus findFirstOrThrow
   */
  export type OutlineStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutlineStatus
     */
    select?: OutlineStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutlineStatus
     */
    omit?: OutlineStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineStatusInclude<ExtArgs> | null
    /**
     * Filter, which OutlineStatus to fetch.
     */
    where?: OutlineStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutlineStatuses to fetch.
     */
    orderBy?: OutlineStatusOrderByWithRelationInput | OutlineStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutlineStatuses.
     */
    cursor?: OutlineStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutlineStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutlineStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutlineStatuses.
     */
    distinct?: OutlineStatusScalarFieldEnum | OutlineStatusScalarFieldEnum[]
  }

  /**
   * OutlineStatus findMany
   */
  export type OutlineStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutlineStatus
     */
    select?: OutlineStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutlineStatus
     */
    omit?: OutlineStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineStatusInclude<ExtArgs> | null
    /**
     * Filter, which OutlineStatuses to fetch.
     */
    where?: OutlineStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutlineStatuses to fetch.
     */
    orderBy?: OutlineStatusOrderByWithRelationInput | OutlineStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutlineStatuses.
     */
    cursor?: OutlineStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutlineStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutlineStatuses.
     */
    skip?: number
    distinct?: OutlineStatusScalarFieldEnum | OutlineStatusScalarFieldEnum[]
  }

  /**
   * OutlineStatus create
   */
  export type OutlineStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutlineStatus
     */
    select?: OutlineStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutlineStatus
     */
    omit?: OutlineStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a OutlineStatus.
     */
    data: XOR<OutlineStatusCreateInput, OutlineStatusUncheckedCreateInput>
  }

  /**
   * OutlineStatus createMany
   */
  export type OutlineStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutlineStatuses.
     */
    data: OutlineStatusCreateManyInput | OutlineStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutlineStatus update
   */
  export type OutlineStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutlineStatus
     */
    select?: OutlineStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutlineStatus
     */
    omit?: OutlineStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a OutlineStatus.
     */
    data: XOR<OutlineStatusUpdateInput, OutlineStatusUncheckedUpdateInput>
    /**
     * Choose, which OutlineStatus to update.
     */
    where: OutlineStatusWhereUniqueInput
  }

  /**
   * OutlineStatus updateMany
   */
  export type OutlineStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutlineStatuses.
     */
    data: XOR<OutlineStatusUpdateManyMutationInput, OutlineStatusUncheckedUpdateManyInput>
    /**
     * Filter which OutlineStatuses to update
     */
    where?: OutlineStatusWhereInput
    /**
     * Limit how many OutlineStatuses to update.
     */
    limit?: number
  }

  /**
   * OutlineStatus upsert
   */
  export type OutlineStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutlineStatus
     */
    select?: OutlineStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutlineStatus
     */
    omit?: OutlineStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the OutlineStatus to update in case it exists.
     */
    where: OutlineStatusWhereUniqueInput
    /**
     * In case the OutlineStatus found by the `where` argument doesn't exist, create a new OutlineStatus with this data.
     */
    create: XOR<OutlineStatusCreateInput, OutlineStatusUncheckedCreateInput>
    /**
     * In case the OutlineStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutlineStatusUpdateInput, OutlineStatusUncheckedUpdateInput>
  }

  /**
   * OutlineStatus delete
   */
  export type OutlineStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutlineStatus
     */
    select?: OutlineStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutlineStatus
     */
    omit?: OutlineStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineStatusInclude<ExtArgs> | null
    /**
     * Filter which OutlineStatus to delete.
     */
    where: OutlineStatusWhereUniqueInput
  }

  /**
   * OutlineStatus deleteMany
   */
  export type OutlineStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutlineStatuses to delete
     */
    where?: OutlineStatusWhereInput
    /**
     * Limit how many OutlineStatuses to delete.
     */
    limit?: number
  }

  /**
   * OutlineStatus.outline
   */
  export type OutlineStatus$outlineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outline
     */
    select?: OutlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outline
     */
    omit?: OutlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineInclude<ExtArgs> | null
    where?: OutlineWhereInput
    orderBy?: OutlineOrderByWithRelationInput | OutlineOrderByWithRelationInput[]
    cursor?: OutlineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutlineScalarFieldEnum | OutlineScalarFieldEnum[]
  }

  /**
   * OutlineStatus without action
   */
  export type OutlineStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutlineStatus
     */
    select?: OutlineStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutlineStatus
     */
    omit?: OutlineStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutlineStatusInclude<ExtArgs> | null
  }


  /**
   * Model Proposal
   */

  export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  export type ProposalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    file: string | null
    statusId: string | null
  }

  export type ProposalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    file: string | null
    statusId: string | null
  }

  export type ProposalCountAggregateOutputType = {
    id: number
    userId: number
    file: number
    statusId: number
    _all: number
  }


  export type ProposalMinAggregateInputType = {
    id?: true
    userId?: true
    file?: true
    statusId?: true
  }

  export type ProposalMaxAggregateInputType = {
    id?: true
    userId?: true
    file?: true
    statusId?: true
  }

  export type ProposalCountAggregateInputType = {
    id?: true
    userId?: true
    file?: true
    statusId?: true
    _all?: true
  }

  export type ProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposal to aggregate.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proposals
    **/
    _count?: true | ProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalMaxAggregateInputType
  }

  export type GetProposalAggregateType<T extends ProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposal[P]>
      : GetScalarType<T[P], AggregateProposal[P]>
  }




  export type ProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithAggregationInput | ProposalOrderByWithAggregationInput[]
    by: ProposalScalarFieldEnum[] | ProposalScalarFieldEnum
    having?: ProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalCountAggregateInputType | true
    _min?: ProposalMinAggregateInputType
    _max?: ProposalMaxAggregateInputType
  }

  export type ProposalGroupByOutputType = {
    id: string
    userId: string
    file: string
    statusId: string
    _count: ProposalCountAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  type GetProposalGroupByPayload<T extends ProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalGroupByOutputType[P]>
        }
      >
    >


  export type ProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    file?: boolean
    statusId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    status?: boolean | ProposalStatusDefaultArgs<ExtArgs>
    dosenPembimbing?: boolean | Proposal$dosenPembimbingArgs<ExtArgs>
    _count?: boolean | ProposalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>



  export type ProposalSelectScalar = {
    id?: boolean
    userId?: boolean
    file?: boolean
    statusId?: boolean
  }

  export type ProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "file" | "statusId", ExtArgs["result"]["proposal"]>
  export type ProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    status?: boolean | ProposalStatusDefaultArgs<ExtArgs>
    dosenPembimbing?: boolean | Proposal$dosenPembimbingArgs<ExtArgs>
    _count?: boolean | ProposalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proposal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      status: Prisma.$ProposalStatusPayload<ExtArgs>
      dosenPembimbing: Prisma.$ProposalPembimbingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      file: string
      statusId: string
    }, ExtArgs["result"]["proposal"]>
    composites: {}
  }

  type ProposalGetPayload<S extends boolean | null | undefined | ProposalDefaultArgs> = $Result.GetResult<Prisma.$ProposalPayload, S>

  type ProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposalCountAggregateInputType | true
    }

  export interface ProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proposal'], meta: { name: 'Proposal' } }
    /**
     * Find zero or one Proposal that matches the filter.
     * @param {ProposalFindUniqueArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalFindUniqueArgs>(args: SelectSubset<T, ProposalFindUniqueArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProposalFindUniqueOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalFindFirstArgs>(args?: SelectSubset<T, ProposalFindFirstArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposal.findMany()
     * 
     * // Get first 10 Proposals
     * const proposals = await prisma.proposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalWithIdOnly = await prisma.proposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalFindManyArgs>(args?: SelectSubset<T, ProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proposal.
     * @param {ProposalCreateArgs} args - Arguments to create a Proposal.
     * @example
     * // Create one Proposal
     * const Proposal = await prisma.proposal.create({
     *   data: {
     *     // ... data to create a Proposal
     *   }
     * })
     * 
     */
    create<T extends ProposalCreateArgs>(args: SelectSubset<T, ProposalCreateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proposals.
     * @param {ProposalCreateManyArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalCreateManyArgs>(args?: SelectSubset<T, ProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Proposal.
     * @param {ProposalDeleteArgs} args - Arguments to delete one Proposal.
     * @example
     * // Delete one Proposal
     * const Proposal = await prisma.proposal.delete({
     *   where: {
     *     // ... filter to delete one Proposal
     *   }
     * })
     * 
     */
    delete<T extends ProposalDeleteArgs>(args: SelectSubset<T, ProposalDeleteArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proposal.
     * @param {ProposalUpdateArgs} args - Arguments to update one Proposal.
     * @example
     * // Update one Proposal
     * const proposal = await prisma.proposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalUpdateArgs>(args: SelectSubset<T, ProposalUpdateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proposals.
     * @param {ProposalDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalDeleteManyArgs>(args?: SelectSubset<T, ProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalUpdateManyArgs>(args: SelectSubset<T, ProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Proposal.
     * @param {ProposalUpsertArgs} args - Arguments to update or create a Proposal.
     * @example
     * // Update or create a Proposal
     * const proposal = await prisma.proposal.upsert({
     *   create: {
     *     // ... data to create a Proposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposal we want to update
     *   }
     * })
     */
    upsert<T extends ProposalUpsertArgs>(args: SelectSubset<T, ProposalUpsertArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposal.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
    **/
    count<T extends ProposalCountArgs>(
      args?: Subset<T, ProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProposalAggregateArgs>(args: Subset<T, ProposalAggregateArgs>): Prisma.PrismaPromise<GetProposalAggregateType<T>>

    /**
     * Group by Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalGroupByArgs['orderBy'] }
        : { orderBy?: ProposalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proposal model
   */
  readonly fields: ProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends ProposalStatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProposalStatusDefaultArgs<ExtArgs>>): Prisma__ProposalStatusClient<$Result.GetResult<Prisma.$ProposalStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dosenPembimbing<T extends Proposal$dosenPembimbingArgs<ExtArgs> = {}>(args?: Subset<T, Proposal$dosenPembimbingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPembimbingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proposal model
   */
  interface ProposalFieldRefs {
    readonly id: FieldRef<"Proposal", 'String'>
    readonly userId: FieldRef<"Proposal", 'String'>
    readonly file: FieldRef<"Proposal", 'String'>
    readonly statusId: FieldRef<"Proposal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Proposal findUnique
   */
  export type ProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findUniqueOrThrow
   */
  export type ProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findFirst
   */
  export type ProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findFirstOrThrow
   */
  export type ProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findMany
   */
  export type ProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposals to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal create
   */
  export type ProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a Proposal.
     */
    data: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
  }

  /**
   * Proposal createMany
   */
  export type ProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proposal update
   */
  export type ProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a Proposal.
     */
    data: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
    /**
     * Choose, which Proposal to update.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal updateMany
   */
  export type ProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to update.
     */
    limit?: number
  }

  /**
   * Proposal upsert
   */
  export type ProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the Proposal to update in case it exists.
     */
    where: ProposalWhereUniqueInput
    /**
     * In case the Proposal found by the `where` argument doesn't exist, create a new Proposal with this data.
     */
    create: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
    /**
     * In case the Proposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
  }

  /**
   * Proposal delete
   */
  export type ProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter which Proposal to delete.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal deleteMany
   */
  export type ProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposals to delete
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to delete.
     */
    limit?: number
  }

  /**
   * Proposal.dosenPembimbing
   */
  export type Proposal$dosenPembimbingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalPembimbing
     */
    select?: ProposalPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalPembimbing
     */
    omit?: ProposalPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalPembimbingInclude<ExtArgs> | null
    where?: ProposalPembimbingWhereInput
    orderBy?: ProposalPembimbingOrderByWithRelationInput | ProposalPembimbingOrderByWithRelationInput[]
    cursor?: ProposalPembimbingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalPembimbingScalarFieldEnum | ProposalPembimbingScalarFieldEnum[]
  }

  /**
   * Proposal without action
   */
  export type ProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
  }


  /**
   * Model ProposalStatus
   */

  export type AggregateProposalStatus = {
    _count: ProposalStatusCountAggregateOutputType | null
    _min: ProposalStatusMinAggregateOutputType | null
    _max: ProposalStatusMaxAggregateOutputType | null
  }

  export type ProposalStatusMinAggregateOutputType = {
    id: string | null
    nama: string | null
  }

  export type ProposalStatusMaxAggregateOutputType = {
    id: string | null
    nama: string | null
  }

  export type ProposalStatusCountAggregateOutputType = {
    id: number
    nama: number
    _all: number
  }


  export type ProposalStatusMinAggregateInputType = {
    id?: true
    nama?: true
  }

  export type ProposalStatusMaxAggregateInputType = {
    id?: true
    nama?: true
  }

  export type ProposalStatusCountAggregateInputType = {
    id?: true
    nama?: true
    _all?: true
  }

  export type ProposalStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProposalStatus to aggregate.
     */
    where?: ProposalStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalStatuses to fetch.
     */
    orderBy?: ProposalStatusOrderByWithRelationInput | ProposalStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProposalStatuses
    **/
    _count?: true | ProposalStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalStatusMaxAggregateInputType
  }

  export type GetProposalStatusAggregateType<T extends ProposalStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateProposalStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposalStatus[P]>
      : GetScalarType<T[P], AggregateProposalStatus[P]>
  }




  export type ProposalStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalStatusWhereInput
    orderBy?: ProposalStatusOrderByWithAggregationInput | ProposalStatusOrderByWithAggregationInput[]
    by: ProposalStatusScalarFieldEnum[] | ProposalStatusScalarFieldEnum
    having?: ProposalStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalStatusCountAggregateInputType | true
    _min?: ProposalStatusMinAggregateInputType
    _max?: ProposalStatusMaxAggregateInputType
  }

  export type ProposalStatusGroupByOutputType = {
    id: string
    nama: string
    _count: ProposalStatusCountAggregateOutputType | null
    _min: ProposalStatusMinAggregateOutputType | null
    _max: ProposalStatusMaxAggregateOutputType | null
  }

  type GetProposalStatusGroupByPayload<T extends ProposalStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalStatusGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalStatusGroupByOutputType[P]>
        }
      >
    >


  export type ProposalStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    proposal?: boolean | ProposalStatus$proposalArgs<ExtArgs>
    _count?: boolean | ProposalStatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposalStatus"]>



  export type ProposalStatusSelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type ProposalStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama", ExtArgs["result"]["proposalStatus"]>
  export type ProposalStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposal?: boolean | ProposalStatus$proposalArgs<ExtArgs>
    _count?: boolean | ProposalStatusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProposalStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProposalStatus"
    objects: {
      proposal: Prisma.$ProposalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
    }, ExtArgs["result"]["proposalStatus"]>
    composites: {}
  }

  type ProposalStatusGetPayload<S extends boolean | null | undefined | ProposalStatusDefaultArgs> = $Result.GetResult<Prisma.$ProposalStatusPayload, S>

  type ProposalStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProposalStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposalStatusCountAggregateInputType | true
    }

  export interface ProposalStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProposalStatus'], meta: { name: 'ProposalStatus' } }
    /**
     * Find zero or one ProposalStatus that matches the filter.
     * @param {ProposalStatusFindUniqueArgs} args - Arguments to find a ProposalStatus
     * @example
     * // Get one ProposalStatus
     * const proposalStatus = await prisma.proposalStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalStatusFindUniqueArgs>(args: SelectSubset<T, ProposalStatusFindUniqueArgs<ExtArgs>>): Prisma__ProposalStatusClient<$Result.GetResult<Prisma.$ProposalStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProposalStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProposalStatusFindUniqueOrThrowArgs} args - Arguments to find a ProposalStatus
     * @example
     * // Get one ProposalStatus
     * const proposalStatus = await prisma.proposalStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalStatusClient<$Result.GetResult<Prisma.$ProposalStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProposalStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalStatusFindFirstArgs} args - Arguments to find a ProposalStatus
     * @example
     * // Get one ProposalStatus
     * const proposalStatus = await prisma.proposalStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalStatusFindFirstArgs>(args?: SelectSubset<T, ProposalStatusFindFirstArgs<ExtArgs>>): Prisma__ProposalStatusClient<$Result.GetResult<Prisma.$ProposalStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProposalStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalStatusFindFirstOrThrowArgs} args - Arguments to find a ProposalStatus
     * @example
     * // Get one ProposalStatus
     * const proposalStatus = await prisma.proposalStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalStatusClient<$Result.GetResult<Prisma.$ProposalStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProposalStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProposalStatuses
     * const proposalStatuses = await prisma.proposalStatus.findMany()
     * 
     * // Get first 10 ProposalStatuses
     * const proposalStatuses = await prisma.proposalStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalStatusWithIdOnly = await prisma.proposalStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalStatusFindManyArgs>(args?: SelectSubset<T, ProposalStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProposalStatus.
     * @param {ProposalStatusCreateArgs} args - Arguments to create a ProposalStatus.
     * @example
     * // Create one ProposalStatus
     * const ProposalStatus = await prisma.proposalStatus.create({
     *   data: {
     *     // ... data to create a ProposalStatus
     *   }
     * })
     * 
     */
    create<T extends ProposalStatusCreateArgs>(args: SelectSubset<T, ProposalStatusCreateArgs<ExtArgs>>): Prisma__ProposalStatusClient<$Result.GetResult<Prisma.$ProposalStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProposalStatuses.
     * @param {ProposalStatusCreateManyArgs} args - Arguments to create many ProposalStatuses.
     * @example
     * // Create many ProposalStatuses
     * const proposalStatus = await prisma.proposalStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalStatusCreateManyArgs>(args?: SelectSubset<T, ProposalStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProposalStatus.
     * @param {ProposalStatusDeleteArgs} args - Arguments to delete one ProposalStatus.
     * @example
     * // Delete one ProposalStatus
     * const ProposalStatus = await prisma.proposalStatus.delete({
     *   where: {
     *     // ... filter to delete one ProposalStatus
     *   }
     * })
     * 
     */
    delete<T extends ProposalStatusDeleteArgs>(args: SelectSubset<T, ProposalStatusDeleteArgs<ExtArgs>>): Prisma__ProposalStatusClient<$Result.GetResult<Prisma.$ProposalStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProposalStatus.
     * @param {ProposalStatusUpdateArgs} args - Arguments to update one ProposalStatus.
     * @example
     * // Update one ProposalStatus
     * const proposalStatus = await prisma.proposalStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalStatusUpdateArgs>(args: SelectSubset<T, ProposalStatusUpdateArgs<ExtArgs>>): Prisma__ProposalStatusClient<$Result.GetResult<Prisma.$ProposalStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProposalStatuses.
     * @param {ProposalStatusDeleteManyArgs} args - Arguments to filter ProposalStatuses to delete.
     * @example
     * // Delete a few ProposalStatuses
     * const { count } = await prisma.proposalStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalStatusDeleteManyArgs>(args?: SelectSubset<T, ProposalStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProposalStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProposalStatuses
     * const proposalStatus = await prisma.proposalStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalStatusUpdateManyArgs>(args: SelectSubset<T, ProposalStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProposalStatus.
     * @param {ProposalStatusUpsertArgs} args - Arguments to update or create a ProposalStatus.
     * @example
     * // Update or create a ProposalStatus
     * const proposalStatus = await prisma.proposalStatus.upsert({
     *   create: {
     *     // ... data to create a ProposalStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProposalStatus we want to update
     *   }
     * })
     */
    upsert<T extends ProposalStatusUpsertArgs>(args: SelectSubset<T, ProposalStatusUpsertArgs<ExtArgs>>): Prisma__ProposalStatusClient<$Result.GetResult<Prisma.$ProposalStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProposalStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalStatusCountArgs} args - Arguments to filter ProposalStatuses to count.
     * @example
     * // Count the number of ProposalStatuses
     * const count = await prisma.proposalStatus.count({
     *   where: {
     *     // ... the filter for the ProposalStatuses we want to count
     *   }
     * })
    **/
    count<T extends ProposalStatusCountArgs>(
      args?: Subset<T, ProposalStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProposalStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProposalStatusAggregateArgs>(args: Subset<T, ProposalStatusAggregateArgs>): Prisma.PrismaPromise<GetProposalStatusAggregateType<T>>

    /**
     * Group by ProposalStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProposalStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalStatusGroupByArgs['orderBy'] }
        : { orderBy?: ProposalStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProposalStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProposalStatus model
   */
  readonly fields: ProposalStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProposalStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proposal<T extends ProposalStatus$proposalArgs<ExtArgs> = {}>(args?: Subset<T, ProposalStatus$proposalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProposalStatus model
   */
  interface ProposalStatusFieldRefs {
    readonly id: FieldRef<"ProposalStatus", 'String'>
    readonly nama: FieldRef<"ProposalStatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProposalStatus findUnique
   */
  export type ProposalStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalStatus
     */
    select?: ProposalStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalStatus
     */
    omit?: ProposalStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalStatusInclude<ExtArgs> | null
    /**
     * Filter, which ProposalStatus to fetch.
     */
    where: ProposalStatusWhereUniqueInput
  }

  /**
   * ProposalStatus findUniqueOrThrow
   */
  export type ProposalStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalStatus
     */
    select?: ProposalStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalStatus
     */
    omit?: ProposalStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalStatusInclude<ExtArgs> | null
    /**
     * Filter, which ProposalStatus to fetch.
     */
    where: ProposalStatusWhereUniqueInput
  }

  /**
   * ProposalStatus findFirst
   */
  export type ProposalStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalStatus
     */
    select?: ProposalStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalStatus
     */
    omit?: ProposalStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalStatusInclude<ExtArgs> | null
    /**
     * Filter, which ProposalStatus to fetch.
     */
    where?: ProposalStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalStatuses to fetch.
     */
    orderBy?: ProposalStatusOrderByWithRelationInput | ProposalStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProposalStatuses.
     */
    cursor?: ProposalStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProposalStatuses.
     */
    distinct?: ProposalStatusScalarFieldEnum | ProposalStatusScalarFieldEnum[]
  }

  /**
   * ProposalStatus findFirstOrThrow
   */
  export type ProposalStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalStatus
     */
    select?: ProposalStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalStatus
     */
    omit?: ProposalStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalStatusInclude<ExtArgs> | null
    /**
     * Filter, which ProposalStatus to fetch.
     */
    where?: ProposalStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalStatuses to fetch.
     */
    orderBy?: ProposalStatusOrderByWithRelationInput | ProposalStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProposalStatuses.
     */
    cursor?: ProposalStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProposalStatuses.
     */
    distinct?: ProposalStatusScalarFieldEnum | ProposalStatusScalarFieldEnum[]
  }

  /**
   * ProposalStatus findMany
   */
  export type ProposalStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalStatus
     */
    select?: ProposalStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalStatus
     */
    omit?: ProposalStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalStatusInclude<ExtArgs> | null
    /**
     * Filter, which ProposalStatuses to fetch.
     */
    where?: ProposalStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalStatuses to fetch.
     */
    orderBy?: ProposalStatusOrderByWithRelationInput | ProposalStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProposalStatuses.
     */
    cursor?: ProposalStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalStatuses.
     */
    skip?: number
    distinct?: ProposalStatusScalarFieldEnum | ProposalStatusScalarFieldEnum[]
  }

  /**
   * ProposalStatus create
   */
  export type ProposalStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalStatus
     */
    select?: ProposalStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalStatus
     */
    omit?: ProposalStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a ProposalStatus.
     */
    data: XOR<ProposalStatusCreateInput, ProposalStatusUncheckedCreateInput>
  }

  /**
   * ProposalStatus createMany
   */
  export type ProposalStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProposalStatuses.
     */
    data: ProposalStatusCreateManyInput | ProposalStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProposalStatus update
   */
  export type ProposalStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalStatus
     */
    select?: ProposalStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalStatus
     */
    omit?: ProposalStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a ProposalStatus.
     */
    data: XOR<ProposalStatusUpdateInput, ProposalStatusUncheckedUpdateInput>
    /**
     * Choose, which ProposalStatus to update.
     */
    where: ProposalStatusWhereUniqueInput
  }

  /**
   * ProposalStatus updateMany
   */
  export type ProposalStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProposalStatuses.
     */
    data: XOR<ProposalStatusUpdateManyMutationInput, ProposalStatusUncheckedUpdateManyInput>
    /**
     * Filter which ProposalStatuses to update
     */
    where?: ProposalStatusWhereInput
    /**
     * Limit how many ProposalStatuses to update.
     */
    limit?: number
  }

  /**
   * ProposalStatus upsert
   */
  export type ProposalStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalStatus
     */
    select?: ProposalStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalStatus
     */
    omit?: ProposalStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the ProposalStatus to update in case it exists.
     */
    where: ProposalStatusWhereUniqueInput
    /**
     * In case the ProposalStatus found by the `where` argument doesn't exist, create a new ProposalStatus with this data.
     */
    create: XOR<ProposalStatusCreateInput, ProposalStatusUncheckedCreateInput>
    /**
     * In case the ProposalStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalStatusUpdateInput, ProposalStatusUncheckedUpdateInput>
  }

  /**
   * ProposalStatus delete
   */
  export type ProposalStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalStatus
     */
    select?: ProposalStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalStatus
     */
    omit?: ProposalStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalStatusInclude<ExtArgs> | null
    /**
     * Filter which ProposalStatus to delete.
     */
    where: ProposalStatusWhereUniqueInput
  }

  /**
   * ProposalStatus deleteMany
   */
  export type ProposalStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProposalStatuses to delete
     */
    where?: ProposalStatusWhereInput
    /**
     * Limit how many ProposalStatuses to delete.
     */
    limit?: number
  }

  /**
   * ProposalStatus.proposal
   */
  export type ProposalStatus$proposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * ProposalStatus without action
   */
  export type ProposalStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalStatus
     */
    select?: ProposalStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalStatus
     */
    omit?: ProposalStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalStatusInclude<ExtArgs> | null
  }


  /**
   * Model ProposalPembimbing
   */

  export type AggregateProposalPembimbing = {
    _count: ProposalPembimbingCountAggregateOutputType | null
    _min: ProposalPembimbingMinAggregateOutputType | null
    _max: ProposalPembimbingMaxAggregateOutputType | null
  }

  export type ProposalPembimbingMinAggregateOutputType = {
    id: string | null
    proposalId: string | null
    userId: string | null
    setuju: boolean | null
  }

  export type ProposalPembimbingMaxAggregateOutputType = {
    id: string | null
    proposalId: string | null
    userId: string | null
    setuju: boolean | null
  }

  export type ProposalPembimbingCountAggregateOutputType = {
    id: number
    proposalId: number
    userId: number
    setuju: number
    _all: number
  }


  export type ProposalPembimbingMinAggregateInputType = {
    id?: true
    proposalId?: true
    userId?: true
    setuju?: true
  }

  export type ProposalPembimbingMaxAggregateInputType = {
    id?: true
    proposalId?: true
    userId?: true
    setuju?: true
  }

  export type ProposalPembimbingCountAggregateInputType = {
    id?: true
    proposalId?: true
    userId?: true
    setuju?: true
    _all?: true
  }

  export type ProposalPembimbingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProposalPembimbing to aggregate.
     */
    where?: ProposalPembimbingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalPembimbings to fetch.
     */
    orderBy?: ProposalPembimbingOrderByWithRelationInput | ProposalPembimbingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalPembimbingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalPembimbings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalPembimbings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProposalPembimbings
    **/
    _count?: true | ProposalPembimbingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalPembimbingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalPembimbingMaxAggregateInputType
  }

  export type GetProposalPembimbingAggregateType<T extends ProposalPembimbingAggregateArgs> = {
        [P in keyof T & keyof AggregateProposalPembimbing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposalPembimbing[P]>
      : GetScalarType<T[P], AggregateProposalPembimbing[P]>
  }




  export type ProposalPembimbingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalPembimbingWhereInput
    orderBy?: ProposalPembimbingOrderByWithAggregationInput | ProposalPembimbingOrderByWithAggregationInput[]
    by: ProposalPembimbingScalarFieldEnum[] | ProposalPembimbingScalarFieldEnum
    having?: ProposalPembimbingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalPembimbingCountAggregateInputType | true
    _min?: ProposalPembimbingMinAggregateInputType
    _max?: ProposalPembimbingMaxAggregateInputType
  }

  export type ProposalPembimbingGroupByOutputType = {
    id: string
    proposalId: string
    userId: string
    setuju: boolean
    _count: ProposalPembimbingCountAggregateOutputType | null
    _min: ProposalPembimbingMinAggregateOutputType | null
    _max: ProposalPembimbingMaxAggregateOutputType | null
  }

  type GetProposalPembimbingGroupByPayload<T extends ProposalPembimbingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalPembimbingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalPembimbingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalPembimbingGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalPembimbingGroupByOutputType[P]>
        }
      >
    >


  export type ProposalPembimbingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proposalId?: boolean
    userId?: boolean
    setuju?: boolean
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    dosen?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposalPembimbing"]>



  export type ProposalPembimbingSelectScalar = {
    id?: boolean
    proposalId?: boolean
    userId?: boolean
    setuju?: boolean
  }

  export type ProposalPembimbingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "proposalId" | "userId" | "setuju", ExtArgs["result"]["proposalPembimbing"]>
  export type ProposalPembimbingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposal?: boolean | ProposalDefaultArgs<ExtArgs>
    dosen?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProposalPembimbingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProposalPembimbing"
    objects: {
      proposal: Prisma.$ProposalPayload<ExtArgs>
      dosen: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proposalId: string
      userId: string
      setuju: boolean
    }, ExtArgs["result"]["proposalPembimbing"]>
    composites: {}
  }

  type ProposalPembimbingGetPayload<S extends boolean | null | undefined | ProposalPembimbingDefaultArgs> = $Result.GetResult<Prisma.$ProposalPembimbingPayload, S>

  type ProposalPembimbingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProposalPembimbingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposalPembimbingCountAggregateInputType | true
    }

  export interface ProposalPembimbingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProposalPembimbing'], meta: { name: 'ProposalPembimbing' } }
    /**
     * Find zero or one ProposalPembimbing that matches the filter.
     * @param {ProposalPembimbingFindUniqueArgs} args - Arguments to find a ProposalPembimbing
     * @example
     * // Get one ProposalPembimbing
     * const proposalPembimbing = await prisma.proposalPembimbing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalPembimbingFindUniqueArgs>(args: SelectSubset<T, ProposalPembimbingFindUniqueArgs<ExtArgs>>): Prisma__ProposalPembimbingClient<$Result.GetResult<Prisma.$ProposalPembimbingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProposalPembimbing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProposalPembimbingFindUniqueOrThrowArgs} args - Arguments to find a ProposalPembimbing
     * @example
     * // Get one ProposalPembimbing
     * const proposalPembimbing = await prisma.proposalPembimbing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalPembimbingFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalPembimbingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalPembimbingClient<$Result.GetResult<Prisma.$ProposalPembimbingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProposalPembimbing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalPembimbingFindFirstArgs} args - Arguments to find a ProposalPembimbing
     * @example
     * // Get one ProposalPembimbing
     * const proposalPembimbing = await prisma.proposalPembimbing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalPembimbingFindFirstArgs>(args?: SelectSubset<T, ProposalPembimbingFindFirstArgs<ExtArgs>>): Prisma__ProposalPembimbingClient<$Result.GetResult<Prisma.$ProposalPembimbingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProposalPembimbing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalPembimbingFindFirstOrThrowArgs} args - Arguments to find a ProposalPembimbing
     * @example
     * // Get one ProposalPembimbing
     * const proposalPembimbing = await prisma.proposalPembimbing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalPembimbingFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalPembimbingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalPembimbingClient<$Result.GetResult<Prisma.$ProposalPembimbingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProposalPembimbings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalPembimbingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProposalPembimbings
     * const proposalPembimbings = await prisma.proposalPembimbing.findMany()
     * 
     * // Get first 10 ProposalPembimbings
     * const proposalPembimbings = await prisma.proposalPembimbing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalPembimbingWithIdOnly = await prisma.proposalPembimbing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalPembimbingFindManyArgs>(args?: SelectSubset<T, ProposalPembimbingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPembimbingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProposalPembimbing.
     * @param {ProposalPembimbingCreateArgs} args - Arguments to create a ProposalPembimbing.
     * @example
     * // Create one ProposalPembimbing
     * const ProposalPembimbing = await prisma.proposalPembimbing.create({
     *   data: {
     *     // ... data to create a ProposalPembimbing
     *   }
     * })
     * 
     */
    create<T extends ProposalPembimbingCreateArgs>(args: SelectSubset<T, ProposalPembimbingCreateArgs<ExtArgs>>): Prisma__ProposalPembimbingClient<$Result.GetResult<Prisma.$ProposalPembimbingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProposalPembimbings.
     * @param {ProposalPembimbingCreateManyArgs} args - Arguments to create many ProposalPembimbings.
     * @example
     * // Create many ProposalPembimbings
     * const proposalPembimbing = await prisma.proposalPembimbing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalPembimbingCreateManyArgs>(args?: SelectSubset<T, ProposalPembimbingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProposalPembimbing.
     * @param {ProposalPembimbingDeleteArgs} args - Arguments to delete one ProposalPembimbing.
     * @example
     * // Delete one ProposalPembimbing
     * const ProposalPembimbing = await prisma.proposalPembimbing.delete({
     *   where: {
     *     // ... filter to delete one ProposalPembimbing
     *   }
     * })
     * 
     */
    delete<T extends ProposalPembimbingDeleteArgs>(args: SelectSubset<T, ProposalPembimbingDeleteArgs<ExtArgs>>): Prisma__ProposalPembimbingClient<$Result.GetResult<Prisma.$ProposalPembimbingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProposalPembimbing.
     * @param {ProposalPembimbingUpdateArgs} args - Arguments to update one ProposalPembimbing.
     * @example
     * // Update one ProposalPembimbing
     * const proposalPembimbing = await prisma.proposalPembimbing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalPembimbingUpdateArgs>(args: SelectSubset<T, ProposalPembimbingUpdateArgs<ExtArgs>>): Prisma__ProposalPembimbingClient<$Result.GetResult<Prisma.$ProposalPembimbingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProposalPembimbings.
     * @param {ProposalPembimbingDeleteManyArgs} args - Arguments to filter ProposalPembimbings to delete.
     * @example
     * // Delete a few ProposalPembimbings
     * const { count } = await prisma.proposalPembimbing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalPembimbingDeleteManyArgs>(args?: SelectSubset<T, ProposalPembimbingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProposalPembimbings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalPembimbingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProposalPembimbings
     * const proposalPembimbing = await prisma.proposalPembimbing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalPembimbingUpdateManyArgs>(args: SelectSubset<T, ProposalPembimbingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProposalPembimbing.
     * @param {ProposalPembimbingUpsertArgs} args - Arguments to update or create a ProposalPembimbing.
     * @example
     * // Update or create a ProposalPembimbing
     * const proposalPembimbing = await prisma.proposalPembimbing.upsert({
     *   create: {
     *     // ... data to create a ProposalPembimbing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProposalPembimbing we want to update
     *   }
     * })
     */
    upsert<T extends ProposalPembimbingUpsertArgs>(args: SelectSubset<T, ProposalPembimbingUpsertArgs<ExtArgs>>): Prisma__ProposalPembimbingClient<$Result.GetResult<Prisma.$ProposalPembimbingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProposalPembimbings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalPembimbingCountArgs} args - Arguments to filter ProposalPembimbings to count.
     * @example
     * // Count the number of ProposalPembimbings
     * const count = await prisma.proposalPembimbing.count({
     *   where: {
     *     // ... the filter for the ProposalPembimbings we want to count
     *   }
     * })
    **/
    count<T extends ProposalPembimbingCountArgs>(
      args?: Subset<T, ProposalPembimbingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalPembimbingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProposalPembimbing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalPembimbingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProposalPembimbingAggregateArgs>(args: Subset<T, ProposalPembimbingAggregateArgs>): Prisma.PrismaPromise<GetProposalPembimbingAggregateType<T>>

    /**
     * Group by ProposalPembimbing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalPembimbingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProposalPembimbingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalPembimbingGroupByArgs['orderBy'] }
        : { orderBy?: ProposalPembimbingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProposalPembimbingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalPembimbingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProposalPembimbing model
   */
  readonly fields: ProposalPembimbingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProposalPembimbing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalPembimbingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proposal<T extends ProposalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProposalDefaultArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dosen<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProposalPembimbing model
   */
  interface ProposalPembimbingFieldRefs {
    readonly id: FieldRef<"ProposalPembimbing", 'String'>
    readonly proposalId: FieldRef<"ProposalPembimbing", 'String'>
    readonly userId: FieldRef<"ProposalPembimbing", 'String'>
    readonly setuju: FieldRef<"ProposalPembimbing", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProposalPembimbing findUnique
   */
  export type ProposalPembimbingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalPembimbing
     */
    select?: ProposalPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalPembimbing
     */
    omit?: ProposalPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalPembimbingInclude<ExtArgs> | null
    /**
     * Filter, which ProposalPembimbing to fetch.
     */
    where: ProposalPembimbingWhereUniqueInput
  }

  /**
   * ProposalPembimbing findUniqueOrThrow
   */
  export type ProposalPembimbingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalPembimbing
     */
    select?: ProposalPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalPembimbing
     */
    omit?: ProposalPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalPembimbingInclude<ExtArgs> | null
    /**
     * Filter, which ProposalPembimbing to fetch.
     */
    where: ProposalPembimbingWhereUniqueInput
  }

  /**
   * ProposalPembimbing findFirst
   */
  export type ProposalPembimbingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalPembimbing
     */
    select?: ProposalPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalPembimbing
     */
    omit?: ProposalPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalPembimbingInclude<ExtArgs> | null
    /**
     * Filter, which ProposalPembimbing to fetch.
     */
    where?: ProposalPembimbingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalPembimbings to fetch.
     */
    orderBy?: ProposalPembimbingOrderByWithRelationInput | ProposalPembimbingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProposalPembimbings.
     */
    cursor?: ProposalPembimbingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalPembimbings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalPembimbings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProposalPembimbings.
     */
    distinct?: ProposalPembimbingScalarFieldEnum | ProposalPembimbingScalarFieldEnum[]
  }

  /**
   * ProposalPembimbing findFirstOrThrow
   */
  export type ProposalPembimbingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalPembimbing
     */
    select?: ProposalPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalPembimbing
     */
    omit?: ProposalPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalPembimbingInclude<ExtArgs> | null
    /**
     * Filter, which ProposalPembimbing to fetch.
     */
    where?: ProposalPembimbingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalPembimbings to fetch.
     */
    orderBy?: ProposalPembimbingOrderByWithRelationInput | ProposalPembimbingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProposalPembimbings.
     */
    cursor?: ProposalPembimbingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalPembimbings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalPembimbings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProposalPembimbings.
     */
    distinct?: ProposalPembimbingScalarFieldEnum | ProposalPembimbingScalarFieldEnum[]
  }

  /**
   * ProposalPembimbing findMany
   */
  export type ProposalPembimbingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalPembimbing
     */
    select?: ProposalPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalPembimbing
     */
    omit?: ProposalPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalPembimbingInclude<ExtArgs> | null
    /**
     * Filter, which ProposalPembimbings to fetch.
     */
    where?: ProposalPembimbingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalPembimbings to fetch.
     */
    orderBy?: ProposalPembimbingOrderByWithRelationInput | ProposalPembimbingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProposalPembimbings.
     */
    cursor?: ProposalPembimbingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalPembimbings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalPembimbings.
     */
    skip?: number
    distinct?: ProposalPembimbingScalarFieldEnum | ProposalPembimbingScalarFieldEnum[]
  }

  /**
   * ProposalPembimbing create
   */
  export type ProposalPembimbingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalPembimbing
     */
    select?: ProposalPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalPembimbing
     */
    omit?: ProposalPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalPembimbingInclude<ExtArgs> | null
    /**
     * The data needed to create a ProposalPembimbing.
     */
    data: XOR<ProposalPembimbingCreateInput, ProposalPembimbingUncheckedCreateInput>
  }

  /**
   * ProposalPembimbing createMany
   */
  export type ProposalPembimbingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProposalPembimbings.
     */
    data: ProposalPembimbingCreateManyInput | ProposalPembimbingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProposalPembimbing update
   */
  export type ProposalPembimbingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalPembimbing
     */
    select?: ProposalPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalPembimbing
     */
    omit?: ProposalPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalPembimbingInclude<ExtArgs> | null
    /**
     * The data needed to update a ProposalPembimbing.
     */
    data: XOR<ProposalPembimbingUpdateInput, ProposalPembimbingUncheckedUpdateInput>
    /**
     * Choose, which ProposalPembimbing to update.
     */
    where: ProposalPembimbingWhereUniqueInput
  }

  /**
   * ProposalPembimbing updateMany
   */
  export type ProposalPembimbingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProposalPembimbings.
     */
    data: XOR<ProposalPembimbingUpdateManyMutationInput, ProposalPembimbingUncheckedUpdateManyInput>
    /**
     * Filter which ProposalPembimbings to update
     */
    where?: ProposalPembimbingWhereInput
    /**
     * Limit how many ProposalPembimbings to update.
     */
    limit?: number
  }

  /**
   * ProposalPembimbing upsert
   */
  export type ProposalPembimbingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalPembimbing
     */
    select?: ProposalPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalPembimbing
     */
    omit?: ProposalPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalPembimbingInclude<ExtArgs> | null
    /**
     * The filter to search for the ProposalPembimbing to update in case it exists.
     */
    where: ProposalPembimbingWhereUniqueInput
    /**
     * In case the ProposalPembimbing found by the `where` argument doesn't exist, create a new ProposalPembimbing with this data.
     */
    create: XOR<ProposalPembimbingCreateInput, ProposalPembimbingUncheckedCreateInput>
    /**
     * In case the ProposalPembimbing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalPembimbingUpdateInput, ProposalPembimbingUncheckedUpdateInput>
  }

  /**
   * ProposalPembimbing delete
   */
  export type ProposalPembimbingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalPembimbing
     */
    select?: ProposalPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalPembimbing
     */
    omit?: ProposalPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalPembimbingInclude<ExtArgs> | null
    /**
     * Filter which ProposalPembimbing to delete.
     */
    where: ProposalPembimbingWhereUniqueInput
  }

  /**
   * ProposalPembimbing deleteMany
   */
  export type ProposalPembimbingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProposalPembimbings to delete
     */
    where?: ProposalPembimbingWhereInput
    /**
     * Limit how many ProposalPembimbings to delete.
     */
    limit?: number
  }

  /**
   * ProposalPembimbing without action
   */
  export type ProposalPembimbingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalPembimbing
     */
    select?: ProposalPembimbingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalPembimbing
     */
    omit?: ProposalPembimbingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalPembimbingInclude<ExtArgs> | null
  }


  /**
   * Model Skripsi
   */

  export type AggregateSkripsi = {
    _count: SkripsiCountAggregateOutputType | null
    _min: SkripsiMinAggregateOutputType | null
    _max: SkripsiMaxAggregateOutputType | null
  }

  export type SkripsiMinAggregateOutputType = {
    id: string | null
    userId: string | null
    file: string | null
    statusId: string | null
    pembimbingSetuju: boolean | null
  }

  export type SkripsiMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    file: string | null
    statusId: string | null
    pembimbingSetuju: boolean | null
  }

  export type SkripsiCountAggregateOutputType = {
    id: number
    userId: number
    file: number
    statusId: number
    pembimbingSetuju: number
    _all: number
  }


  export type SkripsiMinAggregateInputType = {
    id?: true
    userId?: true
    file?: true
    statusId?: true
    pembimbingSetuju?: true
  }

  export type SkripsiMaxAggregateInputType = {
    id?: true
    userId?: true
    file?: true
    statusId?: true
    pembimbingSetuju?: true
  }

  export type SkripsiCountAggregateInputType = {
    id?: true
    userId?: true
    file?: true
    statusId?: true
    pembimbingSetuju?: true
    _all?: true
  }

  export type SkripsiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skripsi to aggregate.
     */
    where?: SkripsiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skripsis to fetch.
     */
    orderBy?: SkripsiOrderByWithRelationInput | SkripsiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkripsiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skripsis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skripsis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skripsis
    **/
    _count?: true | SkripsiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkripsiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkripsiMaxAggregateInputType
  }

  export type GetSkripsiAggregateType<T extends SkripsiAggregateArgs> = {
        [P in keyof T & keyof AggregateSkripsi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkripsi[P]>
      : GetScalarType<T[P], AggregateSkripsi[P]>
  }




  export type SkripsiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkripsiWhereInput
    orderBy?: SkripsiOrderByWithAggregationInput | SkripsiOrderByWithAggregationInput[]
    by: SkripsiScalarFieldEnum[] | SkripsiScalarFieldEnum
    having?: SkripsiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkripsiCountAggregateInputType | true
    _min?: SkripsiMinAggregateInputType
    _max?: SkripsiMaxAggregateInputType
  }

  export type SkripsiGroupByOutputType = {
    id: string
    userId: string
    file: string
    statusId: string
    pembimbingSetuju: boolean
    _count: SkripsiCountAggregateOutputType | null
    _min: SkripsiMinAggregateOutputType | null
    _max: SkripsiMaxAggregateOutputType | null
  }

  type GetSkripsiGroupByPayload<T extends SkripsiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkripsiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkripsiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkripsiGroupByOutputType[P]>
            : GetScalarType<T[P], SkripsiGroupByOutputType[P]>
        }
      >
    >


  export type SkripsiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    file?: boolean
    statusId?: boolean
    pembimbingSetuju?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    status?: boolean | SkripsiStatusDefaultArgs<ExtArgs>
    penguji?: boolean | Skripsi$pengujiArgs<ExtArgs>
    _count?: boolean | SkripsiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skripsi"]>



  export type SkripsiSelectScalar = {
    id?: boolean
    userId?: boolean
    file?: boolean
    statusId?: boolean
    pembimbingSetuju?: boolean
  }

  export type SkripsiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "file" | "statusId" | "pembimbingSetuju", ExtArgs["result"]["skripsi"]>
  export type SkripsiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    status?: boolean | SkripsiStatusDefaultArgs<ExtArgs>
    penguji?: boolean | Skripsi$pengujiArgs<ExtArgs>
    _count?: boolean | SkripsiCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SkripsiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skripsi"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      status: Prisma.$SkripsiStatusPayload<ExtArgs>
      penguji: Prisma.$SkripsiPengujiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      file: string
      statusId: string
      pembimbingSetuju: boolean
    }, ExtArgs["result"]["skripsi"]>
    composites: {}
  }

  type SkripsiGetPayload<S extends boolean | null | undefined | SkripsiDefaultArgs> = $Result.GetResult<Prisma.$SkripsiPayload, S>

  type SkripsiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkripsiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkripsiCountAggregateInputType | true
    }

  export interface SkripsiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skripsi'], meta: { name: 'Skripsi' } }
    /**
     * Find zero or one Skripsi that matches the filter.
     * @param {SkripsiFindUniqueArgs} args - Arguments to find a Skripsi
     * @example
     * // Get one Skripsi
     * const skripsi = await prisma.skripsi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkripsiFindUniqueArgs>(args: SelectSubset<T, SkripsiFindUniqueArgs<ExtArgs>>): Prisma__SkripsiClient<$Result.GetResult<Prisma.$SkripsiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skripsi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkripsiFindUniqueOrThrowArgs} args - Arguments to find a Skripsi
     * @example
     * // Get one Skripsi
     * const skripsi = await prisma.skripsi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkripsiFindUniqueOrThrowArgs>(args: SelectSubset<T, SkripsiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkripsiClient<$Result.GetResult<Prisma.$SkripsiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skripsi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiFindFirstArgs} args - Arguments to find a Skripsi
     * @example
     * // Get one Skripsi
     * const skripsi = await prisma.skripsi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkripsiFindFirstArgs>(args?: SelectSubset<T, SkripsiFindFirstArgs<ExtArgs>>): Prisma__SkripsiClient<$Result.GetResult<Prisma.$SkripsiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skripsi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiFindFirstOrThrowArgs} args - Arguments to find a Skripsi
     * @example
     * // Get one Skripsi
     * const skripsi = await prisma.skripsi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkripsiFindFirstOrThrowArgs>(args?: SelectSubset<T, SkripsiFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkripsiClient<$Result.GetResult<Prisma.$SkripsiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skripsis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skripsis
     * const skripsis = await prisma.skripsi.findMany()
     * 
     * // Get first 10 Skripsis
     * const skripsis = await prisma.skripsi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skripsiWithIdOnly = await prisma.skripsi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkripsiFindManyArgs>(args?: SelectSubset<T, SkripsiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkripsiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skripsi.
     * @param {SkripsiCreateArgs} args - Arguments to create a Skripsi.
     * @example
     * // Create one Skripsi
     * const Skripsi = await prisma.skripsi.create({
     *   data: {
     *     // ... data to create a Skripsi
     *   }
     * })
     * 
     */
    create<T extends SkripsiCreateArgs>(args: SelectSubset<T, SkripsiCreateArgs<ExtArgs>>): Prisma__SkripsiClient<$Result.GetResult<Prisma.$SkripsiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skripsis.
     * @param {SkripsiCreateManyArgs} args - Arguments to create many Skripsis.
     * @example
     * // Create many Skripsis
     * const skripsi = await prisma.skripsi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkripsiCreateManyArgs>(args?: SelectSubset<T, SkripsiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skripsi.
     * @param {SkripsiDeleteArgs} args - Arguments to delete one Skripsi.
     * @example
     * // Delete one Skripsi
     * const Skripsi = await prisma.skripsi.delete({
     *   where: {
     *     // ... filter to delete one Skripsi
     *   }
     * })
     * 
     */
    delete<T extends SkripsiDeleteArgs>(args: SelectSubset<T, SkripsiDeleteArgs<ExtArgs>>): Prisma__SkripsiClient<$Result.GetResult<Prisma.$SkripsiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skripsi.
     * @param {SkripsiUpdateArgs} args - Arguments to update one Skripsi.
     * @example
     * // Update one Skripsi
     * const skripsi = await prisma.skripsi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkripsiUpdateArgs>(args: SelectSubset<T, SkripsiUpdateArgs<ExtArgs>>): Prisma__SkripsiClient<$Result.GetResult<Prisma.$SkripsiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skripsis.
     * @param {SkripsiDeleteManyArgs} args - Arguments to filter Skripsis to delete.
     * @example
     * // Delete a few Skripsis
     * const { count } = await prisma.skripsi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkripsiDeleteManyArgs>(args?: SelectSubset<T, SkripsiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skripsis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skripsis
     * const skripsi = await prisma.skripsi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkripsiUpdateManyArgs>(args: SelectSubset<T, SkripsiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skripsi.
     * @param {SkripsiUpsertArgs} args - Arguments to update or create a Skripsi.
     * @example
     * // Update or create a Skripsi
     * const skripsi = await prisma.skripsi.upsert({
     *   create: {
     *     // ... data to create a Skripsi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skripsi we want to update
     *   }
     * })
     */
    upsert<T extends SkripsiUpsertArgs>(args: SelectSubset<T, SkripsiUpsertArgs<ExtArgs>>): Prisma__SkripsiClient<$Result.GetResult<Prisma.$SkripsiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skripsis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiCountArgs} args - Arguments to filter Skripsis to count.
     * @example
     * // Count the number of Skripsis
     * const count = await prisma.skripsi.count({
     *   where: {
     *     // ... the filter for the Skripsis we want to count
     *   }
     * })
    **/
    count<T extends SkripsiCountArgs>(
      args?: Subset<T, SkripsiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkripsiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skripsi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkripsiAggregateArgs>(args: Subset<T, SkripsiAggregateArgs>): Prisma.PrismaPromise<GetSkripsiAggregateType<T>>

    /**
     * Group by Skripsi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkripsiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkripsiGroupByArgs['orderBy'] }
        : { orderBy?: SkripsiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkripsiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkripsiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skripsi model
   */
  readonly fields: SkripsiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skripsi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkripsiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends SkripsiStatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkripsiStatusDefaultArgs<ExtArgs>>): Prisma__SkripsiStatusClient<$Result.GetResult<Prisma.$SkripsiStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    penguji<T extends Skripsi$pengujiArgs<ExtArgs> = {}>(args?: Subset<T, Skripsi$pengujiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkripsiPengujiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skripsi model
   */
  interface SkripsiFieldRefs {
    readonly id: FieldRef<"Skripsi", 'String'>
    readonly userId: FieldRef<"Skripsi", 'String'>
    readonly file: FieldRef<"Skripsi", 'String'>
    readonly statusId: FieldRef<"Skripsi", 'String'>
    readonly pembimbingSetuju: FieldRef<"Skripsi", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Skripsi findUnique
   */
  export type SkripsiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skripsi
     */
    select?: SkripsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skripsi
     */
    omit?: SkripsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiInclude<ExtArgs> | null
    /**
     * Filter, which Skripsi to fetch.
     */
    where: SkripsiWhereUniqueInput
  }

  /**
   * Skripsi findUniqueOrThrow
   */
  export type SkripsiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skripsi
     */
    select?: SkripsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skripsi
     */
    omit?: SkripsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiInclude<ExtArgs> | null
    /**
     * Filter, which Skripsi to fetch.
     */
    where: SkripsiWhereUniqueInput
  }

  /**
   * Skripsi findFirst
   */
  export type SkripsiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skripsi
     */
    select?: SkripsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skripsi
     */
    omit?: SkripsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiInclude<ExtArgs> | null
    /**
     * Filter, which Skripsi to fetch.
     */
    where?: SkripsiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skripsis to fetch.
     */
    orderBy?: SkripsiOrderByWithRelationInput | SkripsiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skripsis.
     */
    cursor?: SkripsiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skripsis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skripsis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skripsis.
     */
    distinct?: SkripsiScalarFieldEnum | SkripsiScalarFieldEnum[]
  }

  /**
   * Skripsi findFirstOrThrow
   */
  export type SkripsiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skripsi
     */
    select?: SkripsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skripsi
     */
    omit?: SkripsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiInclude<ExtArgs> | null
    /**
     * Filter, which Skripsi to fetch.
     */
    where?: SkripsiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skripsis to fetch.
     */
    orderBy?: SkripsiOrderByWithRelationInput | SkripsiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skripsis.
     */
    cursor?: SkripsiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skripsis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skripsis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skripsis.
     */
    distinct?: SkripsiScalarFieldEnum | SkripsiScalarFieldEnum[]
  }

  /**
   * Skripsi findMany
   */
  export type SkripsiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skripsi
     */
    select?: SkripsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skripsi
     */
    omit?: SkripsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiInclude<ExtArgs> | null
    /**
     * Filter, which Skripsis to fetch.
     */
    where?: SkripsiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skripsis to fetch.
     */
    orderBy?: SkripsiOrderByWithRelationInput | SkripsiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skripsis.
     */
    cursor?: SkripsiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skripsis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skripsis.
     */
    skip?: number
    distinct?: SkripsiScalarFieldEnum | SkripsiScalarFieldEnum[]
  }

  /**
   * Skripsi create
   */
  export type SkripsiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skripsi
     */
    select?: SkripsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skripsi
     */
    omit?: SkripsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiInclude<ExtArgs> | null
    /**
     * The data needed to create a Skripsi.
     */
    data: XOR<SkripsiCreateInput, SkripsiUncheckedCreateInput>
  }

  /**
   * Skripsi createMany
   */
  export type SkripsiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skripsis.
     */
    data: SkripsiCreateManyInput | SkripsiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skripsi update
   */
  export type SkripsiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skripsi
     */
    select?: SkripsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skripsi
     */
    omit?: SkripsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiInclude<ExtArgs> | null
    /**
     * The data needed to update a Skripsi.
     */
    data: XOR<SkripsiUpdateInput, SkripsiUncheckedUpdateInput>
    /**
     * Choose, which Skripsi to update.
     */
    where: SkripsiWhereUniqueInput
  }

  /**
   * Skripsi updateMany
   */
  export type SkripsiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skripsis.
     */
    data: XOR<SkripsiUpdateManyMutationInput, SkripsiUncheckedUpdateManyInput>
    /**
     * Filter which Skripsis to update
     */
    where?: SkripsiWhereInput
    /**
     * Limit how many Skripsis to update.
     */
    limit?: number
  }

  /**
   * Skripsi upsert
   */
  export type SkripsiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skripsi
     */
    select?: SkripsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skripsi
     */
    omit?: SkripsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiInclude<ExtArgs> | null
    /**
     * The filter to search for the Skripsi to update in case it exists.
     */
    where: SkripsiWhereUniqueInput
    /**
     * In case the Skripsi found by the `where` argument doesn't exist, create a new Skripsi with this data.
     */
    create: XOR<SkripsiCreateInput, SkripsiUncheckedCreateInput>
    /**
     * In case the Skripsi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkripsiUpdateInput, SkripsiUncheckedUpdateInput>
  }

  /**
   * Skripsi delete
   */
  export type SkripsiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skripsi
     */
    select?: SkripsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skripsi
     */
    omit?: SkripsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiInclude<ExtArgs> | null
    /**
     * Filter which Skripsi to delete.
     */
    where: SkripsiWhereUniqueInput
  }

  /**
   * Skripsi deleteMany
   */
  export type SkripsiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skripsis to delete
     */
    where?: SkripsiWhereInput
    /**
     * Limit how many Skripsis to delete.
     */
    limit?: number
  }

  /**
   * Skripsi.penguji
   */
  export type Skripsi$pengujiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiPenguji
     */
    select?: SkripsiPengujiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiPenguji
     */
    omit?: SkripsiPengujiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiPengujiInclude<ExtArgs> | null
    where?: SkripsiPengujiWhereInput
    orderBy?: SkripsiPengujiOrderByWithRelationInput | SkripsiPengujiOrderByWithRelationInput[]
    cursor?: SkripsiPengujiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkripsiPengujiScalarFieldEnum | SkripsiPengujiScalarFieldEnum[]
  }

  /**
   * Skripsi without action
   */
  export type SkripsiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skripsi
     */
    select?: SkripsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skripsi
     */
    omit?: SkripsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiInclude<ExtArgs> | null
  }


  /**
   * Model SkripsiStatus
   */

  export type AggregateSkripsiStatus = {
    _count: SkripsiStatusCountAggregateOutputType | null
    _min: SkripsiStatusMinAggregateOutputType | null
    _max: SkripsiStatusMaxAggregateOutputType | null
  }

  export type SkripsiStatusMinAggregateOutputType = {
    id: string | null
    nama: string | null
  }

  export type SkripsiStatusMaxAggregateOutputType = {
    id: string | null
    nama: string | null
  }

  export type SkripsiStatusCountAggregateOutputType = {
    id: number
    nama: number
    _all: number
  }


  export type SkripsiStatusMinAggregateInputType = {
    id?: true
    nama?: true
  }

  export type SkripsiStatusMaxAggregateInputType = {
    id?: true
    nama?: true
  }

  export type SkripsiStatusCountAggregateInputType = {
    id?: true
    nama?: true
    _all?: true
  }

  export type SkripsiStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkripsiStatus to aggregate.
     */
    where?: SkripsiStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkripsiStatuses to fetch.
     */
    orderBy?: SkripsiStatusOrderByWithRelationInput | SkripsiStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkripsiStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkripsiStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkripsiStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkripsiStatuses
    **/
    _count?: true | SkripsiStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkripsiStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkripsiStatusMaxAggregateInputType
  }

  export type GetSkripsiStatusAggregateType<T extends SkripsiStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateSkripsiStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkripsiStatus[P]>
      : GetScalarType<T[P], AggregateSkripsiStatus[P]>
  }




  export type SkripsiStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkripsiStatusWhereInput
    orderBy?: SkripsiStatusOrderByWithAggregationInput | SkripsiStatusOrderByWithAggregationInput[]
    by: SkripsiStatusScalarFieldEnum[] | SkripsiStatusScalarFieldEnum
    having?: SkripsiStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkripsiStatusCountAggregateInputType | true
    _min?: SkripsiStatusMinAggregateInputType
    _max?: SkripsiStatusMaxAggregateInputType
  }

  export type SkripsiStatusGroupByOutputType = {
    id: string
    nama: string
    _count: SkripsiStatusCountAggregateOutputType | null
    _min: SkripsiStatusMinAggregateOutputType | null
    _max: SkripsiStatusMaxAggregateOutputType | null
  }

  type GetSkripsiStatusGroupByPayload<T extends SkripsiStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkripsiStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkripsiStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkripsiStatusGroupByOutputType[P]>
            : GetScalarType<T[P], SkripsiStatusGroupByOutputType[P]>
        }
      >
    >


  export type SkripsiStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    skripsi?: boolean | SkripsiStatus$skripsiArgs<ExtArgs>
    _count?: boolean | SkripsiStatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skripsiStatus"]>



  export type SkripsiStatusSelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type SkripsiStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama", ExtArgs["result"]["skripsiStatus"]>
  export type SkripsiStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skripsi?: boolean | SkripsiStatus$skripsiArgs<ExtArgs>
    _count?: boolean | SkripsiStatusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SkripsiStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkripsiStatus"
    objects: {
      skripsi: Prisma.$SkripsiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
    }, ExtArgs["result"]["skripsiStatus"]>
    composites: {}
  }

  type SkripsiStatusGetPayload<S extends boolean | null | undefined | SkripsiStatusDefaultArgs> = $Result.GetResult<Prisma.$SkripsiStatusPayload, S>

  type SkripsiStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkripsiStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkripsiStatusCountAggregateInputType | true
    }

  export interface SkripsiStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkripsiStatus'], meta: { name: 'SkripsiStatus' } }
    /**
     * Find zero or one SkripsiStatus that matches the filter.
     * @param {SkripsiStatusFindUniqueArgs} args - Arguments to find a SkripsiStatus
     * @example
     * // Get one SkripsiStatus
     * const skripsiStatus = await prisma.skripsiStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkripsiStatusFindUniqueArgs>(args: SelectSubset<T, SkripsiStatusFindUniqueArgs<ExtArgs>>): Prisma__SkripsiStatusClient<$Result.GetResult<Prisma.$SkripsiStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkripsiStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkripsiStatusFindUniqueOrThrowArgs} args - Arguments to find a SkripsiStatus
     * @example
     * // Get one SkripsiStatus
     * const skripsiStatus = await prisma.skripsiStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkripsiStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, SkripsiStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkripsiStatusClient<$Result.GetResult<Prisma.$SkripsiStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkripsiStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiStatusFindFirstArgs} args - Arguments to find a SkripsiStatus
     * @example
     * // Get one SkripsiStatus
     * const skripsiStatus = await prisma.skripsiStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkripsiStatusFindFirstArgs>(args?: SelectSubset<T, SkripsiStatusFindFirstArgs<ExtArgs>>): Prisma__SkripsiStatusClient<$Result.GetResult<Prisma.$SkripsiStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkripsiStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiStatusFindFirstOrThrowArgs} args - Arguments to find a SkripsiStatus
     * @example
     * // Get one SkripsiStatus
     * const skripsiStatus = await prisma.skripsiStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkripsiStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, SkripsiStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkripsiStatusClient<$Result.GetResult<Prisma.$SkripsiStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkripsiStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkripsiStatuses
     * const skripsiStatuses = await prisma.skripsiStatus.findMany()
     * 
     * // Get first 10 SkripsiStatuses
     * const skripsiStatuses = await prisma.skripsiStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skripsiStatusWithIdOnly = await prisma.skripsiStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkripsiStatusFindManyArgs>(args?: SelectSubset<T, SkripsiStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkripsiStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkripsiStatus.
     * @param {SkripsiStatusCreateArgs} args - Arguments to create a SkripsiStatus.
     * @example
     * // Create one SkripsiStatus
     * const SkripsiStatus = await prisma.skripsiStatus.create({
     *   data: {
     *     // ... data to create a SkripsiStatus
     *   }
     * })
     * 
     */
    create<T extends SkripsiStatusCreateArgs>(args: SelectSubset<T, SkripsiStatusCreateArgs<ExtArgs>>): Prisma__SkripsiStatusClient<$Result.GetResult<Prisma.$SkripsiStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkripsiStatuses.
     * @param {SkripsiStatusCreateManyArgs} args - Arguments to create many SkripsiStatuses.
     * @example
     * // Create many SkripsiStatuses
     * const skripsiStatus = await prisma.skripsiStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkripsiStatusCreateManyArgs>(args?: SelectSubset<T, SkripsiStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SkripsiStatus.
     * @param {SkripsiStatusDeleteArgs} args - Arguments to delete one SkripsiStatus.
     * @example
     * // Delete one SkripsiStatus
     * const SkripsiStatus = await prisma.skripsiStatus.delete({
     *   where: {
     *     // ... filter to delete one SkripsiStatus
     *   }
     * })
     * 
     */
    delete<T extends SkripsiStatusDeleteArgs>(args: SelectSubset<T, SkripsiStatusDeleteArgs<ExtArgs>>): Prisma__SkripsiStatusClient<$Result.GetResult<Prisma.$SkripsiStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkripsiStatus.
     * @param {SkripsiStatusUpdateArgs} args - Arguments to update one SkripsiStatus.
     * @example
     * // Update one SkripsiStatus
     * const skripsiStatus = await prisma.skripsiStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkripsiStatusUpdateArgs>(args: SelectSubset<T, SkripsiStatusUpdateArgs<ExtArgs>>): Prisma__SkripsiStatusClient<$Result.GetResult<Prisma.$SkripsiStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkripsiStatuses.
     * @param {SkripsiStatusDeleteManyArgs} args - Arguments to filter SkripsiStatuses to delete.
     * @example
     * // Delete a few SkripsiStatuses
     * const { count } = await prisma.skripsiStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkripsiStatusDeleteManyArgs>(args?: SelectSubset<T, SkripsiStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkripsiStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkripsiStatuses
     * const skripsiStatus = await prisma.skripsiStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkripsiStatusUpdateManyArgs>(args: SelectSubset<T, SkripsiStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SkripsiStatus.
     * @param {SkripsiStatusUpsertArgs} args - Arguments to update or create a SkripsiStatus.
     * @example
     * // Update or create a SkripsiStatus
     * const skripsiStatus = await prisma.skripsiStatus.upsert({
     *   create: {
     *     // ... data to create a SkripsiStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkripsiStatus we want to update
     *   }
     * })
     */
    upsert<T extends SkripsiStatusUpsertArgs>(args: SelectSubset<T, SkripsiStatusUpsertArgs<ExtArgs>>): Prisma__SkripsiStatusClient<$Result.GetResult<Prisma.$SkripsiStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkripsiStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiStatusCountArgs} args - Arguments to filter SkripsiStatuses to count.
     * @example
     * // Count the number of SkripsiStatuses
     * const count = await prisma.skripsiStatus.count({
     *   where: {
     *     // ... the filter for the SkripsiStatuses we want to count
     *   }
     * })
    **/
    count<T extends SkripsiStatusCountArgs>(
      args?: Subset<T, SkripsiStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkripsiStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkripsiStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkripsiStatusAggregateArgs>(args: Subset<T, SkripsiStatusAggregateArgs>): Prisma.PrismaPromise<GetSkripsiStatusAggregateType<T>>

    /**
     * Group by SkripsiStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkripsiStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkripsiStatusGroupByArgs['orderBy'] }
        : { orderBy?: SkripsiStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkripsiStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkripsiStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkripsiStatus model
   */
  readonly fields: SkripsiStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkripsiStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkripsiStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skripsi<T extends SkripsiStatus$skripsiArgs<ExtArgs> = {}>(args?: Subset<T, SkripsiStatus$skripsiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkripsiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SkripsiStatus model
   */
  interface SkripsiStatusFieldRefs {
    readonly id: FieldRef<"SkripsiStatus", 'String'>
    readonly nama: FieldRef<"SkripsiStatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SkripsiStatus findUnique
   */
  export type SkripsiStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiStatus
     */
    select?: SkripsiStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiStatus
     */
    omit?: SkripsiStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiStatusInclude<ExtArgs> | null
    /**
     * Filter, which SkripsiStatus to fetch.
     */
    where: SkripsiStatusWhereUniqueInput
  }

  /**
   * SkripsiStatus findUniqueOrThrow
   */
  export type SkripsiStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiStatus
     */
    select?: SkripsiStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiStatus
     */
    omit?: SkripsiStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiStatusInclude<ExtArgs> | null
    /**
     * Filter, which SkripsiStatus to fetch.
     */
    where: SkripsiStatusWhereUniqueInput
  }

  /**
   * SkripsiStatus findFirst
   */
  export type SkripsiStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiStatus
     */
    select?: SkripsiStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiStatus
     */
    omit?: SkripsiStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiStatusInclude<ExtArgs> | null
    /**
     * Filter, which SkripsiStatus to fetch.
     */
    where?: SkripsiStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkripsiStatuses to fetch.
     */
    orderBy?: SkripsiStatusOrderByWithRelationInput | SkripsiStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkripsiStatuses.
     */
    cursor?: SkripsiStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkripsiStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkripsiStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkripsiStatuses.
     */
    distinct?: SkripsiStatusScalarFieldEnum | SkripsiStatusScalarFieldEnum[]
  }

  /**
   * SkripsiStatus findFirstOrThrow
   */
  export type SkripsiStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiStatus
     */
    select?: SkripsiStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiStatus
     */
    omit?: SkripsiStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiStatusInclude<ExtArgs> | null
    /**
     * Filter, which SkripsiStatus to fetch.
     */
    where?: SkripsiStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkripsiStatuses to fetch.
     */
    orderBy?: SkripsiStatusOrderByWithRelationInput | SkripsiStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkripsiStatuses.
     */
    cursor?: SkripsiStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkripsiStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkripsiStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkripsiStatuses.
     */
    distinct?: SkripsiStatusScalarFieldEnum | SkripsiStatusScalarFieldEnum[]
  }

  /**
   * SkripsiStatus findMany
   */
  export type SkripsiStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiStatus
     */
    select?: SkripsiStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiStatus
     */
    omit?: SkripsiStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiStatusInclude<ExtArgs> | null
    /**
     * Filter, which SkripsiStatuses to fetch.
     */
    where?: SkripsiStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkripsiStatuses to fetch.
     */
    orderBy?: SkripsiStatusOrderByWithRelationInput | SkripsiStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkripsiStatuses.
     */
    cursor?: SkripsiStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkripsiStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkripsiStatuses.
     */
    skip?: number
    distinct?: SkripsiStatusScalarFieldEnum | SkripsiStatusScalarFieldEnum[]
  }

  /**
   * SkripsiStatus create
   */
  export type SkripsiStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiStatus
     */
    select?: SkripsiStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiStatus
     */
    omit?: SkripsiStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a SkripsiStatus.
     */
    data: XOR<SkripsiStatusCreateInput, SkripsiStatusUncheckedCreateInput>
  }

  /**
   * SkripsiStatus createMany
   */
  export type SkripsiStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkripsiStatuses.
     */
    data: SkripsiStatusCreateManyInput | SkripsiStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkripsiStatus update
   */
  export type SkripsiStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiStatus
     */
    select?: SkripsiStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiStatus
     */
    omit?: SkripsiStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a SkripsiStatus.
     */
    data: XOR<SkripsiStatusUpdateInput, SkripsiStatusUncheckedUpdateInput>
    /**
     * Choose, which SkripsiStatus to update.
     */
    where: SkripsiStatusWhereUniqueInput
  }

  /**
   * SkripsiStatus updateMany
   */
  export type SkripsiStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkripsiStatuses.
     */
    data: XOR<SkripsiStatusUpdateManyMutationInput, SkripsiStatusUncheckedUpdateManyInput>
    /**
     * Filter which SkripsiStatuses to update
     */
    where?: SkripsiStatusWhereInput
    /**
     * Limit how many SkripsiStatuses to update.
     */
    limit?: number
  }

  /**
   * SkripsiStatus upsert
   */
  export type SkripsiStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiStatus
     */
    select?: SkripsiStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiStatus
     */
    omit?: SkripsiStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the SkripsiStatus to update in case it exists.
     */
    where: SkripsiStatusWhereUniqueInput
    /**
     * In case the SkripsiStatus found by the `where` argument doesn't exist, create a new SkripsiStatus with this data.
     */
    create: XOR<SkripsiStatusCreateInput, SkripsiStatusUncheckedCreateInput>
    /**
     * In case the SkripsiStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkripsiStatusUpdateInput, SkripsiStatusUncheckedUpdateInput>
  }

  /**
   * SkripsiStatus delete
   */
  export type SkripsiStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiStatus
     */
    select?: SkripsiStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiStatus
     */
    omit?: SkripsiStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiStatusInclude<ExtArgs> | null
    /**
     * Filter which SkripsiStatus to delete.
     */
    where: SkripsiStatusWhereUniqueInput
  }

  /**
   * SkripsiStatus deleteMany
   */
  export type SkripsiStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkripsiStatuses to delete
     */
    where?: SkripsiStatusWhereInput
    /**
     * Limit how many SkripsiStatuses to delete.
     */
    limit?: number
  }

  /**
   * SkripsiStatus.skripsi
   */
  export type SkripsiStatus$skripsiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skripsi
     */
    select?: SkripsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skripsi
     */
    omit?: SkripsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiInclude<ExtArgs> | null
    where?: SkripsiWhereInput
    orderBy?: SkripsiOrderByWithRelationInput | SkripsiOrderByWithRelationInput[]
    cursor?: SkripsiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkripsiScalarFieldEnum | SkripsiScalarFieldEnum[]
  }

  /**
   * SkripsiStatus without action
   */
  export type SkripsiStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiStatus
     */
    select?: SkripsiStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiStatus
     */
    omit?: SkripsiStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiStatusInclude<ExtArgs> | null
  }


  /**
   * Model SkripsiPenguji
   */

  export type AggregateSkripsiPenguji = {
    _count: SkripsiPengujiCountAggregateOutputType | null
    _min: SkripsiPengujiMinAggregateOutputType | null
    _max: SkripsiPengujiMaxAggregateOutputType | null
  }

  export type SkripsiPengujiMinAggregateOutputType = {
    id: string | null
    skripsiId: string | null
    userId: string | null
    revisi: string | null
    setuju: boolean | null
  }

  export type SkripsiPengujiMaxAggregateOutputType = {
    id: string | null
    skripsiId: string | null
    userId: string | null
    revisi: string | null
    setuju: boolean | null
  }

  export type SkripsiPengujiCountAggregateOutputType = {
    id: number
    skripsiId: number
    userId: number
    revisi: number
    setuju: number
    _all: number
  }


  export type SkripsiPengujiMinAggregateInputType = {
    id?: true
    skripsiId?: true
    userId?: true
    revisi?: true
    setuju?: true
  }

  export type SkripsiPengujiMaxAggregateInputType = {
    id?: true
    skripsiId?: true
    userId?: true
    revisi?: true
    setuju?: true
  }

  export type SkripsiPengujiCountAggregateInputType = {
    id?: true
    skripsiId?: true
    userId?: true
    revisi?: true
    setuju?: true
    _all?: true
  }

  export type SkripsiPengujiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkripsiPenguji to aggregate.
     */
    where?: SkripsiPengujiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkripsiPengujis to fetch.
     */
    orderBy?: SkripsiPengujiOrderByWithRelationInput | SkripsiPengujiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkripsiPengujiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkripsiPengujis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkripsiPengujis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkripsiPengujis
    **/
    _count?: true | SkripsiPengujiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkripsiPengujiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkripsiPengujiMaxAggregateInputType
  }

  export type GetSkripsiPengujiAggregateType<T extends SkripsiPengujiAggregateArgs> = {
        [P in keyof T & keyof AggregateSkripsiPenguji]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkripsiPenguji[P]>
      : GetScalarType<T[P], AggregateSkripsiPenguji[P]>
  }




  export type SkripsiPengujiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkripsiPengujiWhereInput
    orderBy?: SkripsiPengujiOrderByWithAggregationInput | SkripsiPengujiOrderByWithAggregationInput[]
    by: SkripsiPengujiScalarFieldEnum[] | SkripsiPengujiScalarFieldEnum
    having?: SkripsiPengujiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkripsiPengujiCountAggregateInputType | true
    _min?: SkripsiPengujiMinAggregateInputType
    _max?: SkripsiPengujiMaxAggregateInputType
  }

  export type SkripsiPengujiGroupByOutputType = {
    id: string
    skripsiId: string
    userId: string
    revisi: string | null
    setuju: boolean
    _count: SkripsiPengujiCountAggregateOutputType | null
    _min: SkripsiPengujiMinAggregateOutputType | null
    _max: SkripsiPengujiMaxAggregateOutputType | null
  }

  type GetSkripsiPengujiGroupByPayload<T extends SkripsiPengujiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkripsiPengujiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkripsiPengujiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkripsiPengujiGroupByOutputType[P]>
            : GetScalarType<T[P], SkripsiPengujiGroupByOutputType[P]>
        }
      >
    >


  export type SkripsiPengujiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skripsiId?: boolean
    userId?: boolean
    revisi?: boolean
    setuju?: boolean
    skripsi?: boolean | SkripsiDefaultArgs<ExtArgs>
    dosen?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skripsiPenguji"]>



  export type SkripsiPengujiSelectScalar = {
    id?: boolean
    skripsiId?: boolean
    userId?: boolean
    revisi?: boolean
    setuju?: boolean
  }

  export type SkripsiPengujiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skripsiId" | "userId" | "revisi" | "setuju", ExtArgs["result"]["skripsiPenguji"]>
  export type SkripsiPengujiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skripsi?: boolean | SkripsiDefaultArgs<ExtArgs>
    dosen?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SkripsiPengujiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkripsiPenguji"
    objects: {
      skripsi: Prisma.$SkripsiPayload<ExtArgs>
      dosen: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      skripsiId: string
      userId: string
      revisi: string | null
      setuju: boolean
    }, ExtArgs["result"]["skripsiPenguji"]>
    composites: {}
  }

  type SkripsiPengujiGetPayload<S extends boolean | null | undefined | SkripsiPengujiDefaultArgs> = $Result.GetResult<Prisma.$SkripsiPengujiPayload, S>

  type SkripsiPengujiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkripsiPengujiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkripsiPengujiCountAggregateInputType | true
    }

  export interface SkripsiPengujiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkripsiPenguji'], meta: { name: 'SkripsiPenguji' } }
    /**
     * Find zero or one SkripsiPenguji that matches the filter.
     * @param {SkripsiPengujiFindUniqueArgs} args - Arguments to find a SkripsiPenguji
     * @example
     * // Get one SkripsiPenguji
     * const skripsiPenguji = await prisma.skripsiPenguji.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkripsiPengujiFindUniqueArgs>(args: SelectSubset<T, SkripsiPengujiFindUniqueArgs<ExtArgs>>): Prisma__SkripsiPengujiClient<$Result.GetResult<Prisma.$SkripsiPengujiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkripsiPenguji that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkripsiPengujiFindUniqueOrThrowArgs} args - Arguments to find a SkripsiPenguji
     * @example
     * // Get one SkripsiPenguji
     * const skripsiPenguji = await prisma.skripsiPenguji.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkripsiPengujiFindUniqueOrThrowArgs>(args: SelectSubset<T, SkripsiPengujiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkripsiPengujiClient<$Result.GetResult<Prisma.$SkripsiPengujiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkripsiPenguji that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiPengujiFindFirstArgs} args - Arguments to find a SkripsiPenguji
     * @example
     * // Get one SkripsiPenguji
     * const skripsiPenguji = await prisma.skripsiPenguji.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkripsiPengujiFindFirstArgs>(args?: SelectSubset<T, SkripsiPengujiFindFirstArgs<ExtArgs>>): Prisma__SkripsiPengujiClient<$Result.GetResult<Prisma.$SkripsiPengujiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkripsiPenguji that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiPengujiFindFirstOrThrowArgs} args - Arguments to find a SkripsiPenguji
     * @example
     * // Get one SkripsiPenguji
     * const skripsiPenguji = await prisma.skripsiPenguji.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkripsiPengujiFindFirstOrThrowArgs>(args?: SelectSubset<T, SkripsiPengujiFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkripsiPengujiClient<$Result.GetResult<Prisma.$SkripsiPengujiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkripsiPengujis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiPengujiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkripsiPengujis
     * const skripsiPengujis = await prisma.skripsiPenguji.findMany()
     * 
     * // Get first 10 SkripsiPengujis
     * const skripsiPengujis = await prisma.skripsiPenguji.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skripsiPengujiWithIdOnly = await prisma.skripsiPenguji.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkripsiPengujiFindManyArgs>(args?: SelectSubset<T, SkripsiPengujiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkripsiPengujiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkripsiPenguji.
     * @param {SkripsiPengujiCreateArgs} args - Arguments to create a SkripsiPenguji.
     * @example
     * // Create one SkripsiPenguji
     * const SkripsiPenguji = await prisma.skripsiPenguji.create({
     *   data: {
     *     // ... data to create a SkripsiPenguji
     *   }
     * })
     * 
     */
    create<T extends SkripsiPengujiCreateArgs>(args: SelectSubset<T, SkripsiPengujiCreateArgs<ExtArgs>>): Prisma__SkripsiPengujiClient<$Result.GetResult<Prisma.$SkripsiPengujiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkripsiPengujis.
     * @param {SkripsiPengujiCreateManyArgs} args - Arguments to create many SkripsiPengujis.
     * @example
     * // Create many SkripsiPengujis
     * const skripsiPenguji = await prisma.skripsiPenguji.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkripsiPengujiCreateManyArgs>(args?: SelectSubset<T, SkripsiPengujiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SkripsiPenguji.
     * @param {SkripsiPengujiDeleteArgs} args - Arguments to delete one SkripsiPenguji.
     * @example
     * // Delete one SkripsiPenguji
     * const SkripsiPenguji = await prisma.skripsiPenguji.delete({
     *   where: {
     *     // ... filter to delete one SkripsiPenguji
     *   }
     * })
     * 
     */
    delete<T extends SkripsiPengujiDeleteArgs>(args: SelectSubset<T, SkripsiPengujiDeleteArgs<ExtArgs>>): Prisma__SkripsiPengujiClient<$Result.GetResult<Prisma.$SkripsiPengujiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkripsiPenguji.
     * @param {SkripsiPengujiUpdateArgs} args - Arguments to update one SkripsiPenguji.
     * @example
     * // Update one SkripsiPenguji
     * const skripsiPenguji = await prisma.skripsiPenguji.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkripsiPengujiUpdateArgs>(args: SelectSubset<T, SkripsiPengujiUpdateArgs<ExtArgs>>): Prisma__SkripsiPengujiClient<$Result.GetResult<Prisma.$SkripsiPengujiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkripsiPengujis.
     * @param {SkripsiPengujiDeleteManyArgs} args - Arguments to filter SkripsiPengujis to delete.
     * @example
     * // Delete a few SkripsiPengujis
     * const { count } = await prisma.skripsiPenguji.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkripsiPengujiDeleteManyArgs>(args?: SelectSubset<T, SkripsiPengujiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkripsiPengujis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiPengujiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkripsiPengujis
     * const skripsiPenguji = await prisma.skripsiPenguji.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkripsiPengujiUpdateManyArgs>(args: SelectSubset<T, SkripsiPengujiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SkripsiPenguji.
     * @param {SkripsiPengujiUpsertArgs} args - Arguments to update or create a SkripsiPenguji.
     * @example
     * // Update or create a SkripsiPenguji
     * const skripsiPenguji = await prisma.skripsiPenguji.upsert({
     *   create: {
     *     // ... data to create a SkripsiPenguji
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkripsiPenguji we want to update
     *   }
     * })
     */
    upsert<T extends SkripsiPengujiUpsertArgs>(args: SelectSubset<T, SkripsiPengujiUpsertArgs<ExtArgs>>): Prisma__SkripsiPengujiClient<$Result.GetResult<Prisma.$SkripsiPengujiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkripsiPengujis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiPengujiCountArgs} args - Arguments to filter SkripsiPengujis to count.
     * @example
     * // Count the number of SkripsiPengujis
     * const count = await prisma.skripsiPenguji.count({
     *   where: {
     *     // ... the filter for the SkripsiPengujis we want to count
     *   }
     * })
    **/
    count<T extends SkripsiPengujiCountArgs>(
      args?: Subset<T, SkripsiPengujiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkripsiPengujiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkripsiPenguji.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiPengujiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkripsiPengujiAggregateArgs>(args: Subset<T, SkripsiPengujiAggregateArgs>): Prisma.PrismaPromise<GetSkripsiPengujiAggregateType<T>>

    /**
     * Group by SkripsiPenguji.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiPengujiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkripsiPengujiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkripsiPengujiGroupByArgs['orderBy'] }
        : { orderBy?: SkripsiPengujiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkripsiPengujiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkripsiPengujiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkripsiPenguji model
   */
  readonly fields: SkripsiPengujiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkripsiPenguji.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkripsiPengujiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skripsi<T extends SkripsiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkripsiDefaultArgs<ExtArgs>>): Prisma__SkripsiClient<$Result.GetResult<Prisma.$SkripsiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dosen<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SkripsiPenguji model
   */
  interface SkripsiPengujiFieldRefs {
    readonly id: FieldRef<"SkripsiPenguji", 'String'>
    readonly skripsiId: FieldRef<"SkripsiPenguji", 'String'>
    readonly userId: FieldRef<"SkripsiPenguji", 'String'>
    readonly revisi: FieldRef<"SkripsiPenguji", 'String'>
    readonly setuju: FieldRef<"SkripsiPenguji", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SkripsiPenguji findUnique
   */
  export type SkripsiPengujiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiPenguji
     */
    select?: SkripsiPengujiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiPenguji
     */
    omit?: SkripsiPengujiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiPengujiInclude<ExtArgs> | null
    /**
     * Filter, which SkripsiPenguji to fetch.
     */
    where: SkripsiPengujiWhereUniqueInput
  }

  /**
   * SkripsiPenguji findUniqueOrThrow
   */
  export type SkripsiPengujiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiPenguji
     */
    select?: SkripsiPengujiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiPenguji
     */
    omit?: SkripsiPengujiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiPengujiInclude<ExtArgs> | null
    /**
     * Filter, which SkripsiPenguji to fetch.
     */
    where: SkripsiPengujiWhereUniqueInput
  }

  /**
   * SkripsiPenguji findFirst
   */
  export type SkripsiPengujiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiPenguji
     */
    select?: SkripsiPengujiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiPenguji
     */
    omit?: SkripsiPengujiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiPengujiInclude<ExtArgs> | null
    /**
     * Filter, which SkripsiPenguji to fetch.
     */
    where?: SkripsiPengujiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkripsiPengujis to fetch.
     */
    orderBy?: SkripsiPengujiOrderByWithRelationInput | SkripsiPengujiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkripsiPengujis.
     */
    cursor?: SkripsiPengujiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkripsiPengujis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkripsiPengujis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkripsiPengujis.
     */
    distinct?: SkripsiPengujiScalarFieldEnum | SkripsiPengujiScalarFieldEnum[]
  }

  /**
   * SkripsiPenguji findFirstOrThrow
   */
  export type SkripsiPengujiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiPenguji
     */
    select?: SkripsiPengujiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiPenguji
     */
    omit?: SkripsiPengujiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiPengujiInclude<ExtArgs> | null
    /**
     * Filter, which SkripsiPenguji to fetch.
     */
    where?: SkripsiPengujiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkripsiPengujis to fetch.
     */
    orderBy?: SkripsiPengujiOrderByWithRelationInput | SkripsiPengujiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkripsiPengujis.
     */
    cursor?: SkripsiPengujiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkripsiPengujis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkripsiPengujis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkripsiPengujis.
     */
    distinct?: SkripsiPengujiScalarFieldEnum | SkripsiPengujiScalarFieldEnum[]
  }

  /**
   * SkripsiPenguji findMany
   */
  export type SkripsiPengujiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiPenguji
     */
    select?: SkripsiPengujiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiPenguji
     */
    omit?: SkripsiPengujiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiPengujiInclude<ExtArgs> | null
    /**
     * Filter, which SkripsiPengujis to fetch.
     */
    where?: SkripsiPengujiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkripsiPengujis to fetch.
     */
    orderBy?: SkripsiPengujiOrderByWithRelationInput | SkripsiPengujiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkripsiPengujis.
     */
    cursor?: SkripsiPengujiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkripsiPengujis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkripsiPengujis.
     */
    skip?: number
    distinct?: SkripsiPengujiScalarFieldEnum | SkripsiPengujiScalarFieldEnum[]
  }

  /**
   * SkripsiPenguji create
   */
  export type SkripsiPengujiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiPenguji
     */
    select?: SkripsiPengujiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiPenguji
     */
    omit?: SkripsiPengujiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiPengujiInclude<ExtArgs> | null
    /**
     * The data needed to create a SkripsiPenguji.
     */
    data: XOR<SkripsiPengujiCreateInput, SkripsiPengujiUncheckedCreateInput>
  }

  /**
   * SkripsiPenguji createMany
   */
  export type SkripsiPengujiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkripsiPengujis.
     */
    data: SkripsiPengujiCreateManyInput | SkripsiPengujiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkripsiPenguji update
   */
  export type SkripsiPengujiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiPenguji
     */
    select?: SkripsiPengujiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiPenguji
     */
    omit?: SkripsiPengujiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiPengujiInclude<ExtArgs> | null
    /**
     * The data needed to update a SkripsiPenguji.
     */
    data: XOR<SkripsiPengujiUpdateInput, SkripsiPengujiUncheckedUpdateInput>
    /**
     * Choose, which SkripsiPenguji to update.
     */
    where: SkripsiPengujiWhereUniqueInput
  }

  /**
   * SkripsiPenguji updateMany
   */
  export type SkripsiPengujiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkripsiPengujis.
     */
    data: XOR<SkripsiPengujiUpdateManyMutationInput, SkripsiPengujiUncheckedUpdateManyInput>
    /**
     * Filter which SkripsiPengujis to update
     */
    where?: SkripsiPengujiWhereInput
    /**
     * Limit how many SkripsiPengujis to update.
     */
    limit?: number
  }

  /**
   * SkripsiPenguji upsert
   */
  export type SkripsiPengujiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiPenguji
     */
    select?: SkripsiPengujiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiPenguji
     */
    omit?: SkripsiPengujiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiPengujiInclude<ExtArgs> | null
    /**
     * The filter to search for the SkripsiPenguji to update in case it exists.
     */
    where: SkripsiPengujiWhereUniqueInput
    /**
     * In case the SkripsiPenguji found by the `where` argument doesn't exist, create a new SkripsiPenguji with this data.
     */
    create: XOR<SkripsiPengujiCreateInput, SkripsiPengujiUncheckedCreateInput>
    /**
     * In case the SkripsiPenguji was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkripsiPengujiUpdateInput, SkripsiPengujiUncheckedUpdateInput>
  }

  /**
   * SkripsiPenguji delete
   */
  export type SkripsiPengujiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiPenguji
     */
    select?: SkripsiPengujiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiPenguji
     */
    omit?: SkripsiPengujiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiPengujiInclude<ExtArgs> | null
    /**
     * Filter which SkripsiPenguji to delete.
     */
    where: SkripsiPengujiWhereUniqueInput
  }

  /**
   * SkripsiPenguji deleteMany
   */
  export type SkripsiPengujiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkripsiPengujis to delete
     */
    where?: SkripsiPengujiWhereInput
    /**
     * Limit how many SkripsiPengujis to delete.
     */
    limit?: number
  }

  /**
   * SkripsiPenguji without action
   */
  export type SkripsiPengujiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkripsiPenguji
     */
    select?: SkripsiPengujiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkripsiPenguji
     */
    omit?: SkripsiPengujiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkripsiPengujiInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    roleId: 'roleId',
    email: 'email',
    foto: 'foto',
    password: 'password',
    token: 'token'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OutlineScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    file: 'file',
    statusId: 'statusId'
  };

  export type OutlineScalarFieldEnum = (typeof OutlineScalarFieldEnum)[keyof typeof OutlineScalarFieldEnum]


  export const OutlineStatusScalarFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type OutlineStatusScalarFieldEnum = (typeof OutlineStatusScalarFieldEnum)[keyof typeof OutlineStatusScalarFieldEnum]


  export const ProposalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    file: 'file',
    statusId: 'statusId'
  };

  export type ProposalScalarFieldEnum = (typeof ProposalScalarFieldEnum)[keyof typeof ProposalScalarFieldEnum]


  export const ProposalStatusScalarFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type ProposalStatusScalarFieldEnum = (typeof ProposalStatusScalarFieldEnum)[keyof typeof ProposalStatusScalarFieldEnum]


  export const ProposalPembimbingScalarFieldEnum: {
    id: 'id',
    proposalId: 'proposalId',
    userId: 'userId',
    setuju: 'setuju'
  };

  export type ProposalPembimbingScalarFieldEnum = (typeof ProposalPembimbingScalarFieldEnum)[keyof typeof ProposalPembimbingScalarFieldEnum]


  export const SkripsiScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    file: 'file',
    statusId: 'statusId',
    pembimbingSetuju: 'pembimbingSetuju'
  };

  export type SkripsiScalarFieldEnum = (typeof SkripsiScalarFieldEnum)[keyof typeof SkripsiScalarFieldEnum]


  export const SkripsiStatusScalarFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type SkripsiStatusScalarFieldEnum = (typeof SkripsiStatusScalarFieldEnum)[keyof typeof SkripsiStatusScalarFieldEnum]


  export const SkripsiPengujiScalarFieldEnum: {
    id: 'id',
    skripsiId: 'skripsiId',
    userId: 'userId',
    revisi: 'revisi',
    setuju: 'setuju'
  };

  export type SkripsiPengujiScalarFieldEnum = (typeof SkripsiPengujiScalarFieldEnum)[keyof typeof SkripsiPengujiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const RoleOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    roleId: 'roleId',
    email: 'email',
    foto: 'foto',
    password: 'password',
    token: 'token'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const OutlineOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    file: 'file',
    statusId: 'statusId'
  };

  export type OutlineOrderByRelevanceFieldEnum = (typeof OutlineOrderByRelevanceFieldEnum)[keyof typeof OutlineOrderByRelevanceFieldEnum]


  export const OutlineStatusOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type OutlineStatusOrderByRelevanceFieldEnum = (typeof OutlineStatusOrderByRelevanceFieldEnum)[keyof typeof OutlineStatusOrderByRelevanceFieldEnum]


  export const ProposalOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    file: 'file',
    statusId: 'statusId'
  };

  export type ProposalOrderByRelevanceFieldEnum = (typeof ProposalOrderByRelevanceFieldEnum)[keyof typeof ProposalOrderByRelevanceFieldEnum]


  export const ProposalStatusOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type ProposalStatusOrderByRelevanceFieldEnum = (typeof ProposalStatusOrderByRelevanceFieldEnum)[keyof typeof ProposalStatusOrderByRelevanceFieldEnum]


  export const ProposalPembimbingOrderByRelevanceFieldEnum: {
    id: 'id',
    proposalId: 'proposalId',
    userId: 'userId'
  };

  export type ProposalPembimbingOrderByRelevanceFieldEnum = (typeof ProposalPembimbingOrderByRelevanceFieldEnum)[keyof typeof ProposalPembimbingOrderByRelevanceFieldEnum]


  export const SkripsiOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    file: 'file',
    statusId: 'statusId'
  };

  export type SkripsiOrderByRelevanceFieldEnum = (typeof SkripsiOrderByRelevanceFieldEnum)[keyof typeof SkripsiOrderByRelevanceFieldEnum]


  export const SkripsiStatusOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type SkripsiStatusOrderByRelevanceFieldEnum = (typeof SkripsiStatusOrderByRelevanceFieldEnum)[keyof typeof SkripsiStatusOrderByRelevanceFieldEnum]


  export const SkripsiPengujiOrderByRelevanceFieldEnum: {
    id: 'id',
    skripsiId: 'skripsiId',
    userId: 'userId',
    revisi: 'revisi'
  };

  export type SkripsiPengujiOrderByRelevanceFieldEnum = (typeof SkripsiPengujiOrderByRelevanceFieldEnum)[keyof typeof SkripsiPengujiOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    nama?: StringFilter<"Role"> | string
    user?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    user?: UserOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    nama?: StringFilter<"Role"> | string
    user?: UserListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    nama?: StringWithAggregatesFilter<"Role"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nama?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    foto?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    token?: StringNullableFilter<"User"> | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    outline?: OutlineListRelationFilter
    proposal?: ProposalListRelationFilter
    skripsi?: SkripsiListRelationFilter
    proposalPembimbing?: ProposalPembimbingListRelationFilter
    skripsiPenguji?: SkripsiPengujiListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    roleId?: SortOrder
    email?: SortOrder
    foto?: SortOrderInput | SortOrder
    password?: SortOrder
    token?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    outline?: OutlineOrderByRelationAggregateInput
    proposal?: ProposalOrderByRelationAggregateInput
    skripsi?: SkripsiOrderByRelationAggregateInput
    proposalPembimbing?: ProposalPembimbingOrderByRelationAggregateInput
    skripsiPenguji?: SkripsiPengujiOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    foto?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    token?: StringNullableFilter<"User"> | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    outline?: OutlineListRelationFilter
    proposal?: ProposalListRelationFilter
    skripsi?: SkripsiListRelationFilter
    proposalPembimbing?: ProposalPembimbingListRelationFilter
    skripsiPenguji?: SkripsiPengujiListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    roleId?: SortOrder
    email?: SortOrder
    foto?: SortOrderInput | SortOrder
    password?: SortOrder
    token?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nama?: StringWithAggregatesFilter<"User"> | string
    roleId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    foto?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type OutlineWhereInput = {
    AND?: OutlineWhereInput | OutlineWhereInput[]
    OR?: OutlineWhereInput[]
    NOT?: OutlineWhereInput | OutlineWhereInput[]
    id?: StringFilter<"Outline"> | string
    userId?: StringFilter<"Outline"> | string
    file?: StringFilter<"Outline"> | string
    statusId?: StringFilter<"Outline"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    status?: XOR<OutlineStatusScalarRelationFilter, OutlineStatusWhereInput>
  }

  export type OutlineOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    file?: SortOrder
    statusId?: SortOrder
    user?: UserOrderByWithRelationInput
    status?: OutlineStatusOrderByWithRelationInput
    _relevance?: OutlineOrderByRelevanceInput
  }

  export type OutlineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutlineWhereInput | OutlineWhereInput[]
    OR?: OutlineWhereInput[]
    NOT?: OutlineWhereInput | OutlineWhereInput[]
    userId?: StringFilter<"Outline"> | string
    file?: StringFilter<"Outline"> | string
    statusId?: StringFilter<"Outline"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    status?: XOR<OutlineStatusScalarRelationFilter, OutlineStatusWhereInput>
  }, "id">

  export type OutlineOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    file?: SortOrder
    statusId?: SortOrder
    _count?: OutlineCountOrderByAggregateInput
    _max?: OutlineMaxOrderByAggregateInput
    _min?: OutlineMinOrderByAggregateInput
  }

  export type OutlineScalarWhereWithAggregatesInput = {
    AND?: OutlineScalarWhereWithAggregatesInput | OutlineScalarWhereWithAggregatesInput[]
    OR?: OutlineScalarWhereWithAggregatesInput[]
    NOT?: OutlineScalarWhereWithAggregatesInput | OutlineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Outline"> | string
    userId?: StringWithAggregatesFilter<"Outline"> | string
    file?: StringWithAggregatesFilter<"Outline"> | string
    statusId?: StringWithAggregatesFilter<"Outline"> | string
  }

  export type OutlineStatusWhereInput = {
    AND?: OutlineStatusWhereInput | OutlineStatusWhereInput[]
    OR?: OutlineStatusWhereInput[]
    NOT?: OutlineStatusWhereInput | OutlineStatusWhereInput[]
    id?: StringFilter<"OutlineStatus"> | string
    nama?: StringFilter<"OutlineStatus"> | string
    outline?: OutlineListRelationFilter
  }

  export type OutlineStatusOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    outline?: OutlineOrderByRelationAggregateInput
    _relevance?: OutlineStatusOrderByRelevanceInput
  }

  export type OutlineStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutlineStatusWhereInput | OutlineStatusWhereInput[]
    OR?: OutlineStatusWhereInput[]
    NOT?: OutlineStatusWhereInput | OutlineStatusWhereInput[]
    nama?: StringFilter<"OutlineStatus"> | string
    outline?: OutlineListRelationFilter
  }, "id">

  export type OutlineStatusOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    _count?: OutlineStatusCountOrderByAggregateInput
    _max?: OutlineStatusMaxOrderByAggregateInput
    _min?: OutlineStatusMinOrderByAggregateInput
  }

  export type OutlineStatusScalarWhereWithAggregatesInput = {
    AND?: OutlineStatusScalarWhereWithAggregatesInput | OutlineStatusScalarWhereWithAggregatesInput[]
    OR?: OutlineStatusScalarWhereWithAggregatesInput[]
    NOT?: OutlineStatusScalarWhereWithAggregatesInput | OutlineStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutlineStatus"> | string
    nama?: StringWithAggregatesFilter<"OutlineStatus"> | string
  }

  export type ProposalWhereInput = {
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    id?: StringFilter<"Proposal"> | string
    userId?: StringFilter<"Proposal"> | string
    file?: StringFilter<"Proposal"> | string
    statusId?: StringFilter<"Proposal"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    status?: XOR<ProposalStatusScalarRelationFilter, ProposalStatusWhereInput>
    dosenPembimbing?: ProposalPembimbingListRelationFilter
  }

  export type ProposalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    file?: SortOrder
    statusId?: SortOrder
    user?: UserOrderByWithRelationInput
    status?: ProposalStatusOrderByWithRelationInput
    dosenPembimbing?: ProposalPembimbingOrderByRelationAggregateInput
    _relevance?: ProposalOrderByRelevanceInput
  }

  export type ProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    userId?: StringFilter<"Proposal"> | string
    file?: StringFilter<"Proposal"> | string
    statusId?: StringFilter<"Proposal"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    status?: XOR<ProposalStatusScalarRelationFilter, ProposalStatusWhereInput>
    dosenPembimbing?: ProposalPembimbingListRelationFilter
  }, "id">

  export type ProposalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    file?: SortOrder
    statusId?: SortOrder
    _count?: ProposalCountOrderByAggregateInput
    _max?: ProposalMaxOrderByAggregateInput
    _min?: ProposalMinOrderByAggregateInput
  }

  export type ProposalScalarWhereWithAggregatesInput = {
    AND?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    OR?: ProposalScalarWhereWithAggregatesInput[]
    NOT?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proposal"> | string
    userId?: StringWithAggregatesFilter<"Proposal"> | string
    file?: StringWithAggregatesFilter<"Proposal"> | string
    statusId?: StringWithAggregatesFilter<"Proposal"> | string
  }

  export type ProposalStatusWhereInput = {
    AND?: ProposalStatusWhereInput | ProposalStatusWhereInput[]
    OR?: ProposalStatusWhereInput[]
    NOT?: ProposalStatusWhereInput | ProposalStatusWhereInput[]
    id?: StringFilter<"ProposalStatus"> | string
    nama?: StringFilter<"ProposalStatus"> | string
    proposal?: ProposalListRelationFilter
  }

  export type ProposalStatusOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    proposal?: ProposalOrderByRelationAggregateInput
    _relevance?: ProposalStatusOrderByRelevanceInput
  }

  export type ProposalStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProposalStatusWhereInput | ProposalStatusWhereInput[]
    OR?: ProposalStatusWhereInput[]
    NOT?: ProposalStatusWhereInput | ProposalStatusWhereInput[]
    nama?: StringFilter<"ProposalStatus"> | string
    proposal?: ProposalListRelationFilter
  }, "id">

  export type ProposalStatusOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    _count?: ProposalStatusCountOrderByAggregateInput
    _max?: ProposalStatusMaxOrderByAggregateInput
    _min?: ProposalStatusMinOrderByAggregateInput
  }

  export type ProposalStatusScalarWhereWithAggregatesInput = {
    AND?: ProposalStatusScalarWhereWithAggregatesInput | ProposalStatusScalarWhereWithAggregatesInput[]
    OR?: ProposalStatusScalarWhereWithAggregatesInput[]
    NOT?: ProposalStatusScalarWhereWithAggregatesInput | ProposalStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProposalStatus"> | string
    nama?: StringWithAggregatesFilter<"ProposalStatus"> | string
  }

  export type ProposalPembimbingWhereInput = {
    AND?: ProposalPembimbingWhereInput | ProposalPembimbingWhereInput[]
    OR?: ProposalPembimbingWhereInput[]
    NOT?: ProposalPembimbingWhereInput | ProposalPembimbingWhereInput[]
    id?: StringFilter<"ProposalPembimbing"> | string
    proposalId?: StringFilter<"ProposalPembimbing"> | string
    userId?: StringFilter<"ProposalPembimbing"> | string
    setuju?: BoolFilter<"ProposalPembimbing"> | boolean
    proposal?: XOR<ProposalScalarRelationFilter, ProposalWhereInput>
    dosen?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProposalPembimbingOrderByWithRelationInput = {
    id?: SortOrder
    proposalId?: SortOrder
    userId?: SortOrder
    setuju?: SortOrder
    proposal?: ProposalOrderByWithRelationInput
    dosen?: UserOrderByWithRelationInput
    _relevance?: ProposalPembimbingOrderByRelevanceInput
  }

  export type ProposalPembimbingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProposalPembimbingWhereInput | ProposalPembimbingWhereInput[]
    OR?: ProposalPembimbingWhereInput[]
    NOT?: ProposalPembimbingWhereInput | ProposalPembimbingWhereInput[]
    proposalId?: StringFilter<"ProposalPembimbing"> | string
    userId?: StringFilter<"ProposalPembimbing"> | string
    setuju?: BoolFilter<"ProposalPembimbing"> | boolean
    proposal?: XOR<ProposalScalarRelationFilter, ProposalWhereInput>
    dosen?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProposalPembimbingOrderByWithAggregationInput = {
    id?: SortOrder
    proposalId?: SortOrder
    userId?: SortOrder
    setuju?: SortOrder
    _count?: ProposalPembimbingCountOrderByAggregateInput
    _max?: ProposalPembimbingMaxOrderByAggregateInput
    _min?: ProposalPembimbingMinOrderByAggregateInput
  }

  export type ProposalPembimbingScalarWhereWithAggregatesInput = {
    AND?: ProposalPembimbingScalarWhereWithAggregatesInput | ProposalPembimbingScalarWhereWithAggregatesInput[]
    OR?: ProposalPembimbingScalarWhereWithAggregatesInput[]
    NOT?: ProposalPembimbingScalarWhereWithAggregatesInput | ProposalPembimbingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProposalPembimbing"> | string
    proposalId?: StringWithAggregatesFilter<"ProposalPembimbing"> | string
    userId?: StringWithAggregatesFilter<"ProposalPembimbing"> | string
    setuju?: BoolWithAggregatesFilter<"ProposalPembimbing"> | boolean
  }

  export type SkripsiWhereInput = {
    AND?: SkripsiWhereInput | SkripsiWhereInput[]
    OR?: SkripsiWhereInput[]
    NOT?: SkripsiWhereInput | SkripsiWhereInput[]
    id?: StringFilter<"Skripsi"> | string
    userId?: StringFilter<"Skripsi"> | string
    file?: StringFilter<"Skripsi"> | string
    statusId?: StringFilter<"Skripsi"> | string
    pembimbingSetuju?: BoolFilter<"Skripsi"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    status?: XOR<SkripsiStatusScalarRelationFilter, SkripsiStatusWhereInput>
    penguji?: SkripsiPengujiListRelationFilter
  }

  export type SkripsiOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    file?: SortOrder
    statusId?: SortOrder
    pembimbingSetuju?: SortOrder
    user?: UserOrderByWithRelationInput
    status?: SkripsiStatusOrderByWithRelationInput
    penguji?: SkripsiPengujiOrderByRelationAggregateInput
    _relevance?: SkripsiOrderByRelevanceInput
  }

  export type SkripsiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkripsiWhereInput | SkripsiWhereInput[]
    OR?: SkripsiWhereInput[]
    NOT?: SkripsiWhereInput | SkripsiWhereInput[]
    userId?: StringFilter<"Skripsi"> | string
    file?: StringFilter<"Skripsi"> | string
    statusId?: StringFilter<"Skripsi"> | string
    pembimbingSetuju?: BoolFilter<"Skripsi"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    status?: XOR<SkripsiStatusScalarRelationFilter, SkripsiStatusWhereInput>
    penguji?: SkripsiPengujiListRelationFilter
  }, "id">

  export type SkripsiOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    file?: SortOrder
    statusId?: SortOrder
    pembimbingSetuju?: SortOrder
    _count?: SkripsiCountOrderByAggregateInput
    _max?: SkripsiMaxOrderByAggregateInput
    _min?: SkripsiMinOrderByAggregateInput
  }

  export type SkripsiScalarWhereWithAggregatesInput = {
    AND?: SkripsiScalarWhereWithAggregatesInput | SkripsiScalarWhereWithAggregatesInput[]
    OR?: SkripsiScalarWhereWithAggregatesInput[]
    NOT?: SkripsiScalarWhereWithAggregatesInput | SkripsiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skripsi"> | string
    userId?: StringWithAggregatesFilter<"Skripsi"> | string
    file?: StringWithAggregatesFilter<"Skripsi"> | string
    statusId?: StringWithAggregatesFilter<"Skripsi"> | string
    pembimbingSetuju?: BoolWithAggregatesFilter<"Skripsi"> | boolean
  }

  export type SkripsiStatusWhereInput = {
    AND?: SkripsiStatusWhereInput | SkripsiStatusWhereInput[]
    OR?: SkripsiStatusWhereInput[]
    NOT?: SkripsiStatusWhereInput | SkripsiStatusWhereInput[]
    id?: StringFilter<"SkripsiStatus"> | string
    nama?: StringFilter<"SkripsiStatus"> | string
    skripsi?: SkripsiListRelationFilter
  }

  export type SkripsiStatusOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    skripsi?: SkripsiOrderByRelationAggregateInput
    _relevance?: SkripsiStatusOrderByRelevanceInput
  }

  export type SkripsiStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkripsiStatusWhereInput | SkripsiStatusWhereInput[]
    OR?: SkripsiStatusWhereInput[]
    NOT?: SkripsiStatusWhereInput | SkripsiStatusWhereInput[]
    nama?: StringFilter<"SkripsiStatus"> | string
    skripsi?: SkripsiListRelationFilter
  }, "id">

  export type SkripsiStatusOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    _count?: SkripsiStatusCountOrderByAggregateInput
    _max?: SkripsiStatusMaxOrderByAggregateInput
    _min?: SkripsiStatusMinOrderByAggregateInput
  }

  export type SkripsiStatusScalarWhereWithAggregatesInput = {
    AND?: SkripsiStatusScalarWhereWithAggregatesInput | SkripsiStatusScalarWhereWithAggregatesInput[]
    OR?: SkripsiStatusScalarWhereWithAggregatesInput[]
    NOT?: SkripsiStatusScalarWhereWithAggregatesInput | SkripsiStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SkripsiStatus"> | string
    nama?: StringWithAggregatesFilter<"SkripsiStatus"> | string
  }

  export type SkripsiPengujiWhereInput = {
    AND?: SkripsiPengujiWhereInput | SkripsiPengujiWhereInput[]
    OR?: SkripsiPengujiWhereInput[]
    NOT?: SkripsiPengujiWhereInput | SkripsiPengujiWhereInput[]
    id?: StringFilter<"SkripsiPenguji"> | string
    skripsiId?: StringFilter<"SkripsiPenguji"> | string
    userId?: StringFilter<"SkripsiPenguji"> | string
    revisi?: StringNullableFilter<"SkripsiPenguji"> | string | null
    setuju?: BoolFilter<"SkripsiPenguji"> | boolean
    skripsi?: XOR<SkripsiScalarRelationFilter, SkripsiWhereInput>
    dosen?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SkripsiPengujiOrderByWithRelationInput = {
    id?: SortOrder
    skripsiId?: SortOrder
    userId?: SortOrder
    revisi?: SortOrderInput | SortOrder
    setuju?: SortOrder
    skripsi?: SkripsiOrderByWithRelationInput
    dosen?: UserOrderByWithRelationInput
    _relevance?: SkripsiPengujiOrderByRelevanceInput
  }

  export type SkripsiPengujiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkripsiPengujiWhereInput | SkripsiPengujiWhereInput[]
    OR?: SkripsiPengujiWhereInput[]
    NOT?: SkripsiPengujiWhereInput | SkripsiPengujiWhereInput[]
    skripsiId?: StringFilter<"SkripsiPenguji"> | string
    userId?: StringFilter<"SkripsiPenguji"> | string
    revisi?: StringNullableFilter<"SkripsiPenguji"> | string | null
    setuju?: BoolFilter<"SkripsiPenguji"> | boolean
    skripsi?: XOR<SkripsiScalarRelationFilter, SkripsiWhereInput>
    dosen?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SkripsiPengujiOrderByWithAggregationInput = {
    id?: SortOrder
    skripsiId?: SortOrder
    userId?: SortOrder
    revisi?: SortOrderInput | SortOrder
    setuju?: SortOrder
    _count?: SkripsiPengujiCountOrderByAggregateInput
    _max?: SkripsiPengujiMaxOrderByAggregateInput
    _min?: SkripsiPengujiMinOrderByAggregateInput
  }

  export type SkripsiPengujiScalarWhereWithAggregatesInput = {
    AND?: SkripsiPengujiScalarWhereWithAggregatesInput | SkripsiPengujiScalarWhereWithAggregatesInput[]
    OR?: SkripsiPengujiScalarWhereWithAggregatesInput[]
    NOT?: SkripsiPengujiScalarWhereWithAggregatesInput | SkripsiPengujiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SkripsiPenguji"> | string
    skripsiId?: StringWithAggregatesFilter<"SkripsiPenguji"> | string
    userId?: StringWithAggregatesFilter<"SkripsiPenguji"> | string
    revisi?: StringNullableWithAggregatesFilter<"SkripsiPenguji"> | string | null
    setuju?: BoolWithAggregatesFilter<"SkripsiPenguji"> | boolean
  }

  export type RoleCreateInput = {
    id?: string
    nama: string
    user?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    nama: string
    user?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    nama: string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    nama: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
    role: RoleCreateNestedOneWithoutUserInput
    outline?: OutlineCreateNestedManyWithoutUserInput
    proposal?: ProposalCreateNestedManyWithoutUserInput
    skripsi?: SkripsiCreateNestedManyWithoutUserInput
    proposalPembimbing?: ProposalPembimbingCreateNestedManyWithoutDosenInput
    skripsiPenguji?: SkripsiPengujiCreateNestedManyWithoutDosenInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nama: string
    roleId: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
    outline?: OutlineUncheckedCreateNestedManyWithoutUserInput
    proposal?: ProposalUncheckedCreateNestedManyWithoutUserInput
    skripsi?: SkripsiUncheckedCreateNestedManyWithoutUserInput
    proposalPembimbing?: ProposalPembimbingUncheckedCreateNestedManyWithoutDosenInput
    skripsiPenguji?: SkripsiPengujiUncheckedCreateNestedManyWithoutDosenInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    outline?: OutlineUpdateManyWithoutUserNestedInput
    proposal?: ProposalUpdateManyWithoutUserNestedInput
    skripsi?: SkripsiUpdateManyWithoutUserNestedInput
    proposalPembimbing?: ProposalPembimbingUpdateManyWithoutDosenNestedInput
    skripsiPenguji?: SkripsiPengujiUpdateManyWithoutDosenNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    outline?: OutlineUncheckedUpdateManyWithoutUserNestedInput
    proposal?: ProposalUncheckedUpdateManyWithoutUserNestedInput
    skripsi?: SkripsiUncheckedUpdateManyWithoutUserNestedInput
    proposalPembimbing?: ProposalPembimbingUncheckedUpdateManyWithoutDosenNestedInput
    skripsiPenguji?: SkripsiPengujiUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nama: string
    roleId: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutlineCreateInput = {
    id?: string
    file: string
    user: UserCreateNestedOneWithoutOutlineInput
    status: OutlineStatusCreateNestedOneWithoutOutlineInput
  }

  export type OutlineUncheckedCreateInput = {
    id?: string
    userId: string
    file: string
    statusId: string
  }

  export type OutlineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutOutlineNestedInput
    status?: OutlineStatusUpdateOneRequiredWithoutOutlineNestedInput
  }

  export type OutlineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type OutlineCreateManyInput = {
    id?: string
    userId: string
    file: string
    statusId: string
  }

  export type OutlineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
  }

  export type OutlineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type OutlineStatusCreateInput = {
    id?: string
    nama: string
    outline?: OutlineCreateNestedManyWithoutStatusInput
  }

  export type OutlineStatusUncheckedCreateInput = {
    id?: string
    nama: string
    outline?: OutlineUncheckedCreateNestedManyWithoutStatusInput
  }

  export type OutlineStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    outline?: OutlineUpdateManyWithoutStatusNestedInput
  }

  export type OutlineStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    outline?: OutlineUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type OutlineStatusCreateManyInput = {
    id?: string
    nama: string
  }

  export type OutlineStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type OutlineStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalCreateInput = {
    id?: string
    file: string
    user: UserCreateNestedOneWithoutProposalInput
    status: ProposalStatusCreateNestedOneWithoutProposalInput
    dosenPembimbing?: ProposalPembimbingCreateNestedManyWithoutProposalInput
  }

  export type ProposalUncheckedCreateInput = {
    id?: string
    userId: string
    file: string
    statusId: string
    dosenPembimbing?: ProposalPembimbingUncheckedCreateNestedManyWithoutProposalInput
  }

  export type ProposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProposalNestedInput
    status?: ProposalStatusUpdateOneRequiredWithoutProposalNestedInput
    dosenPembimbing?: ProposalPembimbingUpdateManyWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
    dosenPembimbing?: ProposalPembimbingUncheckedUpdateManyWithoutProposalNestedInput
  }

  export type ProposalCreateManyInput = {
    id?: string
    userId: string
    file: string
    statusId: string
  }

  export type ProposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalStatusCreateInput = {
    id?: string
    nama: string
    proposal?: ProposalCreateNestedManyWithoutStatusInput
  }

  export type ProposalStatusUncheckedCreateInput = {
    id?: string
    nama: string
    proposal?: ProposalUncheckedCreateNestedManyWithoutStatusInput
  }

  export type ProposalStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    proposal?: ProposalUpdateManyWithoutStatusNestedInput
  }

  export type ProposalStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    proposal?: ProposalUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type ProposalStatusCreateManyInput = {
    id?: string
    nama: string
  }

  export type ProposalStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalPembimbingCreateInput = {
    id?: string
    setuju?: boolean
    proposal: ProposalCreateNestedOneWithoutDosenPembimbingInput
    dosen: UserCreateNestedOneWithoutProposalPembimbingInput
  }

  export type ProposalPembimbingUncheckedCreateInput = {
    id?: string
    proposalId: string
    userId: string
    setuju?: boolean
  }

  export type ProposalPembimbingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    setuju?: BoolFieldUpdateOperationsInput | boolean
    proposal?: ProposalUpdateOneRequiredWithoutDosenPembimbingNestedInput
    dosen?: UserUpdateOneRequiredWithoutProposalPembimbingNestedInput
  }

  export type ProposalPembimbingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    setuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProposalPembimbingCreateManyInput = {
    id?: string
    proposalId: string
    userId: string
    setuju?: boolean
  }

  export type ProposalPembimbingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    setuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProposalPembimbingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    setuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SkripsiCreateInput = {
    id?: string
    file: string
    pembimbingSetuju?: boolean
    user: UserCreateNestedOneWithoutSkripsiInput
    status: SkripsiStatusCreateNestedOneWithoutSkripsiInput
    penguji?: SkripsiPengujiCreateNestedManyWithoutSkripsiInput
  }

  export type SkripsiUncheckedCreateInput = {
    id?: string
    userId: string
    file: string
    statusId: string
    pembimbingSetuju?: boolean
    penguji?: SkripsiPengujiUncheckedCreateNestedManyWithoutSkripsiInput
  }

  export type SkripsiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    pembimbingSetuju?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSkripsiNestedInput
    status?: SkripsiStatusUpdateOneRequiredWithoutSkripsiNestedInput
    penguji?: SkripsiPengujiUpdateManyWithoutSkripsiNestedInput
  }

  export type SkripsiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
    pembimbingSetuju?: BoolFieldUpdateOperationsInput | boolean
    penguji?: SkripsiPengujiUncheckedUpdateManyWithoutSkripsiNestedInput
  }

  export type SkripsiCreateManyInput = {
    id?: string
    userId: string
    file: string
    statusId: string
    pembimbingSetuju?: boolean
  }

  export type SkripsiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    pembimbingSetuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SkripsiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
    pembimbingSetuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SkripsiStatusCreateInput = {
    id?: string
    nama: string
    skripsi?: SkripsiCreateNestedManyWithoutStatusInput
  }

  export type SkripsiStatusUncheckedCreateInput = {
    id?: string
    nama: string
    skripsi?: SkripsiUncheckedCreateNestedManyWithoutStatusInput
  }

  export type SkripsiStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    skripsi?: SkripsiUpdateManyWithoutStatusNestedInput
  }

  export type SkripsiStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    skripsi?: SkripsiUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type SkripsiStatusCreateManyInput = {
    id?: string
    nama: string
  }

  export type SkripsiStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type SkripsiStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type SkripsiPengujiCreateInput = {
    id?: string
    revisi?: string | null
    setuju?: boolean
    skripsi: SkripsiCreateNestedOneWithoutPengujiInput
    dosen: UserCreateNestedOneWithoutSkripsiPengujiInput
  }

  export type SkripsiPengujiUncheckedCreateInput = {
    id?: string
    skripsiId: string
    userId: string
    revisi?: string | null
    setuju?: boolean
  }

  export type SkripsiPengujiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    revisi?: NullableStringFieldUpdateOperationsInput | string | null
    setuju?: BoolFieldUpdateOperationsInput | boolean
    skripsi?: SkripsiUpdateOneRequiredWithoutPengujiNestedInput
    dosen?: UserUpdateOneRequiredWithoutSkripsiPengujiNestedInput
  }

  export type SkripsiPengujiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skripsiId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    revisi?: NullableStringFieldUpdateOperationsInput | string | null
    setuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SkripsiPengujiCreateManyInput = {
    id?: string
    skripsiId: string
    userId: string
    revisi?: string | null
    setuju?: boolean
  }

  export type SkripsiPengujiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    revisi?: NullableStringFieldUpdateOperationsInput | string | null
    setuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SkripsiPengujiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    skripsiId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    revisi?: NullableStringFieldUpdateOperationsInput | string | null
    setuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type OutlineListRelationFilter = {
    every?: OutlineWhereInput
    some?: OutlineWhereInput
    none?: OutlineWhereInput
  }

  export type ProposalListRelationFilter = {
    every?: ProposalWhereInput
    some?: ProposalWhereInput
    none?: ProposalWhereInput
  }

  export type SkripsiListRelationFilter = {
    every?: SkripsiWhereInput
    some?: SkripsiWhereInput
    none?: SkripsiWhereInput
  }

  export type ProposalPembimbingListRelationFilter = {
    every?: ProposalPembimbingWhereInput
    some?: ProposalPembimbingWhereInput
    none?: ProposalPembimbingWhereInput
  }

  export type SkripsiPengujiListRelationFilter = {
    every?: SkripsiPengujiWhereInput
    some?: SkripsiPengujiWhereInput
    none?: SkripsiPengujiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OutlineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkripsiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProposalPembimbingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkripsiPengujiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    roleId?: SortOrder
    email?: SortOrder
    foto?: SortOrder
    password?: SortOrder
    token?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    roleId?: SortOrder
    email?: SortOrder
    foto?: SortOrder
    password?: SortOrder
    token?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    roleId?: SortOrder
    email?: SortOrder
    foto?: SortOrder
    password?: SortOrder
    token?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OutlineStatusScalarRelationFilter = {
    is?: OutlineStatusWhereInput
    isNot?: OutlineStatusWhereInput
  }

  export type OutlineOrderByRelevanceInput = {
    fields: OutlineOrderByRelevanceFieldEnum | OutlineOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OutlineCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    file?: SortOrder
    statusId?: SortOrder
  }

  export type OutlineMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    file?: SortOrder
    statusId?: SortOrder
  }

  export type OutlineMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    file?: SortOrder
    statusId?: SortOrder
  }

  export type OutlineStatusOrderByRelevanceInput = {
    fields: OutlineStatusOrderByRelevanceFieldEnum | OutlineStatusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OutlineStatusCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type OutlineStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type OutlineStatusMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type ProposalStatusScalarRelationFilter = {
    is?: ProposalStatusWhereInput
    isNot?: ProposalStatusWhereInput
  }

  export type ProposalOrderByRelevanceInput = {
    fields: ProposalOrderByRelevanceFieldEnum | ProposalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProposalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    file?: SortOrder
    statusId?: SortOrder
  }

  export type ProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    file?: SortOrder
    statusId?: SortOrder
  }

  export type ProposalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    file?: SortOrder
    statusId?: SortOrder
  }

  export type ProposalStatusOrderByRelevanceInput = {
    fields: ProposalStatusOrderByRelevanceFieldEnum | ProposalStatusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProposalStatusCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type ProposalStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type ProposalStatusMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProposalScalarRelationFilter = {
    is?: ProposalWhereInput
    isNot?: ProposalWhereInput
  }

  export type ProposalPembimbingOrderByRelevanceInput = {
    fields: ProposalPembimbingOrderByRelevanceFieldEnum | ProposalPembimbingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProposalPembimbingCountOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    userId?: SortOrder
    setuju?: SortOrder
  }

  export type ProposalPembimbingMaxOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    userId?: SortOrder
    setuju?: SortOrder
  }

  export type ProposalPembimbingMinOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    userId?: SortOrder
    setuju?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SkripsiStatusScalarRelationFilter = {
    is?: SkripsiStatusWhereInput
    isNot?: SkripsiStatusWhereInput
  }

  export type SkripsiOrderByRelevanceInput = {
    fields: SkripsiOrderByRelevanceFieldEnum | SkripsiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SkripsiCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    file?: SortOrder
    statusId?: SortOrder
    pembimbingSetuju?: SortOrder
  }

  export type SkripsiMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    file?: SortOrder
    statusId?: SortOrder
    pembimbingSetuju?: SortOrder
  }

  export type SkripsiMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    file?: SortOrder
    statusId?: SortOrder
    pembimbingSetuju?: SortOrder
  }

  export type SkripsiStatusOrderByRelevanceInput = {
    fields: SkripsiStatusOrderByRelevanceFieldEnum | SkripsiStatusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SkripsiStatusCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type SkripsiStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type SkripsiStatusMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type SkripsiScalarRelationFilter = {
    is?: SkripsiWhereInput
    isNot?: SkripsiWhereInput
  }

  export type SkripsiPengujiOrderByRelevanceInput = {
    fields: SkripsiPengujiOrderByRelevanceFieldEnum | SkripsiPengujiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SkripsiPengujiCountOrderByAggregateInput = {
    id?: SortOrder
    skripsiId?: SortOrder
    userId?: SortOrder
    revisi?: SortOrder
    setuju?: SortOrder
  }

  export type SkripsiPengujiMaxOrderByAggregateInput = {
    id?: SortOrder
    skripsiId?: SortOrder
    userId?: SortOrder
    revisi?: SortOrder
    setuju?: SortOrder
  }

  export type SkripsiPengujiMinOrderByAggregateInput = {
    id?: SortOrder
    skripsiId?: SortOrder
    userId?: SortOrder
    revisi?: SortOrder
    setuju?: SortOrder
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUserInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    connect?: RoleWhereUniqueInput
  }

  export type OutlineCreateNestedManyWithoutUserInput = {
    create?: XOR<OutlineCreateWithoutUserInput, OutlineUncheckedCreateWithoutUserInput> | OutlineCreateWithoutUserInput[] | OutlineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutlineCreateOrConnectWithoutUserInput | OutlineCreateOrConnectWithoutUserInput[]
    createMany?: OutlineCreateManyUserInputEnvelope
    connect?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
  }

  export type ProposalCreateNestedManyWithoutUserInput = {
    create?: XOR<ProposalCreateWithoutUserInput, ProposalUncheckedCreateWithoutUserInput> | ProposalCreateWithoutUserInput[] | ProposalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutUserInput | ProposalCreateOrConnectWithoutUserInput[]
    createMany?: ProposalCreateManyUserInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type SkripsiCreateNestedManyWithoutUserInput = {
    create?: XOR<SkripsiCreateWithoutUserInput, SkripsiUncheckedCreateWithoutUserInput> | SkripsiCreateWithoutUserInput[] | SkripsiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkripsiCreateOrConnectWithoutUserInput | SkripsiCreateOrConnectWithoutUserInput[]
    createMany?: SkripsiCreateManyUserInputEnvelope
    connect?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
  }

  export type ProposalPembimbingCreateNestedManyWithoutDosenInput = {
    create?: XOR<ProposalPembimbingCreateWithoutDosenInput, ProposalPembimbingUncheckedCreateWithoutDosenInput> | ProposalPembimbingCreateWithoutDosenInput[] | ProposalPembimbingUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: ProposalPembimbingCreateOrConnectWithoutDosenInput | ProposalPembimbingCreateOrConnectWithoutDosenInput[]
    createMany?: ProposalPembimbingCreateManyDosenInputEnvelope
    connect?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
  }

  export type SkripsiPengujiCreateNestedManyWithoutDosenInput = {
    create?: XOR<SkripsiPengujiCreateWithoutDosenInput, SkripsiPengujiUncheckedCreateWithoutDosenInput> | SkripsiPengujiCreateWithoutDosenInput[] | SkripsiPengujiUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: SkripsiPengujiCreateOrConnectWithoutDosenInput | SkripsiPengujiCreateOrConnectWithoutDosenInput[]
    createMany?: SkripsiPengujiCreateManyDosenInputEnvelope
    connect?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
  }

  export type OutlineUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OutlineCreateWithoutUserInput, OutlineUncheckedCreateWithoutUserInput> | OutlineCreateWithoutUserInput[] | OutlineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutlineCreateOrConnectWithoutUserInput | OutlineCreateOrConnectWithoutUserInput[]
    createMany?: OutlineCreateManyUserInputEnvelope
    connect?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProposalCreateWithoutUserInput, ProposalUncheckedCreateWithoutUserInput> | ProposalCreateWithoutUserInput[] | ProposalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutUserInput | ProposalCreateOrConnectWithoutUserInput[]
    createMany?: ProposalCreateManyUserInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type SkripsiUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SkripsiCreateWithoutUserInput, SkripsiUncheckedCreateWithoutUserInput> | SkripsiCreateWithoutUserInput[] | SkripsiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkripsiCreateOrConnectWithoutUserInput | SkripsiCreateOrConnectWithoutUserInput[]
    createMany?: SkripsiCreateManyUserInputEnvelope
    connect?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
  }

  export type ProposalPembimbingUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<ProposalPembimbingCreateWithoutDosenInput, ProposalPembimbingUncheckedCreateWithoutDosenInput> | ProposalPembimbingCreateWithoutDosenInput[] | ProposalPembimbingUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: ProposalPembimbingCreateOrConnectWithoutDosenInput | ProposalPembimbingCreateOrConnectWithoutDosenInput[]
    createMany?: ProposalPembimbingCreateManyDosenInputEnvelope
    connect?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
  }

  export type SkripsiPengujiUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<SkripsiPengujiCreateWithoutDosenInput, SkripsiPengujiUncheckedCreateWithoutDosenInput> | SkripsiPengujiCreateWithoutDosenInput[] | SkripsiPengujiUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: SkripsiPengujiCreateOrConnectWithoutDosenInput | SkripsiPengujiCreateOrConnectWithoutDosenInput[]
    createMany?: SkripsiPengujiCreateManyDosenInputEnvelope
    connect?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RoleUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    upsert?: RoleUpsertWithoutUserInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserInput, RoleUpdateWithoutUserInput>, RoleUncheckedUpdateWithoutUserInput>
  }

  export type OutlineUpdateManyWithoutUserNestedInput = {
    create?: XOR<OutlineCreateWithoutUserInput, OutlineUncheckedCreateWithoutUserInput> | OutlineCreateWithoutUserInput[] | OutlineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutlineCreateOrConnectWithoutUserInput | OutlineCreateOrConnectWithoutUserInput[]
    upsert?: OutlineUpsertWithWhereUniqueWithoutUserInput | OutlineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OutlineCreateManyUserInputEnvelope
    set?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    disconnect?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    delete?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    connect?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    update?: OutlineUpdateWithWhereUniqueWithoutUserInput | OutlineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OutlineUpdateManyWithWhereWithoutUserInput | OutlineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OutlineScalarWhereInput | OutlineScalarWhereInput[]
  }

  export type ProposalUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProposalCreateWithoutUserInput, ProposalUncheckedCreateWithoutUserInput> | ProposalCreateWithoutUserInput[] | ProposalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutUserInput | ProposalCreateOrConnectWithoutUserInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutUserInput | ProposalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProposalCreateManyUserInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutUserInput | ProposalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutUserInput | ProposalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type SkripsiUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkripsiCreateWithoutUserInput, SkripsiUncheckedCreateWithoutUserInput> | SkripsiCreateWithoutUserInput[] | SkripsiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkripsiCreateOrConnectWithoutUserInput | SkripsiCreateOrConnectWithoutUserInput[]
    upsert?: SkripsiUpsertWithWhereUniqueWithoutUserInput | SkripsiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkripsiCreateManyUserInputEnvelope
    set?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    disconnect?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    delete?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    connect?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    update?: SkripsiUpdateWithWhereUniqueWithoutUserInput | SkripsiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkripsiUpdateManyWithWhereWithoutUserInput | SkripsiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkripsiScalarWhereInput | SkripsiScalarWhereInput[]
  }

  export type ProposalPembimbingUpdateManyWithoutDosenNestedInput = {
    create?: XOR<ProposalPembimbingCreateWithoutDosenInput, ProposalPembimbingUncheckedCreateWithoutDosenInput> | ProposalPembimbingCreateWithoutDosenInput[] | ProposalPembimbingUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: ProposalPembimbingCreateOrConnectWithoutDosenInput | ProposalPembimbingCreateOrConnectWithoutDosenInput[]
    upsert?: ProposalPembimbingUpsertWithWhereUniqueWithoutDosenInput | ProposalPembimbingUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: ProposalPembimbingCreateManyDosenInputEnvelope
    set?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    disconnect?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    delete?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    connect?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    update?: ProposalPembimbingUpdateWithWhereUniqueWithoutDosenInput | ProposalPembimbingUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: ProposalPembimbingUpdateManyWithWhereWithoutDosenInput | ProposalPembimbingUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: ProposalPembimbingScalarWhereInput | ProposalPembimbingScalarWhereInput[]
  }

  export type SkripsiPengujiUpdateManyWithoutDosenNestedInput = {
    create?: XOR<SkripsiPengujiCreateWithoutDosenInput, SkripsiPengujiUncheckedCreateWithoutDosenInput> | SkripsiPengujiCreateWithoutDosenInput[] | SkripsiPengujiUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: SkripsiPengujiCreateOrConnectWithoutDosenInput | SkripsiPengujiCreateOrConnectWithoutDosenInput[]
    upsert?: SkripsiPengujiUpsertWithWhereUniqueWithoutDosenInput | SkripsiPengujiUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: SkripsiPengujiCreateManyDosenInputEnvelope
    set?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    disconnect?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    delete?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    connect?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    update?: SkripsiPengujiUpdateWithWhereUniqueWithoutDosenInput | SkripsiPengujiUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: SkripsiPengujiUpdateManyWithWhereWithoutDosenInput | SkripsiPengujiUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: SkripsiPengujiScalarWhereInput | SkripsiPengujiScalarWhereInput[]
  }

  export type OutlineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OutlineCreateWithoutUserInput, OutlineUncheckedCreateWithoutUserInput> | OutlineCreateWithoutUserInput[] | OutlineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutlineCreateOrConnectWithoutUserInput | OutlineCreateOrConnectWithoutUserInput[]
    upsert?: OutlineUpsertWithWhereUniqueWithoutUserInput | OutlineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OutlineCreateManyUserInputEnvelope
    set?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    disconnect?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    delete?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    connect?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    update?: OutlineUpdateWithWhereUniqueWithoutUserInput | OutlineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OutlineUpdateManyWithWhereWithoutUserInput | OutlineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OutlineScalarWhereInput | OutlineScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProposalCreateWithoutUserInput, ProposalUncheckedCreateWithoutUserInput> | ProposalCreateWithoutUserInput[] | ProposalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutUserInput | ProposalCreateOrConnectWithoutUserInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutUserInput | ProposalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProposalCreateManyUserInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutUserInput | ProposalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutUserInput | ProposalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type SkripsiUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkripsiCreateWithoutUserInput, SkripsiUncheckedCreateWithoutUserInput> | SkripsiCreateWithoutUserInput[] | SkripsiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkripsiCreateOrConnectWithoutUserInput | SkripsiCreateOrConnectWithoutUserInput[]
    upsert?: SkripsiUpsertWithWhereUniqueWithoutUserInput | SkripsiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkripsiCreateManyUserInputEnvelope
    set?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    disconnect?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    delete?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    connect?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    update?: SkripsiUpdateWithWhereUniqueWithoutUserInput | SkripsiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkripsiUpdateManyWithWhereWithoutUserInput | SkripsiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkripsiScalarWhereInput | SkripsiScalarWhereInput[]
  }

  export type ProposalPembimbingUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<ProposalPembimbingCreateWithoutDosenInput, ProposalPembimbingUncheckedCreateWithoutDosenInput> | ProposalPembimbingCreateWithoutDosenInput[] | ProposalPembimbingUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: ProposalPembimbingCreateOrConnectWithoutDosenInput | ProposalPembimbingCreateOrConnectWithoutDosenInput[]
    upsert?: ProposalPembimbingUpsertWithWhereUniqueWithoutDosenInput | ProposalPembimbingUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: ProposalPembimbingCreateManyDosenInputEnvelope
    set?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    disconnect?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    delete?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    connect?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    update?: ProposalPembimbingUpdateWithWhereUniqueWithoutDosenInput | ProposalPembimbingUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: ProposalPembimbingUpdateManyWithWhereWithoutDosenInput | ProposalPembimbingUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: ProposalPembimbingScalarWhereInput | ProposalPembimbingScalarWhereInput[]
  }

  export type SkripsiPengujiUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<SkripsiPengujiCreateWithoutDosenInput, SkripsiPengujiUncheckedCreateWithoutDosenInput> | SkripsiPengujiCreateWithoutDosenInput[] | SkripsiPengujiUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: SkripsiPengujiCreateOrConnectWithoutDosenInput | SkripsiPengujiCreateOrConnectWithoutDosenInput[]
    upsert?: SkripsiPengujiUpsertWithWhereUniqueWithoutDosenInput | SkripsiPengujiUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: SkripsiPengujiCreateManyDosenInputEnvelope
    set?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    disconnect?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    delete?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    connect?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    update?: SkripsiPengujiUpdateWithWhereUniqueWithoutDosenInput | SkripsiPengujiUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: SkripsiPengujiUpdateManyWithWhereWithoutDosenInput | SkripsiPengujiUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: SkripsiPengujiScalarWhereInput | SkripsiPengujiScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOutlineInput = {
    create?: XOR<UserCreateWithoutOutlineInput, UserUncheckedCreateWithoutOutlineInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutlineInput
    connect?: UserWhereUniqueInput
  }

  export type OutlineStatusCreateNestedOneWithoutOutlineInput = {
    create?: XOR<OutlineStatusCreateWithoutOutlineInput, OutlineStatusUncheckedCreateWithoutOutlineInput>
    connectOrCreate?: OutlineStatusCreateOrConnectWithoutOutlineInput
    connect?: OutlineStatusWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOutlineNestedInput = {
    create?: XOR<UserCreateWithoutOutlineInput, UserUncheckedCreateWithoutOutlineInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutlineInput
    upsert?: UserUpsertWithoutOutlineInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOutlineInput, UserUpdateWithoutOutlineInput>, UserUncheckedUpdateWithoutOutlineInput>
  }

  export type OutlineStatusUpdateOneRequiredWithoutOutlineNestedInput = {
    create?: XOR<OutlineStatusCreateWithoutOutlineInput, OutlineStatusUncheckedCreateWithoutOutlineInput>
    connectOrCreate?: OutlineStatusCreateOrConnectWithoutOutlineInput
    upsert?: OutlineStatusUpsertWithoutOutlineInput
    connect?: OutlineStatusWhereUniqueInput
    update?: XOR<XOR<OutlineStatusUpdateToOneWithWhereWithoutOutlineInput, OutlineStatusUpdateWithoutOutlineInput>, OutlineStatusUncheckedUpdateWithoutOutlineInput>
  }

  export type OutlineCreateNestedManyWithoutStatusInput = {
    create?: XOR<OutlineCreateWithoutStatusInput, OutlineUncheckedCreateWithoutStatusInput> | OutlineCreateWithoutStatusInput[] | OutlineUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: OutlineCreateOrConnectWithoutStatusInput | OutlineCreateOrConnectWithoutStatusInput[]
    createMany?: OutlineCreateManyStatusInputEnvelope
    connect?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
  }

  export type OutlineUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<OutlineCreateWithoutStatusInput, OutlineUncheckedCreateWithoutStatusInput> | OutlineCreateWithoutStatusInput[] | OutlineUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: OutlineCreateOrConnectWithoutStatusInput | OutlineCreateOrConnectWithoutStatusInput[]
    createMany?: OutlineCreateManyStatusInputEnvelope
    connect?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
  }

  export type OutlineUpdateManyWithoutStatusNestedInput = {
    create?: XOR<OutlineCreateWithoutStatusInput, OutlineUncheckedCreateWithoutStatusInput> | OutlineCreateWithoutStatusInput[] | OutlineUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: OutlineCreateOrConnectWithoutStatusInput | OutlineCreateOrConnectWithoutStatusInput[]
    upsert?: OutlineUpsertWithWhereUniqueWithoutStatusInput | OutlineUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: OutlineCreateManyStatusInputEnvelope
    set?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    disconnect?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    delete?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    connect?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    update?: OutlineUpdateWithWhereUniqueWithoutStatusInput | OutlineUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: OutlineUpdateManyWithWhereWithoutStatusInput | OutlineUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: OutlineScalarWhereInput | OutlineScalarWhereInput[]
  }

  export type OutlineUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<OutlineCreateWithoutStatusInput, OutlineUncheckedCreateWithoutStatusInput> | OutlineCreateWithoutStatusInput[] | OutlineUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: OutlineCreateOrConnectWithoutStatusInput | OutlineCreateOrConnectWithoutStatusInput[]
    upsert?: OutlineUpsertWithWhereUniqueWithoutStatusInput | OutlineUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: OutlineCreateManyStatusInputEnvelope
    set?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    disconnect?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    delete?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    connect?: OutlineWhereUniqueInput | OutlineWhereUniqueInput[]
    update?: OutlineUpdateWithWhereUniqueWithoutStatusInput | OutlineUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: OutlineUpdateManyWithWhereWithoutStatusInput | OutlineUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: OutlineScalarWhereInput | OutlineScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProposalInput = {
    create?: XOR<UserCreateWithoutProposalInput, UserUncheckedCreateWithoutProposalInput>
    connectOrCreate?: UserCreateOrConnectWithoutProposalInput
    connect?: UserWhereUniqueInput
  }

  export type ProposalStatusCreateNestedOneWithoutProposalInput = {
    create?: XOR<ProposalStatusCreateWithoutProposalInput, ProposalStatusUncheckedCreateWithoutProposalInput>
    connectOrCreate?: ProposalStatusCreateOrConnectWithoutProposalInput
    connect?: ProposalStatusWhereUniqueInput
  }

  export type ProposalPembimbingCreateNestedManyWithoutProposalInput = {
    create?: XOR<ProposalPembimbingCreateWithoutProposalInput, ProposalPembimbingUncheckedCreateWithoutProposalInput> | ProposalPembimbingCreateWithoutProposalInput[] | ProposalPembimbingUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: ProposalPembimbingCreateOrConnectWithoutProposalInput | ProposalPembimbingCreateOrConnectWithoutProposalInput[]
    createMany?: ProposalPembimbingCreateManyProposalInputEnvelope
    connect?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
  }

  export type ProposalPembimbingUncheckedCreateNestedManyWithoutProposalInput = {
    create?: XOR<ProposalPembimbingCreateWithoutProposalInput, ProposalPembimbingUncheckedCreateWithoutProposalInput> | ProposalPembimbingCreateWithoutProposalInput[] | ProposalPembimbingUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: ProposalPembimbingCreateOrConnectWithoutProposalInput | ProposalPembimbingCreateOrConnectWithoutProposalInput[]
    createMany?: ProposalPembimbingCreateManyProposalInputEnvelope
    connect?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProposalNestedInput = {
    create?: XOR<UserCreateWithoutProposalInput, UserUncheckedCreateWithoutProposalInput>
    connectOrCreate?: UserCreateOrConnectWithoutProposalInput
    upsert?: UserUpsertWithoutProposalInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProposalInput, UserUpdateWithoutProposalInput>, UserUncheckedUpdateWithoutProposalInput>
  }

  export type ProposalStatusUpdateOneRequiredWithoutProposalNestedInput = {
    create?: XOR<ProposalStatusCreateWithoutProposalInput, ProposalStatusUncheckedCreateWithoutProposalInput>
    connectOrCreate?: ProposalStatusCreateOrConnectWithoutProposalInput
    upsert?: ProposalStatusUpsertWithoutProposalInput
    connect?: ProposalStatusWhereUniqueInput
    update?: XOR<XOR<ProposalStatusUpdateToOneWithWhereWithoutProposalInput, ProposalStatusUpdateWithoutProposalInput>, ProposalStatusUncheckedUpdateWithoutProposalInput>
  }

  export type ProposalPembimbingUpdateManyWithoutProposalNestedInput = {
    create?: XOR<ProposalPembimbingCreateWithoutProposalInput, ProposalPembimbingUncheckedCreateWithoutProposalInput> | ProposalPembimbingCreateWithoutProposalInput[] | ProposalPembimbingUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: ProposalPembimbingCreateOrConnectWithoutProposalInput | ProposalPembimbingCreateOrConnectWithoutProposalInput[]
    upsert?: ProposalPembimbingUpsertWithWhereUniqueWithoutProposalInput | ProposalPembimbingUpsertWithWhereUniqueWithoutProposalInput[]
    createMany?: ProposalPembimbingCreateManyProposalInputEnvelope
    set?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    disconnect?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    delete?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    connect?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    update?: ProposalPembimbingUpdateWithWhereUniqueWithoutProposalInput | ProposalPembimbingUpdateWithWhereUniqueWithoutProposalInput[]
    updateMany?: ProposalPembimbingUpdateManyWithWhereWithoutProposalInput | ProposalPembimbingUpdateManyWithWhereWithoutProposalInput[]
    deleteMany?: ProposalPembimbingScalarWhereInput | ProposalPembimbingScalarWhereInput[]
  }

  export type ProposalPembimbingUncheckedUpdateManyWithoutProposalNestedInput = {
    create?: XOR<ProposalPembimbingCreateWithoutProposalInput, ProposalPembimbingUncheckedCreateWithoutProposalInput> | ProposalPembimbingCreateWithoutProposalInput[] | ProposalPembimbingUncheckedCreateWithoutProposalInput[]
    connectOrCreate?: ProposalPembimbingCreateOrConnectWithoutProposalInput | ProposalPembimbingCreateOrConnectWithoutProposalInput[]
    upsert?: ProposalPembimbingUpsertWithWhereUniqueWithoutProposalInput | ProposalPembimbingUpsertWithWhereUniqueWithoutProposalInput[]
    createMany?: ProposalPembimbingCreateManyProposalInputEnvelope
    set?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    disconnect?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    delete?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    connect?: ProposalPembimbingWhereUniqueInput | ProposalPembimbingWhereUniqueInput[]
    update?: ProposalPembimbingUpdateWithWhereUniqueWithoutProposalInput | ProposalPembimbingUpdateWithWhereUniqueWithoutProposalInput[]
    updateMany?: ProposalPembimbingUpdateManyWithWhereWithoutProposalInput | ProposalPembimbingUpdateManyWithWhereWithoutProposalInput[]
    deleteMany?: ProposalPembimbingScalarWhereInput | ProposalPembimbingScalarWhereInput[]
  }

  export type ProposalCreateNestedManyWithoutStatusInput = {
    create?: XOR<ProposalCreateWithoutStatusInput, ProposalUncheckedCreateWithoutStatusInput> | ProposalCreateWithoutStatusInput[] | ProposalUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutStatusInput | ProposalCreateOrConnectWithoutStatusInput[]
    createMany?: ProposalCreateManyStatusInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<ProposalCreateWithoutStatusInput, ProposalUncheckedCreateWithoutStatusInput> | ProposalCreateWithoutStatusInput[] | ProposalUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutStatusInput | ProposalCreateOrConnectWithoutStatusInput[]
    createMany?: ProposalCreateManyStatusInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ProposalUpdateManyWithoutStatusNestedInput = {
    create?: XOR<ProposalCreateWithoutStatusInput, ProposalUncheckedCreateWithoutStatusInput> | ProposalCreateWithoutStatusInput[] | ProposalUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutStatusInput | ProposalCreateOrConnectWithoutStatusInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutStatusInput | ProposalUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: ProposalCreateManyStatusInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutStatusInput | ProposalUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutStatusInput | ProposalUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<ProposalCreateWithoutStatusInput, ProposalUncheckedCreateWithoutStatusInput> | ProposalCreateWithoutStatusInput[] | ProposalUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutStatusInput | ProposalCreateOrConnectWithoutStatusInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutStatusInput | ProposalUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: ProposalCreateManyStatusInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutStatusInput | ProposalUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutStatusInput | ProposalUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ProposalCreateNestedOneWithoutDosenPembimbingInput = {
    create?: XOR<ProposalCreateWithoutDosenPembimbingInput, ProposalUncheckedCreateWithoutDosenPembimbingInput>
    connectOrCreate?: ProposalCreateOrConnectWithoutDosenPembimbingInput
    connect?: ProposalWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProposalPembimbingInput = {
    create?: XOR<UserCreateWithoutProposalPembimbingInput, UserUncheckedCreateWithoutProposalPembimbingInput>
    connectOrCreate?: UserCreateOrConnectWithoutProposalPembimbingInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProposalUpdateOneRequiredWithoutDosenPembimbingNestedInput = {
    create?: XOR<ProposalCreateWithoutDosenPembimbingInput, ProposalUncheckedCreateWithoutDosenPembimbingInput>
    connectOrCreate?: ProposalCreateOrConnectWithoutDosenPembimbingInput
    upsert?: ProposalUpsertWithoutDosenPembimbingInput
    connect?: ProposalWhereUniqueInput
    update?: XOR<XOR<ProposalUpdateToOneWithWhereWithoutDosenPembimbingInput, ProposalUpdateWithoutDosenPembimbingInput>, ProposalUncheckedUpdateWithoutDosenPembimbingInput>
  }

  export type UserUpdateOneRequiredWithoutProposalPembimbingNestedInput = {
    create?: XOR<UserCreateWithoutProposalPembimbingInput, UserUncheckedCreateWithoutProposalPembimbingInput>
    connectOrCreate?: UserCreateOrConnectWithoutProposalPembimbingInput
    upsert?: UserUpsertWithoutProposalPembimbingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProposalPembimbingInput, UserUpdateWithoutProposalPembimbingInput>, UserUncheckedUpdateWithoutProposalPembimbingInput>
  }

  export type UserCreateNestedOneWithoutSkripsiInput = {
    create?: XOR<UserCreateWithoutSkripsiInput, UserUncheckedCreateWithoutSkripsiInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkripsiInput
    connect?: UserWhereUniqueInput
  }

  export type SkripsiStatusCreateNestedOneWithoutSkripsiInput = {
    create?: XOR<SkripsiStatusCreateWithoutSkripsiInput, SkripsiStatusUncheckedCreateWithoutSkripsiInput>
    connectOrCreate?: SkripsiStatusCreateOrConnectWithoutSkripsiInput
    connect?: SkripsiStatusWhereUniqueInput
  }

  export type SkripsiPengujiCreateNestedManyWithoutSkripsiInput = {
    create?: XOR<SkripsiPengujiCreateWithoutSkripsiInput, SkripsiPengujiUncheckedCreateWithoutSkripsiInput> | SkripsiPengujiCreateWithoutSkripsiInput[] | SkripsiPengujiUncheckedCreateWithoutSkripsiInput[]
    connectOrCreate?: SkripsiPengujiCreateOrConnectWithoutSkripsiInput | SkripsiPengujiCreateOrConnectWithoutSkripsiInput[]
    createMany?: SkripsiPengujiCreateManySkripsiInputEnvelope
    connect?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
  }

  export type SkripsiPengujiUncheckedCreateNestedManyWithoutSkripsiInput = {
    create?: XOR<SkripsiPengujiCreateWithoutSkripsiInput, SkripsiPengujiUncheckedCreateWithoutSkripsiInput> | SkripsiPengujiCreateWithoutSkripsiInput[] | SkripsiPengujiUncheckedCreateWithoutSkripsiInput[]
    connectOrCreate?: SkripsiPengujiCreateOrConnectWithoutSkripsiInput | SkripsiPengujiCreateOrConnectWithoutSkripsiInput[]
    createMany?: SkripsiPengujiCreateManySkripsiInputEnvelope
    connect?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSkripsiNestedInput = {
    create?: XOR<UserCreateWithoutSkripsiInput, UserUncheckedCreateWithoutSkripsiInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkripsiInput
    upsert?: UserUpsertWithoutSkripsiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkripsiInput, UserUpdateWithoutSkripsiInput>, UserUncheckedUpdateWithoutSkripsiInput>
  }

  export type SkripsiStatusUpdateOneRequiredWithoutSkripsiNestedInput = {
    create?: XOR<SkripsiStatusCreateWithoutSkripsiInput, SkripsiStatusUncheckedCreateWithoutSkripsiInput>
    connectOrCreate?: SkripsiStatusCreateOrConnectWithoutSkripsiInput
    upsert?: SkripsiStatusUpsertWithoutSkripsiInput
    connect?: SkripsiStatusWhereUniqueInput
    update?: XOR<XOR<SkripsiStatusUpdateToOneWithWhereWithoutSkripsiInput, SkripsiStatusUpdateWithoutSkripsiInput>, SkripsiStatusUncheckedUpdateWithoutSkripsiInput>
  }

  export type SkripsiPengujiUpdateManyWithoutSkripsiNestedInput = {
    create?: XOR<SkripsiPengujiCreateWithoutSkripsiInput, SkripsiPengujiUncheckedCreateWithoutSkripsiInput> | SkripsiPengujiCreateWithoutSkripsiInput[] | SkripsiPengujiUncheckedCreateWithoutSkripsiInput[]
    connectOrCreate?: SkripsiPengujiCreateOrConnectWithoutSkripsiInput | SkripsiPengujiCreateOrConnectWithoutSkripsiInput[]
    upsert?: SkripsiPengujiUpsertWithWhereUniqueWithoutSkripsiInput | SkripsiPengujiUpsertWithWhereUniqueWithoutSkripsiInput[]
    createMany?: SkripsiPengujiCreateManySkripsiInputEnvelope
    set?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    disconnect?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    delete?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    connect?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    update?: SkripsiPengujiUpdateWithWhereUniqueWithoutSkripsiInput | SkripsiPengujiUpdateWithWhereUniqueWithoutSkripsiInput[]
    updateMany?: SkripsiPengujiUpdateManyWithWhereWithoutSkripsiInput | SkripsiPengujiUpdateManyWithWhereWithoutSkripsiInput[]
    deleteMany?: SkripsiPengujiScalarWhereInput | SkripsiPengujiScalarWhereInput[]
  }

  export type SkripsiPengujiUncheckedUpdateManyWithoutSkripsiNestedInput = {
    create?: XOR<SkripsiPengujiCreateWithoutSkripsiInput, SkripsiPengujiUncheckedCreateWithoutSkripsiInput> | SkripsiPengujiCreateWithoutSkripsiInput[] | SkripsiPengujiUncheckedCreateWithoutSkripsiInput[]
    connectOrCreate?: SkripsiPengujiCreateOrConnectWithoutSkripsiInput | SkripsiPengujiCreateOrConnectWithoutSkripsiInput[]
    upsert?: SkripsiPengujiUpsertWithWhereUniqueWithoutSkripsiInput | SkripsiPengujiUpsertWithWhereUniqueWithoutSkripsiInput[]
    createMany?: SkripsiPengujiCreateManySkripsiInputEnvelope
    set?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    disconnect?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    delete?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    connect?: SkripsiPengujiWhereUniqueInput | SkripsiPengujiWhereUniqueInput[]
    update?: SkripsiPengujiUpdateWithWhereUniqueWithoutSkripsiInput | SkripsiPengujiUpdateWithWhereUniqueWithoutSkripsiInput[]
    updateMany?: SkripsiPengujiUpdateManyWithWhereWithoutSkripsiInput | SkripsiPengujiUpdateManyWithWhereWithoutSkripsiInput[]
    deleteMany?: SkripsiPengujiScalarWhereInput | SkripsiPengujiScalarWhereInput[]
  }

  export type SkripsiCreateNestedManyWithoutStatusInput = {
    create?: XOR<SkripsiCreateWithoutStatusInput, SkripsiUncheckedCreateWithoutStatusInput> | SkripsiCreateWithoutStatusInput[] | SkripsiUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: SkripsiCreateOrConnectWithoutStatusInput | SkripsiCreateOrConnectWithoutStatusInput[]
    createMany?: SkripsiCreateManyStatusInputEnvelope
    connect?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
  }

  export type SkripsiUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<SkripsiCreateWithoutStatusInput, SkripsiUncheckedCreateWithoutStatusInput> | SkripsiCreateWithoutStatusInput[] | SkripsiUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: SkripsiCreateOrConnectWithoutStatusInput | SkripsiCreateOrConnectWithoutStatusInput[]
    createMany?: SkripsiCreateManyStatusInputEnvelope
    connect?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
  }

  export type SkripsiUpdateManyWithoutStatusNestedInput = {
    create?: XOR<SkripsiCreateWithoutStatusInput, SkripsiUncheckedCreateWithoutStatusInput> | SkripsiCreateWithoutStatusInput[] | SkripsiUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: SkripsiCreateOrConnectWithoutStatusInput | SkripsiCreateOrConnectWithoutStatusInput[]
    upsert?: SkripsiUpsertWithWhereUniqueWithoutStatusInput | SkripsiUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: SkripsiCreateManyStatusInputEnvelope
    set?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    disconnect?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    delete?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    connect?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    update?: SkripsiUpdateWithWhereUniqueWithoutStatusInput | SkripsiUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: SkripsiUpdateManyWithWhereWithoutStatusInput | SkripsiUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: SkripsiScalarWhereInput | SkripsiScalarWhereInput[]
  }

  export type SkripsiUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<SkripsiCreateWithoutStatusInput, SkripsiUncheckedCreateWithoutStatusInput> | SkripsiCreateWithoutStatusInput[] | SkripsiUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: SkripsiCreateOrConnectWithoutStatusInput | SkripsiCreateOrConnectWithoutStatusInput[]
    upsert?: SkripsiUpsertWithWhereUniqueWithoutStatusInput | SkripsiUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: SkripsiCreateManyStatusInputEnvelope
    set?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    disconnect?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    delete?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    connect?: SkripsiWhereUniqueInput | SkripsiWhereUniqueInput[]
    update?: SkripsiUpdateWithWhereUniqueWithoutStatusInput | SkripsiUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: SkripsiUpdateManyWithWhereWithoutStatusInput | SkripsiUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: SkripsiScalarWhereInput | SkripsiScalarWhereInput[]
  }

  export type SkripsiCreateNestedOneWithoutPengujiInput = {
    create?: XOR<SkripsiCreateWithoutPengujiInput, SkripsiUncheckedCreateWithoutPengujiInput>
    connectOrCreate?: SkripsiCreateOrConnectWithoutPengujiInput
    connect?: SkripsiWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSkripsiPengujiInput = {
    create?: XOR<UserCreateWithoutSkripsiPengujiInput, UserUncheckedCreateWithoutSkripsiPengujiInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkripsiPengujiInput
    connect?: UserWhereUniqueInput
  }

  export type SkripsiUpdateOneRequiredWithoutPengujiNestedInput = {
    create?: XOR<SkripsiCreateWithoutPengujiInput, SkripsiUncheckedCreateWithoutPengujiInput>
    connectOrCreate?: SkripsiCreateOrConnectWithoutPengujiInput
    upsert?: SkripsiUpsertWithoutPengujiInput
    connect?: SkripsiWhereUniqueInput
    update?: XOR<XOR<SkripsiUpdateToOneWithWhereWithoutPengujiInput, SkripsiUpdateWithoutPengujiInput>, SkripsiUncheckedUpdateWithoutPengujiInput>
  }

  export type UserUpdateOneRequiredWithoutSkripsiPengujiNestedInput = {
    create?: XOR<UserCreateWithoutSkripsiPengujiInput, UserUncheckedCreateWithoutSkripsiPengujiInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkripsiPengujiInput
    upsert?: UserUpsertWithoutSkripsiPengujiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkripsiPengujiInput, UserUpdateWithoutSkripsiPengujiInput>, UserUncheckedUpdateWithoutSkripsiPengujiInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    nama: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
    outline?: OutlineCreateNestedManyWithoutUserInput
    proposal?: ProposalCreateNestedManyWithoutUserInput
    skripsi?: SkripsiCreateNestedManyWithoutUserInput
    proposalPembimbing?: ProposalPembimbingCreateNestedManyWithoutDosenInput
    skripsiPenguji?: SkripsiPengujiCreateNestedManyWithoutDosenInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    nama: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
    outline?: OutlineUncheckedCreateNestedManyWithoutUserInput
    proposal?: ProposalUncheckedCreateNestedManyWithoutUserInput
    skripsi?: SkripsiUncheckedCreateNestedManyWithoutUserInput
    proposalPembimbing?: ProposalPembimbingUncheckedCreateNestedManyWithoutDosenInput
    skripsiPenguji?: SkripsiPengujiUncheckedCreateNestedManyWithoutDosenInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    nama?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    foto?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    token?: StringNullableFilter<"User"> | string | null
  }

  export type RoleCreateWithoutUserInput = {
    id?: string
    nama: string
  }

  export type RoleUncheckedCreateWithoutUserInput = {
    id?: string
    nama: string
  }

  export type RoleCreateOrConnectWithoutUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
  }

  export type OutlineCreateWithoutUserInput = {
    id?: string
    file: string
    status: OutlineStatusCreateNestedOneWithoutOutlineInput
  }

  export type OutlineUncheckedCreateWithoutUserInput = {
    id?: string
    file: string
    statusId: string
  }

  export type OutlineCreateOrConnectWithoutUserInput = {
    where: OutlineWhereUniqueInput
    create: XOR<OutlineCreateWithoutUserInput, OutlineUncheckedCreateWithoutUserInput>
  }

  export type OutlineCreateManyUserInputEnvelope = {
    data: OutlineCreateManyUserInput | OutlineCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProposalCreateWithoutUserInput = {
    id?: string
    file: string
    status: ProposalStatusCreateNestedOneWithoutProposalInput
    dosenPembimbing?: ProposalPembimbingCreateNestedManyWithoutProposalInput
  }

  export type ProposalUncheckedCreateWithoutUserInput = {
    id?: string
    file: string
    statusId: string
    dosenPembimbing?: ProposalPembimbingUncheckedCreateNestedManyWithoutProposalInput
  }

  export type ProposalCreateOrConnectWithoutUserInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutUserInput, ProposalUncheckedCreateWithoutUserInput>
  }

  export type ProposalCreateManyUserInputEnvelope = {
    data: ProposalCreateManyUserInput | ProposalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SkripsiCreateWithoutUserInput = {
    id?: string
    file: string
    pembimbingSetuju?: boolean
    status: SkripsiStatusCreateNestedOneWithoutSkripsiInput
    penguji?: SkripsiPengujiCreateNestedManyWithoutSkripsiInput
  }

  export type SkripsiUncheckedCreateWithoutUserInput = {
    id?: string
    file: string
    statusId: string
    pembimbingSetuju?: boolean
    penguji?: SkripsiPengujiUncheckedCreateNestedManyWithoutSkripsiInput
  }

  export type SkripsiCreateOrConnectWithoutUserInput = {
    where: SkripsiWhereUniqueInput
    create: XOR<SkripsiCreateWithoutUserInput, SkripsiUncheckedCreateWithoutUserInput>
  }

  export type SkripsiCreateManyUserInputEnvelope = {
    data: SkripsiCreateManyUserInput | SkripsiCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProposalPembimbingCreateWithoutDosenInput = {
    id?: string
    setuju?: boolean
    proposal: ProposalCreateNestedOneWithoutDosenPembimbingInput
  }

  export type ProposalPembimbingUncheckedCreateWithoutDosenInput = {
    id?: string
    proposalId: string
    setuju?: boolean
  }

  export type ProposalPembimbingCreateOrConnectWithoutDosenInput = {
    where: ProposalPembimbingWhereUniqueInput
    create: XOR<ProposalPembimbingCreateWithoutDosenInput, ProposalPembimbingUncheckedCreateWithoutDosenInput>
  }

  export type ProposalPembimbingCreateManyDosenInputEnvelope = {
    data: ProposalPembimbingCreateManyDosenInput | ProposalPembimbingCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type SkripsiPengujiCreateWithoutDosenInput = {
    id?: string
    revisi?: string | null
    setuju?: boolean
    skripsi: SkripsiCreateNestedOneWithoutPengujiInput
  }

  export type SkripsiPengujiUncheckedCreateWithoutDosenInput = {
    id?: string
    skripsiId: string
    revisi?: string | null
    setuju?: boolean
  }

  export type SkripsiPengujiCreateOrConnectWithoutDosenInput = {
    where: SkripsiPengujiWhereUniqueInput
    create: XOR<SkripsiPengujiCreateWithoutDosenInput, SkripsiPengujiUncheckedCreateWithoutDosenInput>
  }

  export type SkripsiPengujiCreateManyDosenInputEnvelope = {
    data: SkripsiPengujiCreateManyDosenInput | SkripsiPengujiCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUserInput = {
    update: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type OutlineUpsertWithWhereUniqueWithoutUserInput = {
    where: OutlineWhereUniqueInput
    update: XOR<OutlineUpdateWithoutUserInput, OutlineUncheckedUpdateWithoutUserInput>
    create: XOR<OutlineCreateWithoutUserInput, OutlineUncheckedCreateWithoutUserInput>
  }

  export type OutlineUpdateWithWhereUniqueWithoutUserInput = {
    where: OutlineWhereUniqueInput
    data: XOR<OutlineUpdateWithoutUserInput, OutlineUncheckedUpdateWithoutUserInput>
  }

  export type OutlineUpdateManyWithWhereWithoutUserInput = {
    where: OutlineScalarWhereInput
    data: XOR<OutlineUpdateManyMutationInput, OutlineUncheckedUpdateManyWithoutUserInput>
  }

  export type OutlineScalarWhereInput = {
    AND?: OutlineScalarWhereInput | OutlineScalarWhereInput[]
    OR?: OutlineScalarWhereInput[]
    NOT?: OutlineScalarWhereInput | OutlineScalarWhereInput[]
    id?: StringFilter<"Outline"> | string
    userId?: StringFilter<"Outline"> | string
    file?: StringFilter<"Outline"> | string
    statusId?: StringFilter<"Outline"> | string
  }

  export type ProposalUpsertWithWhereUniqueWithoutUserInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutUserInput, ProposalUncheckedUpdateWithoutUserInput>
    create: XOR<ProposalCreateWithoutUserInput, ProposalUncheckedCreateWithoutUserInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutUserInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutUserInput, ProposalUncheckedUpdateWithoutUserInput>
  }

  export type ProposalUpdateManyWithWhereWithoutUserInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutUserInput>
  }

  export type ProposalScalarWhereInput = {
    AND?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    OR?: ProposalScalarWhereInput[]
    NOT?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    id?: StringFilter<"Proposal"> | string
    userId?: StringFilter<"Proposal"> | string
    file?: StringFilter<"Proposal"> | string
    statusId?: StringFilter<"Proposal"> | string
  }

  export type SkripsiUpsertWithWhereUniqueWithoutUserInput = {
    where: SkripsiWhereUniqueInput
    update: XOR<SkripsiUpdateWithoutUserInput, SkripsiUncheckedUpdateWithoutUserInput>
    create: XOR<SkripsiCreateWithoutUserInput, SkripsiUncheckedCreateWithoutUserInput>
  }

  export type SkripsiUpdateWithWhereUniqueWithoutUserInput = {
    where: SkripsiWhereUniqueInput
    data: XOR<SkripsiUpdateWithoutUserInput, SkripsiUncheckedUpdateWithoutUserInput>
  }

  export type SkripsiUpdateManyWithWhereWithoutUserInput = {
    where: SkripsiScalarWhereInput
    data: XOR<SkripsiUpdateManyMutationInput, SkripsiUncheckedUpdateManyWithoutUserInput>
  }

  export type SkripsiScalarWhereInput = {
    AND?: SkripsiScalarWhereInput | SkripsiScalarWhereInput[]
    OR?: SkripsiScalarWhereInput[]
    NOT?: SkripsiScalarWhereInput | SkripsiScalarWhereInput[]
    id?: StringFilter<"Skripsi"> | string
    userId?: StringFilter<"Skripsi"> | string
    file?: StringFilter<"Skripsi"> | string
    statusId?: StringFilter<"Skripsi"> | string
    pembimbingSetuju?: BoolFilter<"Skripsi"> | boolean
  }

  export type ProposalPembimbingUpsertWithWhereUniqueWithoutDosenInput = {
    where: ProposalPembimbingWhereUniqueInput
    update: XOR<ProposalPembimbingUpdateWithoutDosenInput, ProposalPembimbingUncheckedUpdateWithoutDosenInput>
    create: XOR<ProposalPembimbingCreateWithoutDosenInput, ProposalPembimbingUncheckedCreateWithoutDosenInput>
  }

  export type ProposalPembimbingUpdateWithWhereUniqueWithoutDosenInput = {
    where: ProposalPembimbingWhereUniqueInput
    data: XOR<ProposalPembimbingUpdateWithoutDosenInput, ProposalPembimbingUncheckedUpdateWithoutDosenInput>
  }

  export type ProposalPembimbingUpdateManyWithWhereWithoutDosenInput = {
    where: ProposalPembimbingScalarWhereInput
    data: XOR<ProposalPembimbingUpdateManyMutationInput, ProposalPembimbingUncheckedUpdateManyWithoutDosenInput>
  }

  export type ProposalPembimbingScalarWhereInput = {
    AND?: ProposalPembimbingScalarWhereInput | ProposalPembimbingScalarWhereInput[]
    OR?: ProposalPembimbingScalarWhereInput[]
    NOT?: ProposalPembimbingScalarWhereInput | ProposalPembimbingScalarWhereInput[]
    id?: StringFilter<"ProposalPembimbing"> | string
    proposalId?: StringFilter<"ProposalPembimbing"> | string
    userId?: StringFilter<"ProposalPembimbing"> | string
    setuju?: BoolFilter<"ProposalPembimbing"> | boolean
  }

  export type SkripsiPengujiUpsertWithWhereUniqueWithoutDosenInput = {
    where: SkripsiPengujiWhereUniqueInput
    update: XOR<SkripsiPengujiUpdateWithoutDosenInput, SkripsiPengujiUncheckedUpdateWithoutDosenInput>
    create: XOR<SkripsiPengujiCreateWithoutDosenInput, SkripsiPengujiUncheckedCreateWithoutDosenInput>
  }

  export type SkripsiPengujiUpdateWithWhereUniqueWithoutDosenInput = {
    where: SkripsiPengujiWhereUniqueInput
    data: XOR<SkripsiPengujiUpdateWithoutDosenInput, SkripsiPengujiUncheckedUpdateWithoutDosenInput>
  }

  export type SkripsiPengujiUpdateManyWithWhereWithoutDosenInput = {
    where: SkripsiPengujiScalarWhereInput
    data: XOR<SkripsiPengujiUpdateManyMutationInput, SkripsiPengujiUncheckedUpdateManyWithoutDosenInput>
  }

  export type SkripsiPengujiScalarWhereInput = {
    AND?: SkripsiPengujiScalarWhereInput | SkripsiPengujiScalarWhereInput[]
    OR?: SkripsiPengujiScalarWhereInput[]
    NOT?: SkripsiPengujiScalarWhereInput | SkripsiPengujiScalarWhereInput[]
    id?: StringFilter<"SkripsiPenguji"> | string
    skripsiId?: StringFilter<"SkripsiPenguji"> | string
    userId?: StringFilter<"SkripsiPenguji"> | string
    revisi?: StringNullableFilter<"SkripsiPenguji"> | string | null
    setuju?: BoolFilter<"SkripsiPenguji"> | boolean
  }

  export type UserCreateWithoutOutlineInput = {
    id?: string
    nama: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
    role: RoleCreateNestedOneWithoutUserInput
    proposal?: ProposalCreateNestedManyWithoutUserInput
    skripsi?: SkripsiCreateNestedManyWithoutUserInput
    proposalPembimbing?: ProposalPembimbingCreateNestedManyWithoutDosenInput
    skripsiPenguji?: SkripsiPengujiCreateNestedManyWithoutDosenInput
  }

  export type UserUncheckedCreateWithoutOutlineInput = {
    id?: string
    nama: string
    roleId: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
    proposal?: ProposalUncheckedCreateNestedManyWithoutUserInput
    skripsi?: SkripsiUncheckedCreateNestedManyWithoutUserInput
    proposalPembimbing?: ProposalPembimbingUncheckedCreateNestedManyWithoutDosenInput
    skripsiPenguji?: SkripsiPengujiUncheckedCreateNestedManyWithoutDosenInput
  }

  export type UserCreateOrConnectWithoutOutlineInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOutlineInput, UserUncheckedCreateWithoutOutlineInput>
  }

  export type OutlineStatusCreateWithoutOutlineInput = {
    id?: string
    nama: string
  }

  export type OutlineStatusUncheckedCreateWithoutOutlineInput = {
    id?: string
    nama: string
  }

  export type OutlineStatusCreateOrConnectWithoutOutlineInput = {
    where: OutlineStatusWhereUniqueInput
    create: XOR<OutlineStatusCreateWithoutOutlineInput, OutlineStatusUncheckedCreateWithoutOutlineInput>
  }

  export type UserUpsertWithoutOutlineInput = {
    update: XOR<UserUpdateWithoutOutlineInput, UserUncheckedUpdateWithoutOutlineInput>
    create: XOR<UserCreateWithoutOutlineInput, UserUncheckedCreateWithoutOutlineInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOutlineInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOutlineInput, UserUncheckedUpdateWithoutOutlineInput>
  }

  export type UserUpdateWithoutOutlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    proposal?: ProposalUpdateManyWithoutUserNestedInput
    skripsi?: SkripsiUpdateManyWithoutUserNestedInput
    proposalPembimbing?: ProposalPembimbingUpdateManyWithoutDosenNestedInput
    skripsiPenguji?: SkripsiPengujiUpdateManyWithoutDosenNestedInput
  }

  export type UserUncheckedUpdateWithoutOutlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    proposal?: ProposalUncheckedUpdateManyWithoutUserNestedInput
    skripsi?: SkripsiUncheckedUpdateManyWithoutUserNestedInput
    proposalPembimbing?: ProposalPembimbingUncheckedUpdateManyWithoutDosenNestedInput
    skripsiPenguji?: SkripsiPengujiUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type OutlineStatusUpsertWithoutOutlineInput = {
    update: XOR<OutlineStatusUpdateWithoutOutlineInput, OutlineStatusUncheckedUpdateWithoutOutlineInput>
    create: XOR<OutlineStatusCreateWithoutOutlineInput, OutlineStatusUncheckedCreateWithoutOutlineInput>
    where?: OutlineStatusWhereInput
  }

  export type OutlineStatusUpdateToOneWithWhereWithoutOutlineInput = {
    where?: OutlineStatusWhereInput
    data: XOR<OutlineStatusUpdateWithoutOutlineInput, OutlineStatusUncheckedUpdateWithoutOutlineInput>
  }

  export type OutlineStatusUpdateWithoutOutlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type OutlineStatusUncheckedUpdateWithoutOutlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type OutlineCreateWithoutStatusInput = {
    id?: string
    file: string
    user: UserCreateNestedOneWithoutOutlineInput
  }

  export type OutlineUncheckedCreateWithoutStatusInput = {
    id?: string
    userId: string
    file: string
  }

  export type OutlineCreateOrConnectWithoutStatusInput = {
    where: OutlineWhereUniqueInput
    create: XOR<OutlineCreateWithoutStatusInput, OutlineUncheckedCreateWithoutStatusInput>
  }

  export type OutlineCreateManyStatusInputEnvelope = {
    data: OutlineCreateManyStatusInput | OutlineCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type OutlineUpsertWithWhereUniqueWithoutStatusInput = {
    where: OutlineWhereUniqueInput
    update: XOR<OutlineUpdateWithoutStatusInput, OutlineUncheckedUpdateWithoutStatusInput>
    create: XOR<OutlineCreateWithoutStatusInput, OutlineUncheckedCreateWithoutStatusInput>
  }

  export type OutlineUpdateWithWhereUniqueWithoutStatusInput = {
    where: OutlineWhereUniqueInput
    data: XOR<OutlineUpdateWithoutStatusInput, OutlineUncheckedUpdateWithoutStatusInput>
  }

  export type OutlineUpdateManyWithWhereWithoutStatusInput = {
    where: OutlineScalarWhereInput
    data: XOR<OutlineUpdateManyMutationInput, OutlineUncheckedUpdateManyWithoutStatusInput>
  }

  export type UserCreateWithoutProposalInput = {
    id?: string
    nama: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
    role: RoleCreateNestedOneWithoutUserInput
    outline?: OutlineCreateNestedManyWithoutUserInput
    skripsi?: SkripsiCreateNestedManyWithoutUserInput
    proposalPembimbing?: ProposalPembimbingCreateNestedManyWithoutDosenInput
    skripsiPenguji?: SkripsiPengujiCreateNestedManyWithoutDosenInput
  }

  export type UserUncheckedCreateWithoutProposalInput = {
    id?: string
    nama: string
    roleId: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
    outline?: OutlineUncheckedCreateNestedManyWithoutUserInput
    skripsi?: SkripsiUncheckedCreateNestedManyWithoutUserInput
    proposalPembimbing?: ProposalPembimbingUncheckedCreateNestedManyWithoutDosenInput
    skripsiPenguji?: SkripsiPengujiUncheckedCreateNestedManyWithoutDosenInput
  }

  export type UserCreateOrConnectWithoutProposalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProposalInput, UserUncheckedCreateWithoutProposalInput>
  }

  export type ProposalStatusCreateWithoutProposalInput = {
    id?: string
    nama: string
  }

  export type ProposalStatusUncheckedCreateWithoutProposalInput = {
    id?: string
    nama: string
  }

  export type ProposalStatusCreateOrConnectWithoutProposalInput = {
    where: ProposalStatusWhereUniqueInput
    create: XOR<ProposalStatusCreateWithoutProposalInput, ProposalStatusUncheckedCreateWithoutProposalInput>
  }

  export type ProposalPembimbingCreateWithoutProposalInput = {
    id?: string
    setuju?: boolean
    dosen: UserCreateNestedOneWithoutProposalPembimbingInput
  }

  export type ProposalPembimbingUncheckedCreateWithoutProposalInput = {
    id?: string
    userId: string
    setuju?: boolean
  }

  export type ProposalPembimbingCreateOrConnectWithoutProposalInput = {
    where: ProposalPembimbingWhereUniqueInput
    create: XOR<ProposalPembimbingCreateWithoutProposalInput, ProposalPembimbingUncheckedCreateWithoutProposalInput>
  }

  export type ProposalPembimbingCreateManyProposalInputEnvelope = {
    data: ProposalPembimbingCreateManyProposalInput | ProposalPembimbingCreateManyProposalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProposalInput = {
    update: XOR<UserUpdateWithoutProposalInput, UserUncheckedUpdateWithoutProposalInput>
    create: XOR<UserCreateWithoutProposalInput, UserUncheckedCreateWithoutProposalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProposalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProposalInput, UserUncheckedUpdateWithoutProposalInput>
  }

  export type UserUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    outline?: OutlineUpdateManyWithoutUserNestedInput
    skripsi?: SkripsiUpdateManyWithoutUserNestedInput
    proposalPembimbing?: ProposalPembimbingUpdateManyWithoutDosenNestedInput
    skripsiPenguji?: SkripsiPengujiUpdateManyWithoutDosenNestedInput
  }

  export type UserUncheckedUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    outline?: OutlineUncheckedUpdateManyWithoutUserNestedInput
    skripsi?: SkripsiUncheckedUpdateManyWithoutUserNestedInput
    proposalPembimbing?: ProposalPembimbingUncheckedUpdateManyWithoutDosenNestedInput
    skripsiPenguji?: SkripsiPengujiUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type ProposalStatusUpsertWithoutProposalInput = {
    update: XOR<ProposalStatusUpdateWithoutProposalInput, ProposalStatusUncheckedUpdateWithoutProposalInput>
    create: XOR<ProposalStatusCreateWithoutProposalInput, ProposalStatusUncheckedCreateWithoutProposalInput>
    where?: ProposalStatusWhereInput
  }

  export type ProposalStatusUpdateToOneWithWhereWithoutProposalInput = {
    where?: ProposalStatusWhereInput
    data: XOR<ProposalStatusUpdateWithoutProposalInput, ProposalStatusUncheckedUpdateWithoutProposalInput>
  }

  export type ProposalStatusUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalStatusUncheckedUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalPembimbingUpsertWithWhereUniqueWithoutProposalInput = {
    where: ProposalPembimbingWhereUniqueInput
    update: XOR<ProposalPembimbingUpdateWithoutProposalInput, ProposalPembimbingUncheckedUpdateWithoutProposalInput>
    create: XOR<ProposalPembimbingCreateWithoutProposalInput, ProposalPembimbingUncheckedCreateWithoutProposalInput>
  }

  export type ProposalPembimbingUpdateWithWhereUniqueWithoutProposalInput = {
    where: ProposalPembimbingWhereUniqueInput
    data: XOR<ProposalPembimbingUpdateWithoutProposalInput, ProposalPembimbingUncheckedUpdateWithoutProposalInput>
  }

  export type ProposalPembimbingUpdateManyWithWhereWithoutProposalInput = {
    where: ProposalPembimbingScalarWhereInput
    data: XOR<ProposalPembimbingUpdateManyMutationInput, ProposalPembimbingUncheckedUpdateManyWithoutProposalInput>
  }

  export type ProposalCreateWithoutStatusInput = {
    id?: string
    file: string
    user: UserCreateNestedOneWithoutProposalInput
    dosenPembimbing?: ProposalPembimbingCreateNestedManyWithoutProposalInput
  }

  export type ProposalUncheckedCreateWithoutStatusInput = {
    id?: string
    userId: string
    file: string
    dosenPembimbing?: ProposalPembimbingUncheckedCreateNestedManyWithoutProposalInput
  }

  export type ProposalCreateOrConnectWithoutStatusInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutStatusInput, ProposalUncheckedCreateWithoutStatusInput>
  }

  export type ProposalCreateManyStatusInputEnvelope = {
    data: ProposalCreateManyStatusInput | ProposalCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type ProposalUpsertWithWhereUniqueWithoutStatusInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutStatusInput, ProposalUncheckedUpdateWithoutStatusInput>
    create: XOR<ProposalCreateWithoutStatusInput, ProposalUncheckedCreateWithoutStatusInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutStatusInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutStatusInput, ProposalUncheckedUpdateWithoutStatusInput>
  }

  export type ProposalUpdateManyWithWhereWithoutStatusInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutStatusInput>
  }

  export type ProposalCreateWithoutDosenPembimbingInput = {
    id?: string
    file: string
    user: UserCreateNestedOneWithoutProposalInput
    status: ProposalStatusCreateNestedOneWithoutProposalInput
  }

  export type ProposalUncheckedCreateWithoutDosenPembimbingInput = {
    id?: string
    userId: string
    file: string
    statusId: string
  }

  export type ProposalCreateOrConnectWithoutDosenPembimbingInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutDosenPembimbingInput, ProposalUncheckedCreateWithoutDosenPembimbingInput>
  }

  export type UserCreateWithoutProposalPembimbingInput = {
    id?: string
    nama: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
    role: RoleCreateNestedOneWithoutUserInput
    outline?: OutlineCreateNestedManyWithoutUserInput
    proposal?: ProposalCreateNestedManyWithoutUserInput
    skripsi?: SkripsiCreateNestedManyWithoutUserInput
    skripsiPenguji?: SkripsiPengujiCreateNestedManyWithoutDosenInput
  }

  export type UserUncheckedCreateWithoutProposalPembimbingInput = {
    id?: string
    nama: string
    roleId: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
    outline?: OutlineUncheckedCreateNestedManyWithoutUserInput
    proposal?: ProposalUncheckedCreateNestedManyWithoutUserInput
    skripsi?: SkripsiUncheckedCreateNestedManyWithoutUserInput
    skripsiPenguji?: SkripsiPengujiUncheckedCreateNestedManyWithoutDosenInput
  }

  export type UserCreateOrConnectWithoutProposalPembimbingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProposalPembimbingInput, UserUncheckedCreateWithoutProposalPembimbingInput>
  }

  export type ProposalUpsertWithoutDosenPembimbingInput = {
    update: XOR<ProposalUpdateWithoutDosenPembimbingInput, ProposalUncheckedUpdateWithoutDosenPembimbingInput>
    create: XOR<ProposalCreateWithoutDosenPembimbingInput, ProposalUncheckedCreateWithoutDosenPembimbingInput>
    where?: ProposalWhereInput
  }

  export type ProposalUpdateToOneWithWhereWithoutDosenPembimbingInput = {
    where?: ProposalWhereInput
    data: XOR<ProposalUpdateWithoutDosenPembimbingInput, ProposalUncheckedUpdateWithoutDosenPembimbingInput>
  }

  export type ProposalUpdateWithoutDosenPembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProposalNestedInput
    status?: ProposalStatusUpdateOneRequiredWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutDosenPembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutProposalPembimbingInput = {
    update: XOR<UserUpdateWithoutProposalPembimbingInput, UserUncheckedUpdateWithoutProposalPembimbingInput>
    create: XOR<UserCreateWithoutProposalPembimbingInput, UserUncheckedCreateWithoutProposalPembimbingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProposalPembimbingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProposalPembimbingInput, UserUncheckedUpdateWithoutProposalPembimbingInput>
  }

  export type UserUpdateWithoutProposalPembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    outline?: OutlineUpdateManyWithoutUserNestedInput
    proposal?: ProposalUpdateManyWithoutUserNestedInput
    skripsi?: SkripsiUpdateManyWithoutUserNestedInput
    skripsiPenguji?: SkripsiPengujiUpdateManyWithoutDosenNestedInput
  }

  export type UserUncheckedUpdateWithoutProposalPembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    outline?: OutlineUncheckedUpdateManyWithoutUserNestedInput
    proposal?: ProposalUncheckedUpdateManyWithoutUserNestedInput
    skripsi?: SkripsiUncheckedUpdateManyWithoutUserNestedInput
    skripsiPenguji?: SkripsiPengujiUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type UserCreateWithoutSkripsiInput = {
    id?: string
    nama: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
    role: RoleCreateNestedOneWithoutUserInput
    outline?: OutlineCreateNestedManyWithoutUserInput
    proposal?: ProposalCreateNestedManyWithoutUserInput
    proposalPembimbing?: ProposalPembimbingCreateNestedManyWithoutDosenInput
    skripsiPenguji?: SkripsiPengujiCreateNestedManyWithoutDosenInput
  }

  export type UserUncheckedCreateWithoutSkripsiInput = {
    id?: string
    nama: string
    roleId: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
    outline?: OutlineUncheckedCreateNestedManyWithoutUserInput
    proposal?: ProposalUncheckedCreateNestedManyWithoutUserInput
    proposalPembimbing?: ProposalPembimbingUncheckedCreateNestedManyWithoutDosenInput
    skripsiPenguji?: SkripsiPengujiUncheckedCreateNestedManyWithoutDosenInput
  }

  export type UserCreateOrConnectWithoutSkripsiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkripsiInput, UserUncheckedCreateWithoutSkripsiInput>
  }

  export type SkripsiStatusCreateWithoutSkripsiInput = {
    id?: string
    nama: string
  }

  export type SkripsiStatusUncheckedCreateWithoutSkripsiInput = {
    id?: string
    nama: string
  }

  export type SkripsiStatusCreateOrConnectWithoutSkripsiInput = {
    where: SkripsiStatusWhereUniqueInput
    create: XOR<SkripsiStatusCreateWithoutSkripsiInput, SkripsiStatusUncheckedCreateWithoutSkripsiInput>
  }

  export type SkripsiPengujiCreateWithoutSkripsiInput = {
    id?: string
    revisi?: string | null
    setuju?: boolean
    dosen: UserCreateNestedOneWithoutSkripsiPengujiInput
  }

  export type SkripsiPengujiUncheckedCreateWithoutSkripsiInput = {
    id?: string
    userId: string
    revisi?: string | null
    setuju?: boolean
  }

  export type SkripsiPengujiCreateOrConnectWithoutSkripsiInput = {
    where: SkripsiPengujiWhereUniqueInput
    create: XOR<SkripsiPengujiCreateWithoutSkripsiInput, SkripsiPengujiUncheckedCreateWithoutSkripsiInput>
  }

  export type SkripsiPengujiCreateManySkripsiInputEnvelope = {
    data: SkripsiPengujiCreateManySkripsiInput | SkripsiPengujiCreateManySkripsiInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSkripsiInput = {
    update: XOR<UserUpdateWithoutSkripsiInput, UserUncheckedUpdateWithoutSkripsiInput>
    create: XOR<UserCreateWithoutSkripsiInput, UserUncheckedCreateWithoutSkripsiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkripsiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkripsiInput, UserUncheckedUpdateWithoutSkripsiInput>
  }

  export type UserUpdateWithoutSkripsiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    outline?: OutlineUpdateManyWithoutUserNestedInput
    proposal?: ProposalUpdateManyWithoutUserNestedInput
    proposalPembimbing?: ProposalPembimbingUpdateManyWithoutDosenNestedInput
    skripsiPenguji?: SkripsiPengujiUpdateManyWithoutDosenNestedInput
  }

  export type UserUncheckedUpdateWithoutSkripsiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    outline?: OutlineUncheckedUpdateManyWithoutUserNestedInput
    proposal?: ProposalUncheckedUpdateManyWithoutUserNestedInput
    proposalPembimbing?: ProposalPembimbingUncheckedUpdateManyWithoutDosenNestedInput
    skripsiPenguji?: SkripsiPengujiUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type SkripsiStatusUpsertWithoutSkripsiInput = {
    update: XOR<SkripsiStatusUpdateWithoutSkripsiInput, SkripsiStatusUncheckedUpdateWithoutSkripsiInput>
    create: XOR<SkripsiStatusCreateWithoutSkripsiInput, SkripsiStatusUncheckedCreateWithoutSkripsiInput>
    where?: SkripsiStatusWhereInput
  }

  export type SkripsiStatusUpdateToOneWithWhereWithoutSkripsiInput = {
    where?: SkripsiStatusWhereInput
    data: XOR<SkripsiStatusUpdateWithoutSkripsiInput, SkripsiStatusUncheckedUpdateWithoutSkripsiInput>
  }

  export type SkripsiStatusUpdateWithoutSkripsiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type SkripsiStatusUncheckedUpdateWithoutSkripsiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type SkripsiPengujiUpsertWithWhereUniqueWithoutSkripsiInput = {
    where: SkripsiPengujiWhereUniqueInput
    update: XOR<SkripsiPengujiUpdateWithoutSkripsiInput, SkripsiPengujiUncheckedUpdateWithoutSkripsiInput>
    create: XOR<SkripsiPengujiCreateWithoutSkripsiInput, SkripsiPengujiUncheckedCreateWithoutSkripsiInput>
  }

  export type SkripsiPengujiUpdateWithWhereUniqueWithoutSkripsiInput = {
    where: SkripsiPengujiWhereUniqueInput
    data: XOR<SkripsiPengujiUpdateWithoutSkripsiInput, SkripsiPengujiUncheckedUpdateWithoutSkripsiInput>
  }

  export type SkripsiPengujiUpdateManyWithWhereWithoutSkripsiInput = {
    where: SkripsiPengujiScalarWhereInput
    data: XOR<SkripsiPengujiUpdateManyMutationInput, SkripsiPengujiUncheckedUpdateManyWithoutSkripsiInput>
  }

  export type SkripsiCreateWithoutStatusInput = {
    id?: string
    file: string
    pembimbingSetuju?: boolean
    user: UserCreateNestedOneWithoutSkripsiInput
    penguji?: SkripsiPengujiCreateNestedManyWithoutSkripsiInput
  }

  export type SkripsiUncheckedCreateWithoutStatusInput = {
    id?: string
    userId: string
    file: string
    pembimbingSetuju?: boolean
    penguji?: SkripsiPengujiUncheckedCreateNestedManyWithoutSkripsiInput
  }

  export type SkripsiCreateOrConnectWithoutStatusInput = {
    where: SkripsiWhereUniqueInput
    create: XOR<SkripsiCreateWithoutStatusInput, SkripsiUncheckedCreateWithoutStatusInput>
  }

  export type SkripsiCreateManyStatusInputEnvelope = {
    data: SkripsiCreateManyStatusInput | SkripsiCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type SkripsiUpsertWithWhereUniqueWithoutStatusInput = {
    where: SkripsiWhereUniqueInput
    update: XOR<SkripsiUpdateWithoutStatusInput, SkripsiUncheckedUpdateWithoutStatusInput>
    create: XOR<SkripsiCreateWithoutStatusInput, SkripsiUncheckedCreateWithoutStatusInput>
  }

  export type SkripsiUpdateWithWhereUniqueWithoutStatusInput = {
    where: SkripsiWhereUniqueInput
    data: XOR<SkripsiUpdateWithoutStatusInput, SkripsiUncheckedUpdateWithoutStatusInput>
  }

  export type SkripsiUpdateManyWithWhereWithoutStatusInput = {
    where: SkripsiScalarWhereInput
    data: XOR<SkripsiUpdateManyMutationInput, SkripsiUncheckedUpdateManyWithoutStatusInput>
  }

  export type SkripsiCreateWithoutPengujiInput = {
    id?: string
    file: string
    pembimbingSetuju?: boolean
    user: UserCreateNestedOneWithoutSkripsiInput
    status: SkripsiStatusCreateNestedOneWithoutSkripsiInput
  }

  export type SkripsiUncheckedCreateWithoutPengujiInput = {
    id?: string
    userId: string
    file: string
    statusId: string
    pembimbingSetuju?: boolean
  }

  export type SkripsiCreateOrConnectWithoutPengujiInput = {
    where: SkripsiWhereUniqueInput
    create: XOR<SkripsiCreateWithoutPengujiInput, SkripsiUncheckedCreateWithoutPengujiInput>
  }

  export type UserCreateWithoutSkripsiPengujiInput = {
    id?: string
    nama: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
    role: RoleCreateNestedOneWithoutUserInput
    outline?: OutlineCreateNestedManyWithoutUserInput
    proposal?: ProposalCreateNestedManyWithoutUserInput
    skripsi?: SkripsiCreateNestedManyWithoutUserInput
    proposalPembimbing?: ProposalPembimbingCreateNestedManyWithoutDosenInput
  }

  export type UserUncheckedCreateWithoutSkripsiPengujiInput = {
    id?: string
    nama: string
    roleId: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
    outline?: OutlineUncheckedCreateNestedManyWithoutUserInput
    proposal?: ProposalUncheckedCreateNestedManyWithoutUserInput
    skripsi?: SkripsiUncheckedCreateNestedManyWithoutUserInput
    proposalPembimbing?: ProposalPembimbingUncheckedCreateNestedManyWithoutDosenInput
  }

  export type UserCreateOrConnectWithoutSkripsiPengujiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkripsiPengujiInput, UserUncheckedCreateWithoutSkripsiPengujiInput>
  }

  export type SkripsiUpsertWithoutPengujiInput = {
    update: XOR<SkripsiUpdateWithoutPengujiInput, SkripsiUncheckedUpdateWithoutPengujiInput>
    create: XOR<SkripsiCreateWithoutPengujiInput, SkripsiUncheckedCreateWithoutPengujiInput>
    where?: SkripsiWhereInput
  }

  export type SkripsiUpdateToOneWithWhereWithoutPengujiInput = {
    where?: SkripsiWhereInput
    data: XOR<SkripsiUpdateWithoutPengujiInput, SkripsiUncheckedUpdateWithoutPengujiInput>
  }

  export type SkripsiUpdateWithoutPengujiInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    pembimbingSetuju?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSkripsiNestedInput
    status?: SkripsiStatusUpdateOneRequiredWithoutSkripsiNestedInput
  }

  export type SkripsiUncheckedUpdateWithoutPengujiInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
    pembimbingSetuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutSkripsiPengujiInput = {
    update: XOR<UserUpdateWithoutSkripsiPengujiInput, UserUncheckedUpdateWithoutSkripsiPengujiInput>
    create: XOR<UserCreateWithoutSkripsiPengujiInput, UserUncheckedCreateWithoutSkripsiPengujiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkripsiPengujiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkripsiPengujiInput, UserUncheckedUpdateWithoutSkripsiPengujiInput>
  }

  export type UserUpdateWithoutSkripsiPengujiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    outline?: OutlineUpdateManyWithoutUserNestedInput
    proposal?: ProposalUpdateManyWithoutUserNestedInput
    skripsi?: SkripsiUpdateManyWithoutUserNestedInput
    proposalPembimbing?: ProposalPembimbingUpdateManyWithoutDosenNestedInput
  }

  export type UserUncheckedUpdateWithoutSkripsiPengujiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    outline?: OutlineUncheckedUpdateManyWithoutUserNestedInput
    proposal?: ProposalUncheckedUpdateManyWithoutUserNestedInput
    skripsi?: SkripsiUncheckedUpdateManyWithoutUserNestedInput
    proposalPembimbing?: ProposalPembimbingUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: string
    nama: string
    email: string
    foto?: string | null
    password: string
    token?: string | null
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    outline?: OutlineUpdateManyWithoutUserNestedInput
    proposal?: ProposalUpdateManyWithoutUserNestedInput
    skripsi?: SkripsiUpdateManyWithoutUserNestedInput
    proposalPembimbing?: ProposalPembimbingUpdateManyWithoutDosenNestedInput
    skripsiPenguji?: SkripsiPengujiUpdateManyWithoutDosenNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    outline?: OutlineUncheckedUpdateManyWithoutUserNestedInput
    proposal?: ProposalUncheckedUpdateManyWithoutUserNestedInput
    skripsi?: SkripsiUncheckedUpdateManyWithoutUserNestedInput
    proposalPembimbing?: ProposalPembimbingUncheckedUpdateManyWithoutDosenNestedInput
    skripsiPenguji?: SkripsiPengujiUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutlineCreateManyUserInput = {
    id?: string
    file: string
    statusId: string
  }

  export type ProposalCreateManyUserInput = {
    id?: string
    file: string
    statusId: string
  }

  export type SkripsiCreateManyUserInput = {
    id?: string
    file: string
    statusId: string
    pembimbingSetuju?: boolean
  }

  export type ProposalPembimbingCreateManyDosenInput = {
    id?: string
    proposalId: string
    setuju?: boolean
  }

  export type SkripsiPengujiCreateManyDosenInput = {
    id?: string
    skripsiId: string
    revisi?: string | null
    setuju?: boolean
  }

  export type OutlineUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: OutlineStatusUpdateOneRequiredWithoutOutlineNestedInput
  }

  export type OutlineUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type OutlineUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: ProposalStatusUpdateOneRequiredWithoutProposalNestedInput
    dosenPembimbing?: ProposalPembimbingUpdateManyWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
    dosenPembimbing?: ProposalPembimbingUncheckedUpdateManyWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
  }

  export type SkripsiUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    pembimbingSetuju?: BoolFieldUpdateOperationsInput | boolean
    status?: SkripsiStatusUpdateOneRequiredWithoutSkripsiNestedInput
    penguji?: SkripsiPengujiUpdateManyWithoutSkripsiNestedInput
  }

  export type SkripsiUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
    pembimbingSetuju?: BoolFieldUpdateOperationsInput | boolean
    penguji?: SkripsiPengujiUncheckedUpdateManyWithoutSkripsiNestedInput
  }

  export type SkripsiUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
    pembimbingSetuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProposalPembimbingUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    setuju?: BoolFieldUpdateOperationsInput | boolean
    proposal?: ProposalUpdateOneRequiredWithoutDosenPembimbingNestedInput
  }

  export type ProposalPembimbingUncheckedUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    setuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProposalPembimbingUncheckedUpdateManyWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    setuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SkripsiPengujiUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    revisi?: NullableStringFieldUpdateOperationsInput | string | null
    setuju?: BoolFieldUpdateOperationsInput | boolean
    skripsi?: SkripsiUpdateOneRequiredWithoutPengujiNestedInput
  }

  export type SkripsiPengujiUncheckedUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    skripsiId?: StringFieldUpdateOperationsInput | string
    revisi?: NullableStringFieldUpdateOperationsInput | string | null
    setuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SkripsiPengujiUncheckedUpdateManyWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    skripsiId?: StringFieldUpdateOperationsInput | string
    revisi?: NullableStringFieldUpdateOperationsInput | string | null
    setuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OutlineCreateManyStatusInput = {
    id?: string
    userId: string
    file: string
  }

  export type OutlineUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutOutlineNestedInput
  }

  export type OutlineUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
  }

  export type OutlineUncheckedUpdateManyWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalPembimbingCreateManyProposalInput = {
    id?: string
    userId: string
    setuju?: boolean
  }

  export type ProposalPembimbingUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    setuju?: BoolFieldUpdateOperationsInput | boolean
    dosen?: UserUpdateOneRequiredWithoutProposalPembimbingNestedInput
  }

  export type ProposalPembimbingUncheckedUpdateWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    setuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProposalPembimbingUncheckedUpdateManyWithoutProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    setuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProposalCreateManyStatusInput = {
    id?: string
    userId: string
    file: string
  }

  export type ProposalUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProposalNestedInput
    dosenPembimbing?: ProposalPembimbingUpdateManyWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    dosenPembimbing?: ProposalPembimbingUncheckedUpdateManyWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateManyWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
  }

  export type SkripsiPengujiCreateManySkripsiInput = {
    id?: string
    userId: string
    revisi?: string | null
    setuju?: boolean
  }

  export type SkripsiPengujiUpdateWithoutSkripsiInput = {
    id?: StringFieldUpdateOperationsInput | string
    revisi?: NullableStringFieldUpdateOperationsInput | string | null
    setuju?: BoolFieldUpdateOperationsInput | boolean
    dosen?: UserUpdateOneRequiredWithoutSkripsiPengujiNestedInput
  }

  export type SkripsiPengujiUncheckedUpdateWithoutSkripsiInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    revisi?: NullableStringFieldUpdateOperationsInput | string | null
    setuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SkripsiPengujiUncheckedUpdateManyWithoutSkripsiInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    revisi?: NullableStringFieldUpdateOperationsInput | string | null
    setuju?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SkripsiCreateManyStatusInput = {
    id?: string
    userId: string
    file: string
    pembimbingSetuju?: boolean
  }

  export type SkripsiUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    pembimbingSetuju?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSkripsiNestedInput
    penguji?: SkripsiPengujiUpdateManyWithoutSkripsiNestedInput
  }

  export type SkripsiUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    pembimbingSetuju?: BoolFieldUpdateOperationsInput | boolean
    penguji?: SkripsiPengujiUncheckedUpdateManyWithoutSkripsiNestedInput
  }

  export type SkripsiUncheckedUpdateManyWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    pembimbingSetuju?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}