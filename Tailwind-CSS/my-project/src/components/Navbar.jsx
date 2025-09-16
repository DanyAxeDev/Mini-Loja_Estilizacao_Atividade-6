import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ cartCount, theme, onToggleTheme }) {
  return (
    <header className="fixed top-0 inset-x-0 h-16 bg-[var(--color-surface)] border-b border-[var(--color-border)] z-[100] shadow-[var(--shadow-sm)]">
      <div className="max-w-[1200px] h-full mx-auto px-4 flex items-center justify-between gap-4">
        <NavLink to="/" className="inline-flex items-center gap-2 text-[var(--color-fg-strong)] no-underline font-bold tracking-[-0.02em]" aria-label="Página inicial">
          <span aria-hidden="true">🛍️</span>
          <strong>Shop</strong>
          <span className="text-[var(--color-accent)]" aria-hidden="true">.</span>
        </NavLink>

        <nav className="inline-flex items-center gap-3" aria-label="Ações e navegação">
          <button
            type="button"
            className={`relative inline-flex items-center gap-2 h-9 px-2.5 pl-10 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-full cursor-pointer transition-all duration-200 text-[var(--color-fg)] min-w-[100px] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-2 ${theme === 'dark' ? 'justify-start pl-2.5 pr-10' : 'justify-end'}`}
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
            aria-pressed={theme === 'dark'}
          >
            <span className={`absolute w-6 h-6 rounded-full bg-[var(--color-accent)] shadow-[var(--shadow-sm)] transition-transform duration-200 ${theme === 'dark' ? 'right-1.5 left-auto' : 'left-1.5'}`} aria-hidden="true" />
            <span className="text-sm font-semibold">
              {theme === 'dark' ? 'Escuro' : 'Claro'}
            </span>
          </button>

          <div className="inline-flex items-center gap-1.5 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-full px-2.5 py-1.5" role="status" aria-live="polite" aria-label="Itens no carrinho">
            <span className="text-base" aria-hidden="true">🛒</span>
            <span className="min-w-[1.5em] text-center font-bold text-[var(--color-fg-strong)]">{cartCount}</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
