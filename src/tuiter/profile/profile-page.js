import React from "react";
import {useSelector} from "react-redux";
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    const profile = useSelector((state) => state.profile);

    return(
        <div className="border border-light">
            <div className="row ">
                <div className="col-2 ps-4 mt-2 fw-bold">
                    <Link to="/tuiter/home" >
                        <Icon.ArrowLeft className="fa-lg" />
                    </Link>
                </div>

                <div className="col-10">
                    <div className="fw-bold ">{profile.firstName} {profile.lastName}</div>
                    <div className="wd-tuits-size" >6,114 Tuits</div>
                </div>
            </div>

            <div className="border-0">
                <img className="position-relative top-0 " height="240px" width="100%" src={profile.bannerPicture} />
            </div>

            <div className="d-flex justify-content-between">
                <div>
                    <img className="rounded-circle wd-avatar-position" width={100} src={profile.profilePicture} />
                </div>

                <div className="me-3 mt-2">
                    <Link to="/tuiter/edit-profile">
                        <button className="wd-button-edit border-light fw-bold">Edit profile</button>
                    </Link>
                </div>
            </div>
            <div className="ms-2 me-2">
                <div className="fw-bold ">{profile.firstName} {profile.lastName}</div>
                <div className="wd-font-size">{profile.handle}</div>
                <div className="mt-2">{profile.bio}</div>
                <div className="mt-1">
                    <span className="wd-font-size"><Icon.GeoAlt/> {profile.location} </span>
                    <span className="wd-font-size"> <Icon.Balloon/> Born {profile.dateOfBirth} </span>
                    <span className="wd-font-size"> <Icon.Calendar3/> Joined {profile.dateJoined}</span>
                </div>
                <div className="mb-2 mt-1">
                    <span className="wd-font-size text-black fw-bold">{profile.followingCount}  </span> <span className="wd-font-size"> Following &nbsp;</span>
                    <span className="wd-font-size text-black fw-bold"> {profile.followersCount}</span> <span className="wd-font-size"> Followers </span>
                </div>
            </div>
        </div>
    );
};
export default ProfilePage;