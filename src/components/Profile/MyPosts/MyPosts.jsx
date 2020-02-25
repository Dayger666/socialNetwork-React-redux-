import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/Forms.controls";


const MyPosts =(props)=>{

const postsElements=props.posts.map((post)=><Post message={post.message} like={post.like} updateLike={props.updateLike} id={post.id} date={post.date} />);
let onAddPost=(value)=>{
  props.addPost(value.newPostText);
}
    return (
<div className={classes.postsBlock}>
  <div>
    <PostReduxForm onSubmit={onAddPost}/>
  </div>
  <div className={classes.posts}>
    {postsElements}
  </div>
  </div>
    );
};
let maxLength10=maxLengthCreator(20);
let NewPostForm=(props)=>{
  return (<form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={"newPostText"} placeholder={`What's new?`}  validate={[requiredField,maxLength10]}/>
      </div>
      <div>
      <button>add post</button>
</div>
  </form>)
};
let PostReduxForm = reduxForm({
  form: 'newPostForm',
})(NewPostForm);
export default  MyPosts;