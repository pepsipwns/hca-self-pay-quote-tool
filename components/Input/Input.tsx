import {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import Error from "../../public/Error.svg";

interface InputProps {
  id: string;
  label: string;
  register?: UseFormRegister<FieldValues>;
  errors?: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  required?: boolean;
}

export const Input = (props: InputProps) => {
  const { id, label, register, errors, required, ...rest } = props;

  const error = errors && errors[id]?.type === "required";

  return (
    <>
      <label
        htmlFor={id}
        className={`my-1 font-bold ${
          error ? "text-hca-red" : "text-blue-900"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        placeholder={label}
        {...(register &&
          register(id, {
            required: required,
          }))}
        {...rest}
        className={`w-full h-9 p-2 rounded-md border-2 ${
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
  register: null,
  errors: null,
  required: false,
};
