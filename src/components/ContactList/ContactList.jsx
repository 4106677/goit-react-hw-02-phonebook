import { Box, Contact, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <Box>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id}>
          {name}: {number}
          <Button type="button" onClick={() => onDelete(id)}>
            X
          </Button>
        </Contact>
      ))}
    </Box>
  );
};
