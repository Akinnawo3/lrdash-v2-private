export const getToken = () => {
    try {
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
            return access_token
        }
    }
    catch (err) {
        return null
    }
}