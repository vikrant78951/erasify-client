import Button from "@components/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@services/auth.service";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/auth.slice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      dispatch(addUser(data)); 
      navigate('/')
    },
    onError: (error) => {
      console.error("Login failed:", error.response?.data?.message || error.message);
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;
    mutation.mutate(formData);
  };

  return (
    <>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-text-primary md:text-2xl uppercase">
        Login
      </h1>

      <form className="space-y-4 md:space-y-6" onSubmit={loginHandler}>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-surface p-2.5 text-text-primary focus:border-gray-400 focus:ring-gray-400"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-text-primary">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="block w-full rounded-lg border border-gray-300 bg-surface p-2.5 text-text-primary focus:border-gray-400 focus:ring-gray-400"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div></div>
          <a href="#" className="text-text-secondary text-sm font-medium hover:underline">
            Forgot password?
          </a>
        </div>

        {mutation.isError && <p className="text-xs text-red-500">{mutation.error.message}</p>}

        <Button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </>
  );
};

export default Login;
