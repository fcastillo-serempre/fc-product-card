import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';

import { products } from '../../src/data/products';

const product = products[1];

describe('ProductImage', () => {
  test('debe mostrar el componente correctament con la imagen personalizada', () => {
    const wrapper = renderer.create(<ProductImage img={product.img} />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
