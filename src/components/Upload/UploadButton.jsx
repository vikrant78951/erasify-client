import { useRef } from "react";
import { Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "@components/Button/Button";
import { useImageContext } from "../../context/ImageContext"; 

const UploadButton = ({ variant = "primary", text, size = "lg" }) => {
  const {addImage} = useImageContext()
  const fileInputRef = useRef()
  const navigate = useNavigate();
 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      addImage(file)
      navigate("/playground");
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <Button
        className="mx-auto rounded-full capitalize md:mx-0"
        size={size}
        variant={variant}
        onClick={() => fileInputRef.current.click()}
      >
        <span className="mr-2">
          <Upload />
        </span>
        {text}
      </Button>
    </>
  );
};

export default UploadButton;
