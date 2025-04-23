import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

import { resourceModelSchema } from '@app-pmse/schemas';

describe('resourceModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
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

      // Act
      const propsFound = { ...resourceModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
