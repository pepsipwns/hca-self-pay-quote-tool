import {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import Error from "../../public/icons/error.svg";

interface InputProps {
  id: string;
  label?: string;
  register?: UseFormRegister<FieldValues>;
  errors?: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  required?: boolean;
  className?: string;
  placeholder?: string;
}

const Input = (props: InputProps) => {
  const {
    id,
    label,
    register,
    errors,
    required,
    className,
    placeholder,
    ...rest
  } = props;

  const error = errors && errors[id]?.type === "required";

  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className={`my-1 font-bold ${
            error ? "text-hca-red" : "text-blue-900"
          }`}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        aria-label={label ? label : id}
        aria-invalid={error}
        placeholder={label ? label : placeholder}
        {...(register &&
          register(id, {
            required: required,
          }))}
        {...rest}
        className={`${className} h-9 p-2 rounded-md border hover:border-hca-grey-500 focus-visible:border focus-visible:border-hca-grey-500 focus-visible:outline-none placeholder:text-hca-grey-400 ${
          error ? "border-hca-red" : "border-hca-grey-200"
        } `}
      />
      {error && (
        <span className="text-hca-red flex flex-row items-center mt-1">
          <Error className="text-hca-red mx-1" />
          {label} is required
        </span>
      )}
    </>
  );
};

Input.defaultProps = {
  label: undefined,
  register: null,
  errors: null,
  required: false,
  className: "w-full",
  placeholder: "",
};

export default Input;
