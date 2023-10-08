
import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import login from '../../../assets/Authentication/signup2.png'
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Groovestyle | Login</title>
            </Helmet>
            <div className="hero min-h-scree pb-8
        bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-400 to-90%
        ">
                <div>
                    <h1 className='font-sarif text-6xl font-extrabold text-white text-center m-10 pt-2 uppercase '>Please, Login From here</h1>
                    <div className="hero-content flex">

                        <div className="text-center lg:text-left">
                            <img className='' src={login} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input ref={captchaRef} type="text" name="chaptcha" placeholder="type the captcha above" className="input input-bordered" />
                                    <button onClick={handleValidateCaptcha} className="btn btn-outline btn-accent btn-xs mt-4 ">Validation</button>
                                </div>

                                <div className="form-control mt-6">
                                    {/* <button className="btn btn-primary">Login</button> */}
                                    <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='text-center mb-5 text-xl'><small>Are You New Here?<Link to="/signup" className='text-blue-700'>Create An Account </Link></small></p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;