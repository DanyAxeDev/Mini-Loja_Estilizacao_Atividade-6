# Tailwind CSS - MiniLoja

Esta implementação utiliza **Tailwind CSS** para estilização da aplicação MiniLoja, oferecendo utility-first CSS com classes pré-definidas.

## 📋 Características

### Estrutura de Estilos
- **Utility-first**: Classes utilitárias para estilização rápida
- **Classes inline**: Estilos aplicados diretamente no JSX via className
- **CSS Custom Properties**: Mantém variáveis CSS para temas dinâmicos
- **Vite Plugin**: Integração nativa com Vite para processamento otimizado

### Organização dos Estilos

```jsx
// Uso de classes Tailwind
<div className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm">
  <img className="w-full h-48 object-cover rounded-t-2xl" />
  <div className="p-3 flex flex-col gap-2">
    <h2 className="text-base font-semibold text-gray-900">Título</h2>
  </div>
</div>
```

### Componentes e Estilos

#### App.jsx
- Classes utilizadas: `pt-16` para padding-top
- Mantém a estrutura simples sem classes de layout complexas

#### Navbar.jsx
- Classes principais:
  - `fixed top-0 inset-x-0 h-16` - Posicionamento fixo
  - `bg-[var(--color-surface)]` - Background usando CSS custom properties
  - `max-w-[1200px] h-full mx-auto px-4` - Container responsivo
  - `flex items-center justify-between gap-4` - Layout flexbox

#### ProductCard.jsx
- Classes principais:
  - `relative flex flex-col` - Layout do card
  - `bg-[var(--color-surface)] border border-[var(--color-border)]` - Aparência
  - `rounded-2xl shadow-[var(--shadow-xs)]` - Bordas e sombras
  - `hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]` - Efeitos hover
  - `w-full h-48 sm:h-56 lg:h-48 object-cover` - Imagem responsiva

### Sistema de Responsividade

```jsx
// Breakpoints do Tailwind
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {/* Cards do produto */}
</div>

// Classes condicionais para botões
<button className={`
  ${buttonVariant === 'solid'
    ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
    : buttonVariant === 'outline'
      ? 'bg-transparent text-[var(--color-accent)] border-[var(--color-accent)]'
      : 'bg-[var(--color-surface-2)] text-[var(--color-fg)] border-[var(--color-border)]'
  }
`}>
```

## 🎨 Sistema de Temas

### theme.css (Global)
Mantém as variáveis CSS para compatibilidade com o sistema de temas:

```css
:root {
  --color-bg: #f7f7f8;
  --color-fg: #111114;
  --color-surface: #ffffff;
  --color-accent: #5b7cfa;
  /* ... */
}

[data-theme='dark'] {
  --color-bg: #0e0f12;
  --color-fg: #e9e9ef;
  --color-surface: #15161a;
  --color-accent: #7aa2ff;
  /* ... */
}
```

### Uso de Variáveis CSS com Tailwind
```jsx
// Sintaxe de valores arbitrários
<div className="bg-[var(--color-surface)] text-[var(--color-fg)]">
  Conteúdo
</div>

// Sombra personalizada
<div className="shadow-[var(--shadow-md)]">
  Card com sombra customizada
</div>
```

## ⚡ Vantagens

- ✅ **Desenvolvimento rápido**: Classes utilitárias prontas para uso
- ✅ **Consistência**: Design system padronizado
- ✅ **Responsividade**: Classes responsivas built-in
- ✅ **Performance**: CSS otimizado e purged automaticamente
- ✅ **Manutenibilidade**: Estilos declarativos no HTML
- ✅ **Flexibilidade**: Valores arbitrários para casos especiais
- ✅ **Documentação**: Excelente documentação e ferramentas

## ⚠️ Desvantagens

- ❌ **Curva de aprendizado**: Muitas classes para memorizar
- ❌ **HTML verboso**: Classes podem tornar o JSX muito longo
- ❌ **Customização limitada**: Difícil para designs muito específicos
- ❌ **Bundle size**: Pode gerar CSS grande se não configurado corretamente
- ❌ **Debugging**: Mais difícil de debugar estilos complexos

## 🚀 Como Executar

```bash
cd "Tailwind-CSS/my-project"
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
│   └── theme.css
├── App.jsx
└── main.jsx
```

## 🔧 Configuração

### Dependências
```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.1.13",
    "tailwindcss": "^4.1.13"
  }
}
```

### Vite Config
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### CSS Import
```css
/* src/styles/theme.css */
@import "tailwindcss";

/* Variáveis CSS customizadas */
:root {
  --color-bg: #f7f7f8;
  /* ... */
}
```

## 💡 Exemplos de Uso

### Layout Responsivo
```jsx
<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>
```

### Estados Interativos
```jsx
<button className="
  px-4 py-2 rounded-lg font-semibold
  bg-blue-500 text-white
  hover:bg-blue-600 hover:-translate-y-0.5
  focus:outline-none focus:ring-2 focus:ring-blue-500
  disabled:opacity-50 disabled:cursor-not-allowed
  transition-all duration-200
">
  Clique aqui
</button>
```

### Componentes Condicionais
```jsx
<div className={`
  flex items-center justify-center p-4 rounded-lg
  ${isLoading ? 'bg-gray-100 animate-pulse' : 'bg-white'}
  ${hasError ? 'border-red-500 border-2' : 'border border-gray-200'}
`}>
  {content}
</div>
```

### Valores Arbitrários
```jsx
<div className="
  w-[300px] h-[200px]
  bg-[#ff6b6b]
  shadow-[0_10px_25px_rgba(0,0,0,0.1)]
  animate-[bounce_2s_infinite]
">
  Conteúdo personalizado
</div>
```

## 🎯 Classes Principais Utilizadas

### Layout
- `flex`, `grid`, `block`, `inline-flex`
- `items-center`, `justify-between`, `gap-4`
- `max-w-[1200px]`, `mx-auto`, `px-4`

### Espaçamento
- `p-3`, `px-4`, `py-2`, `pt-16`
- `gap-2`, `gap-4`, `space-x-2`

### Cores e Background
- `bg-[var(--color-surface)]`, `text-[var(--color-fg)]`
- `border-[var(--color-border)]`

### Efeitos
- `hover:-translate-y-0.5`, `hover:shadow-[var(--shadow-md)]`
- `transition-all duration-200`
- `rounded-2xl`, `shadow-sm`

### Responsividade
- `sm:h-56`, `lg:h-48`, `md:grid-cols-2`
- `xl:grid-cols-4`