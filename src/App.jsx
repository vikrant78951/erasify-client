import "./App.css";
import Router from "./routes/Router";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

function App() {
  return (
    <div className="main flex min-h-screen flex-col bg-surface">
      <Header />
      <div className="flex-grow">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
