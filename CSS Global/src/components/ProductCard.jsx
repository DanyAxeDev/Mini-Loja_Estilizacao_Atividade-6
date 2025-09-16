import React, { useState } from 'react';

const formatPrice = (v) => {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export default function ProductCard({ product, onAdd, buttonVariant = 'solid', loading = false }) {
  const [pending, setPending] = useState(false);

  const ratingLabel = product ? `${product.rating} de 5 estrelas` : 'Carregando';

  const handleClick = () => {
    if (!product || pending) return;
    setPending(true);
    setTimeout(() => {
      onAdd(product.id);
      setPending(false);
    }, 600);
  };

  if (loading) {
    return (
      <article className="product-card" aria-busy="true" aria-label="Produto carregando">
        <div className="skeleton" style={{ aspectRatio: '1/1' }} />
        <div className="product-content">
          <div className="skeleton" style={{ height: '20px' }} />
          <div className="skeleton" style={{ height: '24px' }} />
          <div className="skeleton" style={{ height: '16px' }} />
          <div className="product-actions">
            <div className="skeleton" style={{ height: '40px' }} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="product-card" aria-label={product.title}>
      <div className="badges">
        {product.tag && (
          <span className="badge" aria-label={`Tag: ${product.tag}`}>{product.tag}</span>
        )}
      </div>

      <a href="#" className="mediaLink" aria-label={`Ver detalhes de ${product.title}`}>
        <img
          className="media"
          src={product.image}
          alt={product.title}
          loading="lazy"
          width="512"
          height="512"
        />
      </a>

      <div className="product-content">
        <h2 className="product-title" title={product.title}>
          {product.title}
        </h2>

        <p className="product-price">
          {formatPrice(product.price)}
        </p>

        <div className="rating" role="img" aria-label={ratingLabel}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden="true">
              {i < Math.round(product.rating) ? '★' : '☆'}
            </span>
          ))}
        </div>

        <div className="product-actions">
          <button
            type="button"
            className={`product-button ${buttonVariant}`}
            onClick={handleClick}
            disabled={pending}
            aria-disabled={pending}
            aria-busy={pending}
          >
            {pending ? 'Adicionando…' : 'Adicionar'}
          </button>
        </div>
      </div>
    </article>
  );
}
