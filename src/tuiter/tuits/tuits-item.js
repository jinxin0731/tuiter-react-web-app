import React from "react";
import * as Icon from 'react-bootstrap-icons';
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
import TuitStats from "../tuit-stats/tuit-stats";

const TuitsItem = (
    {
        post = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "time": "2h",
            "image": "spacex.jng",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="d-flex flex-row">

                <div className="col-1 me-4">
                    <img className="rounded-circle mt-1" width={48} src={post.image}/>
                </div>

                <div className="col-11 me-5 ">
                    <div className="d-flex flex-column">
                        <div>
                            <i className="bi bi-x-lg float-end me-4"
                               onClick={() => deleteTuitHandler(post._id)}/>
                            <span className="fw-bold">{post.userName} </span>
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
export default TuitsItem;