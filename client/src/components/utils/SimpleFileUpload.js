import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { upload } from "../../actions/upload";

const SimpleFileUpload = ({ upload }) => {
  const onFileChange = (e) => {
    console.log("file");
    const file = e.target.files[0];
    console.log("fil nam", file);
    upload(file);
  };

  return (
    <div>
      <h2>File upload using form in React</h2>
      <hr />
      <div>
        <form>
          <table>
            <tr>
              <td>Select File Buddyp:</td>
            </tr>
            <tr>
              <input onChange={(file) => onFileChange(file)} type="file" />
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { upload })(SimpleFileUpload);
