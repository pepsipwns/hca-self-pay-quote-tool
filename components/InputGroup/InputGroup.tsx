import {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import Error from "../../public/icons/error.svg";

type InputType = {
  id: string;
  label?: string;
  placeholder?: string;
  className?: string;
};

interface InputGroupProps {
  id: string;
  inputs: InputType[];
  label?: string;
  register?: UseFormRegister<FieldValues>;
  errors?: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  required?: boolean;
  className?: string;
}

const InputGroup = (props: InputGroupProps) => {
  const {
    id,
    label,
    register,
    errors,
    required,
    className,
    inputs,
    ...rest
  } = props;

  const error =
    errors &&
    inputs.some((input) => {
      return errors[input.id]?.type === "required";
    });

  console.log("errors", errors, "error", error);

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
      <div className="flex flex-row">
        {inputs.map((input) => (
          <input
            data-testid="group-input"
            key={input.id}
            id={input.id}
            aria-label={input.label ? input.label : input.id}
            aria-invalid={error}
            placeholder={
              input.label ? input.label : input.placeholder
            }
            {...(register &&
              register(input.id, {
                required: required,
              }))}
            {...rest}
            className={`${
              input.className
            } h-9 p-2 rounded-md border hover:border-hca-grey-500 focus-visible:border focus-visible:border-hca-grey-500 focus-visible:outline-none placeholder:text-hca-grey-400 ${
              error ? "border-hca-red" : "border-hca-grey-200"
            } `}
          />
        ))}
      </div>
      {error && (
        <span className="text-hca-red flex flex-row items-center mt-1">
          <Error className="text-hca-red mx-1" />
          {label} is required
        </span>
      )}
    </>
  );
};

InputGroup.defaultProps = {
  label: undefined,
  register: null,
  errors: null,
  required: false,
  className: "w-full",
  placeholder: "",
};

export default InputGroup;
