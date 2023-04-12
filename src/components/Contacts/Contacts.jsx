import ContactsForm from '../ContactsForm/СontactsForm';
import Contactlist from './Contactlist';
import Filter from './Filter';


export const Contacts = () => {
    return (
        <div>
          <h1>Phonebook</h1>
          <ContactsForm></ContactsForm>
          <h2>Contacts</h2>
          <Filter ></Filter>
          <Contactlist
          ></Contactlist>
        </div>
      );
}