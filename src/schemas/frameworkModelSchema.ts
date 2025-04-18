import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

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
