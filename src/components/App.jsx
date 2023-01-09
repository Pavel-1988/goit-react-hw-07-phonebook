import { useFetchContactsQuery } from 'redux/contactsApi';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {

  const {data: contacts = [], isLoading} = useFetchContactsQuery
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <>
            {isLoading && <p>Loading ...</p>}
             <Filter />
            <ContactList />
          </>
        ) : (
            <p>You have no contacts</p>
        )
      }

      {/* <Filter />
      <ContactList /> */}

      </>
    )
}
  

// https://63b67deb58084a7af3b3c24c.mockapi.io/:endpoint