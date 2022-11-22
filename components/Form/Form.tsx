import { createElement, FormEventHandler, ReactNode } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button/Button";

interface FormProps {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  className?: string;
  submitLabel?: string;
}

const Form = (props: FormProps) => {
  const { children, onSubmit, className, submitLabel } = props;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col ${className}`}
    >
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.id
              ? createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    control,
                    errors,
                    key: child.props.id,
                  },
                })
              : child;
          })
        : []}
      <Button label={submitLabel} className="mt-2" />
    </form>
  );
};

Form.defaultProps = {
  submitLabel: "Submit",
};

export default Form;
