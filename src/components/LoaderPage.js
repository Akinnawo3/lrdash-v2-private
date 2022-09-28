import {Audio} from "react-loader-spinner";

const LoaderPage = ({type, size}) => {
  return (
    <div className="d-flex justify-content-center align-item-center " style={{minHeight: "90vh"}}>
      <Audio />
      {/* <Loader
                className="my-loader align-self-center"
                type={type}
                color="#511E2E"
                height={size}
                width={size}
            /> */}
    </div>
  );
};

export default LoaderPage;
