import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {updateLike} from "../tuits/tuits-reducer";
import "./index.css";
import * as Icon from "react-bootstrap-icons";


const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    const handleSaveButton = () => {
        dispatch(updateLike(post._id));
    };
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
                    <span onClick={handleSaveButton}>
                        {post.liked ? <Icon.HeartFill className="wd-icon-red"/> :
                            <Icon.Heart className="wd-font-size"/>}
                        <span
                            className="ps-2">{post.likes}</span>
                    </span>
                </div>

                <div className="wd-font-size wd-icon-item">
                    <a href="#" className="bi bi-upload text-secondary wd-comments"/>
                </div>

            </div>
        </>
    );
};
export default TuitStats;