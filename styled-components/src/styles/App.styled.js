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

export const Grid = styled.section`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
