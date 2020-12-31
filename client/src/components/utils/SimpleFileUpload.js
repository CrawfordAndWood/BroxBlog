import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { upload } from "../../actions/upload";

const SimpleFileUpload = ({ upload }) => {
  const onFileChange = (e) => {
    const file = e.target.files[0];
    upload(file);
  };

  return (
    <div>
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
