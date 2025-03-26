import { SectionWrapper } from "@components/Wrapper/Wrapper";
import Cards from "../Cards/Cards";
import PropTypes from "prop-types";

const Steps = ({ data }) => {
  return (
    <SectionWrapper
      header={true}
      title="Easy steps to remove the background from an image"
    >
      <Cards data={data} type="steps" />
    </SectionWrapper>
  );
};

Steps.propTypes = {
  data: PropTypes.array,
};
export default Steps;
