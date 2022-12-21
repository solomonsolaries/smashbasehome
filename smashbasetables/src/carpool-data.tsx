/** @jsx jsx */
import { FC } from 'react';

import { css, jsx } from '@emotion/react';

import Avatar from '@atlaskit/avatar';
import { token } from '@atlaskit/tokens';

import { carpools } from './carpools';

interface Carpools {
  id: number;
  name: string;
  region: string;
  editOptions: string;
}

function createKey(input: string) {
  return input ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '') : input;
}

const nameWrapperStyles = css({
  display: 'flex',
  alignItems: 'center',
});

const NameWrapper: FC = ({ children }) => (
  <span css={nameWrapperStyles}>{children}</span>
);

const avatarWrapperStyles = css({
  // TODO Delete this comment after verifying spacing token -> previous value `'8px'`
  marginRight: token('spacing.scale.100', '8px'),
});

const AvatarWrapper: FC = ({ children }) => (
  <div css={avatarWrapperStyles}>{children}</div>
);

export const caption = 'Carpool List';

export const createHead = (withWidth: boolean) => {
  return {
    cells: [
      {
        key: 'carpoolDriver',
        content: 'Carpool Name',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 15 : undefined,
      },
      {
        key: 'editCarpool',
        content: 'Edit Carpool',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
    ],
  };
};

export const carpoolHead = createHead(true);

export const carpoolRows = carpools.map((carpool: Carpools, index: number) => ({
  key: `row-${index}-${carpool.name}`,
  isHighlighted: false,
  cells: [
    {
      key: createKey(carpool.name),
      content: (
        <NameWrapper>
          <AvatarWrapper>
            <Avatar name={carpool.name} size="medium" />
          </AvatarWrapper>
          <a href="https://google.com">{carpool.name}</a>
        </NameWrapper>
      ),
    },
    {
      key: carpool.id,
      content: carpool.editOptions,
    },
  ],
}));
