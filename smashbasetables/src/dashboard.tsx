import React, { Fragment } from 'react';
import TableUncontrolled from './playerListTable';
import TableUncontrolled2 from './carpoolListTable';
import TableUncontrolled3 from './tourneyTable';

export default function Dashboard() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        position: 'absolute', left: '1%', top: '25%',
      }}
    >
      <Fragment>
        <div
          style={{
            float: 'left',
            width: '25%',
            background: '#f5f8ff',
          }}
        >
          <TableUncontrolled />
        </div>
      </Fragment>

      <Fragment>
        <div
          style={{
            background: '#f5f8ff',
            width: '25%'
          }}
        >
          <TableUncontrolled3 />
        </div>
      </Fragment>
      <Fragment>
        <div
          style={{
            background: '#f5f8ff',
            width: '25%'
          }}
        >
          <TableUncontrolled2 />
        </div>
      </Fragment>
    </div>
  );
}
