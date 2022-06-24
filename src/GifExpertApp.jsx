
import { useState } from 'react'
import { AddCategory,GifGrid } from './components'


export const GifExpertApp = () => {
  
  const hola=()=>{
    console.log("me llamo raul");
  }
  const [categories, setCategories] = useState(["One Punch"])
  
  const onAddCategory=(newCategory) =>{


    if(categories.includes(newCategory)){
      return;
    }
setCategories([newCategory,...categories])


  }
    return (
    <>
    {/* titulo */}


    <h1>hola asd</h1>


    {/* input */}
    <AddCategory 
    //setCategories={setCategories}
    
    onNewCategory={e=>onAddCategory(e)}
    
    
    />




{/* listado de gif */}

{/* <button onClick={onAddCategory}>Agregar</button> */}
<ol>
        {categories.map(category =>

          <GifGrid key={category} 
          category={category}/>
          

        )
        
        
        
        }
       
        
</ol>

{/* gif  */}



    </>
  )
}
