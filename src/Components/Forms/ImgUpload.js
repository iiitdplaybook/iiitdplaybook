import React, { useState } from 'react';
import fire from '../../fire';

export default function ReactFirebaseFileUpload() {
  const [files, setFiles] = useState([]);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);

  const storage = fire.storage();

  const handleChange = (e) => {
    // For uploading multiple images at once. Reference: https://bit.ly/3cxgkVP
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      newFile['id'] = Math.random(); // id property for each image
      setFiles((prevState) => [...prevState, newFile]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault(); // prevent page refreshing
    const promises = [];
    files.forEach((file) => {
      const uploadTask = storage
        .ref()
        .child(`ContributionImages/${file.name}`)
        .put(file);
      promises.push(uploadTask);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.log(error.code);
        },
        async () => {
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          // do something with the url
          setUrl(downloadURL);
          setProgress(0);
        }
      );
    });
    Promise.all(promises)
      .then(() => alert('All files uploaded'))
      .catch((err) => console.log(err.code));
  };

  return (
    <div>
      <progress value={progress} max='100' />
      <br />
      <input type='file' multiple onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
