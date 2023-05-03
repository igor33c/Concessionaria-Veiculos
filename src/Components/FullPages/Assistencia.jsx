import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";
import { useState } from "react";

function Assistencia() {
    const [phone, setPhone] = useState('');
  
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
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="px-4 py-8 bg-gradient-to-br from-green-50 to-blue-100 ">
                <h1 className="justif-center items-center text-center text-blue-500 font-bold text-5xl">
                    Assistencia Técnica
                </h1>
                <div className="px-4 py-8">
                    <div className="pt-8">
                        <h2 className="text-red-500 font-bold text-2xl">
                            Preencha o Formulário abaixo:
                        </h2>
                    </div>
                    <div>
                        <form>
                            <div className="py-1">
                                <label >
                                    Seu Nome:
                                    <div>
                                        <input
                                            name="isGoing"
                                            type="text"
                                        />
                                    </div>
                                </label>
                            </div>
                            <div className="py-1 flex">   
                                <label 
                                    for="email">
                                    Seu e-mail:
                                    <div className="">
                                        <input                                    
                                            type="email"
                                            id="email"
                                            name="email"
                                        />
                                    </div> 
                                </label>
                            </div> 
                            <div className="py-1">
                                <label for="tel">
                                    Seu Celular:
                                    <div>
                                        <input
                                            className="px-1" 
                                            type="tel" 
                                            id="phone" 
                                            name="phone" 
                                            value={phone} 
                                            onChange={handleChange} 
                                            pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}" 
                                            required 
                                        />
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>    
        </div>
    )    
}

export default Assistencia