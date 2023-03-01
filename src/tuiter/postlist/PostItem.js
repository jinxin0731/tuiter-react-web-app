import React from "react";
import "./index.css";
import picUrl from "../../images/picture.jpeg"

const PostItem = (
    {
        post = {
            "_id": 123,
            "portrait1": "spacex.png",
            "author2": "Elon Musk",
            "author1": "SpaceX",
            "handle": "spaceX",
            "handle2": "elonmusk",
            "time2": "15h",
            "time3": "16h",
            "time": "23h",
            "summary": "Dennis and Akiko Tito are the first two crew members on Starship's second commercial spaceflight around the Moon -> ",
            "link":"spacex.com/updates",
            "summary2": "We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal anywhere",
            "summary3": "Starlink for RVs now has over 100,000 customers!Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage —> starlink.com/rv",
            "picture": "news1.webp",
            "comments": "595",
            "reposts": "1,168",
            "portrait2": "elonmusk.jpeg",
            "likes": "11.1K",
            "comments2": "5,346",
            "reposts2": "1,601",
            "likes2": "19.2K",
        }
    }
) => {
    return(
        <li className="list-group-item  border ">
            <div>
                <div className="pt-1 d-flex flex-row">

                    <div className="me-3">
                        <i className="float-end bi bi-repeat text-secondary fw-bold"/>
                        <img className="rounded-circle float-end ms-3" width={48} height={48}
                             src={`../../images/${post.portrait1}`}/>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <div>
                                <span className="wd-phrase wd-color-summary fw-bold">{post.author2} Retweeted</span>
                            </div>
                            <div>
                                <span className="h6 fw-bold">{post.author1}</span>
                                <i className="bi bi-check-circle-fill wd-font-color-blue m-1"/>
                                <span className="h6 text-secondary fw-normal">@{post.handle}</span>
                                <span className="h6 text-secondary fw-normal"> · {post.time}</span>
                                <a href="#" className="bi bi-three-dots h6 text-secondary fw-normal float-end pe-3">
                                </a>
                            </div>

                            <div className="pe-3 mb-3 wd-phrase">
                                <span className="" >{post.summary}
                                    <a href="#" className="wd-font-color text-decoration-none ">{post.link}</a>
                                </span>
                            </div>
                        </div>

                        <div className="card rounded-4 overflow-hidden border border-light me-3">
                            <img className="card-img-top" src={`../../images/${post.picture}`}/>
                        </div>

                        <div className="d-flex float-start mt-2">
                            <div className="wd-font-size wd-icon-item">
                                <a href="#" className="text-decoration-none">
                                    <i className="bi bi-chat text-secondary me-3"/>
                                    <span className="wd-font-family text-secondary">{post.comments}</span>
                                </a>
                            </div>


                            <div className="wd-font-size wd-icon-item">
                                <a href="#" className="text-decoration-none text-secondary">
                                    <i className="bi bi-repeat text-secondary me-3"/>
                                    <span className="wd-font-family text-secondary">{post.reposts}</span>
                                </a>
                            </div>

                            <div className="wd-font-size wd-icon-item">
                                <a href="#" className="text-decoration-none wd-small-icon text-secondary me-3">
                                    <i className="bi bi-heart text-secondary me-3"/>
                                    <span className="wd-font-family  text-secondary">{post.likes}</span>
                                </a>
                            </div>

                            <div className="wd-font-size wd-icon-item">
                                <a href="#" className="bi bi-upload text-secondary wd-comments"/>
                            </div>

                        </div>

                        <div className="wd-font-color pt-4 pb-2">Show this thread</div>

                    </div>

                </div>
            </div>

            <div className="border-top border-light pb-3">
                <div className="pt-1 d-flex flex-row">

                    <div className="me-3">

                        <img className="rounded-circle float-end ms-3 mt-1" width={48} height={48}
                             src={`../../images/${post.portrait2}`}/>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="mb-2">

                            <div>
                                <span className="h6 fw-bold">{post.author2}</span>
                                <i className="bi bi-check-circle-fill wd-font-color-blue m-1"/>
                                <span className="h6 text-secondary fw-normal">@{post.handle2}</span>
                                <span className="h6 text-secondary fw-normal"> · {post.time2}</span>
                                <a href="#" className="bi bi-three-dots h6 text-secondary fw-normal float-end pe-3">
                                </a>
                            </div>

                            <div className="wd-phrase mb-2">
                                <span >{post.summary2}</span>
                            </div>
                        </div>

                        <div className="card rounded-4 overflow-hidden border pt-2 pb-2 ps-3 pe-1 me-3">
                            <div>
                                <img className="rounded-circle float-start mt-1 me-1" width={20} height={20}
                                     src={`../../images/${post.portrait1}`}/>
                                <span className="h6 fw-bold">{post.author1}</span>
                                <i className="bi bi-check-circle-fill wd-font-color-blue m-1"/>
                                <span className="h6 text-secondary fw-normal">@{post.handle}</span>
                                <span className="h6 text-secondary fw-normal"> · {post.time3}</span>

                            </div>

                            <span className="wd-phrase mt-1">{post.summary3}</span>

                        </div>

                        <div className="d-flex float-start mt-2">
                            <div className="wd-font-size wd-icon-item">
                                <a href="#" className="text-decoration-none">
                                    <i className="bi bi-chat text-secondary me-3"/>
                                    <span className="wd-font-family text-secondary">{post.comments2}</span>
                                </a>
                            </div>


                            <div className="wd-font-size wd-icon-item">
                                <a href="#" className="text-decoration-none text-secondary">
                                    <i className="bi bi-repeat text-secondary me-3"/>
                                    <span className="wd-font-family text-secondary">{post.reposts2}</span>
                                </a>
                            </div>

                            <div className="wd-font-size wd-icon-item">
                                <a href="#" className="text-decoration-none wd-small-icon text-secondary me-3">
                                    <i className="bi bi-heart text-secondary me-3"/>
                                    <span className="wd-font-family  text-secondary">{post.likes2}</span>
                                </a>
                            </div>

                            <div className="wd-font-size wd-icon-item">
                                <a href="#" className="bi bi-upload text-secondary wd-comments"/>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </li>
    );
};

export default PostItem;