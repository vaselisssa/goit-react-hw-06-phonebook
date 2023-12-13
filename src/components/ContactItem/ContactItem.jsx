import React from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { Contact, Text, DeleteButton } from './ContactItem.styled';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <Contact key={contact.id}>
      <Text>
        {contact.name} : {contact.number}
      </Text>
      <DeleteButton
        type="button"
        onClick={() => onDeleteContact(contact.id)}
        aria-label="Delete contact"
      >
        <FaRegTrashCan />
      </DeleteButton>
    </Contact>
  );
};

export default ContactItem;
