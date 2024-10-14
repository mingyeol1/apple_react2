import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
           <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">매기샵</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">사진</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%"/>
          <h4>상품명</h4>
          <p>설명</p>
        </div>
        <div className="col-md-4">
          <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="80%"/>
          <h4>상품명</h4>
          <p>설명</p>
        </div>
        <div className="col-md-4">
          <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="80%"/>
          <h4>상품명</h4>
          <p>설명</p>
        </div>
      </div>
     </div> 

    </div>
  );
}

export default App;
