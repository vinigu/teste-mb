/* eslint-disable import/order */
// eslint-disable-next-line import/extensions
import F from '@components/Footer';
import '@styles/fonts.css';
import '@styles/globals.css';
import '@styles/variables.css';

import type { Meta, StoryObj } from '@storybook/react';

const footer: Meta<typeof F> = {
  title: 'Componentes/Common',
  component: F,
  parameters: {
    layout: 'centered',
  },
};

export default footer;

type Story = StoryObj<typeof F>;

export const Footer: Story = {
  args: {
  },
};
