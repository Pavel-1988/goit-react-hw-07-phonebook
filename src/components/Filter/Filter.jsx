
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/formSlice';
import { FilterLabel } from './Filter.styled';


export const Filter = () => {
  const dispath = useDispatch();
  const filter = useSelector(state => state.contacts.query)

  return (
    <FilterLabel htmlFor="filter">
      Find contacts by name
      <input
        type="text"
        value={filter}
        name="filter"
        onChange={e => dispath(filterContacts(e.currentTarget.value))} />
    </FilterLabel>
  )
}
