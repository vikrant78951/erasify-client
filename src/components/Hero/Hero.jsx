import { SectionWrapper } from "@components/Wrapper/Wrapper";
import heroImage from "@assets/images.png";
import { HERO_CONTENT } from "@constants/Constants";
import UploadButton from "../Upload/UploadButton";

const Hero = () => {
  return (
    <SectionWrapper className="flex flex-col-reverse gap-6 md:flex-row">
      <div className="w-full md:w-7/12 text-center md:text-left">
        <h1 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl xl:text-7xl">
          {HERO_CONTENT.title}
        </h1>
        <p className="mb-4 text-lg text-text-secondary md:text-xl">
          {HERO_CONTENT.description}
        </p>
       
        <UploadButton   text={HERO_CONTENT.btnText}/>
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

export default Hero;
