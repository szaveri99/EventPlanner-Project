import React from "react";
import { useForm } from "react-hook-form";

function ForgotPasswordModal({ show, handleClose }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Reset Email:", data.email);
        alert("Password reset link sent!");
        handleClose();
    };

    return (
        <div  className={`modal d-flex align-item-center justify-content-center fade ${show ? "show d-block" : ""}`}  style={{ background: "rgba(0,0,0,0.5)",zIndex:'8' }}>
          <div className="modal-dialog" style={{ width: "30%",zIndex:'99' }}> 
                <div className="modal-content p-4 " style={{textAlign:'center'}}>
                    <div className="d-flex  align-items-center" style={{justifyContent:'space-between'}}>
                        <div></div>
                        <h5 className="fw-bold">Forgot Password</h5>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </div>
                    <p>Type your email below and we'll send you a password reset link</p>
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="email"
                            className="form-control mb-3"
                            placeholder="Type your email"
                            {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid email" } })}
                        />
                        {errors.email && <p className="text-danger">{errors?.email?.message}</p>}

                        <button type="submit" className="btn btn-secondary w-100">Send email</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordModal;
