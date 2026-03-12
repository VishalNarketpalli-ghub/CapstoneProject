import { useLocation } from "react-router";

function Articles() {
    const location = useLocation();
    const articleObj = location.state;

    return <>{articleObj.map((e)=>{
        
    })}</>;
}

export default Articles;
