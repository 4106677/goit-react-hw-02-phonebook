import { Box, Contact } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <Box>
      {contacts.map(contact => (
        <Contact key={contact.id}>
          {contact.name}: {contact.number}
        </Contact>
      ))}
    </Box>
  );
};
