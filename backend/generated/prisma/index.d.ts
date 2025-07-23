
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Hotel
 * 
 */
export type Hotel = $Result.DefaultSelection<Prisma.$HotelPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Earnings
 * 
 */
export type Earnings = $Result.DefaultSelection<Prisma.$EarningsPayload>
/**
 * Model Withdrawal
 * 
 */
export type Withdrawal = $Result.DefaultSelection<Prisma.$WithdrawalPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  PARTNER: 'PARTNER',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const BookingStatus: {
  BOOKED: 'BOOKED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const EarningsType: {
  PARTNER_EARNINGS: 'PARTNER_EARNINGS',
  ADMIN_EARNINGS: 'ADMIN_EARNINGS'
};

export type EarningsType = (typeof EarningsType)[keyof typeof EarningsType]


export const WithdrawalStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type WithdrawalStatus = (typeof WithdrawalStatus)[keyof typeof WithdrawalStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type EarningsType = $Enums.EarningsType

export const EarningsType: typeof $Enums.EarningsType

export type WithdrawalStatus = $Enums.WithdrawalStatus

export const WithdrawalStatus: typeof $Enums.WithdrawalStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotel`: Exposes CRUD operations for the **Hotel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotels
    * const hotels = await prisma.hotel.findMany()
    * ```
    */
  get hotel(): Prisma.HotelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.earnings`: Exposes CRUD operations for the **Earnings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Earnings
    * const earnings = await prisma.earnings.findMany()
    * ```
    */
  get earnings(): Prisma.EarningsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawal`: Exposes CRUD operations for the **Withdrawal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Withdrawals
    * const withdrawals = await prisma.withdrawal.findMany()
    * ```
    */
  get withdrawal(): Prisma.WithdrawalDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    User: 'User',
    Hotel: 'Hotel',
    Booking: 'Booking',
    Earnings: 'Earnings',
    Withdrawal: 'Withdrawal'
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
      modelProps: "user" | "hotel" | "booking" | "earnings" | "withdrawal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Hotel: {
        payload: Prisma.$HotelPayload<ExtArgs>
        fields: Prisma.HotelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findFirst: {
            args: Prisma.HotelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findMany: {
            args: Prisma.HotelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          create: {
            args: Prisma.HotelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          createMany: {
            args: Prisma.HotelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          delete: {
            args: Prisma.HotelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          update: {
            args: Prisma.HotelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          deleteMany: {
            args: Prisma.HotelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          upsert: {
            args: Prisma.HotelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          aggregate: {
            args: Prisma.HotelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotel>
          }
          groupBy: {
            args: Prisma.HotelGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelCountArgs<ExtArgs>
            result: $Utils.Optional<HotelCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Earnings: {
        payload: Prisma.$EarningsPayload<ExtArgs>
        fields: Prisma.EarningsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EarningsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EarningsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>
          }
          findFirst: {
            args: Prisma.EarningsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EarningsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>
          }
          findMany: {
            args: Prisma.EarningsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>[]
          }
          create: {
            args: Prisma.EarningsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>
          }
          createMany: {
            args: Prisma.EarningsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EarningsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>[]
          }
          delete: {
            args: Prisma.EarningsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>
          }
          update: {
            args: Prisma.EarningsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>
          }
          deleteMany: {
            args: Prisma.EarningsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EarningsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EarningsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>[]
          }
          upsert: {
            args: Prisma.EarningsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EarningsPayload>
          }
          aggregate: {
            args: Prisma.EarningsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEarnings>
          }
          groupBy: {
            args: Prisma.EarningsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EarningsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EarningsCountArgs<ExtArgs>
            result: $Utils.Optional<EarningsCountAggregateOutputType> | number
          }
        }
      }
      Withdrawal: {
        payload: Prisma.$WithdrawalPayload<ExtArgs>
        fields: Prisma.WithdrawalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WithdrawalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WithdrawalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          findFirst: {
            args: Prisma.WithdrawalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WithdrawalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          findMany: {
            args: Prisma.WithdrawalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>[]
          }
          create: {
            args: Prisma.WithdrawalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          createMany: {
            args: Prisma.WithdrawalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WithdrawalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>[]
          }
          delete: {
            args: Prisma.WithdrawalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          update: {
            args: Prisma.WithdrawalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          deleteMany: {
            args: Prisma.WithdrawalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WithdrawalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WithdrawalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>[]
          }
          upsert: {
            args: Prisma.WithdrawalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          aggregate: {
            args: Prisma.WithdrawalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawal>
          }
          groupBy: {
            args: Prisma.WithdrawalGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalGroupByOutputType>[]
          }
          count: {
            args: Prisma.WithdrawalCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalCountAggregateOutputType> | number
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
    user?: UserOmit
    hotel?: HotelOmit
    booking?: BookingOmit
    earnings?: EarningsOmit
    withdrawal?: WithdrawalOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    hotels: number
    bookings: number
    earnings: number
    withdrawals: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotels?: boolean | UserCountOutputTypeCountHotelsArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    earnings?: boolean | UserCountOutputTypeCountEarningsArgs
    withdrawals?: boolean | UserCountOutputTypeCountWithdrawalsArgs
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
  export type UserCountOutputTypeCountHotelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EarningsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalWhereInput
  }


  /**
   * Count Type HotelCountOutputType
   */

  export type HotelCountOutputType = {
    bookings: number
  }

  export type HotelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | HotelCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelCountOutputType
     */
    select?: HotelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    earnings: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    earnings?: boolean | BookingCountOutputTypeCountEarningsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountEarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EarningsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    totalEarnings: number | null
    walletBalance: number | null
  }

  export type UserSumAggregateOutputType = {
    totalEarnings: number | null
    walletBalance: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    avatarUrl: string | null
    totalEarnings: number | null
    walletBalance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    avatarUrl: string | null
    totalEarnings: number | null
    walletBalance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    avatarUrl: number
    totalEarnings: number
    walletBalance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    totalEarnings?: true
    walletBalance?: true
  }

  export type UserSumAggregateInputType = {
    totalEarnings?: true
    walletBalance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatarUrl?: true
    totalEarnings?: true
    walletBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatarUrl?: true
    totalEarnings?: true
    walletBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatarUrl?: true
    totalEarnings?: true
    walletBalance?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    avatarUrl: string | null
    totalEarnings: number
    walletBalance: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatarUrl?: boolean
    totalEarnings?: boolean
    walletBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotels?: boolean | User$hotelsArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    earnings?: boolean | User$earningsArgs<ExtArgs>
    withdrawals?: boolean | User$withdrawalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatarUrl?: boolean
    totalEarnings?: boolean
    walletBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatarUrl?: boolean
    totalEarnings?: boolean
    walletBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatarUrl?: boolean
    totalEarnings?: boolean
    walletBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "avatarUrl" | "totalEarnings" | "walletBalance" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotels?: boolean | User$hotelsArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    earnings?: boolean | User$earningsArgs<ExtArgs>
    withdrawals?: boolean | User$withdrawalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      hotels: Prisma.$HotelPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      earnings: Prisma.$EarningsPayload<ExtArgs>[]
      withdrawals: Prisma.$WithdrawalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.UserRole
      avatarUrl: string | null
      totalEarnings: number
      walletBalance: number
      createdAt: Date
      updatedAt: Date
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    hotels<T extends User$hotelsArgs<ExtArgs> = {}>(args?: Subset<T, User$hotelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    earnings<T extends User$earningsArgs<ExtArgs> = {}>(args?: Subset<T, User$earningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    withdrawals<T extends User$withdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, User$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly totalEarnings: FieldRef<"User", 'Float'>
    readonly walletBalance: FieldRef<"User", 'Float'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.hotels
   */
  export type User$hotelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    cursor?: HotelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.earnings
   */
  export type User$earningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    where?: EarningsWhereInput
    orderBy?: EarningsOrderByWithRelationInput | EarningsOrderByWithRelationInput[]
    cursor?: EarningsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EarningsScalarFieldEnum | EarningsScalarFieldEnum[]
  }

  /**
   * User.withdrawals
   */
  export type User$withdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    where?: WithdrawalWhereInput
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    cursor?: WithdrawalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
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
   * Model Hotel
   */

  export type AggregateHotel = {
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  export type HotelAvgAggregateOutputType = {
    price: number | null
    rating: number | null
    totalRooms: number | null
    availableRooms: number | null
  }

  export type HotelSumAggregateOutputType = {
    price: number | null
    rating: number | null
    totalRooms: number | null
    availableRooms: number | null
  }

  export type HotelMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    description: string | null
    city: string | null
    address: string | null
    price: number | null
    rating: number | null
    totalRooms: number | null
    availableRooms: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    description: string | null
    city: string | null
    address: string | null
    price: number | null
    rating: number | null
    totalRooms: number | null
    availableRooms: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelCountAggregateOutputType = {
    id: number
    ownerId: number
    name: number
    description: number
    city: number
    address: number
    price: number
    rating: number
    images: number
    amenities: number
    totalRooms: number
    availableRooms: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HotelAvgAggregateInputType = {
    price?: true
    rating?: true
    totalRooms?: true
    availableRooms?: true
  }

  export type HotelSumAggregateInputType = {
    price?: true
    rating?: true
    totalRooms?: true
    availableRooms?: true
  }

  export type HotelMinAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    description?: true
    city?: true
    address?: true
    price?: true
    rating?: true
    totalRooms?: true
    availableRooms?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelMaxAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    description?: true
    city?: true
    address?: true
    price?: true
    rating?: true
    totalRooms?: true
    availableRooms?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelCountAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    description?: true
    city?: true
    address?: true
    price?: true
    rating?: true
    images?: true
    amenities?: true
    totalRooms?: true
    availableRooms?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HotelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotel to aggregate.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hotels
    **/
    _count?: true | HotelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelMaxAggregateInputType
  }

  export type GetHotelAggregateType<T extends HotelAggregateArgs> = {
        [P in keyof T & keyof AggregateHotel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotel[P]>
      : GetScalarType<T[P], AggregateHotel[P]>
  }




  export type HotelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithAggregationInput | HotelOrderByWithAggregationInput[]
    by: HotelScalarFieldEnum[] | HotelScalarFieldEnum
    having?: HotelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelCountAggregateInputType | true
    _avg?: HotelAvgAggregateInputType
    _sum?: HotelSumAggregateInputType
    _min?: HotelMinAggregateInputType
    _max?: HotelMaxAggregateInputType
  }

  export type HotelGroupByOutputType = {
    id: string
    ownerId: string
    name: string
    description: string
    city: string
    address: string
    price: number
    rating: number
    images: string[]
    amenities: string[]
    totalRooms: number
    availableRooms: number
    createdAt: Date
    updatedAt: Date
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  type GetHotelGroupByPayload<T extends HotelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelGroupByOutputType[P]>
            : GetScalarType<T[P], HotelGroupByOutputType[P]>
        }
      >
    >


  export type HotelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    city?: boolean
    address?: boolean
    price?: boolean
    rating?: boolean
    images?: boolean
    amenities?: boolean
    totalRooms?: boolean
    availableRooms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Hotel$bookingsArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    city?: boolean
    address?: boolean
    price?: boolean
    rating?: boolean
    images?: boolean
    amenities?: boolean
    totalRooms?: boolean
    availableRooms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    city?: boolean
    address?: boolean
    price?: boolean
    rating?: boolean
    images?: boolean
    amenities?: boolean
    totalRooms?: boolean
    availableRooms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectScalar = {
    id?: boolean
    ownerId?: boolean
    name?: boolean
    description?: boolean
    city?: boolean
    address?: boolean
    price?: boolean
    rating?: boolean
    images?: boolean
    amenities?: boolean
    totalRooms?: boolean
    availableRooms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HotelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "name" | "description" | "city" | "address" | "price" | "rating" | "images" | "amenities" | "totalRooms" | "availableRooms" | "createdAt" | "updatedAt", ExtArgs["result"]["hotel"]>
  export type HotelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Hotel$bookingsArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HotelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HotelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HotelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotel"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      name: string
      description: string
      city: string
      address: string
      price: number
      rating: number
      images: string[]
      amenities: string[]
      totalRooms: number
      availableRooms: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hotel"]>
    composites: {}
  }

  type HotelGetPayload<S extends boolean | null | undefined | HotelDefaultArgs> = $Result.GetResult<Prisma.$HotelPayload, S>

  type HotelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelCountAggregateInputType | true
    }

  export interface HotelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotel'], meta: { name: 'Hotel' } }
    /**
     * Find zero or one Hotel that matches the filter.
     * @param {HotelFindUniqueArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelFindUniqueArgs>(args: SelectSubset<T, HotelFindUniqueArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelFindUniqueOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelFindFirstArgs>(args?: SelectSubset<T, HotelFindFirstArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotels
     * const hotels = await prisma.hotel.findMany()
     * 
     * // Get first 10 Hotels
     * const hotels = await prisma.hotel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelWithIdOnly = await prisma.hotel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelFindManyArgs>(args?: SelectSubset<T, HotelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotel.
     * @param {HotelCreateArgs} args - Arguments to create a Hotel.
     * @example
     * // Create one Hotel
     * const Hotel = await prisma.hotel.create({
     *   data: {
     *     // ... data to create a Hotel
     *   }
     * })
     * 
     */
    create<T extends HotelCreateArgs>(args: SelectSubset<T, HotelCreateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hotels.
     * @param {HotelCreateManyArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelCreateManyArgs>(args?: SelectSubset<T, HotelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hotels and returns the data saved in the database.
     * @param {HotelCreateManyAndReturnArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hotels and only return the `id`
     * const hotelWithIdOnly = await prisma.hotel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hotel.
     * @param {HotelDeleteArgs} args - Arguments to delete one Hotel.
     * @example
     * // Delete one Hotel
     * const Hotel = await prisma.hotel.delete({
     *   where: {
     *     // ... filter to delete one Hotel
     *   }
     * })
     * 
     */
    delete<T extends HotelDeleteArgs>(args: SelectSubset<T, HotelDeleteArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotel.
     * @param {HotelUpdateArgs} args - Arguments to update one Hotel.
     * @example
     * // Update one Hotel
     * const hotel = await prisma.hotel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelUpdateArgs>(args: SelectSubset<T, HotelUpdateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hotels.
     * @param {HotelDeleteManyArgs} args - Arguments to filter Hotels to delete.
     * @example
     * // Delete a few Hotels
     * const { count } = await prisma.hotel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelDeleteManyArgs>(args?: SelectSubset<T, HotelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelUpdateManyArgs>(args: SelectSubset<T, HotelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels and returns the data updated in the database.
     * @param {HotelUpdateManyAndReturnArgs} args - Arguments to update many Hotels.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hotels and only return the `id`
     * const hotelWithIdOnly = await prisma.hotel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HotelUpdateManyAndReturnArgs>(args: SelectSubset<T, HotelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hotel.
     * @param {HotelUpsertArgs} args - Arguments to update or create a Hotel.
     * @example
     * // Update or create a Hotel
     * const hotel = await prisma.hotel.upsert({
     *   create: {
     *     // ... data to create a Hotel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotel we want to update
     *   }
     * })
     */
    upsert<T extends HotelUpsertArgs>(args: SelectSubset<T, HotelUpsertArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelCountArgs} args - Arguments to filter Hotels to count.
     * @example
     * // Count the number of Hotels
     * const count = await prisma.hotel.count({
     *   where: {
     *     // ... the filter for the Hotels we want to count
     *   }
     * })
    **/
    count<T extends HotelCountArgs>(
      args?: Subset<T, HotelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelAggregateArgs>(args: Subset<T, HotelAggregateArgs>): Prisma.PrismaPromise<GetHotelAggregateType<T>>

    /**
     * Group by Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelGroupByArgs} args - Group by arguments.
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
      T extends HotelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelGroupByArgs['orderBy'] }
        : { orderBy?: HotelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotel model
   */
  readonly fields: HotelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Hotel$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hotel model
   */
  interface HotelFieldRefs {
    readonly id: FieldRef<"Hotel", 'String'>
    readonly ownerId: FieldRef<"Hotel", 'String'>
    readonly name: FieldRef<"Hotel", 'String'>
    readonly description: FieldRef<"Hotel", 'String'>
    readonly city: FieldRef<"Hotel", 'String'>
    readonly address: FieldRef<"Hotel", 'String'>
    readonly price: FieldRef<"Hotel", 'Float'>
    readonly rating: FieldRef<"Hotel", 'Float'>
    readonly images: FieldRef<"Hotel", 'String[]'>
    readonly amenities: FieldRef<"Hotel", 'String[]'>
    readonly totalRooms: FieldRef<"Hotel", 'Int'>
    readonly availableRooms: FieldRef<"Hotel", 'Int'>
    readonly createdAt: FieldRef<"Hotel", 'DateTime'>
    readonly updatedAt: FieldRef<"Hotel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hotel findUnique
   */
  export type HotelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findUniqueOrThrow
   */
  export type HotelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findFirst
   */
  export type HotelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findFirstOrThrow
   */
  export type HotelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findMany
   */
  export type HotelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel create
   */
  export type HotelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to create a Hotel.
     */
    data: XOR<HotelCreateInput, HotelUncheckedCreateInput>
  }

  /**
   * Hotel createMany
   */
  export type HotelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotel createManyAndReturn
   */
  export type HotelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hotel update
   */
  export type HotelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to update a Hotel.
     */
    data: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
    /**
     * Choose, which Hotel to update.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel updateMany
   */
  export type HotelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotel updateManyAndReturn
   */
  export type HotelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hotel upsert
   */
  export type HotelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The filter to search for the Hotel to update in case it exists.
     */
    where: HotelWhereUniqueInput
    /**
     * In case the Hotel found by the `where` argument doesn't exist, create a new Hotel with this data.
     */
    create: XOR<HotelCreateInput, HotelUncheckedCreateInput>
    /**
     * In case the Hotel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
  }

  /**
   * Hotel delete
   */
  export type HotelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter which Hotel to delete.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel deleteMany
   */
  export type HotelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to delete
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to delete.
     */
    limit?: number
  }

  /**
   * Hotel.bookings
   */
  export type Hotel$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Hotel without action
   */
  export type HotelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    guests: number | null
    totalAmount: number | null
    partnerAmount: number | null
    adminAmount: number | null
  }

  export type BookingSumAggregateOutputType = {
    guests: number | null
    totalAmount: number | null
    partnerAmount: number | null
    adminAmount: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    hotelId: string | null
    checkIn: Date | null
    checkOut: Date | null
    guests: number | null
    totalAmount: number | null
    status: $Enums.BookingStatus | null
    paymentId: string | null
    paymentOrderId: string | null
    paymentSignature: string | null
    isPaid: boolean | null
    partnerAmount: number | null
    adminAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    hotelId: string | null
    checkIn: Date | null
    checkOut: Date | null
    guests: number | null
    totalAmount: number | null
    status: $Enums.BookingStatus | null
    paymentId: string | null
    paymentOrderId: string | null
    paymentSignature: string | null
    isPaid: boolean | null
    partnerAmount: number | null
    adminAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    hotelId: number
    checkIn: number
    checkOut: number
    guests: number
    totalAmount: number
    status: number
    paymentId: number
    paymentOrderId: number
    paymentSignature: number
    isPaid: number
    partnerAmount: number
    adminAmount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    guests?: true
    totalAmount?: true
    partnerAmount?: true
    adminAmount?: true
  }

  export type BookingSumAggregateInputType = {
    guests?: true
    totalAmount?: true
    partnerAmount?: true
    adminAmount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    hotelId?: true
    checkIn?: true
    checkOut?: true
    guests?: true
    totalAmount?: true
    status?: true
    paymentId?: true
    paymentOrderId?: true
    paymentSignature?: true
    isPaid?: true
    partnerAmount?: true
    adminAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    hotelId?: true
    checkIn?: true
    checkOut?: true
    guests?: true
    totalAmount?: true
    status?: true
    paymentId?: true
    paymentOrderId?: true
    paymentSignature?: true
    isPaid?: true
    partnerAmount?: true
    adminAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    hotelId?: true
    checkIn?: true
    checkOut?: true
    guests?: true
    totalAmount?: true
    status?: true
    paymentId?: true
    paymentOrderId?: true
    paymentSignature?: true
    isPaid?: true
    partnerAmount?: true
    adminAmount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userId: string
    hotelId: string
    checkIn: Date
    checkOut: Date
    guests: number
    totalAmount: number
    status: $Enums.BookingStatus
    paymentId: string | null
    paymentOrderId: string | null
    paymentSignature: string | null
    isPaid: boolean
    partnerAmount: number | null
    adminAmount: number | null
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hotelId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    totalAmount?: boolean
    status?: boolean
    paymentId?: boolean
    paymentOrderId?: boolean
    paymentSignature?: boolean
    isPaid?: boolean
    partnerAmount?: boolean
    adminAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    earnings?: boolean | Booking$earningsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hotelId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    totalAmount?: boolean
    status?: boolean
    paymentId?: boolean
    paymentOrderId?: boolean
    paymentSignature?: boolean
    isPaid?: boolean
    partnerAmount?: boolean
    adminAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hotelId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    totalAmount?: boolean
    status?: boolean
    paymentId?: boolean
    paymentOrderId?: boolean
    paymentSignature?: boolean
    isPaid?: boolean
    partnerAmount?: boolean
    adminAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    hotelId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    totalAmount?: boolean
    status?: boolean
    paymentId?: boolean
    paymentOrderId?: boolean
    paymentSignature?: boolean
    isPaid?: boolean
    partnerAmount?: boolean
    adminAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "hotelId" | "checkIn" | "checkOut" | "guests" | "totalAmount" | "status" | "paymentId" | "paymentOrderId" | "paymentSignature" | "isPaid" | "partnerAmount" | "adminAmount" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    earnings?: boolean | Booking$earningsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      hotel: Prisma.$HotelPayload<ExtArgs>
      earnings: Prisma.$EarningsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      hotelId: string
      checkIn: Date
      checkOut: Date
      guests: number
      totalAmount: number
      status: $Enums.BookingStatus
      paymentId: string | null
      paymentOrderId: string | null
      paymentSignature: string | null
      isPaid: boolean
      partnerAmount: number | null
      adminAmount: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    earnings<T extends Booking$earningsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$earningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly hotelId: FieldRef<"Booking", 'String'>
    readonly checkIn: FieldRef<"Booking", 'DateTime'>
    readonly checkOut: FieldRef<"Booking", 'DateTime'>
    readonly guests: FieldRef<"Booking", 'Int'>
    readonly totalAmount: FieldRef<"Booking", 'Float'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly paymentId: FieldRef<"Booking", 'String'>
    readonly paymentOrderId: FieldRef<"Booking", 'String'>
    readonly paymentSignature: FieldRef<"Booking", 'String'>
    readonly isPaid: FieldRef<"Booking", 'Boolean'>
    readonly partnerAmount: FieldRef<"Booking", 'Float'>
    readonly adminAmount: FieldRef<"Booking", 'Float'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.earnings
   */
  export type Booking$earningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    where?: EarningsWhereInput
    orderBy?: EarningsOrderByWithRelationInput | EarningsOrderByWithRelationInput[]
    cursor?: EarningsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EarningsScalarFieldEnum | EarningsScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Earnings
   */

  export type AggregateEarnings = {
    _count: EarningsCountAggregateOutputType | null
    _avg: EarningsAvgAggregateOutputType | null
    _sum: EarningsSumAggregateOutputType | null
    _min: EarningsMinAggregateOutputType | null
    _max: EarningsMaxAggregateOutputType | null
  }

  export type EarningsAvgAggregateOutputType = {
    amount: number | null
  }

  export type EarningsSumAggregateOutputType = {
    amount: number | null
  }

  export type EarningsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bookingId: string | null
    amount: number | null
    type: string | null
    isWithdrawn: boolean | null
    withdrawnAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EarningsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bookingId: string | null
    amount: number | null
    type: string | null
    isWithdrawn: boolean | null
    withdrawnAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EarningsCountAggregateOutputType = {
    id: number
    userId: number
    bookingId: number
    amount: number
    type: number
    isWithdrawn: number
    withdrawnAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EarningsAvgAggregateInputType = {
    amount?: true
  }

  export type EarningsSumAggregateInputType = {
    amount?: true
  }

  export type EarningsMinAggregateInputType = {
    id?: true
    userId?: true
    bookingId?: true
    amount?: true
    type?: true
    isWithdrawn?: true
    withdrawnAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EarningsMaxAggregateInputType = {
    id?: true
    userId?: true
    bookingId?: true
    amount?: true
    type?: true
    isWithdrawn?: true
    withdrawnAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EarningsCountAggregateInputType = {
    id?: true
    userId?: true
    bookingId?: true
    amount?: true
    type?: true
    isWithdrawn?: true
    withdrawnAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EarningsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Earnings to aggregate.
     */
    where?: EarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnings to fetch.
     */
    orderBy?: EarningsOrderByWithRelationInput | EarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Earnings
    **/
    _count?: true | EarningsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EarningsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EarningsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EarningsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EarningsMaxAggregateInputType
  }

  export type GetEarningsAggregateType<T extends EarningsAggregateArgs> = {
        [P in keyof T & keyof AggregateEarnings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEarnings[P]>
      : GetScalarType<T[P], AggregateEarnings[P]>
  }




  export type EarningsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EarningsWhereInput
    orderBy?: EarningsOrderByWithAggregationInput | EarningsOrderByWithAggregationInput[]
    by: EarningsScalarFieldEnum[] | EarningsScalarFieldEnum
    having?: EarningsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EarningsCountAggregateInputType | true
    _avg?: EarningsAvgAggregateInputType
    _sum?: EarningsSumAggregateInputType
    _min?: EarningsMinAggregateInputType
    _max?: EarningsMaxAggregateInputType
  }

  export type EarningsGroupByOutputType = {
    id: string
    userId: string
    bookingId: string
    amount: number
    type: string
    isWithdrawn: boolean
    withdrawnAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EarningsCountAggregateOutputType | null
    _avg: EarningsAvgAggregateOutputType | null
    _sum: EarningsSumAggregateOutputType | null
    _min: EarningsMinAggregateOutputType | null
    _max: EarningsMaxAggregateOutputType | null
  }

  type GetEarningsGroupByPayload<T extends EarningsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EarningsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EarningsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EarningsGroupByOutputType[P]>
            : GetScalarType<T[P], EarningsGroupByOutputType[P]>
        }
      >
    >


  export type EarningsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookingId?: boolean
    amount?: boolean
    type?: boolean
    isWithdrawn?: boolean
    withdrawnAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["earnings"]>

  export type EarningsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookingId?: boolean
    amount?: boolean
    type?: boolean
    isWithdrawn?: boolean
    withdrawnAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["earnings"]>

  export type EarningsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookingId?: boolean
    amount?: boolean
    type?: boolean
    isWithdrawn?: boolean
    withdrawnAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["earnings"]>

  export type EarningsSelectScalar = {
    id?: boolean
    userId?: boolean
    bookingId?: boolean
    amount?: boolean
    type?: boolean
    isWithdrawn?: boolean
    withdrawnAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EarningsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bookingId" | "amount" | "type" | "isWithdrawn" | "withdrawnAt" | "createdAt" | "updatedAt", ExtArgs["result"]["earnings"]>
  export type EarningsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type EarningsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type EarningsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $EarningsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Earnings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bookingId: string
      amount: number
      type: string
      isWithdrawn: boolean
      withdrawnAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["earnings"]>
    composites: {}
  }

  type EarningsGetPayload<S extends boolean | null | undefined | EarningsDefaultArgs> = $Result.GetResult<Prisma.$EarningsPayload, S>

  type EarningsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EarningsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EarningsCountAggregateInputType | true
    }

  export interface EarningsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Earnings'], meta: { name: 'Earnings' } }
    /**
     * Find zero or one Earnings that matches the filter.
     * @param {EarningsFindUniqueArgs} args - Arguments to find a Earnings
     * @example
     * // Get one Earnings
     * const earnings = await prisma.earnings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EarningsFindUniqueArgs>(args: SelectSubset<T, EarningsFindUniqueArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Earnings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EarningsFindUniqueOrThrowArgs} args - Arguments to find a Earnings
     * @example
     * // Get one Earnings
     * const earnings = await prisma.earnings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EarningsFindUniqueOrThrowArgs>(args: SelectSubset<T, EarningsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Earnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningsFindFirstArgs} args - Arguments to find a Earnings
     * @example
     * // Get one Earnings
     * const earnings = await prisma.earnings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EarningsFindFirstArgs>(args?: SelectSubset<T, EarningsFindFirstArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Earnings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningsFindFirstOrThrowArgs} args - Arguments to find a Earnings
     * @example
     * // Get one Earnings
     * const earnings = await prisma.earnings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EarningsFindFirstOrThrowArgs>(args?: SelectSubset<T, EarningsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Earnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Earnings
     * const earnings = await prisma.earnings.findMany()
     * 
     * // Get first 10 Earnings
     * const earnings = await prisma.earnings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const earningsWithIdOnly = await prisma.earnings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EarningsFindManyArgs>(args?: SelectSubset<T, EarningsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Earnings.
     * @param {EarningsCreateArgs} args - Arguments to create a Earnings.
     * @example
     * // Create one Earnings
     * const Earnings = await prisma.earnings.create({
     *   data: {
     *     // ... data to create a Earnings
     *   }
     * })
     * 
     */
    create<T extends EarningsCreateArgs>(args: SelectSubset<T, EarningsCreateArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Earnings.
     * @param {EarningsCreateManyArgs} args - Arguments to create many Earnings.
     * @example
     * // Create many Earnings
     * const earnings = await prisma.earnings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EarningsCreateManyArgs>(args?: SelectSubset<T, EarningsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Earnings and returns the data saved in the database.
     * @param {EarningsCreateManyAndReturnArgs} args - Arguments to create many Earnings.
     * @example
     * // Create many Earnings
     * const earnings = await prisma.earnings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Earnings and only return the `id`
     * const earningsWithIdOnly = await prisma.earnings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EarningsCreateManyAndReturnArgs>(args?: SelectSubset<T, EarningsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Earnings.
     * @param {EarningsDeleteArgs} args - Arguments to delete one Earnings.
     * @example
     * // Delete one Earnings
     * const Earnings = await prisma.earnings.delete({
     *   where: {
     *     // ... filter to delete one Earnings
     *   }
     * })
     * 
     */
    delete<T extends EarningsDeleteArgs>(args: SelectSubset<T, EarningsDeleteArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Earnings.
     * @param {EarningsUpdateArgs} args - Arguments to update one Earnings.
     * @example
     * // Update one Earnings
     * const earnings = await prisma.earnings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EarningsUpdateArgs>(args: SelectSubset<T, EarningsUpdateArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Earnings.
     * @param {EarningsDeleteManyArgs} args - Arguments to filter Earnings to delete.
     * @example
     * // Delete a few Earnings
     * const { count } = await prisma.earnings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EarningsDeleteManyArgs>(args?: SelectSubset<T, EarningsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Earnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Earnings
     * const earnings = await prisma.earnings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EarningsUpdateManyArgs>(args: SelectSubset<T, EarningsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Earnings and returns the data updated in the database.
     * @param {EarningsUpdateManyAndReturnArgs} args - Arguments to update many Earnings.
     * @example
     * // Update many Earnings
     * const earnings = await prisma.earnings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Earnings and only return the `id`
     * const earningsWithIdOnly = await prisma.earnings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EarningsUpdateManyAndReturnArgs>(args: SelectSubset<T, EarningsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Earnings.
     * @param {EarningsUpsertArgs} args - Arguments to update or create a Earnings.
     * @example
     * // Update or create a Earnings
     * const earnings = await prisma.earnings.upsert({
     *   create: {
     *     // ... data to create a Earnings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Earnings we want to update
     *   }
     * })
     */
    upsert<T extends EarningsUpsertArgs>(args: SelectSubset<T, EarningsUpsertArgs<ExtArgs>>): Prisma__EarningsClient<$Result.GetResult<Prisma.$EarningsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Earnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningsCountArgs} args - Arguments to filter Earnings to count.
     * @example
     * // Count the number of Earnings
     * const count = await prisma.earnings.count({
     *   where: {
     *     // ... the filter for the Earnings we want to count
     *   }
     * })
    **/
    count<T extends EarningsCountArgs>(
      args?: Subset<T, EarningsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EarningsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Earnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EarningsAggregateArgs>(args: Subset<T, EarningsAggregateArgs>): Prisma.PrismaPromise<GetEarningsAggregateType<T>>

    /**
     * Group by Earnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningsGroupByArgs} args - Group by arguments.
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
      T extends EarningsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EarningsGroupByArgs['orderBy'] }
        : { orderBy?: EarningsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EarningsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEarningsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Earnings model
   */
  readonly fields: EarningsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Earnings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EarningsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Earnings model
   */
  interface EarningsFieldRefs {
    readonly id: FieldRef<"Earnings", 'String'>
    readonly userId: FieldRef<"Earnings", 'String'>
    readonly bookingId: FieldRef<"Earnings", 'String'>
    readonly amount: FieldRef<"Earnings", 'Float'>
    readonly type: FieldRef<"Earnings", 'String'>
    readonly isWithdrawn: FieldRef<"Earnings", 'Boolean'>
    readonly withdrawnAt: FieldRef<"Earnings", 'DateTime'>
    readonly createdAt: FieldRef<"Earnings", 'DateTime'>
    readonly updatedAt: FieldRef<"Earnings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Earnings findUnique
   */
  export type EarningsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * Filter, which Earnings to fetch.
     */
    where: EarningsWhereUniqueInput
  }

  /**
   * Earnings findUniqueOrThrow
   */
  export type EarningsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * Filter, which Earnings to fetch.
     */
    where: EarningsWhereUniqueInput
  }

  /**
   * Earnings findFirst
   */
  export type EarningsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * Filter, which Earnings to fetch.
     */
    where?: EarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnings to fetch.
     */
    orderBy?: EarningsOrderByWithRelationInput | EarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Earnings.
     */
    cursor?: EarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Earnings.
     */
    distinct?: EarningsScalarFieldEnum | EarningsScalarFieldEnum[]
  }

  /**
   * Earnings findFirstOrThrow
   */
  export type EarningsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * Filter, which Earnings to fetch.
     */
    where?: EarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnings to fetch.
     */
    orderBy?: EarningsOrderByWithRelationInput | EarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Earnings.
     */
    cursor?: EarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Earnings.
     */
    distinct?: EarningsScalarFieldEnum | EarningsScalarFieldEnum[]
  }

  /**
   * Earnings findMany
   */
  export type EarningsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * Filter, which Earnings to fetch.
     */
    where?: EarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnings to fetch.
     */
    orderBy?: EarningsOrderByWithRelationInput | EarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Earnings.
     */
    cursor?: EarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnings.
     */
    skip?: number
    distinct?: EarningsScalarFieldEnum | EarningsScalarFieldEnum[]
  }

  /**
   * Earnings create
   */
  export type EarningsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * The data needed to create a Earnings.
     */
    data: XOR<EarningsCreateInput, EarningsUncheckedCreateInput>
  }

  /**
   * Earnings createMany
   */
  export type EarningsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Earnings.
     */
    data: EarningsCreateManyInput | EarningsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Earnings createManyAndReturn
   */
  export type EarningsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * The data used to create many Earnings.
     */
    data: EarningsCreateManyInput | EarningsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Earnings update
   */
  export type EarningsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * The data needed to update a Earnings.
     */
    data: XOR<EarningsUpdateInput, EarningsUncheckedUpdateInput>
    /**
     * Choose, which Earnings to update.
     */
    where: EarningsWhereUniqueInput
  }

  /**
   * Earnings updateMany
   */
  export type EarningsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Earnings.
     */
    data: XOR<EarningsUpdateManyMutationInput, EarningsUncheckedUpdateManyInput>
    /**
     * Filter which Earnings to update
     */
    where?: EarningsWhereInput
    /**
     * Limit how many Earnings to update.
     */
    limit?: number
  }

  /**
   * Earnings updateManyAndReturn
   */
  export type EarningsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * The data used to update Earnings.
     */
    data: XOR<EarningsUpdateManyMutationInput, EarningsUncheckedUpdateManyInput>
    /**
     * Filter which Earnings to update
     */
    where?: EarningsWhereInput
    /**
     * Limit how many Earnings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Earnings upsert
   */
  export type EarningsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * The filter to search for the Earnings to update in case it exists.
     */
    where: EarningsWhereUniqueInput
    /**
     * In case the Earnings found by the `where` argument doesn't exist, create a new Earnings with this data.
     */
    create: XOR<EarningsCreateInput, EarningsUncheckedCreateInput>
    /**
     * In case the Earnings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EarningsUpdateInput, EarningsUncheckedUpdateInput>
  }

  /**
   * Earnings delete
   */
  export type EarningsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
    /**
     * Filter which Earnings to delete.
     */
    where: EarningsWhereUniqueInput
  }

  /**
   * Earnings deleteMany
   */
  export type EarningsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Earnings to delete
     */
    where?: EarningsWhereInput
    /**
     * Limit how many Earnings to delete.
     */
    limit?: number
  }

  /**
   * Earnings without action
   */
  export type EarningsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earnings
     */
    select?: EarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Earnings
     */
    omit?: EarningsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EarningsInclude<ExtArgs> | null
  }


  /**
   * Model Withdrawal
   */

  export type AggregateWithdrawal = {
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  export type WithdrawalAvgAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawalSumAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    status: $Enums.WithdrawalStatus | null
    bankDetails: string | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WithdrawalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    status: $Enums.WithdrawalStatus | null
    bankDetails: string | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WithdrawalCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    status: number
    bankDetails: number
    remarks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WithdrawalAvgAggregateInputType = {
    amount?: true
  }

  export type WithdrawalSumAggregateInputType = {
    amount?: true
  }

  export type WithdrawalMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    status?: true
    bankDetails?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WithdrawalMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    status?: true
    bankDetails?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WithdrawalCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    status?: true
    bankDetails?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WithdrawalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Withdrawal to aggregate.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Withdrawals
    **/
    _count?: true | WithdrawalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalMaxAggregateInputType
  }

  export type GetWithdrawalAggregateType<T extends WithdrawalAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawal[P]>
      : GetScalarType<T[P], AggregateWithdrawal[P]>
  }




  export type WithdrawalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalWhereInput
    orderBy?: WithdrawalOrderByWithAggregationInput | WithdrawalOrderByWithAggregationInput[]
    by: WithdrawalScalarFieldEnum[] | WithdrawalScalarFieldEnum
    having?: WithdrawalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalCountAggregateInputType | true
    _avg?: WithdrawalAvgAggregateInputType
    _sum?: WithdrawalSumAggregateInputType
    _min?: WithdrawalMinAggregateInputType
    _max?: WithdrawalMaxAggregateInputType
  }

  export type WithdrawalGroupByOutputType = {
    id: string
    userId: string
    amount: number
    status: $Enums.WithdrawalStatus
    bankDetails: string
    remarks: string | null
    createdAt: Date
    updatedAt: Date
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  type GetWithdrawalGroupByPayload<T extends WithdrawalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
        }
      >
    >


  export type WithdrawalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    bankDetails?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawal"]>

  export type WithdrawalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    bankDetails?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawal"]>

  export type WithdrawalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    bankDetails?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawal"]>

  export type WithdrawalSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    bankDetails?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WithdrawalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "status" | "bankDetails" | "remarks" | "createdAt" | "updatedAt", ExtArgs["result"]["withdrawal"]>
  export type WithdrawalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WithdrawalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WithdrawalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WithdrawalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Withdrawal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      status: $Enums.WithdrawalStatus
      bankDetails: string
      remarks: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["withdrawal"]>
    composites: {}
  }

  type WithdrawalGetPayload<S extends boolean | null | undefined | WithdrawalDefaultArgs> = $Result.GetResult<Prisma.$WithdrawalPayload, S>

  type WithdrawalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WithdrawalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawalCountAggregateInputType | true
    }

  export interface WithdrawalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Withdrawal'], meta: { name: 'Withdrawal' } }
    /**
     * Find zero or one Withdrawal that matches the filter.
     * @param {WithdrawalFindUniqueArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WithdrawalFindUniqueArgs>(args: SelectSubset<T, WithdrawalFindUniqueArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Withdrawal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WithdrawalFindUniqueOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WithdrawalFindUniqueOrThrowArgs>(args: SelectSubset<T, WithdrawalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindFirstArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WithdrawalFindFirstArgs>(args?: SelectSubset<T, WithdrawalFindFirstArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindFirstOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WithdrawalFindFirstOrThrowArgs>(args?: SelectSubset<T, WithdrawalFindFirstOrThrowArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Withdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany()
     * 
     * // Get first 10 Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WithdrawalFindManyArgs>(args?: SelectSubset<T, WithdrawalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Withdrawal.
     * @param {WithdrawalCreateArgs} args - Arguments to create a Withdrawal.
     * @example
     * // Create one Withdrawal
     * const Withdrawal = await prisma.withdrawal.create({
     *   data: {
     *     // ... data to create a Withdrawal
     *   }
     * })
     * 
     */
    create<T extends WithdrawalCreateArgs>(args: SelectSubset<T, WithdrawalCreateArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Withdrawals.
     * @param {WithdrawalCreateManyArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawal = await prisma.withdrawal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WithdrawalCreateManyArgs>(args?: SelectSubset<T, WithdrawalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Withdrawals and returns the data saved in the database.
     * @param {WithdrawalCreateManyAndReturnArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawal = await prisma.withdrawal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Withdrawals and only return the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WithdrawalCreateManyAndReturnArgs>(args?: SelectSubset<T, WithdrawalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Withdrawal.
     * @param {WithdrawalDeleteArgs} args - Arguments to delete one Withdrawal.
     * @example
     * // Delete one Withdrawal
     * const Withdrawal = await prisma.withdrawal.delete({
     *   where: {
     *     // ... filter to delete one Withdrawal
     *   }
     * })
     * 
     */
    delete<T extends WithdrawalDeleteArgs>(args: SelectSubset<T, WithdrawalDeleteArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Withdrawal.
     * @param {WithdrawalUpdateArgs} args - Arguments to update one Withdrawal.
     * @example
     * // Update one Withdrawal
     * const withdrawal = await prisma.withdrawal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WithdrawalUpdateArgs>(args: SelectSubset<T, WithdrawalUpdateArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Withdrawals.
     * @param {WithdrawalDeleteManyArgs} args - Arguments to filter Withdrawals to delete.
     * @example
     * // Delete a few Withdrawals
     * const { count } = await prisma.withdrawal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WithdrawalDeleteManyArgs>(args?: SelectSubset<T, WithdrawalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Withdrawals
     * const withdrawal = await prisma.withdrawal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WithdrawalUpdateManyArgs>(args: SelectSubset<T, WithdrawalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals and returns the data updated in the database.
     * @param {WithdrawalUpdateManyAndReturnArgs} args - Arguments to update many Withdrawals.
     * @example
     * // Update many Withdrawals
     * const withdrawal = await prisma.withdrawal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Withdrawals and only return the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WithdrawalUpdateManyAndReturnArgs>(args: SelectSubset<T, WithdrawalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Withdrawal.
     * @param {WithdrawalUpsertArgs} args - Arguments to update or create a Withdrawal.
     * @example
     * // Update or create a Withdrawal
     * const withdrawal = await prisma.withdrawal.upsert({
     *   create: {
     *     // ... data to create a Withdrawal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Withdrawal we want to update
     *   }
     * })
     */
    upsert<T extends WithdrawalUpsertArgs>(args: SelectSubset<T, WithdrawalUpsertArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalCountArgs} args - Arguments to filter Withdrawals to count.
     * @example
     * // Count the number of Withdrawals
     * const count = await prisma.withdrawal.count({
     *   where: {
     *     // ... the filter for the Withdrawals we want to count
     *   }
     * })
    **/
    count<T extends WithdrawalCountArgs>(
      args?: Subset<T, WithdrawalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WithdrawalAggregateArgs>(args: Subset<T, WithdrawalAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalAggregateType<T>>

    /**
     * Group by Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalGroupByArgs} args - Group by arguments.
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
      T extends WithdrawalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawalGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WithdrawalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Withdrawal model
   */
  readonly fields: WithdrawalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Withdrawal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WithdrawalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Withdrawal model
   */
  interface WithdrawalFieldRefs {
    readonly id: FieldRef<"Withdrawal", 'String'>
    readonly userId: FieldRef<"Withdrawal", 'String'>
    readonly amount: FieldRef<"Withdrawal", 'Float'>
    readonly status: FieldRef<"Withdrawal", 'WithdrawalStatus'>
    readonly bankDetails: FieldRef<"Withdrawal", 'String'>
    readonly remarks: FieldRef<"Withdrawal", 'String'>
    readonly createdAt: FieldRef<"Withdrawal", 'DateTime'>
    readonly updatedAt: FieldRef<"Withdrawal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Withdrawal findUnique
   */
  export type WithdrawalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal findUniqueOrThrow
   */
  export type WithdrawalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal findFirst
   */
  export type WithdrawalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawals.
     */
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal findFirstOrThrow
   */
  export type WithdrawalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawals.
     */
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal findMany
   */
  export type WithdrawalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawals to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal create
   */
  export type WithdrawalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to create a Withdrawal.
     */
    data: XOR<WithdrawalCreateInput, WithdrawalUncheckedCreateInput>
  }

  /**
   * Withdrawal createMany
   */
  export type WithdrawalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Withdrawals.
     */
    data: WithdrawalCreateManyInput | WithdrawalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Withdrawal createManyAndReturn
   */
  export type WithdrawalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * The data used to create many Withdrawals.
     */
    data: WithdrawalCreateManyInput | WithdrawalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Withdrawal update
   */
  export type WithdrawalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to update a Withdrawal.
     */
    data: XOR<WithdrawalUpdateInput, WithdrawalUncheckedUpdateInput>
    /**
     * Choose, which Withdrawal to update.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal updateMany
   */
  export type WithdrawalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Withdrawals.
     */
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyInput>
    /**
     * Filter which Withdrawals to update
     */
    where?: WithdrawalWhereInput
    /**
     * Limit how many Withdrawals to update.
     */
    limit?: number
  }

  /**
   * Withdrawal updateManyAndReturn
   */
  export type WithdrawalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * The data used to update Withdrawals.
     */
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyInput>
    /**
     * Filter which Withdrawals to update
     */
    where?: WithdrawalWhereInput
    /**
     * Limit how many Withdrawals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Withdrawal upsert
   */
  export type WithdrawalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The filter to search for the Withdrawal to update in case it exists.
     */
    where: WithdrawalWhereUniqueInput
    /**
     * In case the Withdrawal found by the `where` argument doesn't exist, create a new Withdrawal with this data.
     */
    create: XOR<WithdrawalCreateInput, WithdrawalUncheckedCreateInput>
    /**
     * In case the Withdrawal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawalUpdateInput, WithdrawalUncheckedUpdateInput>
  }

  /**
   * Withdrawal delete
   */
  export type WithdrawalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter which Withdrawal to delete.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal deleteMany
   */
  export type WithdrawalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Withdrawals to delete
     */
    where?: WithdrawalWhereInput
    /**
     * Limit how many Withdrawals to delete.
     */
    limit?: number
  }

  /**
   * Withdrawal without action
   */
  export type WithdrawalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    avatarUrl: 'avatarUrl',
    totalEarnings: 'totalEarnings',
    walletBalance: 'walletBalance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HotelScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    name: 'name',
    description: 'description',
    city: 'city',
    address: 'address',
    price: 'price',
    rating: 'rating',
    images: 'images',
    amenities: 'amenities',
    totalRooms: 'totalRooms',
    availableRooms: 'availableRooms',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HotelScalarFieldEnum = (typeof HotelScalarFieldEnum)[keyof typeof HotelScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    hotelId: 'hotelId',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    guests: 'guests',
    totalAmount: 'totalAmount',
    status: 'status',
    paymentId: 'paymentId',
    paymentOrderId: 'paymentOrderId',
    paymentSignature: 'paymentSignature',
    isPaid: 'isPaid',
    partnerAmount: 'partnerAmount',
    adminAmount: 'adminAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const EarningsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bookingId: 'bookingId',
    amount: 'amount',
    type: 'type',
    isWithdrawn: 'isWithdrawn',
    withdrawnAt: 'withdrawnAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EarningsScalarFieldEnum = (typeof EarningsScalarFieldEnum)[keyof typeof EarningsScalarFieldEnum]


  export const WithdrawalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    status: 'status',
    bankDetails: 'bankDetails',
    remarks: 'remarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WithdrawalScalarFieldEnum = (typeof WithdrawalScalarFieldEnum)[keyof typeof WithdrawalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'WithdrawalStatus'
   */
  export type EnumWithdrawalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WithdrawalStatus'>
    


  /**
   * Reference to a field of type 'WithdrawalStatus[]'
   */
  export type ListEnumWithdrawalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WithdrawalStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    avatarUrl?: StringNullableFilter<"User"> | string | null
    totalEarnings?: FloatFilter<"User"> | number
    walletBalance?: FloatFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hotels?: HotelListRelationFilter
    bookings?: BookingListRelationFilter
    earnings?: EarningsListRelationFilter
    withdrawals?: WithdrawalListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    totalEarnings?: SortOrder
    walletBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hotels?: HotelOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    earnings?: EarningsOrderByRelationAggregateInput
    withdrawals?: WithdrawalOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    avatarUrl?: StringNullableFilter<"User"> | string | null
    totalEarnings?: FloatFilter<"User"> | number
    walletBalance?: FloatFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hotels?: HotelListRelationFilter
    bookings?: BookingListRelationFilter
    earnings?: EarningsListRelationFilter
    withdrawals?: WithdrawalListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    totalEarnings?: SortOrder
    walletBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    totalEarnings?: FloatWithAggregatesFilter<"User"> | number
    walletBalance?: FloatWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HotelWhereInput = {
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    id?: StringFilter<"Hotel"> | string
    ownerId?: StringFilter<"Hotel"> | string
    name?: StringFilter<"Hotel"> | string
    description?: StringFilter<"Hotel"> | string
    city?: StringFilter<"Hotel"> | string
    address?: StringFilter<"Hotel"> | string
    price?: FloatFilter<"Hotel"> | number
    rating?: FloatFilter<"Hotel"> | number
    images?: StringNullableListFilter<"Hotel">
    amenities?: StringNullableListFilter<"Hotel">
    totalRooms?: IntFilter<"Hotel"> | number
    availableRooms?: IntFilter<"Hotel"> | number
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeFilter<"Hotel"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type HotelOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    city?: SortOrder
    address?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    totalRooms?: SortOrder
    availableRooms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type HotelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    ownerId?: StringFilter<"Hotel"> | string
    name?: StringFilter<"Hotel"> | string
    description?: StringFilter<"Hotel"> | string
    city?: StringFilter<"Hotel"> | string
    address?: StringFilter<"Hotel"> | string
    price?: FloatFilter<"Hotel"> | number
    rating?: FloatFilter<"Hotel"> | number
    images?: StringNullableListFilter<"Hotel">
    amenities?: StringNullableListFilter<"Hotel">
    totalRooms?: IntFilter<"Hotel"> | number
    availableRooms?: IntFilter<"Hotel"> | number
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeFilter<"Hotel"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
  }, "id">

  export type HotelOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    city?: SortOrder
    address?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    totalRooms?: SortOrder
    availableRooms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HotelCountOrderByAggregateInput
    _avg?: HotelAvgOrderByAggregateInput
    _max?: HotelMaxOrderByAggregateInput
    _min?: HotelMinOrderByAggregateInput
    _sum?: HotelSumOrderByAggregateInput
  }

  export type HotelScalarWhereWithAggregatesInput = {
    AND?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    OR?: HotelScalarWhereWithAggregatesInput[]
    NOT?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hotel"> | string
    ownerId?: StringWithAggregatesFilter<"Hotel"> | string
    name?: StringWithAggregatesFilter<"Hotel"> | string
    description?: StringWithAggregatesFilter<"Hotel"> | string
    city?: StringWithAggregatesFilter<"Hotel"> | string
    address?: StringWithAggregatesFilter<"Hotel"> | string
    price?: FloatWithAggregatesFilter<"Hotel"> | number
    rating?: FloatWithAggregatesFilter<"Hotel"> | number
    images?: StringNullableListFilter<"Hotel">
    amenities?: StringNullableListFilter<"Hotel">
    totalRooms?: IntWithAggregatesFilter<"Hotel"> | number
    availableRooms?: IntWithAggregatesFilter<"Hotel"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hotel"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    hotelId?: StringFilter<"Booking"> | string
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    guests?: IntFilter<"Booking"> | number
    totalAmount?: FloatFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentId?: StringNullableFilter<"Booking"> | string | null
    paymentOrderId?: StringNullableFilter<"Booking"> | string | null
    paymentSignature?: StringNullableFilter<"Booking"> | string | null
    isPaid?: BoolFilter<"Booking"> | boolean
    partnerAmount?: FloatNullableFilter<"Booking"> | number | null
    adminAmount?: FloatNullableFilter<"Booking"> | number | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    earnings?: EarningsListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    paymentOrderId?: SortOrderInput | SortOrder
    paymentSignature?: SortOrderInput | SortOrder
    isPaid?: SortOrder
    partnerAmount?: SortOrderInput | SortOrder
    adminAmount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    hotel?: HotelOrderByWithRelationInput
    earnings?: EarningsOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: StringFilter<"Booking"> | string
    hotelId?: StringFilter<"Booking"> | string
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    guests?: IntFilter<"Booking"> | number
    totalAmount?: FloatFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentId?: StringNullableFilter<"Booking"> | string | null
    paymentOrderId?: StringNullableFilter<"Booking"> | string | null
    paymentSignature?: StringNullableFilter<"Booking"> | string | null
    isPaid?: BoolFilter<"Booking"> | boolean
    partnerAmount?: FloatNullableFilter<"Booking"> | number | null
    adminAmount?: FloatNullableFilter<"Booking"> | number | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    earnings?: EarningsListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    paymentOrderId?: SortOrderInput | SortOrder
    paymentSignature?: SortOrderInput | SortOrder
    isPaid?: SortOrder
    partnerAmount?: SortOrderInput | SortOrder
    adminAmount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    userId?: StringWithAggregatesFilter<"Booking"> | string
    hotelId?: StringWithAggregatesFilter<"Booking"> | string
    checkIn?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    guests?: IntWithAggregatesFilter<"Booking"> | number
    totalAmount?: FloatWithAggregatesFilter<"Booking"> | number
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    paymentId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    paymentOrderId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    paymentSignature?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    isPaid?: BoolWithAggregatesFilter<"Booking"> | boolean
    partnerAmount?: FloatNullableWithAggregatesFilter<"Booking"> | number | null
    adminAmount?: FloatNullableWithAggregatesFilter<"Booking"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type EarningsWhereInput = {
    AND?: EarningsWhereInput | EarningsWhereInput[]
    OR?: EarningsWhereInput[]
    NOT?: EarningsWhereInput | EarningsWhereInput[]
    id?: StringFilter<"Earnings"> | string
    userId?: StringFilter<"Earnings"> | string
    bookingId?: StringFilter<"Earnings"> | string
    amount?: FloatFilter<"Earnings"> | number
    type?: StringFilter<"Earnings"> | string
    isWithdrawn?: BoolFilter<"Earnings"> | boolean
    withdrawnAt?: DateTimeNullableFilter<"Earnings"> | Date | string | null
    createdAt?: DateTimeFilter<"Earnings"> | Date | string
    updatedAt?: DateTimeFilter<"Earnings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type EarningsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    isWithdrawn?: SortOrder
    withdrawnAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
  }

  export type EarningsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EarningsWhereInput | EarningsWhereInput[]
    OR?: EarningsWhereInput[]
    NOT?: EarningsWhereInput | EarningsWhereInput[]
    userId?: StringFilter<"Earnings"> | string
    bookingId?: StringFilter<"Earnings"> | string
    amount?: FloatFilter<"Earnings"> | number
    type?: StringFilter<"Earnings"> | string
    isWithdrawn?: BoolFilter<"Earnings"> | boolean
    withdrawnAt?: DateTimeNullableFilter<"Earnings"> | Date | string | null
    createdAt?: DateTimeFilter<"Earnings"> | Date | string
    updatedAt?: DateTimeFilter<"Earnings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id">

  export type EarningsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    isWithdrawn?: SortOrder
    withdrawnAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EarningsCountOrderByAggregateInput
    _avg?: EarningsAvgOrderByAggregateInput
    _max?: EarningsMaxOrderByAggregateInput
    _min?: EarningsMinOrderByAggregateInput
    _sum?: EarningsSumOrderByAggregateInput
  }

  export type EarningsScalarWhereWithAggregatesInput = {
    AND?: EarningsScalarWhereWithAggregatesInput | EarningsScalarWhereWithAggregatesInput[]
    OR?: EarningsScalarWhereWithAggregatesInput[]
    NOT?: EarningsScalarWhereWithAggregatesInput | EarningsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Earnings"> | string
    userId?: StringWithAggregatesFilter<"Earnings"> | string
    bookingId?: StringWithAggregatesFilter<"Earnings"> | string
    amount?: FloatWithAggregatesFilter<"Earnings"> | number
    type?: StringWithAggregatesFilter<"Earnings"> | string
    isWithdrawn?: BoolWithAggregatesFilter<"Earnings"> | boolean
    withdrawnAt?: DateTimeNullableWithAggregatesFilter<"Earnings"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Earnings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Earnings"> | Date | string
  }

  export type WithdrawalWhereInput = {
    AND?: WithdrawalWhereInput | WithdrawalWhereInput[]
    OR?: WithdrawalWhereInput[]
    NOT?: WithdrawalWhereInput | WithdrawalWhereInput[]
    id?: StringFilter<"Withdrawal"> | string
    userId?: StringFilter<"Withdrawal"> | string
    amount?: FloatFilter<"Withdrawal"> | number
    status?: EnumWithdrawalStatusFilter<"Withdrawal"> | $Enums.WithdrawalStatus
    bankDetails?: StringFilter<"Withdrawal"> | string
    remarks?: StringNullableFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeFilter<"Withdrawal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WithdrawalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    bankDetails?: SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WithdrawalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WithdrawalWhereInput | WithdrawalWhereInput[]
    OR?: WithdrawalWhereInput[]
    NOT?: WithdrawalWhereInput | WithdrawalWhereInput[]
    userId?: StringFilter<"Withdrawal"> | string
    amount?: FloatFilter<"Withdrawal"> | number
    status?: EnumWithdrawalStatusFilter<"Withdrawal"> | $Enums.WithdrawalStatus
    bankDetails?: StringFilter<"Withdrawal"> | string
    remarks?: StringNullableFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeFilter<"Withdrawal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WithdrawalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    bankDetails?: SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WithdrawalCountOrderByAggregateInput
    _avg?: WithdrawalAvgOrderByAggregateInput
    _max?: WithdrawalMaxOrderByAggregateInput
    _min?: WithdrawalMinOrderByAggregateInput
    _sum?: WithdrawalSumOrderByAggregateInput
  }

  export type WithdrawalScalarWhereWithAggregatesInput = {
    AND?: WithdrawalScalarWhereWithAggregatesInput | WithdrawalScalarWhereWithAggregatesInput[]
    OR?: WithdrawalScalarWhereWithAggregatesInput[]
    NOT?: WithdrawalScalarWhereWithAggregatesInput | WithdrawalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Withdrawal"> | string
    userId?: StringWithAggregatesFilter<"Withdrawal"> | string
    amount?: FloatWithAggregatesFilter<"Withdrawal"> | number
    status?: EnumWithdrawalStatusWithAggregatesFilter<"Withdrawal"> | $Enums.WithdrawalStatus
    bankDetails?: StringWithAggregatesFilter<"Withdrawal"> | string
    remarks?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Withdrawal"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    totalEarnings?: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    earnings?: EarningsCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    totalEarnings?: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    earnings?: EarningsUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    earnings?: EarningsUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    earnings?: EarningsUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    totalEarnings?: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelCreateInput = {
    id?: string
    name: string
    description: string
    city: string
    address: string
    price: number
    rating?: number
    images?: HotelCreateimagesInput | string[]
    amenities?: HotelCreateamenitiesInput | string[]
    totalRooms: number
    availableRooms: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutHotelsInput
    bookings?: BookingCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateInput = {
    id?: string
    ownerId: string
    name: string
    description: string
    city: string
    address: string
    price: number
    rating?: number
    images?: HotelCreateimagesInput | string[]
    amenities?: HotelCreateamenitiesInput | string[]
    totalRooms: number
    availableRooms: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    images?: HotelUpdateimagesInput | string[]
    amenities?: HotelUpdateamenitiesInput | string[]
    totalRooms?: IntFieldUpdateOperationsInput | number
    availableRooms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutHotelsNestedInput
    bookings?: BookingUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    images?: HotelUpdateimagesInput | string[]
    amenities?: HotelUpdateamenitiesInput | string[]
    totalRooms?: IntFieldUpdateOperationsInput | number
    availableRooms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelCreateManyInput = {
    id?: string
    ownerId: string
    name: string
    description: string
    city: string
    address: string
    price: number
    rating?: number
    images?: HotelCreateimagesInput | string[]
    amenities?: HotelCreateamenitiesInput | string[]
    totalRooms: number
    availableRooms: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    images?: HotelUpdateimagesInput | string[]
    amenities?: HotelUpdateamenitiesInput | string[]
    totalRooms?: IntFieldUpdateOperationsInput | number
    availableRooms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    images?: HotelUpdateimagesInput | string[]
    amenities?: HotelUpdateamenitiesInput | string[]
    totalRooms?: IntFieldUpdateOperationsInput | number
    availableRooms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    status?: $Enums.BookingStatus
    paymentId?: string | null
    paymentOrderId?: string | null
    paymentSignature?: string | null
    isPaid?: boolean
    partnerAmount?: number | null
    adminAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    hotel: HotelCreateNestedOneWithoutBookingsInput
    earnings?: EarningsCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    userId: string
    hotelId: string
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    status?: $Enums.BookingStatus
    paymentId?: string | null
    paymentOrderId?: string | null
    paymentSignature?: string | null
    isPaid?: boolean
    partnerAmount?: number | null
    adminAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    earnings?: EarningsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSignature?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    partnerAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    adminAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    hotel?: HotelUpdateOneRequiredWithoutBookingsNestedInput
    earnings?: EarningsUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSignature?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    partnerAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    adminAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    earnings?: EarningsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    userId: string
    hotelId: string
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    status?: $Enums.BookingStatus
    paymentId?: string | null
    paymentOrderId?: string | null
    paymentSignature?: string | null
    isPaid?: boolean
    partnerAmount?: number | null
    adminAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSignature?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    partnerAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    adminAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSignature?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    partnerAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    adminAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarningsCreateInput = {
    id?: string
    amount: number
    type: string
    isWithdrawn?: boolean
    withdrawnAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEarningsInput
    booking: BookingCreateNestedOneWithoutEarningsInput
  }

  export type EarningsUncheckedCreateInput = {
    id?: string
    userId: string
    bookingId: string
    amount: number
    type: string
    isWithdrawn?: boolean
    withdrawnAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EarningsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    isWithdrawn?: BoolFieldUpdateOperationsInput | boolean
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEarningsNestedInput
    booking?: BookingUpdateOneRequiredWithoutEarningsNestedInput
  }

  export type EarningsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    isWithdrawn?: BoolFieldUpdateOperationsInput | boolean
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarningsCreateManyInput = {
    id?: string
    userId: string
    bookingId: string
    amount: number
    type: string
    isWithdrawn?: boolean
    withdrawnAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EarningsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    isWithdrawn?: BoolFieldUpdateOperationsInput | boolean
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarningsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    isWithdrawn?: BoolFieldUpdateOperationsInput | boolean
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalCreateInput = {
    id?: string
    amount: number
    status?: $Enums.WithdrawalStatus
    bankDetails: string
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWithdrawalsInput
  }

  export type WithdrawalUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    status?: $Enums.WithdrawalStatus
    bankDetails: string
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus
    bankDetails?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWithdrawalsNestedInput
  }

  export type WithdrawalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus
    bankDetails?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalCreateManyInput = {
    id?: string
    userId: string
    amount: number
    status?: $Enums.WithdrawalStatus
    bankDetails: string
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus
    bankDetails?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus
    bankDetails?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type HotelListRelationFilter = {
    every?: HotelWhereInput
    some?: HotelWhereInput
    none?: HotelWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type EarningsListRelationFilter = {
    every?: EarningsWhereInput
    some?: EarningsWhereInput
    none?: EarningsWhereInput
  }

  export type WithdrawalListRelationFilter = {
    every?: WithdrawalWhereInput
    some?: WithdrawalWhereInput
    none?: WithdrawalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HotelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EarningsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WithdrawalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    totalEarnings?: SortOrder
    walletBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    totalEarnings?: SortOrder
    walletBalance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    totalEarnings?: SortOrder
    walletBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    totalEarnings?: SortOrder
    walletBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    totalEarnings?: SortOrder
    walletBalance?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type HotelCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    city?: SortOrder
    address?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    totalRooms?: SortOrder
    availableRooms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelAvgOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
    totalRooms?: SortOrder
    availableRooms?: SortOrder
  }

  export type HotelMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    city?: SortOrder
    address?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    totalRooms?: SortOrder
    availableRooms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    city?: SortOrder
    address?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    totalRooms?: SortOrder
    availableRooms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelSumOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
    totalRooms?: SortOrder
    availableRooms?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type HotelScalarRelationFilter = {
    is?: HotelWhereInput
    isNot?: HotelWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    paymentOrderId?: SortOrder
    paymentSignature?: SortOrder
    isPaid?: SortOrder
    partnerAmount?: SortOrder
    adminAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    guests?: SortOrder
    totalAmount?: SortOrder
    partnerAmount?: SortOrder
    adminAmount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    paymentOrderId?: SortOrder
    paymentSignature?: SortOrder
    isPaid?: SortOrder
    partnerAmount?: SortOrder
    adminAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    paymentOrderId?: SortOrder
    paymentSignature?: SortOrder
    isPaid?: SortOrder
    partnerAmount?: SortOrder
    adminAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    guests?: SortOrder
    totalAmount?: SortOrder
    partnerAmount?: SortOrder
    adminAmount?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type EarningsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    isWithdrawn?: SortOrder
    withdrawnAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EarningsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EarningsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    isWithdrawn?: SortOrder
    withdrawnAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EarningsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    isWithdrawn?: SortOrder
    withdrawnAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EarningsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumWithdrawalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawalStatus | EnumWithdrawalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawalStatusFilter<$PrismaModel> | $Enums.WithdrawalStatus
  }

  export type WithdrawalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    bankDetails?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawalAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WithdrawalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    bankDetails?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    bankDetails?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawalSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumWithdrawalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawalStatus | EnumWithdrawalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawalStatusWithAggregatesFilter<$PrismaModel> | $Enums.WithdrawalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWithdrawalStatusFilter<$PrismaModel>
    _max?: NestedEnumWithdrawalStatusFilter<$PrismaModel>
  }

  export type HotelCreateNestedManyWithoutOwnerInput = {
    create?: XOR<HotelCreateWithoutOwnerInput, HotelUncheckedCreateWithoutOwnerInput> | HotelCreateWithoutOwnerInput[] | HotelUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutOwnerInput | HotelCreateOrConnectWithoutOwnerInput[]
    createMany?: HotelCreateManyOwnerInputEnvelope
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EarningsCreateNestedManyWithoutUserInput = {
    create?: XOR<EarningsCreateWithoutUserInput, EarningsUncheckedCreateWithoutUserInput> | EarningsCreateWithoutUserInput[] | EarningsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EarningsCreateOrConnectWithoutUserInput | EarningsCreateOrConnectWithoutUserInput[]
    createMany?: EarningsCreateManyUserInputEnvelope
    connect?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
  }

  export type WithdrawalCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
  }

  export type HotelUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<HotelCreateWithoutOwnerInput, HotelUncheckedCreateWithoutOwnerInput> | HotelCreateWithoutOwnerInput[] | HotelUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutOwnerInput | HotelCreateOrConnectWithoutOwnerInput[]
    createMany?: HotelCreateManyOwnerInputEnvelope
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EarningsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EarningsCreateWithoutUserInput, EarningsUncheckedCreateWithoutUserInput> | EarningsCreateWithoutUserInput[] | EarningsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EarningsCreateOrConnectWithoutUserInput | EarningsCreateOrConnectWithoutUserInput[]
    createMany?: EarningsCreateManyUserInputEnvelope
    connect?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
  }

  export type WithdrawalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HotelUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<HotelCreateWithoutOwnerInput, HotelUncheckedCreateWithoutOwnerInput> | HotelCreateWithoutOwnerInput[] | HotelUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutOwnerInput | HotelCreateOrConnectWithoutOwnerInput[]
    upsert?: HotelUpsertWithWhereUniqueWithoutOwnerInput | HotelUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: HotelCreateManyOwnerInputEnvelope
    set?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    disconnect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    delete?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    update?: HotelUpdateWithWhereUniqueWithoutOwnerInput | HotelUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: HotelUpdateManyWithWhereWithoutOwnerInput | HotelUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: HotelScalarWhereInput | HotelScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type EarningsUpdateManyWithoutUserNestedInput = {
    create?: XOR<EarningsCreateWithoutUserInput, EarningsUncheckedCreateWithoutUserInput> | EarningsCreateWithoutUserInput[] | EarningsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EarningsCreateOrConnectWithoutUserInput | EarningsCreateOrConnectWithoutUserInput[]
    upsert?: EarningsUpsertWithWhereUniqueWithoutUserInput | EarningsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EarningsCreateManyUserInputEnvelope
    set?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    disconnect?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    delete?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    connect?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    update?: EarningsUpdateWithWhereUniqueWithoutUserInput | EarningsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EarningsUpdateManyWithWhereWithoutUserInput | EarningsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EarningsScalarWhereInput | EarningsScalarWhereInput[]
  }

  export type WithdrawalUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawalUpsertWithWhereUniqueWithoutUserInput | WithdrawalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    set?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    disconnect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    delete?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    update?: WithdrawalUpdateWithWhereUniqueWithoutUserInput | WithdrawalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawalUpdateManyWithWhereWithoutUserInput | WithdrawalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
  }

  export type HotelUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<HotelCreateWithoutOwnerInput, HotelUncheckedCreateWithoutOwnerInput> | HotelCreateWithoutOwnerInput[] | HotelUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutOwnerInput | HotelCreateOrConnectWithoutOwnerInput[]
    upsert?: HotelUpsertWithWhereUniqueWithoutOwnerInput | HotelUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: HotelCreateManyOwnerInputEnvelope
    set?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    disconnect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    delete?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    update?: HotelUpdateWithWhereUniqueWithoutOwnerInput | HotelUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: HotelUpdateManyWithWhereWithoutOwnerInput | HotelUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: HotelScalarWhereInput | HotelScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type EarningsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EarningsCreateWithoutUserInput, EarningsUncheckedCreateWithoutUserInput> | EarningsCreateWithoutUserInput[] | EarningsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EarningsCreateOrConnectWithoutUserInput | EarningsCreateOrConnectWithoutUserInput[]
    upsert?: EarningsUpsertWithWhereUniqueWithoutUserInput | EarningsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EarningsCreateManyUserInputEnvelope
    set?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    disconnect?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    delete?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    connect?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    update?: EarningsUpdateWithWhereUniqueWithoutUserInput | EarningsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EarningsUpdateManyWithWhereWithoutUserInput | EarningsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EarningsScalarWhereInput | EarningsScalarWhereInput[]
  }

  export type WithdrawalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawalUpsertWithWhereUniqueWithoutUserInput | WithdrawalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    set?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    disconnect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    delete?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    update?: WithdrawalUpdateWithWhereUniqueWithoutUserInput | WithdrawalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawalUpdateManyWithWhereWithoutUserInput | WithdrawalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
  }

  export type HotelCreateimagesInput = {
    set: string[]
  }

  export type HotelCreateamenitiesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutHotelsInput = {
    create?: XOR<UserCreateWithoutHotelsInput, UserUncheckedCreateWithoutHotelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHotelsInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutHotelInput = {
    create?: XOR<BookingCreateWithoutHotelInput, BookingUncheckedCreateWithoutHotelInput> | BookingCreateWithoutHotelInput[] | BookingUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutHotelInput | BookingCreateOrConnectWithoutHotelInput[]
    createMany?: BookingCreateManyHotelInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<BookingCreateWithoutHotelInput, BookingUncheckedCreateWithoutHotelInput> | BookingCreateWithoutHotelInput[] | BookingUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutHotelInput | BookingCreateOrConnectWithoutHotelInput[]
    createMany?: BookingCreateManyHotelInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type HotelUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type HotelUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutHotelsNestedInput = {
    create?: XOR<UserCreateWithoutHotelsInput, UserUncheckedCreateWithoutHotelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHotelsInput
    upsert?: UserUpsertWithoutHotelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHotelsInput, UserUpdateWithoutHotelsInput>, UserUncheckedUpdateWithoutHotelsInput>
  }

  export type BookingUpdateManyWithoutHotelNestedInput = {
    create?: XOR<BookingCreateWithoutHotelInput, BookingUncheckedCreateWithoutHotelInput> | BookingCreateWithoutHotelInput[] | BookingUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutHotelInput | BookingCreateOrConnectWithoutHotelInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutHotelInput | BookingUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: BookingCreateManyHotelInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutHotelInput | BookingUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutHotelInput | BookingUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<BookingCreateWithoutHotelInput, BookingUncheckedCreateWithoutHotelInput> | BookingCreateWithoutHotelInput[] | BookingUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutHotelInput | BookingCreateOrConnectWithoutHotelInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutHotelInput | BookingUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: BookingCreateManyHotelInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutHotelInput | BookingUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutHotelInput | BookingUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type HotelCreateNestedOneWithoutBookingsInput = {
    create?: XOR<HotelCreateWithoutBookingsInput, HotelUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutBookingsInput
    connect?: HotelWhereUniqueInput
  }

  export type EarningsCreateNestedManyWithoutBookingInput = {
    create?: XOR<EarningsCreateWithoutBookingInput, EarningsUncheckedCreateWithoutBookingInput> | EarningsCreateWithoutBookingInput[] | EarningsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: EarningsCreateOrConnectWithoutBookingInput | EarningsCreateOrConnectWithoutBookingInput[]
    createMany?: EarningsCreateManyBookingInputEnvelope
    connect?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
  }

  export type EarningsUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<EarningsCreateWithoutBookingInput, EarningsUncheckedCreateWithoutBookingInput> | EarningsCreateWithoutBookingInput[] | EarningsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: EarningsCreateOrConnectWithoutBookingInput | EarningsCreateOrConnectWithoutBookingInput[]
    createMany?: EarningsCreateManyBookingInputEnvelope
    connect?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type HotelUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<HotelCreateWithoutBookingsInput, HotelUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutBookingsInput
    upsert?: HotelUpsertWithoutBookingsInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutBookingsInput, HotelUpdateWithoutBookingsInput>, HotelUncheckedUpdateWithoutBookingsInput>
  }

  export type EarningsUpdateManyWithoutBookingNestedInput = {
    create?: XOR<EarningsCreateWithoutBookingInput, EarningsUncheckedCreateWithoutBookingInput> | EarningsCreateWithoutBookingInput[] | EarningsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: EarningsCreateOrConnectWithoutBookingInput | EarningsCreateOrConnectWithoutBookingInput[]
    upsert?: EarningsUpsertWithWhereUniqueWithoutBookingInput | EarningsUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: EarningsCreateManyBookingInputEnvelope
    set?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    disconnect?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    delete?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    connect?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    update?: EarningsUpdateWithWhereUniqueWithoutBookingInput | EarningsUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: EarningsUpdateManyWithWhereWithoutBookingInput | EarningsUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: EarningsScalarWhereInput | EarningsScalarWhereInput[]
  }

  export type EarningsUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<EarningsCreateWithoutBookingInput, EarningsUncheckedCreateWithoutBookingInput> | EarningsCreateWithoutBookingInput[] | EarningsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: EarningsCreateOrConnectWithoutBookingInput | EarningsCreateOrConnectWithoutBookingInput[]
    upsert?: EarningsUpsertWithWhereUniqueWithoutBookingInput | EarningsUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: EarningsCreateManyBookingInputEnvelope
    set?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    disconnect?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    delete?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    connect?: EarningsWhereUniqueInput | EarningsWhereUniqueInput[]
    update?: EarningsUpdateWithWhereUniqueWithoutBookingInput | EarningsUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: EarningsUpdateManyWithWhereWithoutBookingInput | EarningsUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: EarningsScalarWhereInput | EarningsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEarningsInput = {
    create?: XOR<UserCreateWithoutEarningsInput, UserUncheckedCreateWithoutEarningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEarningsInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutEarningsInput = {
    create?: XOR<BookingCreateWithoutEarningsInput, BookingUncheckedCreateWithoutEarningsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutEarningsInput
    connect?: BookingWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutEarningsNestedInput = {
    create?: XOR<UserCreateWithoutEarningsInput, UserUncheckedCreateWithoutEarningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEarningsInput
    upsert?: UserUpsertWithoutEarningsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEarningsInput, UserUpdateWithoutEarningsInput>, UserUncheckedUpdateWithoutEarningsInput>
  }

  export type BookingUpdateOneRequiredWithoutEarningsNestedInput = {
    create?: XOR<BookingCreateWithoutEarningsInput, BookingUncheckedCreateWithoutEarningsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutEarningsInput
    upsert?: BookingUpsertWithoutEarningsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutEarningsInput, BookingUpdateWithoutEarningsInput>, BookingUncheckedUpdateWithoutEarningsInput>
  }

  export type UserCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumWithdrawalStatusFieldUpdateOperationsInput = {
    set?: $Enums.WithdrawalStatus
  }

  export type UserUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalsInput
    upsert?: UserUpsertWithoutWithdrawalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWithdrawalsInput, UserUpdateWithoutWithdrawalsInput>, UserUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumWithdrawalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawalStatus | EnumWithdrawalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawalStatusFilter<$PrismaModel> | $Enums.WithdrawalStatus
  }

  export type NestedEnumWithdrawalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawalStatus | EnumWithdrawalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawalStatusWithAggregatesFilter<$PrismaModel> | $Enums.WithdrawalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWithdrawalStatusFilter<$PrismaModel>
    _max?: NestedEnumWithdrawalStatusFilter<$PrismaModel>
  }

  export type HotelCreateWithoutOwnerInput = {
    id?: string
    name: string
    description: string
    city: string
    address: string
    price: number
    rating?: number
    images?: HotelCreateimagesInput | string[]
    amenities?: HotelCreateamenitiesInput | string[]
    totalRooms: number
    availableRooms: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description: string
    city: string
    address: string
    price: number
    rating?: number
    images?: HotelCreateimagesInput | string[]
    amenities?: HotelCreateamenitiesInput | string[]
    totalRooms: number
    availableRooms: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutOwnerInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutOwnerInput, HotelUncheckedCreateWithoutOwnerInput>
  }

  export type HotelCreateManyOwnerInputEnvelope = {
    data: HotelCreateManyOwnerInput | HotelCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutUserInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    status?: $Enums.BookingStatus
    paymentId?: string | null
    paymentOrderId?: string | null
    paymentSignature?: string | null
    isPaid?: boolean
    partnerAmount?: number | null
    adminAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutBookingsInput
    earnings?: EarningsCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    hotelId: string
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    status?: $Enums.BookingStatus
    paymentId?: string | null
    paymentOrderId?: string | null
    paymentSignature?: string | null
    isPaid?: boolean
    partnerAmount?: number | null
    adminAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    earnings?: EarningsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EarningsCreateWithoutUserInput = {
    id?: string
    amount: number
    type: string
    isWithdrawn?: boolean
    withdrawnAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutEarningsInput
  }

  export type EarningsUncheckedCreateWithoutUserInput = {
    id?: string
    bookingId: string
    amount: number
    type: string
    isWithdrawn?: boolean
    withdrawnAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EarningsCreateOrConnectWithoutUserInput = {
    where: EarningsWhereUniqueInput
    create: XOR<EarningsCreateWithoutUserInput, EarningsUncheckedCreateWithoutUserInput>
  }

  export type EarningsCreateManyUserInputEnvelope = {
    data: EarningsCreateManyUserInput | EarningsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WithdrawalCreateWithoutUserInput = {
    id?: string
    amount: number
    status?: $Enums.WithdrawalStatus
    bankDetails: string
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    status?: $Enums.WithdrawalStatus
    bankDetails: string
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalCreateOrConnectWithoutUserInput = {
    where: WithdrawalWhereUniqueInput
    create: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput>
  }

  export type WithdrawalCreateManyUserInputEnvelope = {
    data: WithdrawalCreateManyUserInput | WithdrawalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HotelUpsertWithWhereUniqueWithoutOwnerInput = {
    where: HotelWhereUniqueInput
    update: XOR<HotelUpdateWithoutOwnerInput, HotelUncheckedUpdateWithoutOwnerInput>
    create: XOR<HotelCreateWithoutOwnerInput, HotelUncheckedCreateWithoutOwnerInput>
  }

  export type HotelUpdateWithWhereUniqueWithoutOwnerInput = {
    where: HotelWhereUniqueInput
    data: XOR<HotelUpdateWithoutOwnerInput, HotelUncheckedUpdateWithoutOwnerInput>
  }

  export type HotelUpdateManyWithWhereWithoutOwnerInput = {
    where: HotelScalarWhereInput
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyWithoutOwnerInput>
  }

  export type HotelScalarWhereInput = {
    AND?: HotelScalarWhereInput | HotelScalarWhereInput[]
    OR?: HotelScalarWhereInput[]
    NOT?: HotelScalarWhereInput | HotelScalarWhereInput[]
    id?: StringFilter<"Hotel"> | string
    ownerId?: StringFilter<"Hotel"> | string
    name?: StringFilter<"Hotel"> | string
    description?: StringFilter<"Hotel"> | string
    city?: StringFilter<"Hotel"> | string
    address?: StringFilter<"Hotel"> | string
    price?: FloatFilter<"Hotel"> | number
    rating?: FloatFilter<"Hotel"> | number
    images?: StringNullableListFilter<"Hotel">
    amenities?: StringNullableListFilter<"Hotel">
    totalRooms?: IntFilter<"Hotel"> | number
    availableRooms?: IntFilter<"Hotel"> | number
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeFilter<"Hotel"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    hotelId?: StringFilter<"Booking"> | string
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    guests?: IntFilter<"Booking"> | number
    totalAmount?: FloatFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentId?: StringNullableFilter<"Booking"> | string | null
    paymentOrderId?: StringNullableFilter<"Booking"> | string | null
    paymentSignature?: StringNullableFilter<"Booking"> | string | null
    isPaid?: BoolFilter<"Booking"> | boolean
    partnerAmount?: FloatNullableFilter<"Booking"> | number | null
    adminAmount?: FloatNullableFilter<"Booking"> | number | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type EarningsUpsertWithWhereUniqueWithoutUserInput = {
    where: EarningsWhereUniqueInput
    update: XOR<EarningsUpdateWithoutUserInput, EarningsUncheckedUpdateWithoutUserInput>
    create: XOR<EarningsCreateWithoutUserInput, EarningsUncheckedCreateWithoutUserInput>
  }

  export type EarningsUpdateWithWhereUniqueWithoutUserInput = {
    where: EarningsWhereUniqueInput
    data: XOR<EarningsUpdateWithoutUserInput, EarningsUncheckedUpdateWithoutUserInput>
  }

  export type EarningsUpdateManyWithWhereWithoutUserInput = {
    where: EarningsScalarWhereInput
    data: XOR<EarningsUpdateManyMutationInput, EarningsUncheckedUpdateManyWithoutUserInput>
  }

  export type EarningsScalarWhereInput = {
    AND?: EarningsScalarWhereInput | EarningsScalarWhereInput[]
    OR?: EarningsScalarWhereInput[]
    NOT?: EarningsScalarWhereInput | EarningsScalarWhereInput[]
    id?: StringFilter<"Earnings"> | string
    userId?: StringFilter<"Earnings"> | string
    bookingId?: StringFilter<"Earnings"> | string
    amount?: FloatFilter<"Earnings"> | number
    type?: StringFilter<"Earnings"> | string
    isWithdrawn?: BoolFilter<"Earnings"> | boolean
    withdrawnAt?: DateTimeNullableFilter<"Earnings"> | Date | string | null
    createdAt?: DateTimeFilter<"Earnings"> | Date | string
    updatedAt?: DateTimeFilter<"Earnings"> | Date | string
  }

  export type WithdrawalUpsertWithWhereUniqueWithoutUserInput = {
    where: WithdrawalWhereUniqueInput
    update: XOR<WithdrawalUpdateWithoutUserInput, WithdrawalUncheckedUpdateWithoutUserInput>
    create: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput>
  }

  export type WithdrawalUpdateWithWhereUniqueWithoutUserInput = {
    where: WithdrawalWhereUniqueInput
    data: XOR<WithdrawalUpdateWithoutUserInput, WithdrawalUncheckedUpdateWithoutUserInput>
  }

  export type WithdrawalUpdateManyWithWhereWithoutUserInput = {
    where: WithdrawalScalarWhereInput
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyWithoutUserInput>
  }

  export type WithdrawalScalarWhereInput = {
    AND?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
    OR?: WithdrawalScalarWhereInput[]
    NOT?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
    id?: StringFilter<"Withdrawal"> | string
    userId?: StringFilter<"Withdrawal"> | string
    amount?: FloatFilter<"Withdrawal"> | number
    status?: EnumWithdrawalStatusFilter<"Withdrawal"> | $Enums.WithdrawalStatus
    bankDetails?: StringFilter<"Withdrawal"> | string
    remarks?: StringNullableFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeFilter<"Withdrawal"> | Date | string
  }

  export type UserCreateWithoutHotelsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    totalEarnings?: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    earnings?: EarningsCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHotelsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    totalEarnings?: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    earnings?: EarningsUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHotelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHotelsInput, UserUncheckedCreateWithoutHotelsInput>
  }

  export type BookingCreateWithoutHotelInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    status?: $Enums.BookingStatus
    paymentId?: string | null
    paymentOrderId?: string | null
    paymentSignature?: string | null
    isPaid?: boolean
    partnerAmount?: number | null
    adminAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    earnings?: EarningsCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutHotelInput = {
    id?: string
    userId: string
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    status?: $Enums.BookingStatus
    paymentId?: string | null
    paymentOrderId?: string | null
    paymentSignature?: string | null
    isPaid?: boolean
    partnerAmount?: number | null
    adminAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    earnings?: EarningsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutHotelInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutHotelInput, BookingUncheckedCreateWithoutHotelInput>
  }

  export type BookingCreateManyHotelInputEnvelope = {
    data: BookingCreateManyHotelInput | BookingCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHotelsInput = {
    update: XOR<UserUpdateWithoutHotelsInput, UserUncheckedUpdateWithoutHotelsInput>
    create: XOR<UserCreateWithoutHotelsInput, UserUncheckedCreateWithoutHotelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHotelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHotelsInput, UserUncheckedUpdateWithoutHotelsInput>
  }

  export type UserUpdateWithoutHotelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    earnings?: EarningsUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHotelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    earnings?: EarningsUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutHotelInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutHotelInput, BookingUncheckedUpdateWithoutHotelInput>
    create: XOR<BookingCreateWithoutHotelInput, BookingUncheckedCreateWithoutHotelInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutHotelInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutHotelInput, BookingUncheckedUpdateWithoutHotelInput>
  }

  export type BookingUpdateManyWithWhereWithoutHotelInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutHotelInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    totalEarnings?: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutOwnerInput
    earnings?: EarningsCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    totalEarnings?: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutOwnerInput
    earnings?: EarningsUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type HotelCreateWithoutBookingsInput = {
    id?: string
    name: string
    description: string
    city: string
    address: string
    price: number
    rating?: number
    images?: HotelCreateimagesInput | string[]
    amenities?: HotelCreateamenitiesInput | string[]
    totalRooms: number
    availableRooms: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutHotelsInput
  }

  export type HotelUncheckedCreateWithoutBookingsInput = {
    id?: string
    ownerId: string
    name: string
    description: string
    city: string
    address: string
    price: number
    rating?: number
    images?: HotelCreateimagesInput | string[]
    amenities?: HotelCreateamenitiesInput | string[]
    totalRooms: number
    availableRooms: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelCreateOrConnectWithoutBookingsInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutBookingsInput, HotelUncheckedCreateWithoutBookingsInput>
  }

  export type EarningsCreateWithoutBookingInput = {
    id?: string
    amount: number
    type: string
    isWithdrawn?: boolean
    withdrawnAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEarningsInput
  }

  export type EarningsUncheckedCreateWithoutBookingInput = {
    id?: string
    userId: string
    amount: number
    type: string
    isWithdrawn?: boolean
    withdrawnAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EarningsCreateOrConnectWithoutBookingInput = {
    where: EarningsWhereUniqueInput
    create: XOR<EarningsCreateWithoutBookingInput, EarningsUncheckedCreateWithoutBookingInput>
  }

  export type EarningsCreateManyBookingInputEnvelope = {
    data: EarningsCreateManyBookingInput | EarningsCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutOwnerNestedInput
    earnings?: EarningsUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutOwnerNestedInput
    earnings?: EarningsUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HotelUpsertWithoutBookingsInput = {
    update: XOR<HotelUpdateWithoutBookingsInput, HotelUncheckedUpdateWithoutBookingsInput>
    create: XOR<HotelCreateWithoutBookingsInput, HotelUncheckedCreateWithoutBookingsInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutBookingsInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutBookingsInput, HotelUncheckedUpdateWithoutBookingsInput>
  }

  export type HotelUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    images?: HotelUpdateimagesInput | string[]
    amenities?: HotelUpdateamenitiesInput | string[]
    totalRooms?: IntFieldUpdateOperationsInput | number
    availableRooms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutHotelsNestedInput
  }

  export type HotelUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    images?: HotelUpdateimagesInput | string[]
    amenities?: HotelUpdateamenitiesInput | string[]
    totalRooms?: IntFieldUpdateOperationsInput | number
    availableRooms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarningsUpsertWithWhereUniqueWithoutBookingInput = {
    where: EarningsWhereUniqueInput
    update: XOR<EarningsUpdateWithoutBookingInput, EarningsUncheckedUpdateWithoutBookingInput>
    create: XOR<EarningsCreateWithoutBookingInput, EarningsUncheckedCreateWithoutBookingInput>
  }

  export type EarningsUpdateWithWhereUniqueWithoutBookingInput = {
    where: EarningsWhereUniqueInput
    data: XOR<EarningsUpdateWithoutBookingInput, EarningsUncheckedUpdateWithoutBookingInput>
  }

  export type EarningsUpdateManyWithWhereWithoutBookingInput = {
    where: EarningsScalarWhereInput
    data: XOR<EarningsUpdateManyMutationInput, EarningsUncheckedUpdateManyWithoutBookingInput>
  }

  export type UserCreateWithoutEarningsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    totalEarnings?: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEarningsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    totalEarnings?: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEarningsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEarningsInput, UserUncheckedCreateWithoutEarningsInput>
  }

  export type BookingCreateWithoutEarningsInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    status?: $Enums.BookingStatus
    paymentId?: string | null
    paymentOrderId?: string | null
    paymentSignature?: string | null
    isPaid?: boolean
    partnerAmount?: number | null
    adminAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    hotel: HotelCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutEarningsInput = {
    id?: string
    userId: string
    hotelId: string
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    status?: $Enums.BookingStatus
    paymentId?: string | null
    paymentOrderId?: string | null
    paymentSignature?: string | null
    isPaid?: boolean
    partnerAmount?: number | null
    adminAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutEarningsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutEarningsInput, BookingUncheckedCreateWithoutEarningsInput>
  }

  export type UserUpsertWithoutEarningsInput = {
    update: XOR<UserUpdateWithoutEarningsInput, UserUncheckedUpdateWithoutEarningsInput>
    create: XOR<UserCreateWithoutEarningsInput, UserUncheckedCreateWithoutEarningsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEarningsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEarningsInput, UserUncheckedUpdateWithoutEarningsInput>
  }

  export type UserUpdateWithoutEarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingUpsertWithoutEarningsInput = {
    update: XOR<BookingUpdateWithoutEarningsInput, BookingUncheckedUpdateWithoutEarningsInput>
    create: XOR<BookingCreateWithoutEarningsInput, BookingUncheckedCreateWithoutEarningsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutEarningsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutEarningsInput, BookingUncheckedUpdateWithoutEarningsInput>
  }

  export type BookingUpdateWithoutEarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSignature?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    partnerAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    adminAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    hotel?: HotelUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutEarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSignature?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    partnerAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    adminAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutWithdrawalsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    totalEarnings?: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    earnings?: EarningsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWithdrawalsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    totalEarnings?: number
    walletBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    earnings?: EarningsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWithdrawalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
  }

  export type UserUpsertWithoutWithdrawalsInput = {
    update: XOR<UserUpdateWithoutWithdrawalsInput, UserUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWithdrawalsInput, UserUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type UserUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    earnings?: EarningsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarnings?: FloatFieldUpdateOperationsInput | number
    walletBalance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    earnings?: EarningsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HotelCreateManyOwnerInput = {
    id?: string
    name: string
    description: string
    city: string
    address: string
    price: number
    rating?: number
    images?: HotelCreateimagesInput | string[]
    amenities?: HotelCreateamenitiesInput | string[]
    totalRooms: number
    availableRooms: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyUserInput = {
    id?: string
    hotelId: string
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    status?: $Enums.BookingStatus
    paymentId?: string | null
    paymentOrderId?: string | null
    paymentSignature?: string | null
    isPaid?: boolean
    partnerAmount?: number | null
    adminAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EarningsCreateManyUserInput = {
    id?: string
    bookingId: string
    amount: number
    type: string
    isWithdrawn?: boolean
    withdrawnAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalCreateManyUserInput = {
    id?: string
    amount: number
    status?: $Enums.WithdrawalStatus
    bankDetails: string
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    images?: HotelUpdateimagesInput | string[]
    amenities?: HotelUpdateamenitiesInput | string[]
    totalRooms?: IntFieldUpdateOperationsInput | number
    availableRooms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    images?: HotelUpdateimagesInput | string[]
    amenities?: HotelUpdateamenitiesInput | string[]
    totalRooms?: IntFieldUpdateOperationsInput | number
    availableRooms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    images?: HotelUpdateimagesInput | string[]
    amenities?: HotelUpdateamenitiesInput | string[]
    totalRooms?: IntFieldUpdateOperationsInput | number
    availableRooms?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSignature?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    partnerAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    adminAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutBookingsNestedInput
    earnings?: EarningsUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSignature?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    partnerAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    adminAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    earnings?: EarningsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSignature?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    partnerAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    adminAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarningsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    isWithdrawn?: BoolFieldUpdateOperationsInput | boolean
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutEarningsNestedInput
  }

  export type EarningsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    isWithdrawn?: BoolFieldUpdateOperationsInput | boolean
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarningsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    isWithdrawn?: BoolFieldUpdateOperationsInput | boolean
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus
    bankDetails?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus
    bankDetails?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus
    bankDetails?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyHotelInput = {
    id?: string
    userId: string
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    totalAmount: number
    status?: $Enums.BookingStatus
    paymentId?: string | null
    paymentOrderId?: string | null
    paymentSignature?: string | null
    isPaid?: boolean
    partnerAmount?: number | null
    adminAmount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSignature?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    partnerAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    adminAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    earnings?: EarningsUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSignature?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    partnerAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    adminAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    earnings?: EarningsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSignature?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    partnerAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    adminAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarningsCreateManyBookingInput = {
    id?: string
    userId: string
    amount: number
    type: string
    isWithdrawn?: boolean
    withdrawnAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EarningsUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    isWithdrawn?: BoolFieldUpdateOperationsInput | boolean
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEarningsNestedInput
  }

  export type EarningsUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    isWithdrawn?: BoolFieldUpdateOperationsInput | boolean
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarningsUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    isWithdrawn?: BoolFieldUpdateOperationsInput | boolean
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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