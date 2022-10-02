import '../../assets/scss/auth.scss'

const AuthLayout = ({ children, title }) => {
    return (
        // <div className="d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex mt-5 justify-content-center">
            <div className="">
                <div className="main-content">
                    {/* <div className="fw-bold title">{title}</div> */}
                    {children}
                </div>
            </div>
        </div >
    )
}
export default AuthLayout
