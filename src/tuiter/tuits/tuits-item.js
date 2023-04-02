import React from "react";
import * as Icon from 'react-bootstrap-icons';
import {useDispatch} from "react-redux";
// import {deleteTuit} from "./tuits-reducer";
import TuitStats from "../tuit-stats/tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({post}) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="d-flex flex-row">

                <div className="col-1 me-4">
                    <img className="rounded-circle mt-1" width={48} src={`/images/${post.image}`}/>
                </div>

                <div className="col-11 me-5 ">
                    <div className="d-flex flex-column">
                        <div>
                            <i className="bi bi-x-lg float-end me-4"
                               onClick={() => deleteTuitHandler(post._id)}/>
                            <span className="fw-bold">{post.username} </span>
                            <Icon.CheckCircleFill />
                            <span> {post.handle} </span>·<span> {post.time}</span><br/>
                            <div className="me-4 mb-2">{post.tuit}</div>
                        </div>


                        <TuitStats post={post} />
                    </div>

                </div>

            </div>
        </li>

    );

};
export default TuitItem;