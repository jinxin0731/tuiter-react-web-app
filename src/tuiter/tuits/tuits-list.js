import {useSelector} from "react-redux";
import TuitsItem from "./tuits-item";
import React from "react";

const TuitsList = () => {
    const postsArray = useSelector((state) => state.tuits);
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <TuitsItem post = {post}/>)
            }
        </ul>
    );
};
export default TuitsList;