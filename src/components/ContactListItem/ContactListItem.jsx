import React from "react";
import { useDeleteContactMutation } from "redux/contactsApi";
import { ListItem } from "./ContactListItem.styled";
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import PropTypes from 'prop-types';


export default function ContactListItem({ id, name, phone }) {
  const [deleteContact, { isLoading, isSuccess, isError }] = useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.warning(`${name} removed from your contacts`);
    }
    if (isError) {
      toast.error(isError.data);
    }
  }, [isError, isSuccess, name]);

  return (
    <ListItem key={id}>
      <p>
        {name}:{phone}
      </p>
      {isLoading ? ('Delelting contact ...') : (
        <button onClick={() => deleteContact(id)}>Delete</button>
      )}
    </ListItem>
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