import { useDispatch } from 'react-redux';
import { FaRegTrashCan } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contactSlice';
import { Contact, Text, DeleteButton } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <Contact key={contact.id}>
      <Text>
        {contact.name} : {contact.number}
      </Text>
      <DeleteButton
        type="button"
        onClick={handleDelete}
        aria-label="Delete contact"
      >
        <FaRegTrashCan />
      </DeleteButton>
    </Contact>
  );
};

export default ContactItem;
