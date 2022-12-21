import React from 'react';

import DynamicTable from '@atlaskit/dynamic-table';

import { carpoolHead, carpoolRows } from './carpool-data';

export default function TableUncontrolled2() {
  return (
    <DynamicTable
      head={carpoolHead}
      rows={carpoolRows}
      rowsPerPage={5}
      defaultPage={1}
      loadingSpinnerSize="large"
      isRankable={true}
    />
  );
}
