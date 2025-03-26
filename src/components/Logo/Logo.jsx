import { APPLICATION_CONFIG } from "../../constants/Constants";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Logo = ({ className }) => {
  return (
    <Link to='/' className={`flex items-center gap-1 ${className && className}}`}>
      <div className="relative block h-8 w-4 rounded-sm bg-gradient-to-b from-primary to-secondary">
        <div className="absolute top-1/2 h-[2px] w-full -translate-y-1/2 bg-surface"></div>
      </div>
      <h6 className="text-4xl font-extrabold capitalize text-text-primary">
        {APPLICATION_CONFIG.BRAND_NAME}
      </h6>
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
