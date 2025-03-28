/* eslint-disable import/order */
// eslint-disable-next-line import/extensions
import MC from '@components/MovieCard';
import '@styles/fonts.css';
import '@styles/globals.css';
import '@styles/variables.css';

import type { Meta, StoryObj } from '@storybook/react';

const movietCard: Meta<typeof MC> = {
  title: 'Componentes/MovieCard',
  component: MC,
  parameters: {
    layout: 'centered',
  },
};

export default movietCard;

type Story = StoryObj<typeof MC>;

export const MovieCard: Story = {
  args: {

    id: 'es123',
    name: 'Filme de teste',
    path: 'https://placehold.co/600x480/C933A6/fff/?text=filme',
    className: 'movie-class',
    description: 'Quando a Rainha Má manda matarem sua enteada por inveja de sua beleza, Branca de Neve foge do reino. Ela percorre a floresta e acha uma casinha onde vivem sete anões amigáveis com quem passa viver. Porém, a moça ainda não está a salvo, já que a bruxa planeja dar um fim a sua vida com uma maçã envenenada.',
    rating: 5,
    isAdult: false,
    href: '#',
    genre: '123456',
  },
};
