import { useDispatch, useSelector } from 'react-redux';
import { selectedFilter } from 'redux/selectors';
import { setFilter } from '../../redux/filter.slice';
import styles from '../Filter/Filter.module.css';


export const Filter = () => {

  const dispatch = useDispatch();

  const value = useSelector(selectedFilter);
  const handleOnChange = event => dispatch(setFilter(event.target.value));

  
    return (
      <>
        <label htmlFor="search" className={styles.label}> Find contacts by name</label>
           <input
          type="text"
          className={styles.searchForm}
          placeholder="Search contact name"
          value={value}
          name="filter"
          id= "search"
          onChange={handleOnChange}
        />
         
      </>      
    );
  }
