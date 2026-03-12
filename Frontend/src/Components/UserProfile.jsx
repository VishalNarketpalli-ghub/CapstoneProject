import { userAuth } from "../Store/authStore";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router";

function UserProfile() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const logout = userAuth((state) => state.logout);

    // const navigate = useNavigate()

    const onLogout = async () => {
        // logout
        await logout();

        // navigate to rout
        navigate("/login");
    };

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            try {
                let res = await axios.get(
                    "http://localhost:4000/user-api/user",
                    { withCredentials: true },
                );

                setArticles(res.data.payload);
                // console.log(articles);
            } catch (error) {
                console.log("error ", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div>
            <button onClick={onLogout}>Logout</button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <div className="border m-2 p-4 bg-gray-200">
                    {articles.map((e) => (
                        <div key={e._id}>
                            <NavLink to="/article" state={e}>
                                <p className="font-semibold">
                                    Title: {e.title}
                                </p>
                                <p>Auhor: {e.author}</p>
                                <p>Category: {e.category}</p>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
