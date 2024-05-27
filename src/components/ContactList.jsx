import { useSelector } from 'react-redux';
import { selectfilteredContacts } from '../redux/selectors';
import { Contact } from './Contact';
import css from '../styles/ContactList.module.css';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectfilteredContacts);

  return (
    <>
      {filteredContacts && filteredContacts.length > 0 ? (
        <ul className={css.list}>
          {filteredContacts.map(contact => (
            <li className={css.listItem} key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noContacts}>No contacts</p>
      )}
    </>
  );
};
