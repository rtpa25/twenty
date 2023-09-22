import { useRecoilValue } from 'recoil';

import { NumberDisplay } from '@/ui/content-display/components/NumberDisplay';
import { entityFieldsFamilySelector } from '@/ui/field/states/selectors/entityFieldsFamilySelector';
import { FieldNumberMetadata } from '@/ui/field/types/FieldMetadata';
import { EditableCell } from '@/ui/table/editable-cell/components/EditableCell';
import { useCurrentRowEntityId } from '@/ui/table/hooks/useCurrentEntityId';

import type { ViewFieldDefinition } from '../../../../../views/types/ViewFieldDefinition';

import { GenericEditableNumberCellEditMode } from './GenericEditableNumberCellEditMode';

type OwnProps = {
  viewFieldDefinition: ViewFieldDefinition<FieldNumberMetadata>;
  editModeHorizontalAlign?: 'left' | 'right';
};

export const GenericEditableNumberCell = ({
  viewFieldDefinition,
  editModeHorizontalAlign,
}: OwnProps) => {
  const currentRowEntityId = useCurrentRowEntityId();

  const fieldValue = useRecoilValue<string>(
    entityFieldsFamilySelector({
      entityId: currentRowEntityId ?? '',
      fieldName: viewFieldDefinition.metadata.fieldName,
    }),
  );

  return (
    <EditableCell
      editModeHorizontalAlign={editModeHorizontalAlign}
      editModeContent={
        <GenericEditableNumberCellEditMode
          viewFieldDefinition={viewFieldDefinition}
        />
      }
      nonEditModeContent={<NumberDisplay value={fieldValue} />}
    ></EditableCell>
  );
};
