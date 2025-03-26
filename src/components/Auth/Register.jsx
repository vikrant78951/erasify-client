import Button from "@components/Button/Button";
import { useState } from "react";
import { registerUser } from "@services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { addUser } from "../../redux/slices/auth.slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const dispatch = useDispatch()

 const mutation = useMutation({
  mutationFn : registerUser,
  onSuccess: (data) => {
    dispatch(addUser(data));
    navigate('/')
  },
  onError: (error) => {
    console.error("Registeration failed:", error.response?.data?.message || error.message);
  },

 })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      return 
    }

    mutation.mutate(Object.assign(formData))
  };

  return (
    <>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-text-primary md:text-2xl uppercase">
        Sign up
      </h1>

      <form className="space-y-4 md:space-y-6" onSubmit={registerHandler}>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              First name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 bg-surface p-2.5 text-text-primary focus:border-gray-400 focus:ring-gray-400"
              placeholder="First name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 bg-surface p-2.5 text-text-primary focus:border-gray-400 focus:ring-gray-400"
              placeholder="Last name"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
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
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            className="block w-full rounded-lg border border-gray-300 bg-surface p-2.5 text-text-primary focus:border-gray-400 focus:ring-gray-400"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-start">
            {/* <div className="flex h-5 items-center">
              <input
                id="remember"
                type="checkbox"
                className="focus:ring-3 focus:ring-primary-300 h-4 w-4 rounded border border-gray-300 bg-surface"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-text-secondary">
                Remember me
              </label>
            </div> */}
          </div>
          <a
            href="#"
            className="text-text-secondary text-sm font-medium hover:underline"
          >
            Forgot password?
          </a>
        </div>

          {mutation.isError && <p className="text-xs text-red-500">{mutation.error.message}</p>}

          <Button type="submit" disabled={mutation.isLoading}>
            {mutation.isLoading ? "Registering..." : "Sign up"}
          </Button>
      </form>
    </>
  );
};

export default Register;
