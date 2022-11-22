interface ButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "dark-outline"
    | "light-outline";
  size?: "small" | "medium";
  className?: string;
  label?: string;
}

const getClasses = (variant?: string) => {
  switch (variant) {
    case "dark-outline":
      return "border border-hca-blue-900 text-hca-blue-900 hover:border-hca-blue-500 hover:bg-hca-blue-500 hover:text-white";
    case "light-outline":
      return "border border-white text-white hover:border-hca-blue-500 hover:bg-hca-blue-500 hover:text-white";
    case "secondary":
      return "bg-hca-orange-500 text-white hover:bg-hca-orange-600";
    case "primary":
    default:
      return "bg-hca-blue-500 text-white hover:bg-hca-blue-600";
  }
};

const getPadding = (size?: string) => {
  switch (size) {
    case "small":
      return "px-6 py-2";
    case "medium":
    default:
      return "px-9 py-3";
  }
};

const Button = (props: ButtonProps) => {
  const { variant, size, label, className } = props;
  return (
    <button
      className={`${getClasses(variant)} ${getPadding(size)} 
      ${className} rounded-md text-sm font-medium`}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  size: "medium",
  className: "",
  label: "",
};

export default Button;
