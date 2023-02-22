import React, { useEffect } from 'react';


import { useDispatch, useSelector } from 'react-redux';


import styles from './App.module.css';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter} from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';




const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
    <div className={styles.container} >
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b> Request in progress...</b>}

      <h2>Contacts</h2>
        <Filter />
        <ContactList /> 

    </div>
  );
  
  
};


export default App;