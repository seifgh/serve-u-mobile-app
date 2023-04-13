import {DeepPrimitiveTypeSchema} from '@src/types';

export const schemaUtil = {
  mapRecordBySchema<T extends Record<string, any> = {}>(
    record: T | Record<string, any>,
    schema?: DeepPrimitiveTypeSchema,
  ): T | Record<string, any> | undefined {
    if (schema === undefined) {
      return undefined;
    }
    const mappedObject: Record<string, any> = {};
    Object.keys(schema).forEach(key => {
      const schemaKeyValue = schema[key];
      const schemaKeyValueType = typeof schemaKeyValue;
      const recordKeyValue = record[key];
      const recordKeyValueType = typeof recordKeyValue;

      if (
        schemaKeyValueType === 'object' &&
        recordKeyValueType === 'object' &&
        !(recordKeyValue instanceof Date)
      ) {
        if (Array.isArray(schemaKeyValue) && Array.isArray(recordKeyValue)) {
          mappedObject[key] = recordKeyValue.map(value => {
            const arraySchema = schemaKeyValue[0];
            if (typeof arraySchema === 'object') {
              return this.mapRecordBySchema(value, arraySchema);
            } else {
              return arraySchema;
            }
          });
        } else {
          mappedObject[key] = this.mapRecordBySchema(
            recordKeyValue,
            schemaKeyValue as DeepPrimitiveTypeSchema,
          );
        }
      } else if (
        recordKeyValueType === schemaKeyValue ||
        recordKeyValue instanceof Date
      ) {
        mappedObject[key] = recordKeyValue;
      }
    });

    return mappedObject;
  },
};
