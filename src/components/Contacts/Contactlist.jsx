import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { StyledContactsList } from './ContactList.styled';

const Contactlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(state => {
    const filteredContacts = state.contacts.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
    );
    return filteredContacts;
  });
  return (
    <StyledContactsList>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))} name={id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </StyledContactsList>
  );
};

export default Contactlist;
