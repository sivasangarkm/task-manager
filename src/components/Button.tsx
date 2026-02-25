
interface Property
{
    message:string;
    color?:string;
    onClick : ()=> void;
}

function Button({message,color='primary',onClick}:Property)
{
    return <button type="button" className={"btn btn-" + color} onClick={onClick}>{message}</button>
}

export default Button;