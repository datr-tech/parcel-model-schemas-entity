import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';
import { serviceModelSchemaOptions } from './../../../dist';

describe('serviceModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'service',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...serviceModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
