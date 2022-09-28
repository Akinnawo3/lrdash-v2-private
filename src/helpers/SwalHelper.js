import { FcCallback } from "react-icons/fc";
import swal from "sweetalert";

export const askConfirm = async ({ Message, asyncFunction, payload, routePush, callback }) => {
    const allow = await swal({
        icon: "warning",
        title: "Are you sure?",
        text: Message,
        closeOnClickOutside: false,
        closeOnEsc: false,
        buttons: {
            cancel: {
                text: "Cancel",
                value: false,
                visible: true,
                closeModal: true,
            },
            confirm: {
                text: "Confirm",
                value: true,
                visible: true,
                closeModal: false
            }
        }
    });

    if (allow) {
        document.querySelector('.swal-button--cancel').style.display = 'none';

        let res;
        try {
            res = await asyncFunction();
        } catch (e) {
            res = e.response ? e.response : e.config;
        }

        if (res.status >= 200 && res.status < 300) {
            swal({
                title: "Successful!",
                text: res.data.message,
                icon: "success",
            });
            routePush && routePush();
        } else {
            swal("Oh no!", "", `Request error - ${res.data}`);
        }
    } else {
        swal.close();
    }

    swal.stopLoading();
    callback && callback();
}
