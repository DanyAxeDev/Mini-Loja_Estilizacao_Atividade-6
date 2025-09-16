import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  100% { transform: translateX(100%); }
`;

export const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 16px;
  box-shadow: ${props => props.theme.shadows.xs};
  transition: transform 200ms ease, box-shadow 200ms ease, opacity 200ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }

  &:focus-within {
    outline: 3px solid ${props => props.theme.colors.focus};
    outline-offset: 4px;
  }
`;

export const MediaLink = styled.a`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
`;

export const Media = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  background: ${props => props.theme.colors.skeleton};
  display: block;
  transition: opacity 200ms ease;
`;

export const Badges = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  gap: 6px;
  z-index: 2;
`;

export const Badge = styled.span`
  font-size: 12px;
  font-weight: 700;
  padding: 6px 8px;
  border-radius: 999px;
  background: ${props => props.theme.colors.accent};
  color: #ffffff;
`;

export const Content = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2`
  font-size: 16px;
  line-height: 1.3;
  font-weight: 600;
  color: ${props => props.theme.colors.fgStrong};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.theme.colors.fgStrong};
`;

export const Rating = styled.div`
  letter-spacing: 2px;
  color: ${props => props.theme.colors.star};
  user-select: none;
`;

export const Actions = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  appearance: none;
  border: 1px solid ${props => props.theme.colors.borderStrong};
  padding: 10px 12px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 180ms ease, opacity 180ms ease, background 180ms ease, color 180ms ease, border-color 180ms ease;
  outline: none;

  &:focus-visible {
    outline: 3px solid ${props => props.theme.colors.focus};
    outline-offset: 2px;
  }

  &:disabled, &[aria-disabled='true'] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.solid {
    background: ${props => props.theme.colors.accent};
    color: #ffffff;
    border-color: ${props => props.theme.colors.accent};

    &:hover {
      transform: translateY(-1px);
    }
  }

  &.outline {
    background: transparent;
    color: ${props => props.theme.colors.accent};
    border-color: ${props => props.theme.colors.accent};

    &:hover {
      transform: translateY(-1px);
      background: color-mix(in srgb, ${props => props.theme.colors.accent} 10%, transparent);
    }
  }

  &.ghost {
    background: ${props => props.theme.colors.surface2};
    color: ${props => props.theme.colors.fg};
    border-color: ${props => props.theme.colors.border};

    &:hover {
      transform: translateY(-1px);
      background: ${props => props.theme.colors.surface3};
    }
  }
`;

export const Skeleton = styled.div`
  position: relative;
  background: ${props => props.theme.colors.skeleton};
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, ${props => props.theme.colors.skeletonHighlight}, transparent);
    animation: ${shimmer} 1.2s infinite;
  }
`;
