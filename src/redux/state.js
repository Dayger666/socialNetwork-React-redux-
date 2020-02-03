import {renderEtireTree} from './../render'
let state = {

    ProfilePage:{
        posts:[
            {id:1,message:'Hi,it is my first project'},
            {id:2,message:'AYE'},
            {id:3,message:'QQQQQQQQQQQQQQQq'},
          ], 
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
        ]

    },
    sidebar:{

    }
}
export let addPost=(postMessage)=>{
    let newPost={
        id:5,
        message:postMessage,

    };
    state.ProfilePage.posts.push(newPost);
    renderEtireTree(state);
}
export default state;