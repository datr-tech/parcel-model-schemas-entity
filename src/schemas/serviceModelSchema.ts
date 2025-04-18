import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/leith-common-schema-fields';

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
