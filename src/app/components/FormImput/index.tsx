import { Props } from "./interface";


const FormImput = (props: Props) => {
    return( 
    <div className="flex flex-col my-3">
        <label className="font-bold">{props.label}</label>
        <input
        className="border py-2 bg-gray-100"
         type="text"
         value={props.value}
         onChange={props.onChange}/>
    </div>
    );
};

export default FormImput;