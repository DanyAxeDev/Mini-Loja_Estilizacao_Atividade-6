import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { Grid } from '../styles/App.styled.js';

export default function Catalog({ products, onAdd }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid aria-label="Lista de produtos">
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
    </Grid>
  );
}
