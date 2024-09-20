import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const auth = getAuth();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then(() => {
        const user = userCredential.user;
        e.target.reset();
        navigate(from, { replace: true });
      })
      .catch(() => {
       
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("Google user:", user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
        toast.error("Google Sign-In Failed!", { theme: "dark" });
      });
  };

  return (
    <div className="mt-20">
      <div className="hero">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="lg:text-5xl text-[#928360] font-mont  mb-10 text-3xl font-semibold">
              Log into Your Account
            </h1>
          </div>
          <div className="card bg-base-100 w-full shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="font-bold text-xl text-[#795757] label-text">Email Address</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered h-16"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-[#795757]  text-xl">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered h-16"
                  required
                />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#795757] hover:bg-[#796969] text-white py-2 text-xl p-4 rounded-xl duration-300">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="w-9/12 mt-10">
            <button
              onClick={handleGoogleLogin}
              className="btn bg-gray-300 text-black text-lg hover:bg-gray-400 w-full"
            >
              <FcGoogle className="text-3xl" />
              Sign In With Google
            </button>
          </div>
          <h1 className="mt-10 text-xl font-semibold">
            Don’t have an Account?{" "}
            <Link className="text-[#795757]" to="/register">
              Register
            </Link>{" "}
            Here
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
