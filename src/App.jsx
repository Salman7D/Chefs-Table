import { useEffect } from 'react'
import './App.css'
import Banner from './assets/Components/Banner/Banner'
import Header from './assets/Components/Header/Header'
import Our from './assets/Components/Our/Our'
import { useState } from 'react'
import SingleFood from './assets/Components/SingleFood/SingleFood'

function App() {

  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch("./chefs.json")
    .then(res => res.json())
    .then(data => {
      setProducts(data);
    });
  },[]);
  // console.log(products);
  

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Our></Our>

      <div className='main-container flex justify-around'>
        <div className='cards-container grid grid-cols-2 gap-6'>
          {
            products.map(pd => <SingleFood key={pd.recipe_id} product={pd}></SingleFood>)
          }
        
        </div>



        <div className='cart-container'>

        </div>
      </div>
        
        
        
      


      
    </>
  )
}

export default App
