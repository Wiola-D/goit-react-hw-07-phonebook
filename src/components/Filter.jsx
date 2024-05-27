import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/reducer/filterSlice';
import { nanoid } from '@reduxjs/toolkit';
// import css from '../styles/Filter.module.css';

export const Filter = () => {
  const filterInputId = nanoid();
  const dispatch = useDispatch();

  const handleFilter = evt => {
    const filter = evt.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        onChange={handleFilter}
        type="text"
        name="filter"
        id={filterInputId}
        pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </div>
  );
};
