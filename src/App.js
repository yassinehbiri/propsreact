import './App.css';
import ListPlayer from './Components/ListPlayer';
import { Container,Navbar } from 'react-bootstrap';

function App() {
  return (
    
      <div className='play'>
        <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">****FIFA Players****</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
          <ListPlayer/>
          <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">****Best FIFA Players Ever****</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
      </div>
   
  );
}

export default App;