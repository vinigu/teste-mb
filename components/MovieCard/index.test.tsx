import { render, screen } from '@testing-library/react';
import EquipmentCard from '.';

describe('Equipment Card component', () => {
  it('should render component correctly', () => {
    render(
      <EquipmentCard
        id="es21323"
        href="#"
        name="Mini Carregadeira 2t"
        path="https://armac.com.br/wordpress/wp-content/uploads/2021/12/gerador-85kVA-armac.jpg"
        internal_code="123456"
        price={100000}
        year="2021"
        is_semi_new={false}
        hour_meter={1000}
        blackfriday_tag={false}
      />,
    );

    const image = screen.getByRole('img');
    const title = screen.getByTestId('title');
    const internalCode = screen.getByTestId('internal-code');
    const price = screen.getByTestId('price');
    const hourmeter = screen.getByTestId('hour_meter');
    const year = screen.getByTestId('hour_meter');

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(internalCode).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(hourmeter).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(title.innerHTML).toBe('Mini Carregadeira 2t');
  });
});
