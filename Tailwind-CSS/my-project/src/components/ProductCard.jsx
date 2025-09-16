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
      <article className="relative flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-[var(--shadow-xs)] transition-all duration-200" aria-busy="true" aria-label="Produto carregando">
        <div className="relative bg-[var(--color-skeleton)] overflow-hidden animate-pulse h-48 sm:h-56 lg:h-48">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-skeleton-highlight)] to-transparent animate-[shimmer_1.2s_infinite]" />
        </div>
        <div className="p-3 flex flex-col gap-2">
          <div className="relative bg-[var(--color-skeleton)] overflow-hidden animate-pulse h-5">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-skeleton-highlight)] to-transparent animate-[shimmer_1.2s_infinite]" />
          </div>
          <div className="relative bg-[var(--color-skeleton)] overflow-hidden animate-pulse h-6">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-skeleton-highlight)] to-transparent animate-[shimmer_1.2s_infinite]" />
          </div>
          <div className="relative bg-[var(--color-skeleton)] overflow-hidden animate-pulse h-4">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-skeleton-highlight)] to-transparent animate-[shimmer_1.2s_infinite]" />
          </div>
          <div className="mt-1 flex items-center">
            <div className="relative bg-[var(--color-skeleton)] overflow-hidden animate-pulse h-10 w-full rounded-xl">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-skeleton-highlight)] to-transparent animate-[shimmer_1.2s_infinite]" />
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="relative flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-[var(--shadow-xs)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] focus-within:outline-2 focus-within:outline-[var(--color-focus)] focus-within:outline-offset-1" aria-label={product.title}>
      <div className="absolute top-2 left-2 flex gap-1.5 z-[2]">
        {product.tag && (
          <span className="text-xs font-bold px-2 py-1.5 rounded-full bg-[var(--color-accent)] text-white" aria-label={`Tag: ${product.tag}`}>{product.tag}</span>
        )}
      </div>

      <a href="#" className="rounded-t-2xl overflow-hidden block" aria-label={`Ver detalhes de ${product.title}`}>
        <img
          className="w-full h-48 sm:h-56 lg:h-48 object-cover bg-[var(--color-skeleton)] block transition-opacity duration-200"
          src={product.image}
          alt={product.title}
          loading="lazy"
          width="512"
          height="512"
        />
      </a>

      <div className="p-3 flex flex-col gap-2">
        <h2 className="text-base leading-[1.3] font-semibold text-[var(--color-fg-strong)] line-clamp-2" title={product.title}>
          {product.title}
        </h2>

        <p className="text-lg font-bold text-[var(--color-fg-strong)]">
          {formatPrice(product.price)}
        </p>

        <div className="tracking-[2px] text-[var(--color-star)] select-none" role="img" aria-label={ratingLabel}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden="true">
              {i < Math.round(product.rating) ? '★' : '☆'}
            </span>
          ))}
        </div>

        <div className="mt-1 flex items-center">
          <button
            type="button"
            className={`appearance-none border px-3 py-2.5 rounded-xl font-bold cursor-pointer transition-all duration-[180ms] outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-1 disabled:opacity-60 disabled:cursor-not-allowed ${buttonVariant === 'solid'
                ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)] hover:-translate-y-0.5'
                : buttonVariant === 'outline'
                  ? 'bg-transparent text-[var(--color-accent)] border-[var(--color-accent)] hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)]'
                  : 'bg-[var(--color-surface-2)] text-[var(--color-fg)] border-[var(--color-border)] hover:-translate-y-0.5 hover:bg-[var(--color-surface-3)]'
              }`}
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
