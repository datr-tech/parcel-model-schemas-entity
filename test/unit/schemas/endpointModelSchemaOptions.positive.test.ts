import { endpointModelSchemaOptions } from '@app-pmse/schemas';
import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('endpointModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'endpoint',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...endpointModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
