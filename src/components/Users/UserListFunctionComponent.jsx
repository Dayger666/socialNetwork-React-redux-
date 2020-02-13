// import React from 'react';
// import classes from './Users.module.css';
// import * as axios from "axios";
// import userPhoto from "./../../assets/images/l4E3YeajlLc.txt.jpg"
//
// let UserList = (props) => {
//
//     let getUsers = () => {
//         if (props.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
//                 props.setUsers(res.data.items)
//                 // [
//                 // {
//                 //     id: 1,
//                 //     photoURL: 'https://images.genius.com/859261be9ed37f8168e056a27cebfacf.1000x563x1.jpg',
//                 //     fullName: {name: 'Dimych1', surname: '1233321'},
//                 //     status: 'zdarova1',
//                 //     location: {city: 'Min1sk', country: 'Bel1arus'},
//                 //     followed: true
//                 // },
//                 //     {
//                 //         id: 2,
//                 //         photoURL: 'https://images.genius.com/859261be9ed37f8168e056a27cebfacf.1000x563x1.jpg',
//                 //         fullName: {name: 'Dimych2', surname: '1233321'},
//                 //         status: 'zdarova2',
//                 //         location: {city: 'Mi2nsk', country: 'Bel2arus'},
//                 //         followed: false
//                 //     },
//                 //     {
//                 //         id: 3,
//                 //         photoURL: 'https://images.genius.com/859261be9ed37f8168e056a27cebfacf.1000x563x1.jpg',
//                 //         fullName: {name: 'Dimych3', surname: '1233321'},
//                 //         status: 'zdarova3',
//                 //         location: {city: 'Mi3nsk', country: 'Bel3arus'},
//                 //         followed: true
//                 //     },
//                 //     {
//                 //         id: 4,
//                 //         photoURL: 'https://images.genius.com/859261be9ed37f8168e056a27cebfacf.1000x563x1.jpg',
//                 //         fullName: {name: 'Dimych4', surname: '1233321'},
//                 //         status: 'zdarova4',
//                 //         location: {city: 'Mi4nsk', country: 'Bel4arus'},
//                 //         followed: false
//                 //     },
//                 //     {
//                 //         id: 5,
//                 //         photoURL: 'https://images.genius.com/859261be9ed37f8168e056a27cebfacf.1000x563x1.jpg',
//                 //         fullName: {name: 'Dimych5', surname: '1233321'},
//                 //         status: 'zdarova5',
//                 //         location: {city: 'Mins5k', country: 'Bel5arus'},
//                 //         followed: false
//                 //     },]
//             });
//         }
//     };
//
//     return <div>
//         {
//             props.users.map(user => <div key={user.id}>
//              <span>
//                  <div className={classes.item}>
//                      <img alt="qwe" src={user.photos.small !== null ? user.photos.small : userPhoto}/>
//                  </div>
//                  <div>
//                      {user.followed
//                          ? <button onClick={() => {
//                              props.unFollow(user.id)
//                          }}>Unfollow</button>
//                          : <button onClick={() => {
//                              props.follow(user.id)
//                          }}>Follow</button>}
//                  </div>
//              </span>
//                     <span>
//                             <span>
//                                 <div>{user.name}<span>user.fullName.surname</span></div>
//                                 <div>{user.status}</div>
//                             </span>
//                             <span>
//                                 <div>user.location.country</div>
//                                 <div>user.location.city</div>
//                             </span>
//                         </span>
//                 </div>
//             )
//         }
//     </div>
// };
// export default UserList;