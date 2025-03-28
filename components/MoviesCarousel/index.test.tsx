import { render, screen } from '@testing-library/react';
import EquipmentsCarousel from '.';
import IEquipment from '../../types/Equipment';

const equipments: IEquipment[] = [
  {
    id: 1,
    name: 'Card-1',
    slug: 'category-1',
    internal_code: 'ex21231',
    is_semi_new: true,
    hour_meter: 100,
    price: 100000,
    is_featured: true,
    manufacture_year: '2021',
    is_highlighted: true,
    is_published: true,
    blackfriday_tag: true,
    images: ['https://via.placeholder.com//640x480.png/0077cc?text=alias'],
    equipment_model: {
      id: 19,
      name: 'et',
      slug: 'ut',
      manufacturer_id: 8,
      category_id: 6,
    },
    store: {
      id: 2,
      name: 'Cotia - SP',
      src: '',
      address: '',
    },
    state: {
      id: 31,
      name: 'Minas Gerais',
      abbreviation: 'MG',
    },
    city: {
      id: 2921906,
      name: 'Mucug\u00ea',
      state_id: 29,
    },
  },
  {
    id: 2,
    name: 'Card-2',
    slug: 'category-2',
    internal_code: '132da',
    is_semi_new: false,
    hour_meter: 100123,
    price: 100000,
    is_featured: true,
    is_highlighted: true,
    is_published: true,
    manufacture_year: '2020',
    blackfriday_tag: true,
    images: ['https://via.placeholder.com//640x480.png/0077cc?text=alias'],
    equipment_model: {
      id: 19,
      name: 'et',
      slug: 'ut',
      manufacturer_id: 8,
      category_id: 6,
    },
    store: {
      id: 2,
      name: 'Cotia - SP',
      src: '',
      address: '',
    },
    state: {
      id: 31,
      name: 'Minas Gerais',
      abbreviation: 'MG',
    },
    city: {
      id: 2921906,
      name: 'Mucug\u00ea',
      state_id: 29,
    },
  },
];

describe('Equipments Card Carousel Component', () => {
  it('should render component correctly', () => {
    render(<EquipmentsCarousel data={equipments} />);

    const carousel = screen.getByTestId('EquipmentsCarousel');

    expect(carousel).toBeInTheDocument();
  });
});
