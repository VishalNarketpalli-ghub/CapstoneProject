import { useLocation } from "react-router";
// import { useState, useEffect } from "react";

function ArticleById() {
    const location = useLocation();
    const articleObj = location.state;
    // const [user, setUser] = useState();
    // console.log(location);
    // console.log(articleObj);

    // fetch user details and display their name pfp comment

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-black min-w-[415px]">
            <div className="bg-gray-300 pt-5 mx-18">
                <p className="text-6xl text-center font-mono">
                    {articleObj.title}
                </p>
                <p className="text-center">{articleObj.author}-[author name]</p>
                <div className="flex justify-between flex-wrap">
                    <p className="flex text-2xl ml-5 items-center font-sans">
                        {articleObj.category}
                    </p>
                    <div className="flex flex-col items-end m-5 p-3">
                        <div className="flex gap-1">
                            <p>Published :</p>
                            <p>
                                {articleObj.createdAt.slice(0, 10)} :
                                {articleObj.createdAt.slice(11, 16)}
                            </p>
                        </div>
                        <div className="flex gap-1">
                            <p>Last updated :</p>
                            <p>
                                {articleObj.updatedAt.slice(0, 10)} :
                                {articleObj.createdAt.slice(11, 16)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-purple-300 mx-18 p-5">
                <p className="font-serif p-5">{articleObj.content}</p>
                <div>
                    <p className="text-2xl">Comments:</p>
                    <div>
                        {articleObj.comments.map((e) => (
                            <div key={e._id} className="p-4">
                                <p>{e._id}</p>
                                {e.comments}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleById;

// author
// :
// "69ae92141b905bf3821f53d3"
// category
// :
// "comedy"
// comments
// :
// (2) [{…}, {…}]
// content
// :
// "sdjvbskdjv ksjdvbsdjbv "
// createdAt
// :
// "2026-03-09T15:14:01.902Z"
// isArticleActive
// :
// true
// title
// :
// "Bhalu"
// updatedAt
// :
// "2026-03-09T15:51:18.386Z"
// _id
// :
// "69aee3b90251a40e36443ba3"
