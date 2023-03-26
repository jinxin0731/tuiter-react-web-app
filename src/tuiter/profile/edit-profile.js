import React, { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { updateProfile } from "./profile-reducer";

const EditProfile = () => {

    const profile = useSelector((state) => state.profile);
    let [firstName, setFirstName] = useState(profile.firstName);
    let [lastName, setLastName] = useState(profile.lastName);
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [website, setWebsite] = useState(profile.website);
    let [birth, setBirth] = useState(profile.dateOfBirth);
    const dispatch = useDispatch();
    const saveHandler = () => {
        dispatch(updateProfile({
                ...profile,
                firstName: firstName,
                lastName: lastName,
                bio: bio,
                location: location,
                website: website,
                dateOfBirth: birth,

        }));
    };
    return (
        <div className="border border-light ">
            <div className="row mt-2 ">
                <div className="col-1 flex">
                    <Link to="/tuiter/profile" >
                        <Icon.XLg className="wd-icon-black mt-3"/>
                    </Link>
                </div>
                <div className="col-9 align-self-center">
                    <h5 className="mb-0 wd-name">Edit profile</h5>
                </div>

                <div className="col-2 align-self-center">
                    <Link to="/tuiter/profile">
                        <button onClick={saveHandler}
                                className="wd-button-save">Save</button>
                    </Link>
                </div>
            </div>

            <img className="position-relative top-0 " height="240px" width="100%" src={profile.bannerPicture} />
            <img className="rounded-circle wd-avatar-position" width={100} src={profile.profilePicture} />

            <form>
                <div className="form-group m-3 mt-0 p-2 border border-secondary wd-border-color rounded-1">
                    <label className= "wd-border-color">First Name</label>
                    <input
                        type="text"
                        className="wd-edit-profile-input form-control border-0 ps-0"
                        id="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />

                </div>

                <div className="m-3 p-2 border border-secondary wd-border-color rounded-1 ">
                    <label className= "wd-border-color">Last Name</label>
                    <div>
                        <input className="wd-edit-profile-input form-control border-0 ps-0"
                               value={lastName}
                               onChange={(event) =>
                                   setLastName(event.target.value)}/>
                    </div>
                </div>

                <div className="m-3 p-2 border border-secondary wd-border-color rounded-1">
                    <label className= "wd-border-color">Bio</label>
                    <div>
                    <textarea className="wd-edit-profile-input form-control border-0 ps-0"
                              value={bio}
                              onChange={(event) =>
                                  setBio(event.target.value)}/>
                    </div>
                </div>

                <div className="m-3 p-2 border border-secondary wd-border-color rounded-1">
                    <label className= "wd-border-color">Location</label>
                    <div>
                        <input className="wd-edit-profile-input form-control border-0 ps-0"
                               value={location}
                               onChange={(event) =>
                                   setLocation(event.target.value)}/>
                    </div>
                </div>

                <div className="m-3 p-2 border border-secondary wd-border-color rounded-1">
                    <label className= "wd-border-color ">Website</label>
                    <div>
                        <input className="wd-edit-profile-input form-control border-0 ps-0"
                               value={website}
                               onChange={(event) =>
                                   setWebsite(event.target.value)}/>
                    </div>
                </div>

                <div className="m-3 p-2 border-0">
                    <span className= "wd-border-color">Birth date • </span>
                    <span className="text-primary">Edit</span>
                    <div>
                        <input className="wd-edit-profile-input form-control border-0 ps-0"
                               value={birth}
                               onChange={(event) =>
                                   setBirth(event.target.value)}/>
                    </div>
                </div>

                <div className="m-3 p-2 border-0">
                <span>
                    Switch to professional
                </span>
                    <span className="float-end">
                    >
                </span>
                </div>
            </form>

        </div>
    );
};

export default EditProfile;