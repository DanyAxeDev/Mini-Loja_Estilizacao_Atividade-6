# Styled Components - MiniLoja

Esta implementação utiliza **Styled Components** para estilização da aplicação MiniLoja, oferecendo CSS-in-JS com componentes estilizados.

## 📋 Características

### Estrutura de Estilos
- **CSS-in-JS**: Estilos escritos em JavaScript usando template literals
- **Componentes estilizados**: Cada elemento HTML é um componente React estilizado
- **Sistema de temas**: Integração nativa com `ThemeProvider`
- **Arquivos separados**: Estilos organizados em arquivos `.styled.js`

### Organização dos Estilos

```javascript
// Criação de componentes estilizados
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.fg};
`;
```

### Componentes e Estilos

#### App.jsx
- Utiliza `ThemeProvider` para fornecer tema aos componentes filhos
- Importa componentes estilizados: `Page`, `Main` de `App.styled.js`
- Gerencia temas através do estado React

#### Navbar.jsx
- Importa componentes estilizados de `Navbar.styled.js`
- Componentes: `Header`, `Content`, `Logo`, `Actions`, `ThemeToggle`, `Cart`
- Utiliza `as={NavLink}` para aplicar estilos ao componente React Router

#### ProductCard.jsx
- Importa componentes estilizados de `ProductCard.styled.js`
- Componentes: `Card`, `Media`, `Content`, `Button`, `Skeleton`
- Estados do botão implementados via props condicionais

### Arquivos de Estilos

#### App.styled.js
```javascript
import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100dvh;
  background: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.fg};
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
`;

export const Main = styled.main`
  max-width: 1200px;
  margin: 80px auto 48px;
  padding: 0 16px;
`;
```

#### Navbar.styled.js
```javascript
export const Header = styled.header`
  position: fixed;
  top: 0;
  inset-inline: 0;
  height: 64px;
  background: ${props => props.theme.colors.surface};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  z-index: 100;
  box-shadow: ${props => props.theme.shadows.sm};
`;

export const ThemeToggle = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  background: ${props => props.theme.colors.surface2};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 999px;
  
  &:hover {
    transform: translateY(-1px);
  }
  
  &:focus-visible {
    outline: 3px solid ${props => props.theme.colors.focus};
    outline-offset: 2px;
  }
`;
```

#### ProductCard.styled.js
```javascript
export const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 16px;
  box-shadow: ${props => props.theme.shadows.xs};
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

export const Button = styled.button`
  appearance: none;
  border: 1px solid ${props => props.theme.colors.borderStrong};
  padding: 10px 12px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  
  &.solid {
    background: ${props => props.theme.colors.accent};
    color: #ffffff;
    border-color: ${props => props.theme.colors.accent};
  }
  
  &.outline {
    background: transparent;
    color: ${props => props.theme.colors.accent};
    border-color: ${props => props.theme.colors.accent};
  }
`;
```

## 🎨 Sistema de Temas

### theme.js
```javascript
export const lightTheme = {
  colors: {
    bg: '#f7f7f8',
    fg: '#111114',
    fgStrong: '#0a0a0d',
    surface: '#ffffff',
    surface2: '#f1f1f3',
    surface3: '#e7e7ea',
    border: '#dcdce1',
    borderStrong: '#bdbdc7',
    accent: '#5b7cfa',
    focus: '#ff8f1f',
    star: '#e6b800',
    skeleton: '#e9e9ee',
    skeletonHighlight: '#ffffffa6',
  },
  shadows: {
    xs: '0 1px 2px rgba(0,0,0,0.05)',
    sm: '0 2px 6px rgba(0,0,0,0.06)',
    md: '0 8px 24px rgba(0,0,0,0.12)',
  },
};

export const darkTheme = {
  colors: {
    bg: '#0e0f12',
    fg: '#e9e9ef',
    fgStrong: '#ffffff',
    surface: '#15161a',
    surface2: '#1b1c22',
    surface3: '#22242b',
    border: '#2a2c34',
    borderStrong: '#3b3e48',
    accent: '#7aa2ff',
    focus: '#ffd166',
    star: '#ffd166',
    skeleton: '#1c1d24',
    skeletonHighlight: '#2a2c34',
  },
  shadows: {
    xs: '0 1px 2px rgba(0,0,0,0.4)',
    sm: '0 2px 6px rgba(0,0,0,0.5)',
    md: '0 8px 24px rgba(0,0,0,0.6)',
  },
};
```

### Uso do ThemeProvider
```javascript
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme.js';

const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

return (
  <ThemeProvider theme={currentTheme}>
    {/* Componentes da aplicação */}
  </ThemeProvider>
);
```

## ⚡ Vantagens

- ✅ **CSS-in-JS**: Estilos em JavaScript com poder total da linguagem
- ✅ **Temas dinâmicos**: Sistema de temas nativo e robusto
- ✅ **Props dinâmicas**: Estilos baseados em props do componente
- ✅ **Sem conflitos**: Classes geradas automaticamente únicas
- ✅ **TypeScript**: Excelente suporte a tipos
- ✅ **Performance**: Otimizações automáticas (critical CSS, etc.)
- ✅ **Pseudo-seletores**: Sintaxe natural para hover, focus, etc.

## ⚠️ Desvantagens

- ❌ **Runtime**: CSS é gerado em tempo de execução
- ❌ **Bundle size**: Biblioteca adicional no bundle
- ❌ **Debugging**: Mais difícil de debugar estilos
- ❌ **Learning curve**: Nova sintaxe para desenvolvedores CSS
- ❌ **SSR**: Complexidade adicional para Server-Side Rendering

## 🚀 Como Executar

```bash
cd "styled-components"
npm install
npm run dev
```

## 📁 Estrutura de Arquivos

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.styled.js
│   ├── ProductCard.jsx
│   └── ProductCard.styled.js
├── pages/
│   └── Catalog.jsx
├── styles/
│   ├── App.styled.js
│   ├── theme.js
│   └── theme.css
├── App.jsx
└── main.jsx
```

## 🔧 Configuração

### Dependências
```json
{
  "dependencies": {
    "styled-components": "^6.1.19"
  }
}
```

### Vite Plugin (Opcional)
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

## 💡 Exemplos de Uso

### Componente com Props
```javascript
const Button = styled.button`
  background: ${props => props.primary ? 'blue' : 'gray'};
  color: ${props => props.primary ? 'white' : 'black'};
  padding: ${props => props.size === 'large' ? '16px' : '8px'};
`;
```

### Pseudo-seletores
```javascript
const Card = styled.div`
  background: white;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  &:focus-within {
    outline: 2px solid blue;
  }
`;
```

### Animações
```javascript
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const FadeInDiv = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
`;
```