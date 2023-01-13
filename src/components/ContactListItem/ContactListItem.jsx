import React from "react";
import { useDeleteContactMutation } from "redux/contactsApi";
import { List } from "./ContactListItem.styled";
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { RotatingLines } from  'react-loader-spinner'
import PropTypes from 'prop-types';


export default function ContactListItem({ id, name, phone }) {
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
      <p>{phone}</p>

      {isLoading ? <RotatingLines
        strokeColor="grey"
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
  phone: PropTypes.string.isRequired,
};

//====================d1=========================//

// import React from "react";
// import Notiflix from "notiflix";
// import { useDeleteContactMutation } from "redux/contactsApi";
// import { ListItem } from "./ContactListItem.styled";

// export default function ContactListItem({ id, name, number }) {
//   const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

//   const deleteContacts = contactId => {
//     deleteContact(contactId);
//     Notiflix.Notify.success ('You have just deleted a contact')
//   }

//   return (
//     <ListItem key={id}>
//       <p>
//         {name}:{number}
//       </p>
//       <button
//         type="button"
//         onClick={() => deleteContacts(id)}>
//             {isDeleting ? 'Deleting contact ... ' : 'Delete'}
//       </button>
//     </ListItem>
//   )
// }