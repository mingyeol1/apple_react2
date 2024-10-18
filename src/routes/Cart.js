import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart(){

    let item = useSelector((state)=>{return state.item})
    
    return(
        <div>
            <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            {
                item.map((a,i)=>{
                    return(
                        <tbody>
                        <tr>
                        <td>1</td>
                        <td>{item[i].name}</td>
                        <td>{item[i].count}</td>
                        <td>안녕</td>
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