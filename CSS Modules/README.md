# CSS Modules - MiniLoja

Esta implementação utiliza **CSS Modules** para estilização da aplicação MiniLoja, oferecendo encapsulamento de estilos por componente.

## 📋 Características

### Estrutura de Estilos
- **Arquivos modulares**: Cada componente tem seu próprio arquivo `.module.css`
- **Classes locais**: Nomes de classes são automaticamente únicos e encapsulados
- **Importação de estilos**: Estilos são importados como objetos JavaScript
- **CSS Global compartilhado**: Arquivo `theme.css` com variáveis CSS globais

### Organização dos Estilos

```javascript
// Importação de estilos
import styles from './Component.module.css';

// Uso das classes
<div className={styles.container}>
  <h1 className={styles.title}>Título</h1>
</div>
```

### Componentes e Estilos

#### App.jsx
- Importa: `App.module.css`
- Classes utilizadas: `styles.page`, `styles.main`, `styles.grid`
- Mantém as variáveis CSS globais do `theme.css`

#### Navbar.jsx
- Importa: `Navbar.module.css`
- Classes utilizadas: `styles.header`, `styles.content`, `styles.logo`, `styles.actions`
- Utiliza `:global()` para seletores que precisam ser globais

#### ProductCard.jsx
- Importa: `ProductCard.module.css`
- Classes utilizadas: `styles.card`, `styles.media`, `styles.content`, `styles.button`
- Estados do botão: `styles.solid`, `styles.outline`, `styles.ghost`

### Arquivos CSS por Componente

#### App.module.css
```css
.page {
  min-height: 100dvh;
  background: var(--color-bg);
  color: var(--color-fg);
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
}

.main {
  max-width: 1200px;
  margin: 80px auto 48px;
  padding: 0 16px;
}
```

#### Navbar.module.css
```css
.header {
  position: fixed;
  top: 0;
  inset-inline: 0;
  height: 64px;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

/* Seletor global para tema */
:global([data-theme='dark']) .themeToggle {
  justify-content: flex-start;
  padding: 0 40px 0 10px;
}
```

#### ProductCard.module.css
```css
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
}

.solid {
  background: var(--color-accent);
  color: #ffffff;
  border-color: var(--color-accent);
}
```

## 🎨 Sistema de Temas

### theme.css (Global)
- Contém todas as variáveis CSS para temas claro e escuro
- Importado em `main.jsx` para estar disponível globalmente
- Mesmas variáveis utilizadas em todos os módulos CSS

```css
:root {
  --color-bg: #f7f7f8;
  --color-fg: #111114;
  --color-surface: #ffffff;
  /* ... */
}

[data-theme='dark'] {
  --color-bg: #0e0f12;
  --color-fg: #e9e9ef;
  --color-surface: #15161a;
  /* ... */
}
```

## ⚡ Vantagens

- ✅ **Encapsulamento**: Classes são automaticamente únicas
- ✅ **Sem conflitos**: Impossível haver conflitos de nomes
- ✅ **Modularidade**: Cada componente tem seus próprios estilos
- ✅ **Type Safety**: Classes são importadas como objetos
- ✅ **Tree Shaking**: Apenas estilos usados são incluídos no bundle
- ✅ **Familiar**: Sintaxe CSS tradicional

## ⚠️ Desvantagens

- ❌ **Complexidade**: Múltiplos arquivos para gerenciar
- ❌ **CSS Global**: Ainda precisa de CSS global para variáveis
- ❌ **Dinâmico**: Classes dinâmicas podem ser mais complexas
- ❌ **Bundle Size**: Pode resultar em CSS duplicado

## 🚀 Como Executar

```bash
cd "CSS Modules"
npm install
npm run dev
```

## 📁 Estrutura de Arquivos

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.module.css
│   ├── ProductCard.jsx
│   └── ProductCard.module.css
├── pages/
│   └── Catalog.jsx
├── styles/
│   └── theme.css
├── App.jsx
├── App.module.css
└── main.jsx
```

## 🔧 Configuração

- **Vite** com suporte nativo a CSS Modules
- **Nomenclatura**: Arquivos `.module.css` são automaticamente processados
- **Classes geradas**: Formato `ComponentName_className__hash`
- **Variáveis globais**: Mantidas em arquivo CSS separado

## 💡 Exemplo de Uso

```javascript
import styles from './Button.module.css';

function Button({ variant = 'solid', children }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
}
```

```css
/* Button.module.css */
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.solid {
  background: var(--color-accent);
  color: white;
}

.outline {
  background: transparent;
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
}
```