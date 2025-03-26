import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const initialState = {
    originalImage : null,
    transformImage : null,
}


const ImageContext = createContext()

export const ImageContextProvider = ({children})=>{
    const [image, setImage] = useState(initialState);

    const addImage = (data)=>{
        setImage((prev) => ({ ...prev, originalImage: data }));
    }

    return (
        <ImageContext.Provider value={{image,addImage}}>
            {children}
        </ImageContext.Provider>
    )

}
export const useImageContext =  ()=> useContext(ImageContext)

ImageContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
