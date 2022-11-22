import {
  Control,
  Controller,
  FieldErrorsImpl,
  FieldValues,
} from "react-hook-form";
import ReactSelect, { components } from "react-select";
import Error from "../../public/icons/error.svg";

interface SelectProps {
  id: string;
  label: string;
  control?: Control<FieldValues, any>;
  errors?: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  required?: boolean;
  options: { label: string; value: string }[];
}

const Select = (props: SelectProps) => {
  const { id, label, control, errors, required, options, ...rest } =
    props;

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
          <ReactSelect
            id={id}
            aria-label={label}
            aria-invalid={error}
            instanceId={id}
            options={options}
            value={options.find(
              (option) => option.value === field.value
            )}
            onChange={(val) => field.onChange(val?.value)}
            styles={{
              control: (provided, state) => ({
                ...provided,
                height: "4.5rem",
                width: "100%",
                border: `1px solid ${borderColor(
                  error,
                  state.selectProps.menuIsOpen
                )}`,
                borderRadius: "0.375rem",
                borderBottomLeftRadius: state.selectProps.menuIsOpen
                  ? "0px"
                  : "0.375rem",
                borderBottomRightRadius: state.selectProps.menuIsOpen
                  ? "0px"
                  : "0.375rem",
                boxShadow: "none",
                ":hover": {
                  boxShadow: "none",
                  border: "1px solid #323232",
                },
                ":focus, :active, :focus-visible, :target": {
                  borderColor: "#323232",
                },
              }),
              placeholder: (provided) => ({
                ...provided,
                color: "#56606B",
              }),
              indicatorSeparator: () => ({
                display: "none",
              }),
              dropdownIndicator: (provided, state) => ({
                ...provided,
                color: "hca-grey-200",
                transition: "all .2s ease",
                transform: state.selectProps.menuIsOpen
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }),
              menu: (provided) => ({
                ...provided,
                margin: 0,
                left: 0,
                top: "calc(100% - 1px)",
                border: "1px solid #323232",
                borderTop: "0px",
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
              }),
              menuList: (provided) => ({
                ...provided,
                padding: 0,
              }),
              option: (provided) => ({
                ...provided,
                paddingLeft: "1.125rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                borderTop: "1px solid #323232",
                backgroundColor: "white",
                color: "#323232",
                ":hover": {
                  backgroundColor: "#F4F4F4",
                },
              }),
              noOptionsMessage: (provided) => ({
                ...provided,
                paddingLeft: "1.125rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                borderTop: "1px solid #323232",
                borderBottomLeftRadius: "0.375rem",
                borderBottomRightRadius: "0.375rem",
                color: "#323232",
              }),
              valueContainer: (provided) => ({
                ...provided,
                color: "#323232",
                paddingLeft: "1rem",
              }),
            }}
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

Select.defaultProps = {
  register: null,
  errors: null,
  required: false,
};

export default Select;
