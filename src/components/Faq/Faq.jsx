import { SectionWrapper } from "@components/Wrapper/Wrapper";
import Cards from "../Cards/Cards";
import PropTypes from "prop-types";

const Faq = ({ data }) => {
  return (
    <SectionWrapper header={true} title="Frequently asked questions.">
      <Cards data={data} type="faq" />
    </SectionWrapper>
  );
};
Faq.propTypes = {
  data: PropTypes.array,
};

export default Faq;
