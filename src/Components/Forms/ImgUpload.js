import React, { useState } from "react";
import fire from '../../fire';

export default function ReactFirebaseFileUpload(){
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const storage = fire.storage();

  const handleChange = e => {
    if (e.target.files[0]) {  
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`ContributionImages/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("ContributionImages")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
        });
        setProgress(0);
      }
    );
  };

  console.log("image: ", image);

  return (
    <div>
      <progress value={progress} max="100" />
      <br />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}