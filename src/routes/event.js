import { Link, Outlet } from "react-router-dom";

function Event(){
    return(
        <div>
            <h3>오늘의 이벤트</h3>
            <Link to={'/event/one'}><div>1첫번째이벤트</div></Link>
            <Link to={'/event/two'}><div>두번째이벤트</div></Link>
            <Outlet></Outlet>
        </div>
    )
}

export default Event;