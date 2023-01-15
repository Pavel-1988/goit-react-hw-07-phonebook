import { React } from 'react';
import { useSelector } from 'react-redux';
import { List, RotatingDiv } from './ContactList.styled';
import { useFetchContactsQuery } from 'redux/contactsApi';
import ContactListItem from '../ContactListItem/ContactListItem'

import { RotatingLines } from  'react-loader-spinner'

export const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const { data, isFetching } = useFetchContactsQuery();

  return (
  
    <List>
      {isFetching &&
        <RotatingDiv>
        <RotatingLines
          strokeColor="#0c866c"
          strokeWidth="5"
          animationDuration="0.75"
          width="46"
          visible={true}
          />
          </RotatingDiv>
          }
      {data && 
        data
        .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.phone.includes(filter))
        .map(({ name, number, id }) => (
          <ContactListItem name={name} number={number} key={id} id={id} />
          ))
      }
      </List>
  )
}











