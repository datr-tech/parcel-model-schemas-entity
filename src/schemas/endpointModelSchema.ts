import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldDefUrlRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

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
