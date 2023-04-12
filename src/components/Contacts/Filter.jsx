import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contactSlice';
import { StyledInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const filterChange = evt => {
    dispatch(filterContacts(evt.target.value));
  };
  return (
    <StyledInput
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={filterChange}        
    />
  );
};

export default Filter;
