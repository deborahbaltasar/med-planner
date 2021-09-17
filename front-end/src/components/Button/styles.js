import styled from 'styled-components';

export const Container = styled.button`
  background: var(--purple);
  color: #FFF;
  font-size: 1.4rem;
  border-radius: 10px;
  border: 0;
  padding: .5rem 1rem;
  width: 100%;
  font-weight: bold;
  transition: color, background-color 0.4s;

  &:hover {
    background: var(--dark-blue);
  }
`;
