import {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import Error from "../../public/icons/error.svg";

interface TextAreaProps {
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

export const TextArea = (props: TextAreaProps) => {
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
      <textarea
        id={id}
        aria-label={label}
        placeholder={label}
        {...(register &&
          register(id, {
            required: required,
          }))}
        {...rest}
        className={`w-full p-2 h-56 rounded-md border hover:border-hca-grey-500 focus-visible:border focus-visible:border-hca-grey-500 focus-visible:outline-none placeholder:text-hca-grey-400
           ${error ? "border-hca-red" : "border-hca-grey-200"} `}
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

TextArea.defaultProps = {
  register: null,
  errors: null,
  required: false,
};
