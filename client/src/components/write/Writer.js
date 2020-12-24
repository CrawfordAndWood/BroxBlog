import React, { Fragment, useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { connect } from "react-redux";
import { savePost } from "../../actions/blog";

const Test = ({ savePost }) => {
  const [formData, setFormData] = useState({
    data: "",
  });

  const { data } = formData;

  const onChange = (data) => setFormData({ ...formData, data });

  const onSubmit = async (e) => {
    e.preventDefault();
    savePost(formData);
  };
  useEffect(() => {}, []);

  return (
    <Fragment>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <input type="submit" className="btn btn-success" value="Save Changes" />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
          onBlur={(event, editor) => {
            //console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            //console.log("Focus.", editor);
          }}
          name="data"
          value={data}
        />
      </form>
    </Fragment>
  );
};

export default connect(null, { savePost })(Test);
