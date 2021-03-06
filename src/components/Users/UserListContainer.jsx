import React from 'react';
import {connect} from "react-redux";
import UserList from "./UserList";
import {getUsersThunkCreator, setFollowThunkCreator, setUnFollowThunkCreator} from "../../redux/Users-reducer";
import {getPageSize, getUsers} from "../../redux/users-selectors";


class UserListSideContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    onPageChanged=(pageNumber)=>{
        this.props.getUsersThunkCreator(this.props.pageSize,pageNumber);
    };
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pageSize,this.props.currentPage);
    }
    render(){
        return(
            <UserList totalUserCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      isFetching={this.props.isFetching}
                      isFollowing={this.props.isFollowing}
                      setFollowThunkCreator={this.props.setFollowThunkCreator}
                      setUnFollowThunkCreator={this.props.setUnFollowThunkCreator}

        />
       );
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.UsersPage.users,
//         pageSize:state.UsersPage.pageSize,
//         totalUsersCount:state.UsersPage.totalUsersCount,
//         currentPage:state.UsersPage.currentPage,
//         isFetching:state.UsersPage.isFetching,
//         isFollowing:state.UsersPage.isFollowing,
//     }
// };
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (id) => {
//             let action = followAC(id);
//             dispatch(action);
//         },
//         unFollow: (id) => {
//             let action = unFollowAC(id);
//             dispatch(action);
//         },
//         setUsers:(users)=>{
//           dispatch(setUsersAC(users));
//         },
//         setCurrentPage:(page)=>{
//             dispatch(setCurrentPageAC(page));
//         },
//         setTotalUsersCount:(count)=>{
//             dispatch(setTotalUsersCountAC(count));
//         },
//         setIsFetching:(value)=>{
//             dispatch(setIsFetchingAC(value));
//         }
//
//     }
// };
//make {body} instead mapDispatchToProps in connect
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize:getPageSize(state),
        totalUsersCount:state.UsersPage.totalUsersCount,
        currentPage:state.UsersPage.currentPage,
        isFetching:state.UsersPage.isFetching,
        isFollowing:state.UsersPage.isFollowing,
    }
};
let UserListContainer = connect(mapStateToProps,{getUsersThunkCreator,setFollowThunkCreator,setUnFollowThunkCreator})(UserListSideContainer);
export default UserListContainer;