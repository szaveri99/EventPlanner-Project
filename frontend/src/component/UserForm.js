import React from "react";

function UserForm({ register, errors }) {
  return (
    <>
      <input 
        type="email" 
        className="form-control mb-3" 
        placeholder="Type your email"
        {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid email" } })}
      />
      {errors.email && <p className="text-danger">{errors.email.message}</p>}

      <input 
        type="password" 
        className="form-control mb-3" 
        placeholder="Type your password"
        {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
      />
      {errors.password && <p className="text-danger">{errors.password.message}</p>}
    </>
  );
}

export default UserForm;
