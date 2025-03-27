import { SectionWrapper } from "@components/Wrapper/Wrapper";
import Cards from "../Cards/Cards";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API } from "@constants/Constants";
import axios from "axios";
import { updateCredit } from "../../redux/slices/auth.slice";

const key = import.meta.env.VITE_RAZORPAY_KEY_ID;

const Plan = ({ data }) => {
  const { authenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function initPay(order) {
    try {
      if (order) {
        const options = {
          key: key,
          amount: order.amount,
          currency: order.currency,
          order_id: order.id,
          name: "credits Purchase",
          description: "credits Purchase",
          receipt: order.receipt,
          handler: async (response) => {
            try {
              console.log(response)
              const { data } = await axios.post(API.verify, response, {
                withCredentials: true,
              });
              if (data.success) {
                dispatch(updateCredit(data.credits));
              }
            } catch (error) {
              console.error("Error verifying payment:", error);
            }
          },
        };
        
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        console.log("order not found");
      }
    } catch (error) {
      console.error("Error initializing payment:", error);
    }
  }

  async function pricingClickHandler(plan) {
    if (!authenticated) {
      console.error("cant purchase plan without signing in ");
      console.log(plan);
      navigate("/login");
      return;
    }

    const { data } = await axios.post(
      API.order,
      {
        planId: plan.id,
      },
      {
        withCredentials: true,
      },
    );
    console.log(data);
    if (!key) {
      console.log("key not found");
      return;
    }
    if (data.success && key) {
      console.log(data);
      initPay(data.order);
      return;
    }

    console.error("failed to create order");
  }

  return (
    <SectionWrapper header={true} title="Our plans">
      <Cards data={data} type="pricing" handler={pricingClickHandler} />
    </SectionWrapper>
  );
};

Plan.propTypes = {
  data: PropTypes.array,
};
export default Plan;
