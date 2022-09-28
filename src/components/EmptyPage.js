import emptyImg from '../assets/img/undraw_void_3ggu.png';

const EmptyPage = (props) => {
    return (
        <div className="h-100 w-100 text-center">
            <img src={emptyImg} height={"auto"} width={"100%"} style={{ maxWidth: 500 }} />
            <p>{props.text}</p>
            {props.button}
        </div>
    );
}

export default EmptyPage;
