import { useState } from 'react';
import { useFetchContactsQuery, useCreateContactMutation} from 'redux/contactsApi';

import { FormContainer, ListSpan } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

export const ContactForm = () => {
   
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useFetchContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactsName = contacts.map(contact => contact.name);

    const filterName = contactsName.some(
      contactName => contactName.toLowerCase() === name.toLowerCase()
    );
    if (filterName) {
		return  Notiflix.Notify.failure('You already have a contact with that name');
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    createContact(newContact);
    Notiflix.Notify.success('You have just created a new contact');
    reset();
  };


  const reset = () => {
    setName('');
    setNumber('');
  };

   return (
      <FormContainer  onSubmit={handleSubmit}>
        <label >
          <ListSpan >Name</ListSpan>
          <input
            onChange={onHandleChange}
            type="text"
            name="name"
            value={name}
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={numberInputId} >
          <ListSpan >Number</ListSpan>
          <input
            onChange={onHandleChange}
            type="tel"
            name="number"
            value={number}
            id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
          <button  type="submit" disabled={isLoading}>
          {isLoading ? 'Adding contact ...' : 'Add contact'}
        </button>
    </FormContainer>
    )
}
