import React from "react";
import postsArray from '../postlist/posts.json';
import PostItem
    from "../postlist/PostItem";

const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default HomeComponent;