import { Link, Outlet } from "react-router-dom";

function About(){
    return(
        <div>
            <h4>정보</h4>
            <Outlet></Outlet>
        </div>
    )
}

export default About;