import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import Shoes from './shose';
import data from './data';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './routes/detail';
import About from './routes/about';
import Event from './routes/event';
import axios from 'axios';
import Cart from './routes/Cart';
import { useQuery } from 'react-query';


let Context1 = createContext();

function Child(){
  console.log('재랜더링됨')
  return(
    <div>
      자식임
    </div>
  )
}


function App() {

  useEffect(() => {
    if(!localStorage.getItem('watched'))
    localStorage.setItem('watched', JSON.stringify([]))
  },[])

  // let obj = {name : 'kim'}
  // localStorage.setItem('data' , JSON.stringify(obj))

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [num, setNum] = useState(2);
  let [loding, setLoding] = useState(false)
  let [재고] = useState([10,11,12]);

  let [count ,setCount] = useState(0);

  let result = useQuery(['작명'], ()=>{ 
    return axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
      return a.data
    })
  })

  // result.data // 요청이 성공했을 때 가져오는 데이터
  // result.isLoading // 로딩중일때 요청중일때 ture
  // result.error  //요청에 실패했을 때 ture


  return (
    <div className="App">
        <Child></Child>
        <button onClick={()=>{setCount(count + 1)}}> + </button>





           <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">매기샵</Navbar.Brand>
            <Nav className="me-auto">

              <Link to="/">Home</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/detail/0">Detail</Link>
          </Nav>
          <Nav className='ms-auto' style={{'color' : 'white'}}>반가워요 
            { result.isLoading ? '로딩중' : result.data.name}
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        
        <Route path='/detail/:id' element={<Detail shoes={shoes}></Detail>} />
        <Route path='/cart' element = {<Cart></Cart>}></Route>

        <Route path='/' element={<div>
          <div className='main-bg'></div>
            <div className="container">
              <div className="row">
              {
                shoes.map(function(a, i){
                  return(
                <Link to={`/detail/${i}`}> <Shoes shoes={shoes} i={i} key={i}></Shoes> </Link> 
                )})
              }
              </div>
            </div> 
            <button style={{display : num > 3 ? "none" : "block"}} onClick={()=>{ setNum(num+1)
                axios.get(`https://codingapple1.github.io/shop/data${num}.json`)
                .then((result)=>{ 
                  setLoding(true)
                  let copy = [...shoes, ...result.data];
                  setShoes(copy)
                  setLoding(false)
                }).catch(()=>{
                  setLoding(false)
                    console.log('GET요청 실패')
                  })
            }}>불러오기</button>
            {loding === true && <h3>로딩중.....</h3>}
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
