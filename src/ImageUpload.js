// import React, { useState } from "react";
// import firebase from "firebase";
// import { storage, db } from "./firebase";
// import "./ImageUpload.css";
// import { Input, Button } from "@material-ui/core";

// const ImageUpload = ( username ) => {
//   const [image, setImage] = useState(null);
//   const [url, setUrl] = useState("");
//   const [progress, setProgress] = useState(0);
//   const [caption, setCaption] = useState("");

//   const handleChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleUpload = () => {
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         // progress function ...
//         const progress = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//         setProgress(progress);
//       },
//       (error) => {
//         // Error function ...
//         console.log(error);
//       },
//       () => {
//         // complete function ...
//         storage
//           .ref("images")
//           .child(image.name)
//           .getDownloadURL()
//           .then((url) => {
//             console.log(url)
//             setUrl(url);

//             // post image inside db
//             db.collection("posts").add({
//               imageUrl: url,
//               caption: caption,
//               username: username,
//               timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//             });

//             setProgress(0);
//             setCaption("");
//             setImage(null);
//           });
//       }
//     );
//   };

//   return (
//     <div className="imageupload">
//       <progress className="imageupload__progress" value={progress} max="100" />
//       <Input
//         placeholder="Enter a caption"
//         value={caption}
//         onChange={(e) => setCaption(e.target.value)}
//       />
//       <div>
//         <input type="file" onChange={handleChange} />
//         <Button className="imageupload__button" onClick={handleUpload}>
//           Upload
//         </Button>
//       </div>

//       <br />
//     </div>
//   );
// };

// export default ImageUpload;

import React, { useState } from "react";
import firebase from "firebase";
import { storage, db } from "./firebase";
import "./ImageUpload.css";
import { Input, Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
const ImageUpload = ({ username }) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);

            // post image inside db
            db.collection("posts").add({
              imageUrl: url,
              caption: caption,
              username: username,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div className="imageupload">
      <progress className="imageupload__progress" value={progress} max="100" />
      <TextField
        placeholder="Enter a caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        id="outlined-margin-dense"
          
          variant="outlined"
      />
      <div>
        {/* <input type="file" onChange={handleChange} /> */}
        <div class="input-group" style={{marginTop:"7px"}}>
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
  </div>
  <div class="custom-file" >
    <input type="file" class="custom-file-input" id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01" onChange={handleChange}/>
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
</div>
        <Button className="imageupload__button" onClick={handleUpload} variant="contained" color="primary" style={{marginTop:"7px"}}>
          Upload Post
        </Button>
      </div>

    </div>
  );
};

export default ImageUpload;

