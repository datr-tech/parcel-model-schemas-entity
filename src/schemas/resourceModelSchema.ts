import { commonSchemaFieldGroupModelType, commonSchemaFieldDefObjectIdRequired } from '@freight/common-schema-fields';

export const resourceModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'resourceId',
  },
  endpointId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'EndpointModel',
  },
  resourceTypeId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'ResourceTypeModel',
  },
  serviceId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'ServiceModel',
  },
  ...commonSchemaFieldGroupModelType,
};
