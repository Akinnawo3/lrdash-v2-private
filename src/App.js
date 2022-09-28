import AppPrefrenceContextProvider from "./contexts/AppPrefrenceContext";
import RoutesComponent from "./routes/router";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className={"App"}>
      <ToastContainer position={"top-center"} />
      <AppPrefrenceContextProvider>
        <AuthContextProvider>
          <RoutesComponent />
        </AuthContextProvider>
      </AppPrefrenceContextProvider>
    </div>
  );
}

export default App;
