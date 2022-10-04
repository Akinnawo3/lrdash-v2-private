import AppPrefrenceContextProvider from "./contexts/AppPrefrenceContext";
import RoutesComponent from "./routes/router";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./contexts/AuthContext";
import LoadingContextProvider from "./contexts/LoadingContext";
import axios from "axios";

function App() {
  (function () {
    const token = localStorage.getItem("access_token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
    }
  })();

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.replace("/signin");
      }
      // return Promise.reject(error);
    }
  );
  return (
    <div className={"App"}>
      <ToastContainer position={"top-right"} />
      <AppPrefrenceContextProvider>
        <AuthContextProvider>
          <LoadingContextProvider>
            <RoutesComponent />
          </LoadingContextProvider>
        </AuthContextProvider>
      </AppPrefrenceContextProvider>
    </div>
  );
}

export default App;
