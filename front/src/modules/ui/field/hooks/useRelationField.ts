import { useContext } from 'react';
import { useRecoilState } from 'recoil';

import { genericEntityFieldFamilySelector } from '@/ui/editable-field/states/selectors/genericEntityFieldFamilySelector';

import { FieldContext } from '../contexts/FieldContext';
import { fieldValueForPersistFamilyState } from '../states/fieldValueForPersistFamilyState';
import { assertFieldMetadata } from '../types/guards/assertFieldMetadata';
import { isFieldRelation } from '../types/guards/isFieldRelation';

// TODO: we will be able to type more precisely when we will have custom field and custom entities support
export const useRelationField = () => {
  const { entityId, fieldDefinition } = useContext(FieldContext);

  assertFieldMetadata('relation', isFieldRelation, fieldDefinition);

  const fieldName = fieldDefinition.metadata.fieldName;

  const [fieldValue, setFieldValue] = useRecoilState<any | null>(
    genericEntityFieldFamilySelector({
      entityId: entityId,
      fieldName: fieldName,
    }),
  );

  const [fieldValueForPersist, setFieldValueForPersist] = useRecoilState<
    any | null
  >(
    fieldValueForPersistFamilyState({
      entityId: entityId,
      fieldName: fieldName,
    }),
  );

  return {
    fieldDefinition,
    fieldValue,
    setFieldValue,
    fieldValueForPersist,
    setFieldValueForPersist,
  };
};
