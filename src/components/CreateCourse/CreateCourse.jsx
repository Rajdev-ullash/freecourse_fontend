import React, { Fragment, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { ErrorToast, getBase64, IsEmpty } from "../../helper/FormHelper";
const CreateCourse = () => {
  const [image, setImage] = useState();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/,
    placeholder: "Start typings...",
  };

  let courseTitleRef,
    courseImgRef,
    courseDownloadLinkRef = useRef();

  const PreviewImage = () => {
    let ImgFile = courseImgRef.files[0];
    getBase64(ImgFile).then((data) => {
      setImage(data);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let courseTitle = courseTitleRef.value;
    let courseDescription = content;
    let courseDownloadLink = courseDownloadLinkRef.value;
    let photo = image;
    console.log(photo);
    if (IsEmpty(courseTitle)) {
      ErrorToast("Title is required");
    } else if (IsEmpty(photo)) {
      ErrorToast("Photo is required");
    } else if (IsEmpty(courseDownloadLink)) {
      ErrorToast("Link is required");
    } else {
      console.log(courseTitle, courseDescription, photo, courseDownloadLink);
      //   NewTaskRequest(title, description).then((res) => {
      //     if (res === true) {
      //       navigate("/All");
      //     }
      //   });
    }
  };
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-sm-12 col-md-8 p-2">
            <div className="card">
              <div className="card-body">
                <h4>Create New Course</h4>
                <br />
                <label>Course Title</label>
                <input
                  type="text"
                  ref={(input) => (courseTitleRef = input)}
                  className="form-control animated fadeInUp"
                  placeholder="Course Title"
                />
                <br />
                <JoditEditor
                  ref={editor}
                  value={content}
                  config={config}
                  tabIndex={2}
                  onBlur={(newContent) => setContent(newContent)}
                />
                <br />
                <img
                  className="icon-nav-img-lg"
                  src={image}
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />

                <br />
                <label>Course Image</label>
                <input
                  type="file"
                  onChange={PreviewImage}
                  ref={(input) => (courseImgRef = input)}
                  className="form-control animated fadeInUp"
                />

                <br />
                <input
                  type="text"
                  ref={(input) => (courseDownloadLinkRef = input)}
                  className="form-control animated fadeInUp"
                  placeholder="Download Link"
                />
                <br />
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="btn float-end btn-primary animated fadeInUp"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateCourse;
