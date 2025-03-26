import { SectionWrapper } from "@components/Wrapper/Wrapper";
import Cards from "../Cards/Cards";
import PropTypes from "prop-types";

const Plan = ({ data }) => {
  return (
    <SectionWrapper header={true} title="Our plans">
      <Cards data={data} type="pricing" />
    </SectionWrapper>
  );
};

Plan.propTypes = {
  data: PropTypes.array,
};
export default Plan;
