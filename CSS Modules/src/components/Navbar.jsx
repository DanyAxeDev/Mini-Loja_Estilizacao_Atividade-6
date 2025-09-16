import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar({ cartCount, theme, onToggleTheme }) {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <NavLink to="/" className={styles.logo} aria-label="Página inicial">
          <span aria-hidden="true">🛍️</span>
          <strong>Shop</strong>
          <span className={styles.dot} aria-hidden="true">.</span>
        </NavLink>

        <nav className={styles.actions} aria-label="Ações e navegação">
          <button
            type="button"
            className={styles.themeToggle}
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
            aria-pressed={theme === 'dark'}
          >
            <span className={styles.themeThumb} aria-hidden="true" />
            <span className={styles.themeText}>
              {theme === 'dark' ? 'Escuro' : 'Claro'}
            </span>
          </button>

          <div className={styles.cart} role="status" aria-live="polite" aria-label="Itens no carrinho">
            <span className={styles.cartIcon} aria-hidden="true">🛒</span>
            <span className={styles.cartCount}>{cartCount}</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
