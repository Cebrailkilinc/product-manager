import React, { forwardRef, ReactNode } from 'react';
import { ProductManagerViewProps } from './product-manager.type';


const ProductManagerView = forwardRef<HTMLDivElement, ProductManagerViewProps>(({ children }, ref) => {
  return (
    <div ref={ref}>
      {children || "Product Manager Area"}
    </div>
  );
});

ProductManagerView.displayName = 'ProductManagerView';

export default ProductManagerView;
