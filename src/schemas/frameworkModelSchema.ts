import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/leith-common-schema-fields';

export const frameworkModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'frameworkId',
  },
  frameworkTypeId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'FrameworkTypeModel',
  },
  ...commonSchemaFieldGroupModelType,
};
