import styled from "styled-components";

const Box = styled.div`
  margin: var(--margin);
  padding: var(--padding);
  justify-content: space-between;
  background: var(--bg-section);
  border: var(--border);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
:hover {
  cursor: pointer;
}
`;

const BoxHighlight = styled(Box)`
:hover {
  filter: var(--filter-brighten);
  transform: var(--scale-s);
  transition: var(--time-s);
}
`;

export const Card = styled(BoxHighlight)`
  background: var(--bg-card);
  color: var(--color-text-light);
`;

export const Sheet = styled(Box)`
  background: var(--bg-sheet);
  color: var(--color-text-light);
`;