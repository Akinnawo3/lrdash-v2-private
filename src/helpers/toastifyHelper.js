import {toast} from "react-toastify";
import {GiCheckMark} from "react-icons/gi";
import {MdError} from "react-icons/md";
import {VscLoading} from "react-icons/vsc";

export const toastify = ({type, icon, message}) =>
  toast(message, {
    type: type,
    icon: icon ? icon : "false",
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

export const toastifyPromises = ({asyncFunction, msgPrefix}) => {
  let resData;
  console.log(resData);

  return toast.promise(asyncFunction, {
    pending: {
      render() {
        return `${msgPrefix} in progress...`;
      },
      icon: <VscLoading />,
    },
    success: {
      render({data}) {
        resData = data;
        console.log(data);
        return data.data.status === "error" ? data.data.msg : `${msgPrefix} successful`;
        // const message = data.response?.data;
        // const message = "";
        // if (typeof message === "string") {
        //   res += `${message}`;
        // }
        // return res;
      },
      icon: resData?.data?.status === "error" ? <MdError /> : <GiCheckMark />,
      type: resData?.data?.status === "error" ? "error" : "success",
    },

    error: {
      render({data}) {
        // let res = `${msgPrefix} failed`;
        let res = `Network error please try again or check your internet connection`;
        const message = data.response?.data;
        if (typeof message === "string") {
          res += ` - ${message}`;
        }
        return res;
      },
      icon: <MdError />,
    },
  });
};
//   {
//     "data": {
//         "status": "error",
//         "msg": "Invalid phone number. Phone number expects 11 digits"
//     },
//     "status": 200,
//     "statusText": "OK",
//     "headers": {
//         "content-length": "79",
//         "content-type": "application/json"
//     },

// }
