import { Props } from "./interfaces";

const Button = (props: Props) => {
   return <button className="px-6 py-2 bg-slate-800 text-white" onClick={props.onClick}> {props.text}</button>
}

export default Button;