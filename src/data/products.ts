import { Product } from '../interfaces/interfaces';

const product1 = {
  id: '1',
  title: 'Coffee Mug - Sin Imagen',
};

const product2 = {
  id: '2',
  img: './coffee-mug2.png',
  title: 'Coffee Mug - Con Imagen',
};

export const products: Product[] = [product1, product2];
