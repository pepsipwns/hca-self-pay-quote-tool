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

  const organiseForm = (childs: ReactNode) => {
    let elementToReturn: ReactNode[] = [];
    if (Array.isArray(childs)) {
      childs.map((child) => {
        if (child.props.id) {
          elementToReturn.push(
            createElement(child.type, {
              ...{
                ...child.props,
                register,
                control,
                errors,
                key: child.props.id,
              },
            })
          );
        } else {
          elementToReturn.push(child);
        }
      });
    }
    return elementToReturn;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col ${className}`}
    >
      {organiseForm(children)}
      <Button label={submitLabel} className="mt-2" />
    </form>
  );
};

Form.defaultProps = {
  submitLabel: "Submit",
};

export default Form;
