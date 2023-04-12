import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { FormContainer, FormTitle, FormInput, FormButton } from './ContactForm.styled';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const newContact = { name, number };
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <FormContainer>
      <form onSubmit={handleFormSubmit}>
        <FormTitle>Name</FormTitle>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        />
        <FormTitle>Number</FormTitle>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
        <br />
        <FormButton type="submit">Add contact</FormButton>
      </form>
    </FormContainer>
  );
};

export default ContactsForm;
