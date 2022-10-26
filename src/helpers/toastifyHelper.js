import { toast } from "react-toastify";
import { MdError } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";

export const toastify = ({ type, icon, message }) =>
  toast(message, {
    type: type,
    icon: icon ? icon : "false",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

const getRequest = async ({ asyncFunction }) => {
  const id = "req_id";
  try {
    const res = await asyncFunction;
    if (res.data.status === "error") {
      toast.update(id, {
        render: res.data.msg,
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
      // setTimeout(toast.dismiss(), 2000);
      toast.dismiss(id);
    }
    return res;
  } catch (err) {
    toast.update(id, {
      render: "Network error",
      type: "error",
      isLoading: false,
    });
    return;
  }
};
const otherReq = async ({ asyncFunction, pendingMsg, SuccessMsg }) => {
  const id = toast.loading(pendingMsg);
  try {
    const res = await asyncFunction;
    if (res.data.status === "error") {
      toast.update(id, {
        render: res.data.msg,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } else {
      toast.update(id, {
        render: SuccessMsg,
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
    }
    return res;
  } catch (err) {
    toast.update(id, {
      render: "Network error",
      type: "error",
      isLoading: false,
      autoClose: 5000,
    });
    return;
  }
};

// const otherReq = async ({ asyncFunction, pendingMsg, SuccessMsg }) => {
//   // return toast("Will close after 2s", { autoClose: 2000 });

//   return toast.promise(asyncFunction, {
//     pending: {
//       render() {
//         return `in progress...`;
//       },
//       // icon: <VscLoading />,
//       icon: <GiCheckMark />,
//     },
//     success: {
//       render({ data }) {
//         return `successful`;
//       },
//       icon: <GiCheckMark />,
//     },
//     error: {
//       render({ data }) {
//         return `failed`;
//       },
//       icon: <MdError />,
//     },
//   });
// };

export const toastifyPromises = {
  get: getRequest,
  post: otherReq,
  put: otherReq,
  delete: otherReq,
};

// import { toast } from "react-toastify";
// import { GiCheckMark } from "react-icons/gi";
// import { MdError } from "react-icons/md";
// import { VscLoading } from "react-icons/vsc";

// export const toastify = ({ type, icon, message }) =>
//   toast(message, {
//     type: type,
//     icon: icon ? icon : "false",
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: true,
//     progress: undefined,
//   });

// export const otherReq = ({ asyncFunction, pendingMsg, SuccessMsg }) =>
//   toast.promise(asyncFunction, {
//     pending: {
//       render() {
//         return `${msgPrefix} in progress...`;
//       },
//       icon: <VscLoading />,
//     },
//     success: {
//       render({ data }) {
//         return `${msgPrefix} successful`;
//       },
//       icon: <GiCheckMark />,
//     },
//     error: {
//       render({ data }) {
//         return `${msgPrefix} failed`;
//       },
//       icon: <MdError />,
//     },
//   });

// export const toastifyPromises = {
//   get: getRequest,
//   post: otherReq,
//   put: otherReq,
//   delete: otherReq,
// };

// export const toasifyPromises = ({ asyncFunction, msgPrefix }) =>
//   toast.promise(asyncFunction, {
//     pending: {
//       render() {
//         return `${msgPrefix} in progress...`;
//       },
//       icon: <VscLoading />,
//     },
//     success: {
//       render({ data }) {
//         return `${msgPrefix} successful`;
//       },
//       icon: <GiCheckMarki />,
//     },
//     error: {
//       render({ data }) {
//         return `${msgPrefix} failed`;
//       },
//       icon: <MdError />,
//     },
//   });
