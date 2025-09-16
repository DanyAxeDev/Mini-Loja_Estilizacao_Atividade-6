import styled from 'styled-components';

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

export const Content = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.colors.fgStrong};
  text-decoration: none;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const Dot = styled.span`
  color: ${props => props.theme.colors.accent};
`;

export const Actions = styled.nav`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`;

export const NavLinks = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: ${props => props.theme.colors.surface2};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 999px;
  padding: 6px 8px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 999px;
  color: ${props => props.theme.colors.fg};
  font-weight: 600;
  transition: background 180ms ease, color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${props => props.theme.colors.surface3};
  }

  &.active {
    background: ${props => props.theme.colors.accent};
    color: #fff;
  }
`;

export const ThemeToggle = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 10px 0 40px;
  background: ${props => props.theme.colors.surface2};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 999px;
  cursor: pointer;
  transition: transform 200ms ease, opacity 200ms ease;
  color: ${props => props.theme.colors.fg};
  min-width: 100px;

  &:focus-visible {
    outline: 3px solid ${props => props.theme.colors.focus};
    outline-offset: 2px;
  }

  &:hover {
    transform: translateY(-1px);
  }
`;

export const ThemeText = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const ThemeThumb = styled.span`
  position: absolute;
  left: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.theme.colors.accent};
  box-shadow: ${props => props.theme.shadows.sm};
  transition: transform 200ms ease;
`;

export const Cart = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${props => props.theme.colors.surface2};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 999px;
  padding: 6px 10px;
`;

export const CartIcon = styled.span`
  font-size: 16px;
`;

export const CartCount = styled.span`
  min-width: 1.5em;
  text-align: center;
  font-weight: 700;
  color: ${props => props.theme.colors.fgStrong};
`;
