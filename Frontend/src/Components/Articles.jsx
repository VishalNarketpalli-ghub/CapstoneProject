import { useLocation } from "react-router";

function Articles() {
    const location = useLocation();
    const articleObj = location.state;
    console.log(location);
    console.log(articleObj);
    return <>{articleObj.map((e) => {})}</>;
}

export default Articles;
