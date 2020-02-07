import profileReducer from "./Profile-reducer";
import messagesReducer from "./Messages-reducer";

let store={
  _state:{
    ProfilePage:{
        posts:[
            {id:1,message:'Hi,it is my first project',like:0},
            {id:2,message:'AYE',like:0},
            {id:3,message:'QQQQQQQQQQQQQQQq',like:0},
          ], 
          newPostText:'',
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
        newMessageText:'',
    },
    sidebar:{

    }
      
  },
  getState(){
      return this._state;
  },
  renderEntireTree(){
},
subscribe(observer){
    this.renderEntireTree=observer;
    },
    dispatch(action){
        this._state.ProfilePage=profileReducer(this._state.ProfilePage,action);
        this._state.DialogsPage=messagesReducer(this._state.DialogsPage,action);
        this.renderEntireTree(this._state);

    }
};
