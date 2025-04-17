import { commonSchemaFieldDefObjectIdRequired, commonSchemaFieldGroupModelType } from '@freight/common-schema-fields';

export const endpointTypeModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'endpointTypeId',
  },
  ...commonSchemaFieldGroupModelType,
};
