import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/API';
// import css from '../styles/Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <div>
        <p>{contact.name}: </p>
        <p>{contact.phone}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};
