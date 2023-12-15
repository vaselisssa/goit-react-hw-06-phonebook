import { Container, Title, SubTitle } from './App.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const App = () => {
  return (
    <Container>
      <Title children="Phonebook" />
      <ContactForm />
      <SubTitle children="Contacts" />
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
