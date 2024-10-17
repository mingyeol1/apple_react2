import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import Shoes from './shose';
import data from './data';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './routes/detail';
import About from './routes/about';
import Event from './routes/event';




function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">





           <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">매기샵</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        
        <Route path='/detail/:id' element={<Detail shoes={shoes}></Detail>} />
        <Route path='/' element={<div>
          <div className='main-bg'></div>
            <div className="container">
              <div className="row">
              {
                shoes.map(function(a, i){
                  return(
               <Link to={`/detail/${i}`} key={i}>  <Shoes shoes={shoes} i={i} key={i}></Shoes> </Link>
                )})
              }
              </div>
            </div> 
            <button onClick={()=>{
              let copy = [...shoes].sort((a, b) => a.title.localeCompare(b.title));
              setShoes(copy);
            }}>글정렬</button>
          </div>}/>
          <Route path='*' element={<div>존재하지 않는 페이지</div>}></Route>
          <Route path='/about' element={<About/>}>
              <Route path='member' element={<div>멤버임ㅋ</div>}></Route>
          </Route>
          <Route path='/event' element={<Event/>}>
            <Route path='one' element={<div>첫 주문시 배달비 무료</div>}></Route>
            <Route path='two' element={<div>생일기념 쿠폰</div>}></Route>
          </Route>
      </Routes>



     

    </div>
  );
}

export default App;
