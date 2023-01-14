import { React } from 'react';
import { useSelector } from 'react-redux';
import { List,  } from './ContactList.styled';
import { useFetchContactsQuery } from 'redux/contactsApi';
import ContactListItem from '../ContactListItem/ContactListItem'

import { RotatingLines } from  'react-loader-spinner'

export const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const { data, isFetching } = useFetchContactsQuery();

  return (
  
    <List>
      {isFetching &&
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="46"
          visible={true}
          />
          }
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











