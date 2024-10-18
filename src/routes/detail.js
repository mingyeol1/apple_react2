import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import '../App.css';

function Detail(props){

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(x){
        return x.id == id;
    })
    let [disPlay, setDisPlay] = useState(true)
    let [num, setNum] = useState('')    
    let [tap, setTap] = useState(2);
    let [fade, setFade] = useState(''); // 서서히 페이지가 나오는 애니메이션 스테이트

    // useEffect(() => {
    //     if(isNaN(num)){ //isNaN : 숫자면 false 문자면 ture처리하는 함수
    //         setDisPlay(true) // 문자면 true여서 숫자만적으셈 출력
    //     }else{
    //         setDisPlay(false) // false여서 아무 문자도 안나옴
    //     }
    // },[num])

    // useEffect(() => {
    //    let time = setTimeout(() => {
    //         SetDisPlay(false)
    //     },2000)
    //     console.log(time)
    // },[])
    useEffect(()=>{
        setTimeout(()=>{setFade('end')},500); //페이지 입장시 0.5초뒤에 end className 붙이기
        return(()=>{
            setFade('');        //페이지 나갈 시 end 삭제 
        })
    }, [])  //디펜던시 페이지 접속시 1번만 코드를 실행하기 위해

    return(
    <div className={"container start " + fade} > {/* fade 여부 */}
        <div className="alert alert-warning">
            2초이내 구매시 할인
        </div>
        <div className="row">
            <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${Number(id)+1}.jpg`} width="100%" />
            </div>
            <div className="col-md-6">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            {/* <p style={{display : disPlay ? "block" : "none"}}>숫자만적으셈</p>  키 : 벨류(display : disPlay)  형태 true면 문자출력 false면 출력하지 않음.  */}
            <input type="text" onChange={(e) => setNum(e.target.value)}></input>
            <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>

        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={()=>{setTap(0)}} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{setTap(1)}} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{setTap(2)}} eventKey="link2" >버튼2</Nav.Link>
          </Nav.Item>
       </Nav>

       <Tapcount tap={tap}></Tapcount>


    </div> 
    )
}

function Tapcount( {tap} ){
    
    let [fade, setFade] = useState('')

    useEffect(()=>{
        setTimeout(()=>{setFade('end')}, 100);
        return ()=>{
            setFade('')
        }
    },[tap])

    return(
        <div className={"start " + fade}>
            {
                [<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][tap]
            }
        </div>
    )
}

export default Detail;