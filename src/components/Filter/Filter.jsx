import React from 'react';
import { nanoid } from 'nanoid';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  const filterId = nanoid();

  return (
    <FilterContainer>
      <FilterLabel htmlFor={filterId}>
        Find contacts by name
        <FilterInput
          type="text"
          id={filterId}
          value={value}
          onChange={onChange}
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
