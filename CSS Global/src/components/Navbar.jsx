import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ cartCount, theme, onToggleTheme }) {
  return (
    <header className="header">
      <div className="navbar-content">
        <NavLink to="/" className="logo" aria-label="Página inicial">
          <span aria-hidden="true">🛍️</span>
          <strong>Shop</strong>
          <span className="dot" aria-hidden="true">.</span>
        </NavLink>

        <nav className="navbar-actions" aria-label="Ações e navegação">
          <button
            type="button"
            className="themeToggle"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
            aria-pressed={theme === 'dark'}
          >
            <span className="themeThumb" aria-hidden="true" />
            <span className="themeText">
              {theme === 'dark' ? 'Escuro' : 'Claro'}
            </span>
          </button>

          <div className="cart" role="status" aria-live="polite" aria-label="Itens no carrinho">
            <span className="cartIcon" aria-hidden="true">🛒</span>
            <span className="cartCount">{cartCount}</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
