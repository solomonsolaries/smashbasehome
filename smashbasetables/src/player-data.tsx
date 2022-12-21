/** @jsx jsx */
import { FC } from 'react';

import { css, jsx } from '@emotion/react';

import Avatar from '@atlaskit/avatar';
import { token } from '@atlaskit/tokens';

import { players } from './players';

interface Players {
  id: number;
  name: string;
  party: string;
  pwrlvl: string;
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

export const caption = 'Player List';

export const createHead = (withWidth: boolean) => {
  return {
    cells: [
      {
        key: 'player',
        content: 'Player',
        isSortable: true,
        width: withWidth ? 15 : undefined,
      },
      {
        key: 'powerlvl',
        content: 'Power Level',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
    ],
  };
};

export const head = createHead(true);

export const rows = players.map((player: Players, index: number) => ({
  key: `row-${index}-${player.name}`,
  isHighlighted: false,
  cells: [
    {
      key: createKey(player.name),
      content: (
        <NameWrapper>
          <AvatarWrapper>
            <Avatar name={player.name} size="medium" />
          </AvatarWrapper>
          <a href="https://atlassian.design">{player.name}</a>
        </NameWrapper>
      ),
    },
    {
      key: player.id,
      content: player.pwrlvl,
    },
  ],
}));
