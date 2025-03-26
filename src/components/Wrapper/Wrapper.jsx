import PropTypes from "prop-types";

export const SectionWrapper = ({
  className,
  children,
  header = false,
  title = "",
  description = "",
}) => {
  return (
    <section
      className={`mx-auto w-full max-w-screen-xl px-4 py-8 ${className ? className : ''}`}
    >
      {header && (
        <div className="mb-6 md:mb-12">
          {title && (
            <h6 className="mx-auto text-center text-xl font-semibold text-text-primary md:max-w-3xl md:text-4xl">
              {title}
            </h6>
          )}
          {description && <h6>{description}</h6>}
        </div>
      )}

      {children}
    </section>
  );
};

SectionWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  header: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};
