import React from "react";
import {useDispatch} from "react-redux";
import "./index.css";
import * as Icon from "react-bootstrap-icons";
import {updateTuitThunk} from "../../services/tuits-thunks";


const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="d-flex flex-row float-start mt-2">
                <div className="wd-font-size wd-icon-item">
                    <a href="#" className="text-decoration-none">
                        <i className="bi bi-chat text-secondary me-2"/>
                        <span className="wd-font-family text-secondary">{post.replies}</span>
                    </a>
                </div>

                <div className="wd-font-size wd-icon-item">
                    <a href="#" className="text-decoration-none text-secondary">
                        <i className="bi bi-repeat text-secondary me-2"/>
                        <span className="wd-font-family text-secondary">{post.retuits}</span>
                    </a>
                </div>

                <div className="wd-font-size wd-icon-item">
                    <a href="#" className="text-decoration-none" onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        likes: post.liked ? post.likes - 1 : post.likes + 1,
                        liked: !post.liked
                    }))}>
                        {post.liked ? <Icon.HeartFill className="wd-icon-red"/> : <Icon.Heart className="wd-font-size"/>}
                        <span className="ps-2 wd-font-size wd-font-family">{post.likes}</span>
                    </a>
                </div>

                <div className="wd-font-size wd-icon-item">
                    <a href="#" className="text-decoration-none" onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        dislikes: post.disliked ? post.dislikes - 1 : post.dislikes + 1,
                        disliked: !post.disliked
                    }))}>
                        {post.disliked ? <Icon.HandThumbsDownFill/> : <Icon.HandThumbsDown className="wd-font-size"/>}
                        <span className="ps-2 wd-font-size wd-font-family">{post.dislikes}</span>
                    </a>
                </div>

                <div className="wd-font-size wd-icon-item">
                    <a href="#" className="bi bi-upload text-secondary wd-comments"/>
                </div>


            </div>
        </>
    );
};
export default TuitStats;

