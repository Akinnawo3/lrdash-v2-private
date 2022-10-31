import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import LoadingContextProvider from "./contexts/LoadingContext";

export const TestRenderTemplate = ({ children }) => {
  return (
    <BrowserRouter>
      <LoadingContextProvider>
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
      </LoadingContextProvider>
    </BrowserRouter>
  );
};
