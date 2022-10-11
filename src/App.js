import AppPrefrenceContextProvider from "./contexts/AppPrefrenceContext";
import RoutesComponent from "./routes/router";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./contexts/AuthContext";
import LoadingContextProvider from "./contexts/LoadingContext";
import axios from "axios";
import TripsContextProvider from "./contexts/tripsContext";

function App() {
  (function () {
    const token = localStorage.getItem("access_token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
    }
  })();

  // axios.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   (error) => {
  //     if (error.response.status === 401) {
  //       localStorage.clear();
  //       window.location.replace("/signin");
  //     }
  //     // return Promise.reject(error);
  //   }
  // );
  return (
    <div className={"App"}>
      <ToastContainer position={"top-right"} transition={"Slide"} />
      <AppPrefrenceContextProvider>
        <AuthContextProvider>
          <LoadingContextProvider>
            <TripsContextProvider>
              <RoutesComponent />
            </TripsContextProvider>
          </LoadingContextProvider>
        </AuthContextProvider>
      </AppPrefrenceContextProvider>
    </div>
  );
}

export default App;
