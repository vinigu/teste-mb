/* eslint-disable import/order */
// eslint-disable-next-line import/extensions
import H from '@components/Header';
import '@styles/fonts.css';
import '@styles/globals.css';
import '@styles/variables.css';

import type { Meta, StoryObj } from '@storybook/react';

const header: Meta<typeof H> = {
  title: 'Componentes/Common',
  component: H,
  parameters: {
    layout: 'centered',
  },
};

export default header;

type Story = StoryObj<typeof H>;

export const Header: Story = {
  args: {
  },
};
