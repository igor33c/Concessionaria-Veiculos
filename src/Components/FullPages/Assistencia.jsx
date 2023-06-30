import MenuModelos from "../MenuModelos";
import TopInfo from "../TopInfo";
import TopMenu from "../TopMenu";
import { useState } from "react";
import BottomInfo from "../BottomInfo";


function Assistencia() {
    
    const [nome, setNome] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    function handleChangeName(e){
        setNome(e.target.value)
    }
    function handleChangeEmail(e){
        setEmail(e.target.value)
    }
    function handleChangeText(e){
        setText(e.target.value)
    }  

    function handleSubmit(){
        // receberá os dados
        console.log(nome, phone, email, text)
        // {...}
    }

    function formatPhone(value) {
        
      // remover nao numericos
      const phone = value.replace(/\D/g, '');
  
      // verifica se ta vazio ou nao

      if (phone.length === 0) {
        return '';
      }
  
      // formatando para formato cel
      let formattedPhone = phone.substring(0, 11);
      formattedPhone =
      `(${formattedPhone.substring(0, 2)})${formattedPhone.substring(2, 7)}-${formattedPhone.substring(7)}`;
      
      return formattedPhone;
    }  
    function handleChange(e) {
      const formattedPhone = formatPhone(e.target.value);
      setPhone(formattedPhone);
}
    return(
        <>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="px-4 py-8 bg-gradient-to-br from-green-50 to-blue-100 ">
                <h1 className="justif-center items-center text-center text-blue-500 font-bold text-5xl">
                    Assistencia Técnica
                </h1>
                <div className="px-4 py-8">                   
                    <div className="pt-4 py-8">                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="border-gray-200 border-solid border-2 px-4
                                            bg-gradient-to-br from-green-100 to-blue-200"
                            >
                                <h2 className="text-red-500 font-bold text-2xl">
                                    Preencha o Formulário abaixo:
                                </h2>
                                <form>
                                    <div className="py-1">
                                        <label htmlFor="Nome">
                                            Seu Nome:
                                            <div>
                                                <input
                                                    value={nome}
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
                                                    className="px-1" 
                                                    type="tel" 
                                                    id="phone" 
                                                    value={phone}                                            
                                                    onChange={handleChange} 
                                                    pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}" 
                                                    
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
                                                    cols="30" 
                                                    rows="5"
                                                    value={text}
                                                    onChange={handleChangeText}
                                                >
                                                                                                
                                                </textarea>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="py-2">
                                        <button 
                                            className="text-slate-900 bg-blue-200 hover:bg-blue-300 focus:ring-4 
                                                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
                                                        focus:outline-none"                                                
                                            type="submit"
                                            onClick={handleSubmit}
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="border-gray-200 border-solid border-2 px-4
                                            bg-gradient-to-br from-green-100 to-blue-200"
                            >      
                                <div>
                                    <h2>
                                        Contato
                                    </h2>
                                </div>
                                <div>
                                    {
                                        ///...
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