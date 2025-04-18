import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldDefUrlRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/leith-common-schema-fields';

export const endpointModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'endpointId',
  },
  endpointTypeId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'EndpointTypeModel',
  },
  url: {
    ...commonSchemaFieldDefUrlRequired,
  },
  ...commonSchemaFieldGroupModelType,
};
