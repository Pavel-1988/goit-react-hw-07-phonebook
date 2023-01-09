import React from "react";
import Notiflix from "notiflix";
import { useDeleteContactMutation } from "redux/contactsApi";
import { ListItem } from "./ContactListItem.styled";

export default function ContactListItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const deleteContacts = contactId => {
    deleteContact(contactId);
    Notiflix.Notify.success ('You have just deleted a contact')
  }

  return (
    <ListItem key={id}>
      <p>
        {name}:{number}
      </p>
      <button
        type="button"
        onClick={() => deleteContacts(id)}>
            {isDeleting ? 'Deleting contact ... ' : 'Delete'}
      </button>
    </ListItem>
  )
}