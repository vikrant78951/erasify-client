import { SectionWrapper } from "@components/Wrapper/Wrapper";
import Login from "./Login";
import Register from "./Register";
import {  useState } from "react";
const Auth = () => {
  const [login, setLogin] = useState(true);
  
  return (
    <SectionWrapper>
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 lg:py-0">
        <div className="w-full rounded-lg shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            {login ? <Login /> : <Register />}

            {login ? (
              <p className="text-sm font-light text-text-secondary">
                Don’t have an account?
                <span
                  className="ml-1 cursor-pointer font-medium text-blue-600 hover:underline"
                  onClick={() => setLogin(false)}
                >
                  Register
                </span>
              </p>
            ) : (
              <p className="text-sm font-light text-text-secondary">
                Already have an account?
                <span
                  className="ml-1 cursor-pointer font-medium text-blue-600 hover:underline"
                  onClick={() => setLogin(true)}
                >
                  Login
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Auth;
