import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Header,
  Content,
  Logo,
  Dot,
  Actions,
  ThemeToggle,
  ThemeThumb,
  ThemeText,
  Cart,
  CartIcon,
  CartCount
} from './Navbar.styled.js';

export default function Navbar({ cartCount, theme, onToggleTheme }) {
  return (
    <Header>
      <Content>
        <Logo as={NavLink} to="/" aria-label="Página inicial">
          <span aria-hidden="true">🛍️</span>
          <strong>Shop</strong>
          <Dot aria-hidden="true">.</Dot>
        </Logo>

        <Actions aria-label="Ações e navegação">
          <ThemeToggle
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
            aria-pressed={theme === 'dark'}
          >
            <ThemeThumb aria-hidden="true" />
            <ThemeText>
              {theme === 'dark' ? 'Escuro' : 'Claro'}
            </ThemeText>
          </ThemeToggle>

          <Cart role="status" aria-live="polite" aria-label="Itens no carrinho">
            <CartIcon aria-hidden="true">🛒</CartIcon>
            <CartCount>{cartCount}</CartCount>
          </Cart>
        </Actions>
      </Content>
    </Header>
  );
}
