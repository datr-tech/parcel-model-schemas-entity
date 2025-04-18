import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

export const serviceModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'serviceId',
  },
  frameworkId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'FrameworkModel',
  },
  ...commonSchemaFieldGroupModelType,
};
