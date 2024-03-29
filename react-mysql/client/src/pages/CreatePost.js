import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

function CreatePost(props) {
  const initialValues = {
    title: "",
    postText: "",
    username: ""
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      // console.log(response)
      window.location.href = `/`
    })
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a Title"),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required()
  })
  return (
    <div className='createPostPage'>
      <Formik
        enableReinitialize={true} initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}
      >
        <Form className='formContainer'>
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="Title..."
          />
          <label>Post: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder="Post..."
          />
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="Username..."
          />
          <button type="submit" onClick={onSubmit}>Create Post</button>
        </Form>
      </Formik>
    </div >
  )
}

export default CreatePost
