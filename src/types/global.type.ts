export type Without<T, K> = Pick<T, Exclude<keyof T, K>>;
export type PrimitiveValue = string | number | Date | null;
export type DeepRecord<T> = {
  [key: string]: T | DeepRecord<T>;
};

export type DeepPrimitiveRecord = DeepRecord<PrimitiveValue>;

export type SchemaValueType =
  | 'string'
  | 'number'
  | 'bigint'
  | 'boolean'
  | 'symbol'
  | 'undefined'
  | 'object'
  | 'date';
export type DeepPrimitiveTypeSchema = DeepRecord<
  SchemaValueType | [SchemaValueType] | [DeepPrimitiveTypeSchema]
>;
export type DeepArraySchema = (string | string[])[];
