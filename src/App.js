import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import Shoes from './shose';
import data from './data';
import { Route, Routes } from 'react-router-dom';
import Detail from './detail';




function App() {

  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">





           <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">매기샵</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/detail">상세페이지</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">사진</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/detail' element={<Detail shoes={shoes}></Detail>} />
        <Route path='/' element={<div>
          <div className='main-bg'></div>
            <div className="container">
              <div className="row">
              {
                shoes.map(function(a, i){
                  return(
                  <Shoes shoes={shoes} i={i}></Shoes>
                )})
              }
              </div>
            </div> 
          </div>}/>
      </Routes>



     

    </div>
  );
}

export default App;
