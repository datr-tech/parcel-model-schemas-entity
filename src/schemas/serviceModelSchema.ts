import { commonSchemaFieldDefObjectIdRequired, commonSchemaFieldGroupModelType } from '@freight/common-schema-fields';

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
