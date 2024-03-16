import { useEffect } from 'react'
import './App.css'
import Banner from './assets/Components/Banner/Banner'
import Header from './assets/Components/Header/Header'
import Our from './assets/Components/Our/Our'
import { useState } from 'react'
import SingleFood from './assets/Components/SingleFood/SingleFood'

function App() {

  const [products, setProducts] = useState([]); 
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./chefs.json")
    .then(res => res.json())
    .then(data => {
      setProducts(data);
    });
  },[]);

  const handleCart = (p) => {
    const isExist = cart.find(item => item.recipe_id === p.recipe_id);
    if(!isExist){
      setCart([...cart,p]);
    }
    else{
      alert("Already added");
    }
  };


  const handleDelete = (id) => {
    const newCart = cart.filter(item => item.recipe_id != id);
    setCart(newCart);
  }








  // console.log(cart);
  

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Our></Our>

      <div className='main-container flex justify-around'>
        <div className='cards-container grid grid-cols-2 gap-6'>
          {
            products.map(pd => <SingleFood key={pd.recipe_id} product={pd} handleCart={handleCart}></SingleFood>)
          }
        
        </div>



        <div className='cart-container border border-solid border-[#28282833] rounded-2xl w-[514px] h-[685px] p-7'>
          <h3 className='ml-[156px] mb-5'>Want to cook: </h3>
          <div className='bg-[#28282826] h-[1px] w-[350px] mb-6 ml-[40px]'>

          </div>
          <div className='flex justify-around mb-4'>
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
          </div>

          <div>
            {
              cart.map((item, index) => (
                <div key={item.recipe_id} className='flex justify-around'>
                   <p>{index+1}</p>
                   <p>{item.recipe_name}</p>
                  <p>{item.preparing_time}</p>
                  <p>{item.calories}</p>
                  <button onClick={() => {handleDelete(item.recipe_id)}} className="btn btn-error">Error</button>
                </div>
              ))}
          </div>

        </div>
      </div>
        
        
        
      


      
    </>
  )
}

export default App
