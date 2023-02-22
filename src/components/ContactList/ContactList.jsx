import {  useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

import { ContactItem } from '../ContactList/ContactItem';


export const ContactList = () => {
  
  const filteredList = useSelector(selectFilteredContacts);
  
    return <ul>
        {filteredList.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
        )               
        )}
       
        </ul>
   
};

