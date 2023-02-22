import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import styles from '../ContactForm/ContactForm.module.css';
import { selectContacts } from 'redux/selectors';
import { useState } from 'react';



export const ContactForm = () => {
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleChange = event => {
    const { name, value } = event.target;
      switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
        break;

      default:
        break;
    }
    };
    
     const handleSubmit = event => {
        event.preventDefault();

        const Contact = {
            // id: nanoid(),
            name,
            phone,
            };
        
        if (
        contacts.some(
            contact => contact.name.toLowerCase() === Contact.name.toLowerCase()
        )
        ) {
        return alert(`${Contact.name} is already in contacts.`);
        }

        dispatch(addContact(Contact));

        setName('');
        setPhone('');

    };

    


     return (
        <form  className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.formItem}>
                <p>Name</p>
                <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
                value={name}


                />
            </label>

        
            <label className={styles.formItem}>
                <p>Number</p>
                <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}
                value={phone}


                />
            </label>

            <button className={styles.btn} type="submit">
            Add contact
            </button>
        </form>
    )
}
   

   
