import {
  Control,
  Controller,
  FieldErrorsImpl,
  FieldValues,
} from "react-hook-form";
import Error from "../../public/icons/error.svg";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";

interface CountrySelectProps {
  id: string;
  label: string;
  control?: Control<FieldValues, any>;
  errors?: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  required?: boolean;
}

const CountrySelect = (props: CountrySelectProps) => {
  const { id, label, control, errors, required, ...rest } = props;
  const [selected, setSelected] = useState("");

  const error = errors ? errors[id]?.type === "required" : false;

  const borderColor = (error: boolean, menuIsOpen?: boolean) => {
    if (menuIsOpen) {
      return "#323232";
    } else {
      if (error) return "#E00000";
      return "#D3D9DE";
    }
  };

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
      <Controller
        name={id}
        control={control}
        rules={{ required: required }}
        render={({ field }) => (
          <ReactFlagsSelect
            selected={field.value}
            onSelect={(code) => field.onChange(code)}
            selectButtonClassName={`w-full h-9 p-2 rounded-md border hover:border-hca-grey-500 focus-visible:border focus-visible:border-hca-grey-500 focus-visible:outline-none placeholder:text-hca-grey-400 ${
              error ? "border-hca-red" : "border-hca-grey-200"
            } `}
          />
        )}
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

CountrySelect.defaultProps = {
  register: null,
  errors: null,
  required: false,
};

export default CountrySelect;
