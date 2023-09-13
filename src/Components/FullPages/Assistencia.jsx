import React, { useState, useEffect } from "react"
import MenuModelos from "../MenuModelos"
import TopInfo from "../TopInfo"
import TopMenu from "../TopMenu"
import BottomInfo from "../BottomInfo"
import whats from "../../images/whats.png"
import phoneImg from "../../images/phone2.png"
import FormattedPhone from "../FormattedPhone"

function Assistencia() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        text: "",
    })
    
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const [phone, setPhone] = useState("")   

    function handleChangeName(e) {
        setNome(e.target.value)
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleChangeText(e) {
        setText(e.target.value)
    }
    // Funcao submit envia dados
    function handleSubmit(e) {        
        e.preventDefault()
        setFormData({
            name: nome,
            email: email,
            phone: phone,
            text: text,
        })    
        // usando newFormData para att lodeadformdata
            
        alert("obrigado")       
    
        // Limpar form and form for next
        setNome("")
        setEmail("")
        setText("")
        setPhone("")
                        
    }
    useEffect(() => {
            console.log('this is the', formData)
    }, [formData]); 

    /*
    function formatPhone(value) {
        // Remover nao numericos
        const phone = value.replace(/\D/g, "")
        // Verifica se ta vazio ou nao
        if (phone.length === 0) {
            return ""
        }
        // Formatando para formato cel
        let formattedPhone = phone.substring(0, 11)
        formattedPhone = 
             `(${formattedPhone.substring(0, 2)})${formattedPhone.substring(2, 7)}-${formattedPhone.substring(7)}`
        return formattedPhone
    }
    */

    // Alterando e enviando dados
    function handleChangePhone(e) {
        const unformattedPhone = e.target.value
        const formattedPhone = FormattedPhone(unformattedPhone)
        setPhone(formattedPhone)
    }   
    return(
        <>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="p-4 py-8 bg-gradient-to-br from-green-50 to-blue-100">
                <h1 className="justify-center items-center text-center text-blue-500 font-bold text-3xl">
                    Assistencia Técnica
                </h1>
                <div className="px-4 py-8">                   
                    <div className="pt-4 py-8">                        
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="border-gray-200 border-solid border-2 px-4
                                            bg-gradient-to-br from-green-100 to-blue-200"
                            >
                                <div className="py-4 text-center">
                                    <h2 className="text-red-500 font-bold text-2xl">
                                        Preencha o Formulário abaixo:
                                    </h2>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="py-1">
                                        <label htmlFor="Nome">
                                            <p className="4-xl">
                                                Seu Nome:
                                            </p>
                                            <div>
                                                <input
                                                    className="pl-1"
                                                    value={nome}
                                                    id="nome"
                                                    type="text"
                                                    onChange={handleChangeName} 
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="py-1 flex">   
                                        <label htmlFor="email">
                                            Seu e-mail:
                                            <div className="">
                                                <input        
                                                    className="pl-1"                            
                                                    type="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={handleChangeEmail}
                                                />
                                            </div> 
                                        </label>
                                    </div> 
                                    <div className="py-1">
                                        <label htmlFor="tel">
                                            Seu Celular:
                                            <div>
                                                <input
                                                    className="pl-1" 
                                                    type="tel" 
                                                    id="phone" 
                                                    value={phone}                                            
                                                    onChange={handleChangePhone}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="py-1">
                                        <label htmlFor="tel">
                                            Resuma o que você precisa:
                                            <div>
                                                <textarea 
                                                    name="" 
                                                    id="" 
                                                    cols="25" 
                                                    rows="5"
                                                    value={text}
                                                    className="w-full pl-1 pr-1"
                                                    onChange={handleChangeText}
                                                >                                                                                                
                                                </textarea>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="py-2">
                                        <button 
                                            className="text-slate-900 bg-blue-200 hover:bg-blue-300 focus:ring-4 
                                                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full
                                                        focus:outline-none"                                                
                                            type="submit"                                            
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="border-gray-200 border-solid border px-4
                                            bg-gradient-to-br from-green-100 to-blue-200 pb-2"
                            >      
                                <div>
                                    <h2 className="text-green-500 font-bold text-2xl">
                                        Contato especializado:
                                    </h2>
                                </div>
                                <div className="flex flex-wrap justify-center">
                                    <div className="mt-4 pt-6 pr-2 border-solid border-gray-200 border 
                                                    flex items-start rounded-2xl mx-2 md:mr-4 md:ml-0">
                                        <div className="-mt-6 pr-2">
                                        <img
                                            src={phoneImg}
                                            alt=""
                                            className="w-12 h-12 md:w-16 md:h-16 max-w-full h-auto text-green-500"
                                        />
                                        </div>
                                        <div>
                                        <h3 className="text-green-800 text-base md:text-2xl">
                                            (18)3000-0000 
                                        </h3>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-6 pr-2 border-solid border-gray-200 border 
                                                    flex items-start rounded-2xl mx-2 md:ml-4 md:mr-0">
                                        <div className="-mt-6 pr-2">
                                        <img
                                            src={whats}
                                            alt=""
                                            className="w-12 h-12 md:w-16 md:h-16 max-w-full h-auto"
                                        />
                                        </div>
                                        <div>
                                        <h3 className="text-green-800 text-base md:text-2xl">
                                            (18)99899-9999 
                                        </h3>
                                        </div>
                                    </div>
                                            {
                                            /*
                                            testando dados
                                            <div>
                                                <h2>Stored Form Data</h2>
                                                <ul>
                                                    {formArray.map((formData, index) => (
                                                    <li key={index}>
                                                        <strong>Name:</strong> {formData.name} <br />
                                                        <strong>Email:</strong> {formData.email} <br />
                                                        <strong>Phone:</strong> {formData.phone} <br />
                                                        <strong>Text:</strong> {formData.text} <br />
                                                        <hr />
                                                    </li>
                                                    ))}
                                                </ul>
                                            </div> 
                                            */
                                            }                                                                       
                                </div>                              
                            </div>
                        </div>
                        
                    </div>  
                </div>
            </div>            
            <BottomInfo />   
        </>
    )    
}
export default Assistencia