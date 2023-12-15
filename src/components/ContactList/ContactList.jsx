import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { Contacts, EmptyContactListText } from './ContactList.styled';
import ContactItem from 'components/ContactItem';

const getFilteredContacts = (contacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  return filteredContacts.length > 0 ? (
    <Contacts>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} contact={{ id, name, number }} />
      ))}
    </Contacts>
  ) : (
    <EmptyContactListText children="There are no contacts." />
  );
};

export default ContactList;
