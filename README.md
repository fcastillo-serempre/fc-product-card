# FC-Product-Card

Este es un paquete de pruebas de despliegue en NPM.

### Felipe Castillo

## Ejemplo

```
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons,
} from 'fc-product-card';
```

```
 <ProductCard
        product={product}
        initialValues={{
          count: 5,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```
