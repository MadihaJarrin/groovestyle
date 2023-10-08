import { Link, } from "react-router-dom";
import image from '../../../assets/Authentication/signup1.png'
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const SignUp = () => {

    const { register, handleSubmit,
        //  reset, 
        formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            });
    };
    return (
        <>
            <Helmet>
                <title>Groovestyle | Sign Up</title>
            </Helmet>
            <div className="hero min-h-scree pb-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-violet-400 to-90%">
                <div>
                    <h1 className='font-sarif text-7xl font-extrabold text-white text-center m-20 uppercase '>Resister Now</h1>
                    <div className="hero-content flex">

                        <div className="text-center lg:text-left">
                            <img className='' src={image} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter your Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-500">Name is required</span>}

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"{...register("email", { required: true })} name="email" placeholder="Enter your E-mail" className="input input-bordered" />
                                    {errors.email && <span className="text-red-500">E-mail is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}
                                        name="password" placeholder="Enter Your password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>

                                    {errors.password?.type === "required" && (<p role="alert" className="text-red-500">Password is required</p>
                                    )}
                                    {errors.password?.type === "minLength" && (<p role="alert" className="text-red-500">Password must be 6 characters</p>
                                    )}
                                    {errors.password?.type === "mamLength" && (<p role="alert" className="text-red-500">Password less than 20 characters</p>
                                    )}
                                    {/* {errors.password?.type === "pattern" && (<p role="alert" className="text-red-500">Password must have one uppercase, one lowercase, one number & one special character</p>
                                    )} */}

                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className='text-center mb-5 text-xl'><small>Already resistered?<Link to="/login" className='text-blue-700'>Log in now </Link></small></p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;