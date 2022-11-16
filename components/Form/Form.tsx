import { createElement, FormEventHandler, ReactNode } from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
} from "react-hook-form";
import { Button } from "../Button/Button";

interface FormProps {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  className?: string;
}

export const Form = (props: FormProps) => {
  const { children, onSubmit, className } = props;

  const {
    register,
    handleSubmit,
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
                    errors,
                    key: child.props.id,
                  },
                })
              : child;
          })
        : []}
      <Button label="Submit" className="mt-2" />
    </form>
  );
};
