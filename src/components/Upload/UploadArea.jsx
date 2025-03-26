import  { useRef } from "react";
import { Upload } from "lucide-react";

const UploadButton = ({ setUploadedImage }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage(file)
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
      <div
        className="flex w-full flex-col items-center justify-center rounded-lg border border-dashed border-primary min-h-40 gap-3 cursor-pointer"
        size="xl"
        onClick={() => fileInputRef.current.click()}
      >
        <Upload className="text-primary" size={36} />
        <span className="text-xxl text-primary" >
          Upload you image so select one
        </span>
      </div>
    </>
  );
};

export default UploadButton;
