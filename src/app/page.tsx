'use client'

import Button from "./components/Button";
import FormImput from "./components/FormImput";

export default function Home() {
  
    const handlelick = () => {

    }

    const handleChange = () => {

    }

    
    return (
    <main>
       <FormImput label={"Nome"} value={"Maria"} onChange={handleChange} />
       <Button text="ok" onClick={handlelick}/>
    </main>
  );
}
