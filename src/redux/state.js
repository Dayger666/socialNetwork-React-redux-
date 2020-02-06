const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let store={
  _state:{
    ProfilePage:{
        posts:[
            {id:1,message:'Hi,it is my first project',like:0},
            {id:2,message:'AYE',like:0},
            {id:3,message:'QQQQQQQQQQQQQQQq',like:0},
          ], 
          newPostText:'qweewqqwerty',
    },
    DialogsPage:{
        dialogs:[
            {id:1,name:'Dimych12'},
            {id:2,name:'Dimych2'},
            {id:3,name:'Dimych3'},
            {id:4,name:'Dimych4'},
            {id:5,name:'Dimych5'},
        ],
        messages:[
            {id:1,message:'Dwe31231212'},
            {id:2,message:'Didsamych2'},
            {id:3,message:'Diafsafsamych3'},
            {id:4,message:'Dafsasfimych4'},
            {id:5,message:'Dasfafsimych5'},
        ],
        newMessageText:'NEW_MESSAGE',
    },
    sidebar:{

    }
      
  },
  getState(){
      return this._state;
  },
  renderEntireTree(){
},
addPost(){
    let newPost={
        id:5,
        message:this._state.ProfilePage.newPostText,

    };
    this._state.ProfilePage.posts.push(newPost);
    this._state.ProfilePage.newPostText='';
    this.renderEntireTree(this._state);
},
changeNewPostText(newText){
    this._state.ProfilePage.newPostText=newText;
    this.renderEntireTree(this._state);
},
subscribe(observer){
    this.renderEntireTree=observer;
    },

    dispatch(action){
        // eslint-disable-next-line default-case
        switch(action.type){
            case ADD_POST:
                    let newPost={
                        id:5,
                        message:this._state.ProfilePage.newPostText,
                
                    };
                    this._state.ProfilePage.posts.push(newPost);
                    this._state.ProfilePage.newPostText='';
                    this.renderEntireTree(this._state);
                    break;
            case CHANGE_NEW_POST_TEXT:
                    this._state.ProfilePage.newPostText=action.newText;
                    this.renderEntireTree(this._state);
                    break;
            case 'LIKE-COUNTER':

                this._state.ProfilePage.posts.forEach((values,item,arr)=>{
                    if(values.id===action.likeId){
                        values.like++;
                    }
                });
                this.renderEntireTree(this._state);
                break;
            case 'ADD-NEW-MSG':
                let newMsg={
                    id:11,
                    message:this._state.DialogsPage.newMessageText,
                };
                this._state.DialogsPage.messages.push(newMsg);
                this._state.DialogsPage.newMessageText='';
                this.renderEntireTree(this._state);
                console.log(this._state.DialogsPage.messages);
                break;
            case 'UPDATE_NEW_MSG_TEXT':
                this._state.DialogsPage.newMessageText=action.newText;
                this.renderEntireTree(this._state);
                break;
        }

    }
    
};
export let addPostActionCreator=()=>({type: ADD_POST,});
 export let updateNewPostTextActionCreator=(text)=>{
     return {
    type: CHANGE_NEW_POST_TEXT,
    newText:text,
  }
  };
export let likeCounter=(id)=>{
    return {
        type:'LIKE-COUNTER',
        likeId:id,
    }
};
export let addNewMsg=()=>{
    return {
        type:'ADD-NEW-MSG',
    }
};
export let updateNewMsgText=(text)=>{
    return {
        type: 'UPDATE_NEW_MSG_TEXT',
        newText:text,
    }
};


export default store;