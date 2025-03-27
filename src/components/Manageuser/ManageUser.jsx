import { getSession } from "../../redux/slices/auth.slice";
import { useEffect } from "react";
import { logoutUser } from "../../redux/slices/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@components/Button/Button";
import { MoveRight, Copyright } from "lucide-react";

export default function ManageUser({ callBack }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, authenticated } = useSelector((state) => state.auth);

  const fetchSessions = async () => {
    try {
      dispatch(getSession());
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    if (!user) {
      fetchSessions();
    }
    callBack();
  }, []);

  if (user) {
    return (
      <>
        <li>
          <Button variant="tertiary" onClick={() => null}>
            <Copyright className="mr-2 text-orange-400" size={20} />
            {user?.credits}
          </Button>
        </li>
        {authenticated ? (
          <li>
            <div className="group relative inline-block text-left">
              <Button
                className="h-9 w-9 text-2xl !font-medium"
                variant="primaryRounded"
                size="regular"
                onClick={() => null}
              >
                {user.firstName[0]}
              </Button>
              <div
                className="focus:outline-hidden absolute right-0 z-10 hidden origin-top-right group-hover:block"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div
                  className="w-max-content mt-2 cursor-pointer rounded-md bg-tertiary py-1 shadow-lg ring-1 ring-black/5"
                  role="none"
                >
                  <p
                    className="block px-4 py-2 text-sm text-text-primary hover:text-primary"
                    onClick={() => dispatch(logoutUser())}
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </li>
        ) : (
          <>
            <li>
              <Button variant="outline" onClick={() => navigate("login")}>
                Get Started
                <MoveRight className="ml-3" size={20} />
              </Button>
            </li>
          </>
        )}
      </>
    );
  }

  return (
    <li>
      <Button variant="outline" onClick={() => navigate("login")}>
        Get Started
        <MoveRight className="ml-3" size={20} />
      </Button>
    </li>
  );
}
