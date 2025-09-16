import React, { useState } from 'react';
import {
  Card,
  MediaLink,
  Media,
  Badges,
  Badge,
  Content,
  Title,
  Price,
  Rating,
  Actions,
  Button,
  Skeleton
} from './ProductCard.styled.js';

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
      <Card aria-busy="true" aria-label="Produto carregando">
        <Skeleton style={{ aspectRatio: '1/1' }} />
        <Content>
          <Skeleton style={{ height: '20px' }} />
          <Skeleton style={{ height: '24px' }} />
          <Skeleton style={{ height: '16px' }} />
          <Actions>
            <Skeleton style={{ height: '40px' }} />
          </Actions>
        </Content>
      </Card>
    );
  }

  return (
    <Card aria-label={product.title}>
      <Badges>
        {product.tag && (
          <Badge aria-label={`Tag: ${product.tag}`}>{product.tag}</Badge>
        )}
      </Badges>

      <MediaLink href="#" aria-label={`Ver detalhes de ${product.title}`}>
        <Media
          src={product.image}
          alt={product.title}
          loading="lazy"
          width="512"
          height="512"
        />
      </MediaLink>

      <Content>
        <Title title={product.title}>
          {product.title}
        </Title>

        <Price>
          {formatPrice(product.price)}
        </Price>

        <Rating role="img" aria-label={ratingLabel}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden="true">
              {i < Math.round(product.rating) ? '★' : '☆'}
            </span>
          ))}
        </Rating>

        <Actions>
          <Button
            type="button"
            className={buttonVariant}
            onClick={handleClick}
            disabled={pending}
            aria-disabled={pending}
            aria-busy={pending}
          >
            {pending ? 'Adicionando…' : 'Adicionar'}
          </Button>
        </Actions>
      </Content>
    </Card>
  );
}
