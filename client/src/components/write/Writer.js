import React, { Fragment, useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SimpleFileUpload from "../utils/SimpleFileUpload";
import UploadAdapter from "../utils/UploadAdapter";
import MyUploadAdapter from "../utils/MyUploadAdapter";
import { connect } from "react-redux";
import { savePost } from "../../actions/blog";

const Writer = ({ savePost, upload: { image } }) => {
  const [formData, setFormData] = useState({
    thumb: "",
    title: "",
    post: "",
  });

  const { thumb, title, post } = formData;

  const onChange = (post) => setFormData({ ...formData, post });
  const onTitleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // const onImageUpload = (e) => {
  //   console.log(e.target.files[0]);
  //   setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  // };

  function onSubmit(e) {
    e.preventDefault();
    savePost(formData, image);
  }
  useEffect(() => {}, []);

  return (
    <Fragment>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type="submit"
            className="btn btn-success"
            value="Save Changes"
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => onTitleChange(e)}
          />
        </div>
        <SimpleFileUpload />
        {/* <div>
          <input
            type="file"
            onChange={(e) => onImageUpload(e)}
            value={thumb}
            name="thumb"
          />
        </div> */}
        <div>
          <CKEditor
            editor={ClassicEditor}
            data=""
            onChange={(event, editor) => {
              console.log("event: ", event);
              const data = editor.getData();
              onChange(data);
            }}
            onBlur={(event, editor) => {
              //console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              //console.log("Focus.", editor);
            }}
            name="post"
            value={post}
          />
        </div>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  upload: state.upload,
});

export default connect(mapStateToProps, { savePost })(Writer);
