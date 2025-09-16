import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';

export default function Catalog({ products, onAdd }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section aria-label="Lista de produtos" className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
            <ProductCard key={'skeleton-' + i} loading />
          ))
          : products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={() => onAdd(p.id)}
              buttonVariant={p.buttonVariant}
            />
          ))
        }
      </div>
    </section>
  );
}
