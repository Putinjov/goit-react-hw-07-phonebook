import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import 'index.css';
import { useDispatch } from 'react-redux';


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className='contacts'>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};