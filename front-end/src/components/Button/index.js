import React from 'react';

import { Container } from './styles';

function Button({loading, children, ...rest}) {
  return (
    <Container type="button" {...rest}>
      {loading ? "Carregando" : children}
    </Container>

  );
}

export default Button; 
