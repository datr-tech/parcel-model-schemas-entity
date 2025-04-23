import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';
import { resourceModelSchemaOptions } from './../../../dist';

describe('resourceModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'resource',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...resourceModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
