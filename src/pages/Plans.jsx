import Plan from "@components/Plan/Plan";

import { PRICING_PLANS } from "@constants/Constants";

export const Plans = () => {
  return (
    <>
      <Plan data={PRICING_PLANS} />
    </>
  );
};

export default Plans;
