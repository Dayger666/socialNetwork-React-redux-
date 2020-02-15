import React from 'react';
import classes from './Users.module.css';
import userPhoto from "./../../assets/images/l4E3YeajlLc.txt.jpg"
import Preloader from "../Common/Preloader/Preloader";
import {NavLink} from "react-router-dom";


let UserList = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (<div>
            <div>
                {pages.map((page) => {
                    return <span onClick={(e) => {
                        props.onPageChanged(page)
                    }} className={props.currentPage === page && classes.selectedPage}>{page}</span>
                })}
            </div>
            {props.isFetching ? <Preloader/> : props.users.map(user =>
                <div key={user.id}>
             <span>
                 <NavLink to={`/profile/${user.id}`}>
                 <div className={classes.item}>
                     <img alt="qwe" src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                 </div>
                     </NavLink>
                 <div>
                     {user.followed
                         ? <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                             props.setUnFollowThunkCreator(user.id);
                         }}>Unfollow</button>
                         : <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                             props.setFollowThunkCreator(user.id);
                         }}>Follow</button>}
                 </div>
             </span>
                    <span>
                            <span>
                                <div>{user.name}<span>user.fullName.surname</span></div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>user.location.country</div>
                                <div>user.location.city</div>
                            </span>
                        </span>
                </div>
            )
            }
        </div>

    )
};

export default UserList;