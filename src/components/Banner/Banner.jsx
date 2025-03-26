import React from "react";
import { SectionWrapper } from "@components/Wrapper/Wrapper";
import heroImage from "@assets/images.png";
import { BANNER_CONTENT } from "@constants/Constants";
import UploadButton from "../Upload/UploadButton";

const Banner = () => {
  return (
    <SectionWrapper className="bg-gradient flex flex-col-reverse gap-6 !p-10 md:flex-row md:!p-12 xl:rounded-lg">
      <div className="w-full text-center md:w-7/12 md:text-left">
        <h1 className="mb-4 text-3xl font-bold text-text-tertiary sm:text-4xl md:mb-10 md:text-6xl xl:text-6xl">
          {BANNER_CONTENT.title}
        </h1>

        <UploadButton variant='secondary' text={BANNER_CONTENT.btnText}/>
      </div>
      <div className="flex items-center justify-center">
        <img
          className="h-fit w-full max-w-lg"
          src={heroImage}
          alt="hero images"
        />
      </div>
    </SectionWrapper>
  );
};

export default Banner;
