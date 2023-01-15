import React from "react";
import { useDeleteContactMutation } from "redux/contactsApi";
import { List } from "./ContactListItem.styled";
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { RotatingLines } from  'react-loader-spinner'
import PropTypes from 'prop-types';



export default function ContactListItem({ id, name, number }) {
  const [deleteContact, { isLoading, isSuccess, isError }] = useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.warning(`" ${name} " removed from your contacts`);
    }
    if (isError) {
      toast.error(isError.data);
    }
  }, [isError, isSuccess, name]);

  return (
    
    <List key={id}>
      
      <p>{name}:</p>
      <p>{number}</p>

      {isLoading ?
        <RotatingLines
        strokeColor="#0c866c"
        strokeWidth="5"
        animationDuration="0.75"
        width="46"
        visible={true}
      /> : (
        <button onClick={() => deleteContact(id)}>Delete</button>
        )}  
    </List>
    
  )
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
