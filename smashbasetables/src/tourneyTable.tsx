import React from 'react';

import DynamicTable from '@atlaskit/dynamic-table';

import { head, rows } from './tourney-data';

export default function TableUncontrolled3() {
  return (
    <DynamicTable
      head={head}
      rows={rows}
      rowsPerPage={5}
      defaultPage={1}
      loadingSpinnerSize="large"
      isRankable={true}
      
    />
  );
}
