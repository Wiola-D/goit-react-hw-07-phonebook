import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/API';
import { useEffect } from 'react';
import css from '../styles/Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  // useEffect(() => {
  //   console.log(contact);
  // }, []);

  return (
    <>
      <div className={css.container}>
        <p className={css.liName}>{contact.name}: </p>
        <p>{contact.phone}</p>
      </div>
      <button className={css.buttonDelete} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
