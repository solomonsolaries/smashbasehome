/** @jsx jsx */
import { FC } from 'react';

import { css, jsx } from '@emotion/react';

import Avatar from '@atlaskit/avatar';
import { token } from '@atlaskit/tokens';
import { tourneys } from './tourneys';

interface Tourney {
  id: number;
  name: string;
  event: string;
  city: string;
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

export const caption = 'Tournament';

export const createHead = (withWidth: boolean) => {
  return {
    cells: [
      {
        key: 'name',
        content: 'Tourney',
        isSortable: true,
        width: withWidth ? 25 : undefined,
      },
      {
        key: 'event',
        content: 'Event',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 15 : undefined,
      },
      {
        key: 'city',
        content: 'City',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
    ],
  };
};

export const head = createHead(true);

export const rows = tourneys.map((tourney: Tourney, index: number) => ({
  key: `row-${index}-${tourney.name}`,
  isHighlighted: false,
  cells: [
    {
      key: createKey(tourney.name),
      content: (
        <NameWrapper>
          <AvatarWrapper>
            <Avatar name={tourney.name} size="medium" />
          </AvatarWrapper>
          <a href="https://atlassian.design">{tourney.name}</a>
        </NameWrapper>
      ),
    },
    {
      key: createKey(tourney.event),
      content: tourney.event,
    },
    {
      key: tourney.id,
      content: tourney.city,
    },
  ],
}));
