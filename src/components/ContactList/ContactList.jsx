import { React } from 'react';
import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { useFetchContactsQuery } from 'redux/contactsApi';
import ContactListItem from '../ContactListItem/ContactListItem'

export const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const { data } = useFetchContactsQuery();

  return (
  
      <List>
      {data && 
        data
          .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.phone.includes(filter))
        .map(({ name, phone, id }) => (
          <ContactListItem name={name} phone={phone} key={id} id={id} />
          ))
      }
      </List>
  )
}

















//================================d1===========================//

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useFetchContactsQuery } from 'redux/contactsApi';
// import { getStatusFilter } from 'redux/selectors';
// import ContactListItem from 'components/ContactListItem/ContactListItem';
// import {List} from './ContactList.styled';


// export function ContactList() {
  
//   const filter = useSelector(getStatusFilter);
//   const { data: contacts = [], isFetching } = useFetchContactsQuery();

//   const contactsList = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter))
//   }


//   return (
//     <>
//       {isFetching && <p> Loading...</p>}
//       <List>
//         {contactsList().map(contact  => (
//           < ContactListItem key={contact.id} {... contact} />
//         ))}
//       </List>
//     </>
//  )
// };
