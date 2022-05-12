import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';

const { act } = renderer;

import { products } from '../../src/data/products';

const product = products[0];

describe('ProductTitle', () => {
  test('debe mostrar el componente correctament', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <h1>Hola</h1>}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe incrementar el contador', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>
        {({ increaseBy, count }) => (
          <>
            <h1>Hola</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(10)}>Incrementar</button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('10');
  });
});
