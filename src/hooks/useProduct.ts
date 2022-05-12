import { useEffect, useRef, useState } from 'react';
import { initialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductProps {
  initialValues?: initialValues;
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  value?: number;
}

export const useProduct = ({
  initialValues,
  onChange,
  product,
  value = 0,
}: useProductProps) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number = 1) => {
    const newValue = Math.min(
      initialValues?.maxCount || Infinity,
      Math.max(counter + value, 0)
    );
    setCounter(newValue);

    onChange &&
      onChange({
        product,
        count: newValue,
      });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    maxCount: initialValues?.maxCount || Infinity,
    isMaxCountReached:
      !!initialValues?.maxCount && initialValues.maxCount === counter,

    increaseBy,
    reset,
  };
};
