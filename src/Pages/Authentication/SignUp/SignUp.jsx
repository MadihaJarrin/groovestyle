import { Link, Navigate, } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import image from '../../../assets/Authentication/signup1.png'
import Swal from "sweetalert2";

const SignUp = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const onSubmit = data => {

        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log("user profile info updated")

                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Account created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        Navigate('/');
                    }

                    )
                    .catch(error => console.log(error))
            });
    };



    return (
        <>
            <Helmet>
                <title>Groovestyle | Sign Up</title>
            </Helmet>
            <div className="hero min-h-scree pb-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-violet-400 to-90%">
                <div>
                    <h1 className='font-sarif text-7xl font-extrabold text-white text-center m-20 uppercase '>Sign-up Now</h1>

                    <div className="hero-content flexe">
                        <div className="text-center lg:text-left">
                            <img className='' src={image} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className='text-center mb-5 text-xl'><small>Already resistered?<Link to="/login" className='text-blue-700'>Log in from here </Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default SignUp;