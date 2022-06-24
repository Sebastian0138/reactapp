import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState(["One punch"])

    const onInputChange = ({target})=>{
        setInputValue(target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
        if(inputValue.trim().length<=1){
          return;
        }
       
        onNewCategory(inputValue.trim())
        setInputValue("");
        
    }

  return (
    <form onSubmit={ onSubmit }>
  <input
  
  type="text"
  placeholder="Buscar gifs"
  value={inputValue}

  onChange={(e)=>onInputChange(e)}
/>
  </form>
  
  )
}
