  import { lazy, Suspense } from "react";
  import { Routes, Route } from "react-router-dom";
  import ProtectedRoute from "./ProtectedRoute";
  import AuthRedirect from "./AuthRedirect";
  import PageNotFound from "../pages/PageNotFound";


  // Lazy imports
  const Home = lazy(() => import("@pages/Home"));
  const About = lazy(() => import("@pages/About"));
  const Contact = lazy(() => import("@pages/Contact"));
  const Plans = lazy(() => import("@pages/Plans"));
  const Policy = lazy(() => import("@pages/Policy"));
  const Playground = lazy(() => import("@pages/Playground"));
  const Terms = lazy(() => import("@pages/Terms"));
  const Login = lazy(() => import("@pages/Login"));

  const Router = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* public route  */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Plans />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/playground" element={<Playground />} />

          {/* auto rediret page  */}
          <Route
            path="/login"
            element={
              <AuthRedirect>
                <Login />
              </AuthRedirect>
            }
          />

          {/* protected page  */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <div>profile page</div>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    );
  };

  export default Router;
