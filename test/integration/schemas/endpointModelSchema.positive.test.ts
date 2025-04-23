import { endpointModelSchema } from './../../../dist';
import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldDefUrlRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

describe('endpointModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
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

      // Act
      const propsFound = { ...endpointModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
