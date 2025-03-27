import { SectionWrapper } from "@components/Wrapper/Wrapper";
import heroImage from "@assets/sample.jpeg";
import { BANNER_CONTENT } from "@constants/Constants";
import UploadButton from "../Upload/UploadButton";

const Banner = () => {
  return (
    <SectionWrapper className="bg-gradient flex z-0 static flex-col-reverse gap-6 !p-10 md:flex-row md:!p-12 xl:rounded-lg">
      <div className="w-full text-center md:w-7/12 md:text-left">
        <h1 className="mb-4 text-3xl font-bold text-text-tertiary sm:text-4xl md:mb-10 md:text-6xl xl:text-6xl">
          {BANNER_CONTENT.title}
        </h1>

        <UploadButton variant="secondary" text={BANNER_CONTENT.btnText} />
      </div>
      <div className="relative z-0 flex items-center justify-center">
        <div className="absolute inset-0">
          <div className=" h-full w-full [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [&>div]:[background-size:16px_16px] [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
            <div></div>
          </div>
        </div>
        <img
          className="h-fit w-full max-w-lg z-0"
          src={heroImage}
          alt="hero images"
        />
      </div>
    </SectionWrapper>
  );
};

export default Banner;
