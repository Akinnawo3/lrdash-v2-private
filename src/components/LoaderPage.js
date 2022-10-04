import {Audio, Vortex} from "react-loader-spinner";

const LoaderPage = ({type, size}) => {
  return (
    <div className="d-flex justify-content-center align-items-center " style={{minHeight: "90vh"}}>
      {/* <Audio /> */}
      {/* <Loader
                className="my-loader align-self-center"
                type={type}
                color="#511E2E"
                height={size}
                width={size}
            /> */}
      <Vortex visible={true} height="150" width="150" ariaLabel="vortex-loading" wrapperStyle={{}} wrapperClass="vortex-wrapper" colors={["red", "green", "blue", "yellow"]} />
    </div>
  );
};

export default LoaderPage;
