export const format = (value) => {
    let formattedValue
  
    formattedValue = value.replace(',', '.')
    formattedValue = Number(formattedValue.split('$')[1].trim())
  
 
  
    return formattedValue
  }
  

  
  
 
  
