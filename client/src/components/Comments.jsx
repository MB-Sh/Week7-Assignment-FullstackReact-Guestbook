import commentData from "../lib/commentData.json"
import { useParams, Link, useSearchParams  } from "react-router-dom";

//we are going to use query strings to organise our comments

// /profile/mary/comments

// /profile/mary/comments?sort=asc
// /profile/mary/comments?sort=desc

export default function Comments(){
    const {username} =useParams();
const [searchParams]=useSearchParams();

const sort = searchParams.get ("sort");

//I need to build some logic that organises my data from asc to desc order

if(sort ==="asc"){
    commentData.sort();
}
else if (sort ==="desc"){
    commentData.sort().reverse();
}

    return(
        <>
        <Link to={`/profie/${username}/comments?sort=asc`}>Sort ASC</Link>
        <Link to={`/profie/${username}/comments?sort=desc`}> Sort DESC</Link>
        <h1>Comments</h1>
        <p>Please leave a comment</p>
        {
            commentData.map((comment)=>(
                <h3 key={comment}>{comment}</h3>
            ))
        }
        </>
    );
}