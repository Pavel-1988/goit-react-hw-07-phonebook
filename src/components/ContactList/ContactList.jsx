import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { getStatusFilter } from 'redux/selectors';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import {List} from './ContactList.styled';


export function ContactList() {
  
  const filter = useSelector(getStatusFilter);
  const { data: contacts = [], isFetching } = useFetchContactsQuery();

  const contactsList = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter))
  }


  return (
    <>
      {isFetching && <p> Loading...</p>}
      <List>
        {contactsList().map(contact  => (
          < ContactListItem key={contact.id} {... contact} />
        ))}
      </List>
    </>
 )
};
