import { useEffect, useState } from "react";
import UploadArea from "@components/Upload/UploadArea";
import { SectionWrapper } from "@components/Wrapper/Wrapper";
import UploadButton from "../components/Upload/UploadButton";
import { DownloadButton } from "../components/Button/Button";
import Spinner from "../components/Loading/Loading";
import { API } from "@constants/Constants";
import axios from "axios";
import { useImageContext } from "../context/ImageContext";
import { useDispatch, useSelector } from "react-redux";
import { updateCredit } from "../redux/slices/auth.slice";
import { useNavigate } from "react-router-dom";

const mode = import.meta.env.NODE_ENV;
if (!mode){
  console.log('mode not found using development')
}
  export const Playground = () => {
    const {
      image: { originalImage },
      addImage,
    } = useImageContext();
    const [transformedImage, setTransformedImage] = useState(null);
    const { user } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const generateImageKey = (image) => {
      return `${image.name}-${image.size}-${image.lastModified}`;
    };

    const getCachedTransformation = (image) => {
      const cache = JSON.parse(localStorage.getItem("imageCache") || "{}");
      return cache[generateImageKey(image)] || null;
    };

    const saveToCache = (image, transformedUrl) => {
      const cache = JSON.parse(localStorage.getItem("imageCache") || "{}");
      cache[generateImageKey(image)] = transformedUrl;
      localStorage.setItem("imageCache", JSON.stringify(cache));
    };

    const removeBackground = async (image) => {
      setLoading(true);
      setError(null);

      if (user.credits === 0) {
        navigate("/pricing");
        return;
      }

      // Check cache first
      const cachedResult = getCachedTransformation(image);
      if (cachedResult) {
        setTransformedImage(cachedResult);
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("file", image);
      if (mode === "production") {
        formData.append("mode", "production");
      } else {
        formData.append("mode", "testing");
      }
      try {
        const { data } = await axios.post(API.removeBackground, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
        if (data.success) {
          setTransformedImage(data.transformedImage);
          dispatch(updateCredit(data.creditBalance));

          // Store the result in cache
          saveToCache(image, data.transformedImage);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("Error processing image", error.message);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      if (originalImage) {
        const cachedResult = getCachedTransformation(originalImage);
        if (cachedResult) {
          setTransformedImage(cachedResult);
        } else {
          removeBackground(originalImage);
        }
      }
    }, [originalImage]);

    if (originalImage) {
      return (
        <SectionWrapper>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex max-h-96 items-center justify-center overflow-hidden">
              <img
                src={URL.createObjectURL(originalImage)}
                alt="Uploaded"
                className="h-100 w-auto rounded-lg shadow-md"
              />
            </div>

            <div className="flex max-h-96 items-center justify-center overflow-hidden">
              {loading && !error && (
                <div className="flex h-full w-full items-center justify-center">
                  <Spinner />
                </div>
              )}

              {!loading && !error && transformedImage && (
                <img
                  src={transformedImage}
                  alt="Uploaded"
                  className="h-100 w-auto rounded-lg shadow-md"
                />
              )}

              {error && !loading && (
                <div className="flex h-full items-center justify-center text-center text-red-500">
                  <p>{error}</p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 flex w-full justify-end gap-4">
            <UploadButton text="Try another image" size="md" />
            <DownloadButton
              variant="primaryRounded"
              size="md"
              url={transformedImage}
            >
              Download
            </DownloadButton>
          </div>
        </SectionWrapper>
      );
    }

    return (
      <SectionWrapper>
        <UploadArea setUploadedImage={addImage} />
      </SectionWrapper>
    );
  };

export default Playground;
