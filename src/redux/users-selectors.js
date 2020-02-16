//make all selectors for each containers
export let getUsers=(state)=>{
    return state.UsersPage.users;
};

export let getPageSize=(state)=>{
    return state.UsersPage.pageSize;
};