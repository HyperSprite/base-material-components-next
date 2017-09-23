import React from 'react';
import ReactIcon from 'mdi-react/ReactIcon';
import MenuIcon from 'mdi-react/MenuIcon';
import AutoFixIcon from 'mdi-react/AutoFixIcon';

import Icon from '../icon';

export default [
  {
    key: 1,
    banner: (<Icon svgIcon={ReactIcon} />),
    content: (
      <div>
        <div>{'<no options>'}</div>
        <div>{'svgIcon={ReactIcon}'}</div>
      </div>
    ),
  },
  {
    key: 2,
    banner: <Icon size="xs" svgIcon={ReactIcon} />,
    content: (
      <div>
        <div>{'size="xs"'}</div>
        <div>{'svgIcon={ReactIcon}'}</div>
      </div>
    ),
  },
  {
    key: 3,
    banner: <Icon color="primary" size="sm" svgIcon={ReactIcon} />,
    content: (
      <div>
        <div>{'color="primary"'}</div>
        <div>{'size="sm"'}</div>
        <div>{'svgIcon={ReactIcon}'}</div>
      </div>
    ),
  },
  {
    key: 4,
    banner: <Icon color="accent" pointer size="md" svgIcon={ReactIcon} />,
    content: (
      <div>
        <div>{'color="accent"'}</div>
        <div>{'pointer'}</div>
        <div>{'size="md"'}</div>
        <div>{'svgIcon={ReactIcon}'}</div>
      </div>
    ),
  },
  {
    key: 5,
    banner: <Icon color="primary" inverse size="lg" svgIcon={MenuIcon} />,
    content: (
      <div>
        <div>{'color="primary"'}</div>
        <div>{'inverse'}</div>
        <div>{'size="lg"'}</div>
        <div>{'svgIcon={MenuIcon}'}</div>
      </div>
    ),
  },
  {
    key: 6,
    banner: <Icon color="accent" inverse size="xl" svgIcon={AutoFixIcon} />,
    content: (
      <div>
        <div>{'color="accent"'}</div>
        <div>{'inverse'}</div>
        <div>{'size="xl"'}</div>
        <div>{'svgIcon={AutoFixIcon}'}</div>
      </div>
    ),
  },
  {
    key: 7,
    banner: <Icon />,
    content: (
      <div>
        <div>{'<no options>'}</div>
        <div>{'<no icon>'}</div>
      </div>
    ),
  },
  {
    key: 8,
    banner: <Icon size="xs" inverse />,
    content: (
      <div>
        <div>{'size="xs"'}</div>
        <div>{'inverse'}</div>
        <div>{'<no icon>'}</div>
      </div>
    ),
  },
  {
    key: 9,
    banner: <Icon color="primary" size="sm" />,
    content: (
      <div>
        <div>{'color="primary"'}</div>
        <div>{'size="sm"'}</div>
        <div>{'<no icon>'}</div>
      </div>
    ),
  },
  {
    key: 10,
    banner: <Icon color="accent" pointer size="md" />,
    content: (
      <div>
        <div>{'color="accent"'}</div>
        <div>{'pointer size="md"'}</div>
        <div>{'<no icon>'}</div>
      </div>
    ),
  },
  {
    key: 11,
    banner: <Icon color="primary" inverse size="lg" />,
    content: (
      <div>
        <div>{'color="primary"'}</div>
        <div>{'inverse size="lg"'}</div>
        <div>{'<no icon>'}</div>
      </div>
    ),
  },
  {
    key: 12,
    banner: <Icon color="accent" inverse size="xl" />,
    content: (
      <div>
        <div>{'color="accent"'}</div>
        <div>{'inverse size="xl"'}</div>
        <div>{'<no icon>'}</div>
      </div>
    ),
  },
];
