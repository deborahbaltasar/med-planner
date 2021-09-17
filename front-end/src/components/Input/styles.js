import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding-bottom: .5rem;
  padding-right: .8rem;
  width: 100%;

  border-bottom: 2px solid var(--dark-purple);
  color: var(--dark-purple);
  
  display: flex;
  align-items: center;

  transition: .5s;

  & + div {
    margin-top: 1.2rem;
  }

  ${props => props.isErroded && css`
    border-color: #ff073a;
  `}



  ${props => props.isFilled && css`
    color:  var(--purple);
  `}

  input {
    flex: 1;
    background: transparent;
    font-size: 1rem;
    border: 0;
    color: var(--darker-purple);

    &::placeholder {
      color: var(--dark-purple);
    }
  }

  ${props => props.isFocused && css`
    color:  var(--purple);
    border-color: var(--purple);

    input {
      &::placeholder {
        visibility: hidden;
      }
    }
  `}

  svg {
    margin-right: .8rem;
  }

  @media (max-width: 768px){
    height: 50px;
  }
`;

export const Error = styled.div`
  height: 20px;
  margin-left: 16px;
`;
