import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props){

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(x){
        return x.id == id;
    })
    let [disPlay, setDisPlay] = useState(true)
    let [num, setNum] = useState('')

    useEffect(() => {
        if(isNaN(num)){ //isNaN : 숫자면 false 문자면 ture처리하는 함수
            setDisPlay(true) // 문자면 true여서 숫자만적으셈 출력
        }else{
            setDisPlay(false) // false여서 아무 문자도 안나옴
        }
    },[num])

    // useEffect(() => {
    //    let time = setTimeout(() => {
    //         SetDisPlay(false)
    //     },2000)
    //     console.log(time)
    // },[])

    return(
    <div className="container">
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
            <p style={{display : disPlay ? "block" : "none"}}>숫자만적으셈</p>  {/* 키 : 벨류(display : disPlay)  형태 true면 문자출력 false면 출력하지 않음.  */}
            <input type="text" onChange={(e) => setNum(e.target.value)}></input>
            <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
    </div> 
    )
}

export default Detail;