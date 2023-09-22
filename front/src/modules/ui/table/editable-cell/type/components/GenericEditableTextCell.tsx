import { useRecoilValue } from 'recoil';

import { TextDisplay } from '@/ui/content-display/components/TextDisplay';
import { entityFieldsFamilySelector } from '@/ui/field/states/selectors/entityFieldsFamilySelector';
import { FieldTextMetadata } from '@/ui/field/types/FieldMetadata';
import { EditableCell } from '@/ui/table/editable-cell/components/EditableCell';
import { useCurrentRowEntityId } from '@/ui/table/hooks/useCurrentEntityId';

import type { ViewFieldDefinition } from '../../../../../views/types/ViewFieldDefinition';

import { GenericEditableTextCellEditMode } from './GenericEditableTextCellEditMode';

type OwnProps = {
  viewFieldDefinition: ViewFieldDefinition<FieldTextMetadata>;
  editModeHorizontalAlign?: 'left' | 'right';
};

export const GenericEditableTextCell = ({
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
        <GenericEditableTextCellEditMode
          viewFieldDefinition={viewFieldDefinition}
        />
      }
      nonEditModeContent={<TextDisplay text={fieldValue} />}
    ></EditableCell>
  );
};
