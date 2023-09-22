import { DateDisplay } from '@/ui/content-display/components/DateDisplay';

import { useDateField } from '../../hooks/useDateField';

export const DateFieldDisplay = () => {
  const { fieldValue } = useDateField();

  return <DateDisplay value={fieldValue} />;
};
