import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';
import { resourceTypeModelSchemaOptions } from './../../../dist';

describe('resourceTypeModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'resourceType',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...resourceTypeModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
