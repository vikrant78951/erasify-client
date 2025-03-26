import Hero from "@components/Hero/Hero";
import Steps from "@components/Steps/Steps";
import Banner from "@components/Banner/Banner";
import Testimonial from "@components/Testimonial/Testimonial";

import { STEPS, CUSTOMER_TESTIMONIAL, FAQ } from "@constants/Constants";
import Faq from "../components/Faq/Faq";

export const Home = () => {
  return (
    <>
      <Hero />
      <Steps data={STEPS} />
      <Banner />
      <Testimonial data={CUSTOMER_TESTIMONIAL} />
      <Faq data={FAQ} />
    </>
  );
};

export default Home;
