import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';
import { frameworkModelSchemaOptions } from './../../../dist';

describe('frameworkModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'framework',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...frameworkModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
