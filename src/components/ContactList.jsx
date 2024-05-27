import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../redux/selectors';
import { Contact } from './Contact';
// import css from '../styles/ContactList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = (contacts, filter) => {
    console.log(filter);
    console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};
