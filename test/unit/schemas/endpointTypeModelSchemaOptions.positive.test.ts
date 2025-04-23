import { endpointTypeModelSchemaOptions } from '@app-pmse/schemas';
import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('endpointTypeModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'endpointType',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...endpointTypeModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
