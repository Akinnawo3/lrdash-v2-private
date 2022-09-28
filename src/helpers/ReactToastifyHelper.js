import { toast } from "react-toastify";
import { GiCheckMark } from "react-icons/gi";
import { MdError } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";

export const toastify = ({ type, icon, message }) => toast(message,
    {
        type: type,
        icon: icon ? icon : "false",
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    }
);


export const toastifyPromises = ({ asyncFunction, msgPrefix }) => toast.promise(
    asyncFunction,
    {
        pending: {
            render() {
                return `${msgPrefix} in progress...`;
            },
            icon: <VscLoading />,
        },
        success: {
            render({ data }) {
                let res = `${msgPrefix} successful`;
                console.log(data)
                // const message = data.response?.data;
                const message="dklfn"
                if (typeof (message) === "string") {
                    res += ` - ${message}`;
                }
                return res;
            },
            icon: <GiCheckMark />,
        },
        error: {
            render({ data }) {
                let res = `${msgPrefix} failed`;
                const message = data.response?.data
                if (typeof (message) === "string") {
                    res += ` - ${message}`;
                }
                return res;
            },
            icon: <MdError />
        }
    }
)
