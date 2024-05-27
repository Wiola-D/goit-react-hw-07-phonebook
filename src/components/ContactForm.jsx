import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/API';
import { selectContacts } from '../redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import css from '../styles/ContactForm.module.css';
import { useEffect } from 'react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form[0].value;
    const phone = form[1].value;
    const newContact = { id: nanoid(), name, phone };
    const nameExists = contacts.some(contact => contact.name === name);

    if (nameExists) {
      alert(name + ' is already in contacts.');
    } else {
      dispatch(addContact(newContact));
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.container}>
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          className={css.input}
          name="name"
          id="nameInput"
          pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          placeholder="enter the Name"
        />
      </div>
      <div className={css.container}>
        <label htmlFor="numberInput">Number</label>
        <input
          type="text"
          name="phone"
          className={css.input}
          id="numberInput"
          pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
          title="Phone number must start with +"
          required
          placeholder="enter the Number"
        />
      </div>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
  //   return (
  //     <form>
  //       <div className="container">

  //     </form>
  //   );
};
