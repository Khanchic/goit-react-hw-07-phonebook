import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import styles from '../ContactList/ContactList.module.css';


export const ContactItem = ({ contact }) => {
    const { id, name, phone } = contact;

    const dispatch = useDispatch();


    const handleDelete = () => dispatch(deleteContact(id));
         
     
        return (<li className={styles.contactItem}>
                <p>{name} : {phone} </p>
                <button
                    type="button"
                    className={styles.btn}
                    onClick={handleDelete}>             
                Delete
                </button>
            </li>
        );
}

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired

        }).isRequired,
    
}