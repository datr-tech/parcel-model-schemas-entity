import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

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
