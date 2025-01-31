import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge, changeName} from "./../store/useSlice";
import {deleteItem, itemCount} from "../store"

function Cart(){

    let item = useSelector((state)=>{return state})
    let dispatch = useDispatch() //store.js로 요청보내주는 함수

    return(
        <div>
            {item.user.name} {item.user.age}의 장바구니
            <button onClick={()=>{
                dispatch(changeAge(5))
            }}>나이+1 버튼</button>
            <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                <th>삭제하기</th>
                </tr>
            </thead>
            {
                item.item.map((a,i)=>{
                    return(
                        <tbody key={i}>
                        <tr>
                        <td>{item.item[i].id}</td>
                        <td>{item.item[i].name}</td>
                        <td>{item.item[i].count}</td>
                        <td>
                        <button onClick={()=>{
                            dispatch(itemCount(item.item[i].id))
                        }}>+</button>
                        </td>
                                                <td>
                        <button onClick={()=>{
                            dispatch(deleteItem(item.item[i]))
                        }}>삭제</button>
                        </td>

                        </tr>
                    </tbody>
                    )
                })
            }

            </Table> 
        </div>
    )
}

export default Cart;