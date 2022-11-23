import { forwardRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import Error from "../../public/icons/error.svg";
import Calendar from "../../public/icons/calendar.svg";

import "react-datepicker/dist/react-datepicker.css";
import {
  Control,
  Controller,
  FieldErrorsImpl,
  FieldValues,
} from "react-hook-form";

interface DatepickerProps {
  id: string;
  className?: string;
  label?: string;
  control?: Control<FieldValues, any>;
  errors?: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  required?: boolean;
}

export const Datepicker = (props: DatepickerProps) => {
  const { id, label, control, required, errors, className } = props;

  const [startDate, setStartDate] = useState<Date>();

  const error = errors ? errors[id]?.type === "required" : false;

  type DatepickerProps = {
    onClick?: () => void;
    value?: string;
  };

  const DatepickerInput = forwardRef<
    HTMLInputElement,
    DatepickerProps
  >(({ value, onClick }, ref) => (
    <>
      <div className="my-1" data-testid="datepicker">
        <label
          htmlFor={id}
          className={`font-bold ${
            error ? "text-hca-red" : "text-blue-900"
          }`}
        >
          {label}
        </label>
      </div>
      <div
        onClick={onClick}
        className={`flex flex-column items-center w-full h-9 p-2 rounded-md border hover:border-hca-grey-500 focus-visible:border focus-visible:border-hca-grey-500 focus-visible:outline-none placeholder:text-hca-grey-400 ${
          error ? "border-hca-red" : "border-hca-grey-200"
        } `}
      >
        <Calendar className="h-4 w-3 mr-1" />
        <input
          aria-label={label}
          aria-invalid={error}
          ref={ref}
          placeholder={label}
          defaultValue={value}
          className="border-none outline-none boxShadow-none"
        />
      </div>
    </>
  ));
  DatepickerInput.displayName = "Datepicker";
  return (
    <>
      <Controller
        name={id}
        control={control}
        rules={{ required: required }}
        render={({ field }) => (
          <>
            <ReactDatePicker
              data-testid="datepicker"
              selected={startDate}
              onChange={(val: Date) => {
                setStartDate(val);
                field.onChange(val?.toLocaleDateString());
              }}
              dateFormat="dd/MM/yyyy"
              timeFormat="hh:mm a"
              className="p-5"
              popperPlacement="bottom-start"
              popperModifiers={[
                {
                  name: "offset",
                  options: {
                    offset: [0, 0],
                  },
                },
                {
                  name: "arrow",
                  options: { padding: 16 },
                },
                {
                  name: "flip",
                  options: {
                    fallbackPlacements: ["bottom-start", "top-start"],
                    allowedAutoPlacements: [
                      "bottom-start",
                      "top-start",
                    ],
                  },
                },
                {
                  name: "preventOverflow",
                  enabled: false,
                },
                {
                  name: "hide",
                  enabled: false,
                },
              ]}
              customInput={<DatepickerInput />}
            />
          </>
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

Datepicker.defaultProps = {
  className: "",
  label: "",
};
