import PropTypes from "prop-types";
import { DynamicIcon } from "lucide-react/dynamic";
import Button from "@components/Button/Button";

const Cards = ({ data = [], type = "steps", handler }) => {
  const containerStyle = "grid gap-6  ";
  const itemStyle = "flex gap-4 md:gap-6 text-sm rounded-xl";
  const iconStyle = "p-1 md:p-2  rounded block h-fit w-fit  ";
  const titleStyle =
    "capitalize text-lg  md:text-xl font-semibold text-text-primary";
  const descriptionStyle = "text-md text-text-secondary ";
  const semiTitleStyle = "text-xs text-text-secondary";
  const priceStyle = "my-3";

  const containerTypeStyle = {
    steps: " md:grid-cols-3",
    testimonial: "md:grid-cols-3",
    pricing: " md:grid-cols-3",
    faq: "",
  };

  const itemTypeStyle = {
    steps: "",
    testimonial: "relative bg-tertiary p-4 ",
    pricing: "flex-col bg-gradient p-6 gap-2 md:gap-2",
    faq: "relative bg-tertiary p-4 group cursor-pointer",
  };

  const iconTypeStyle = {
    steps: "bg-gradient text-text-tertiary  mt-1",
    testimonial: "bg-gradient text-text-tertiary mt-1",
    pricing: "bg-surface text-text-tertiary mb-0",
    faq: "bg-gradient text-text-tertiary absolute right-2 md:right-4 b-2 !p-1 font-xs",
  };

  const titleTypeStyle = {
    steps: "",
    testimonial: "",
    pricing: "text-text-tertiary",
    faq: "pr-6",
  };

  const descriptionTypeStyle = {
    steps: "",
    testimonial: "",
    pricing: "text-text-tertiary",
    faq: "hidden group-hover:block transition pr-6",
  };

  const semiTitleTypeStyle = {
    steps: "",
    testimonial: "",
    pricing: "text-text-tertiary",
    faq: "",
  };

  const priceItemStyle = {
    steps: "",
    testimonial: "",
    pricing: "text-text-tertiary",
    faq: "",
  };

  return (
    <div className={`${containerStyle} ${containerTypeStyle[type]}`}>
      {data.map((item, index) => {
        return (
          <div key={index} className={`${itemStyle} ${itemTypeStyle[type]}`}>
            {item.icon && (
              <div className={`${iconStyle} ${iconTypeStyle[type]}`}>
                <DynamicIcon name={item.icon} size={20} />
              </div>
            )}
            <div>
              <div className="mb-2">
                <h6 className={`${titleStyle} ${titleTypeStyle[type]}`}>
                  {item.title}
                </h6>
                {item.semiTitle && (
                  <p
                    className={`${semiTitleStyle} ${semiTitleTypeStyle[type]}`}
                  >
                    {item.semiTitle}
                  </p>
                )}
              </div>

              <p
                className={`${descriptionStyle} ${descriptionTypeStyle[type]}`}
              >
                {item.description}
              </p>

              {item.price && item.credits && (
                <p className={`${priceStyle} ${priceItemStyle[type]}`}>
                  <span className="text-xl font-extrabold md:text-4xl">
                    ₹{item.price}
                  </span>

                  <span className="text-md font-bold">
                    /<span className="pl-1">{item.credits} credits</span>
                  </span>
                </p>
              )}

              {type === "pricing" && (
                <Button variant="secondary" className="w-full" size='lg' onClick={()=>handler(item)}>
                  Purchase
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Cards.propTypes = {
  data: PropTypes.array,
  type: PropTypes.oneOf(["steps", "testimonial", "pricing", "faq"]),
  handler: PropTypes.func,
};


export default Cards;
