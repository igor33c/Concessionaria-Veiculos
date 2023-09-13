function FormattedPhone(value){  
    const phone = value.replace(/\D/g, "")
    const limitPhone = phone.slice(0, 11)//limitando
    //formatar
    const formattedPhone = 
    `(${limitPhone.substring(0, 2)})${limitPhone.substring(2, 7)}-${limitPhone.substring(7)}`
    return formattedPhone   
}

export default FormattedPhone