import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getContacts, getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const filterId = nanoid();
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor={filterId}>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          id={filterId}
          value={useSelector(getFilter)}
          onChange={handleChangeFilter}
          disabled={useSelector(getContacts).length === 0}
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
