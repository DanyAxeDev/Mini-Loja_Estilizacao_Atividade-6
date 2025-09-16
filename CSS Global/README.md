# CSS Global - MiniLoja

Esta implementação utiliza **CSS Global** para estilização da aplicação MiniLoja.

## 📋 Características

### Estrutura de Estilos
- **Arquivo único**: `src/styles/global.css` contém todos os estilos da aplicação
- **Variáveis CSS**: Utiliza CSS Custom Properties (variáveis) para temas claro e escuro
- **Classes globais**: Todos os componentes compartilham as mesmas classes CSS

### Organização dos Estilos

```css
/* Variáveis globais para tema claro */
:root {
  --color-bg: #f7f7f8;
  --color-fg: #111114;
  --color-surface: #ffffff;
  /* ... outras variáveis */
}

/* Variáveis para tema escuro */
[data-theme='dark'] {
  --color-bg: #0e0f12;
  --color-fg: #e9e9ef;
  --color-surface: #15161a;
  /* ... outras variáveis */
}
```

### Componentes e Estilos

#### App.jsx
- Utiliza classes globais: `page`, `main`
- Gerencia o tema através do atributo `data-theme` no documento

#### Navbar.jsx
- Classes utilizadas: `header`, `navbar-content`, `logo`, `navbar-actions`, `themeToggle`, `cart`
- Toggle de tema com animações CSS

#### ProductCard.jsx
- Classes utilizadas: `product-card`, `mediaLink`, `media`, `badges`, `badge`, `product-content`, `product-button`
- Estados do botão: `solid`, `outline`, `ghost`
- Animação de skeleton para carregamento

## 🎨 Sistema de Temas

### Tema Claro
- Fundo: `#f7f7f8`
- Superfície: `#ffffff`
- Texto: `#111114`
- Accent: `#5b7cfa`

### Tema Escuro
- Fundo: `#0e0f12`
- Superfície: `#15161a`
- Texto: `#e9e9ef`
- Accent: `#7aa2ff`

## ⚡ Vantagens

- ✅ **Simplicidade**: Um arquivo CSS para toda a aplicação
- ✅ **Performance**: CSS carregado uma vez
- ✅ **Temas dinâmicos**: Fácil troca entre temas claro/escuro
- ✅ **Manutenibilidade**: Todas as variáveis centralizadas

## ⚠️ Desvantagens

- ❌ **Conflitos de nomes**: Classes podem conflitar entre componentes
- ❌ **Especificidade**: Pode ser difícil sobrescrever estilos
- ❌ **Escalabilidade**: Difícil de manter em projetos grandes
- ❌ **Reutilização**: Classes podem ser usadas incorretamente

## 🚀 Como Executar

```bash
cd "CSS Global"
npm install
npm run dev
```

## 📁 Estrutura de Arquivos

```
src/
├── components/
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── pages/
│   └── Catalog.jsx
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

## 🔧 Configuração

- **Sem dependências extras** para CSS
- **Vite** configurado para processar CSS
- **CSS Custom Properties** para sistema de temas