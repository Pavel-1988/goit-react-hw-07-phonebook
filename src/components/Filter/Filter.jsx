
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



//============================в1=====================//
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getStatusFilter } from 'redux/selectors';
// import { setFilter } from 'redux/FilterSlice';
// import { nanoid } from 'nanoid';
// import { FilterLabel } from './Filter.styled';


// export const Filter = () => {

//   const filter = useSelector(getStatusFilter)
//   const dispatch = useDispatch();
//   const filterId = nanoid();

//   const changeFilter = (e) => {
//     const event = e.currentTarget.value;
//     dispatch(setFilter(event))
//   }

//   return (
//     <FilterLabel>
//       Find contacts by name
//       <input
//         type="text"
//         value={filter}
//         id={filterId}
//         onChange={changeFilter} />
//     </FilterLabel>
//   )
// };
