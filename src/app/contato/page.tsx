'use client'

import { useState } from "react";
import Button from "../components/Button";
import FormImput from "../components/FormImput";



const Contact = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [cep, setCep] = useState('');
    


    const changeName = (event: any) => {
        setName(event.target.value)
    };
    const changeAddres = (event: any) => {
        setAddress(event.target.value)
    };
    const changePhone = (event: any) => {
        setPhone(event.target.value)
    };
    const changeCep = (event: any) => {
        setCep(event.target.value)
    };
    const sendForm = () => {
        fetch('https://endereco.do.leo.com.br/api/client'),{
        method: 'post',
        body: {
            _name: name, 
            fullAdress: address
        }
     }
 };


    return (
        <section className="m-4">
            <header>
                <h1 className="text--4x1"> Formulário de contato</h1>
            </header>
            <FormImput label={"Nome"} value={name} onChange={changeName} />
            <FormImput label={"Endereço"} value={address} onChange={changeAddres} />
            <FormImput label={"Telefone"} value={phone} onChange={changePhone} />
            <FormImput label={"Cep"} value={cep} onChange={changeCep} />
            <footer>
                <Button text={"Enviar"} onClick={sendForm} />
            </footer>
        </section>
    )
}

export default Contact;