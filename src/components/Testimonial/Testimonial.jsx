import { SectionWrapper } from "@components/Wrapper/Wrapper";
import Cards from "../Cards/Cards";
import PropTypes from "prop-types";

const Testimonial = ({ data }) => {
  return (
    <SectionWrapper header={true} title="Customer Testimonials">
      <Cards data={data} type="testimonial" />
    </SectionWrapper>
  );
};
Testimonial.propTypes = {
  data: PropTypes.array,
};

export default Testimonial;
