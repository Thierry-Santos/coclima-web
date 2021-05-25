import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton, FilterText, ArrowIcon } from './styles';

const FilterButton = ({ onClick, value }) => {
  return(
    <StyledButton onClick={onClick}>
      <FilterText>{value || 'Filtro'}</FilterText>
      <ArrowIcon />
    </StyledButton>
  )
}

FilterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
}

export default FilterButton;