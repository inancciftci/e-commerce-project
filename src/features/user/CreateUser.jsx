/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { createStore, createUser, getRoles } from "../../services/userApi";
import { useLoaderData } from "react-router-dom";

function CreateUser() {
  const roles = useLoaderData();
  const [role, setRole] = useState(3);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    getValues,
    watch,
  } = useForm();
  const onSubmit = (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const storeData = {
      storeName: data.storeName,
      phoneNumber: data.phone,
      taxId: data.tax_no,
      bankAccount: data.bank_account,
    };
    if (role == 1 || role == 3) {
      createUser(userData, role);
      console.log(userData);
    }
    if (role == 2) {
      const newData = {
        ...storeData,
        user: { ...userData },
      };
      console.log(newData);
      createStore(newData);
    }
  };
  const changeHandler = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="flex justify-center items-center py-[5rem]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[30rem] text-[1.4rem] flex flex-col gap-[3rem]"
      >
        <div className="flex flex-col gap-[0.5rem]">
          <label htmlFor="">Name</label>
          <input
            className="p-[1rem] bg-slate-100 rounded-md"
            {...register("name", {
              required: "Name is required!",
              minLength: {
                value: 2,
                message: "Must be at least two characters long.",
              },
            })}
            type="text"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className=" text-red-400 font-400 text-right text-[12px]">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label htmlFor="">Email</label>
          <input
            {...register("email", {
              required: "Email is required!",
            })}
            className="p-[1rem] bg-slate-100 rounded-md"
            type="email"
            placeholder="Enter your email"
          />
          {errors.name && (
            <p className=" text-red-400 font-400 text-right text-[12px]">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label htmlFor="">Password</label>
          <input
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 8,
                message: "Your password should be between 8-20 characters.",
              },
              maxLength: {
                value: 20,
                message: "Your password should be between 8-20 characters.",
              },
            })}
            className="p-[1rem] bg-slate-100 rounded-md"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label htmlFor="">Confirm password</label>
          <input
            {...register("conf_pass", {
              required: "Password is required!",
              validate: (value) =>
                value === getValues("password") || "Passwords are not matched",
            })}
            className="p-[1rem] bg-slate-100 rounded-md"
            type="password"
            placeholder="Confirm your password"
          />
          {errors.conf_pass && (
            <p className=" text-red-400 font-400 text-right text-[12px]">
              {errors.conf_pass.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-[1rem]">
          <label htmlFor="role_id">Select your account type</label>
          <select
            defaultValue={3}
            {...register("role_id", {
              onChange: changeHandler,
            })}
            className="p-[1rem] bg-slate-100 rounded-md"
            {...register("role_id")}
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
        {role == 2 && (
          <>
            <div className="flex flex-col gap-[1rem]">
              <label htmlFor="">Store Name</label>
              <input
                {...register("storeName")}
                className="p-[1rem] bg-slate-100 rounded-md"
                type="text"
                placeholder="Enter your store's name"
              />
            </div>
            <div className="flex flex-col gap-[1rem]">
              <label htmlFor="">Phone Number</label>
              <input
                {...register("phone")}
                className="p-[1rem] bg-slate-100 rounded-md"
                type="text"
                placeholder="+90..."
              />
            </div>
            <div className="flex flex-col gap-[1rem]">
              <label htmlFor="">TAX ID</label>
              <input
                {...register("tax_no")}
                className="p-[1rem] bg-slate-100 rounded-md"
                type="text"
                placeholder="TXXXXVXXXXXX"
              />
            </div>
            <div className="flex flex-col gap-[1rem]">
              <label htmlFor="">Bank Account</label>
              <input
                {...register("bank_account")}
                className="p-[1rem] bg-slate-100 rounded-md"
                type="text"
                placeholder="TR...(IBAN)"
              />
            </div>
          </>
        )}

        <button className="bg-[#23a6f0] text-[1.6rem] uppercase py-[1.5rem] rounded-md text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export async function loader() {
  const roles = await getRoles();
  return roles;
}

export default CreateUser;
