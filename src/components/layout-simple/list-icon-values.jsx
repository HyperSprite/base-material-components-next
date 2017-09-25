import React from 'react';
import ReactIcon from 'mdi-react/ReactIcon';
import MenuIcon from 'mdi-react/MenuIcon';
import AutoFixIcon from 'mdi-react/AutoFixIcon';
import SpeedometerIcon from 'mdi-react/SpeedometerIcon';

import Icon from '../icon';

export default [
  {
    key: 1,
    banner: <Icon svgIcon={ReactIcon} />,
    content: (
      <span>
        {'<no options>'}<br />
        {'svgIcon={ReactIcon}'}
      </span>
    ),
  },
  {
    key: 2,
    banner: <Icon size="lg" svgIcon={ReactIcon} />,
    content: (
      <span>
        {'size="xs"'}<br />
        {'svgIcon={ReactIcon}'}
      </span>
    ),
  },
  {
    key: 3,
    banner: <Icon color="primary" size="sm" svgIcon={ReactIcon} />,
    content: (
      <span>
        {'color="primary"'}<br />
        {'size="sm"'}<br />
        {'svgIcon={ReactIcon}'}
      </span>
    ),
  },
  {
    key: 4,
    banner: <Icon color="accent" pointer size="md" svgIcon={AutoFixIcon} />,
    content: (
      <span>
        {'color="accent"'}<br />
        {'pointer'}<br />
        {'size="md"'}<br />
        {'svgIcon={ReactIcon}'}
      </span>
    ),
  },
  {
    key: 5,
    banner: <Icon color="primary" inverse size="lg" svgIcon={MenuIcon} />,
    content: (
      <span>
        {'color="primary"'}<br />
        {'inverse'}<br />
        {'size="lg"'}<br />
        {'svgIcon={MenuIcon}'}
      </span>
    ),
  },
  {
    key: 6,
    banner: <Icon color="accent" inverse size="xl" svgIcon={SpeedometerIcon} />,
    content: (
      <span>
        {'color="accent"'}<br />
        {'inverse'}<br />
        {'size="xl"'}<br />
        {'svgIcon={AutoFixIcon}'}
      </span>
    ),
  },
  {
    key: 7,
    banner: <Icon />,
    content: (
      <span>
        {'<no options>'}<br />
        {'<no icon>'}
      </span>
    ),
  },
  {
    key: 8,
    banner: <Icon size="xs" inverse />,
    content: (
      <span>
        {'size="xs"'}<br />
        {'inverse'}<br />
        {'<no icon>'}
      </span>
    ),
  },
  {
    key: 9,
    banner: <Icon color="primary" size="sm" />,
    content: (
      <span>
        {'color="primary"'}<br />
        {'size="sm"'}<br />
        {'<no icon>'}
      </span>
    ),
  },
  {
    key: 10,
    banner: <Icon color="accent" pointer size="md" />,
    content: (
      <span>
        {'color="accent"'}<br />
        {'pointer size="md"'}<br />
        {'<no icon>'}
      </span>
    ),
  },
  {
    key: 11,
    banner: <Icon color="primary" inverse size="lg" />,
    content: (
      <span>
        {'color="primary"'}<br />
        {'inverse size="lg"'}<br />
        {'<no icon>'}
      </span>
    ),
  },
  {
    key: 12,
    banner: <Icon color="accent" inverse size="xl" />,
    content: (
      <span>
        {'color="accent"'}<br />
        {'inverse size="xl"'}<br />
        {'<no icon>'}
      </span>
    ),
  },
];
