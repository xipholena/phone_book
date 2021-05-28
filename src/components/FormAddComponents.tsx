import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { showFormErrors } from "../redux/actions";
export function Form({ defaultValues, children, onSubmit }: any) {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues });

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    console.log('errors', errors/*errors.email?.message*/);
    // @ts-ignore
    //console.log('state', state.showFormErrors);
    dispatch(showFormErrors(errors))
  },[errors.email])
  return (
    <div className="container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="add-form"
      >
        <p className="edit-form__title">
          Edit profile
        </p>
        {Array.isArray(children)
          ? children.map((child) => {
            return child?.props?.name
              ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  register,
                  key: child.props.name
                },
              })
              : child;
          })
          : children}
      </form>
    </div>

  );
}

export function Input({ defaultValues, register, name, validate, /*errors,*/ ...rest }:any) {

  return (
    <>
      <input
        {...register(name, validate)}
        {...rest}
        className="add-form__field"
      />
    </>

  );
}

export function Select({ register, options, name, ...rest }:any) {
  return (
    <select
      {...register(name)}
      {...rest}
      className="edit-form__field"
    >
      {options.map((value: any) => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
}
