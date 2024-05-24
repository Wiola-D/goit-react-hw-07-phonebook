import { useEffect } from 'react';
import { fetchContacts } from '../../redux/API';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>goit-react-hw-07-phonebook</div>
      {isLoading && !error && <p>...is Loading</p>}
    </>
  );
};
