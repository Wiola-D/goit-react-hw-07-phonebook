import { ContactForm } from 'components/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/API';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { ContactsList } from './ContactList';
import { Filter } from './Filter';
import css from '../styles/App.module.css';
import { Loader } from './Loader';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error && <Loader />}
      <div className={css.container}>
        {error && <p>{error}</p>}
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>ContactForm</h2>
        <Filter />
        <ContactsList error={error} />
      </div>
    </div>
  );
};
