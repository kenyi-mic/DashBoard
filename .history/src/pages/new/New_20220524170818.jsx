import React, { useState } from "react";
import "./new.scss";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Header />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label htmlFor={input.id}>{input.label}</label>
                  <input
                    type={input.type}
                    id={input.id}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}

              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
