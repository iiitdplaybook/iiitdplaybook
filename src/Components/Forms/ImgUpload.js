import './TestimoniesForm.css';

const RenderImgComponent = ({ files, setFiles }) => {
  const handleChange = (e) => {
    // For uploading multiple images at once. Reference: https://bit.ly/3cxgkVP
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      setFiles((prevState) => [...prevState, newFile]);
    }
  };

  return (
    <input type='file' class='image-input' multiple onChange={handleChange} />
  );
};

export default RenderImgComponent;
