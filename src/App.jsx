import { useEffect } from 'react'
import './App.css'
import Banner from './assets/Components/Banner/Banner'
import Header from './assets/Components/Header/Header'
import Our from './assets/Components/Our/Our'
import { useState } from 'react'
import SingleFood from './assets/Components/SingleFood/SingleFood'
import WantToCook from './assets/Components/WantToCook/WantToCook'
import Cooking from './assets/Components/Cooking/Cooking'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

function App() {

  const [products, setProducts] = useState([]); 
  const [cart, setCart] = useState([]);
  const [cooking, setCooking] = useState([]);

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
      toast.error("Already added");
    }
  };


  const handleDelete = (id) => {
    const itemToRemove = cart.find(item => item.recipe_id == id);
    const newCart = cart.filter(item => item.recipe_id != id);
    setCart(newCart);

    setCooking(prevCooking => [...prevCooking, itemToRemove]);
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
          <h3 className='text-center mb-5'><WantToCook cart={cart}></WantToCook> </h3>
          <div className='bg-[#28282826] h-[1px] w-[350px] mb-6 ml-[40px]'>

          </div>
          <div className='flex justify-around mb-6'>
            <p className='text-[#878787] text-base font-medium'>Name</p>
            <p className='text-[#878787] text-base font-medium'>Time</p>
            <p className='text-[#878787] text-base font-medium'>Calories</p>
          </div>

          <div>
            {
              cart.map((item, index) => (
                <div key={item.recipe_id} className='flex justify-around mb-4'>
                   <p className='text-[#282828CC] text-base font-semibold'>{index+1}</p>
                   <p className='text-[#282828B3] text-base font-normal'>{item.recipe_name}</p>
                  <p className='text-[#282828B3] text-base font-normal'>{item.preparing_time}</p>
                  <p className='text-[#282828B3] text-base font-normal'>{item.calories}</p>
                  <button onClick={() => {handleDelete(item.recipe_id)}} className="p-2 rounded-3xl bg-[#0BE58A] text-[#150B2B] text-lg font-medium">Preparing</button>
                  
                </div>
              ))}
          </div>
          
          <div className='currently-cooking'>
            <h3 className='text-center mb-5'><Cooking cooking={cooking}></Cooking></h3>
            <div className='bg-[#28282826] h-[1px] w-[350px] mb-6 ml-[40px]'>

            </div>
            <div className='flex justify-around mb-4'>
              <p className='text-[#878787] text-base font-medium'>Name</p>
              <p className='text-[#878787] text-base font-medium'>Time</p>
              <p className='text-[#878787] text-base font-medium'>Calories</p>
            </div>

            {
              cooking.map((item, index) => (
                <div key={item.recipe_id} className='flex justify-around mb-4'>
                  <p className='text-[#282828CC] text-base font-semibold'>{index+1}</p>
                  <p className='text-[#282828B3] text-base font-normal'>{item.recipe_name}</p>
                  <p className='text-[#282828B3] text-base font-normal'>{item.preparing_time}</p>
                  <p className='text-[#282828B3] text-base font-normal'>{item.calories}</p>
                </div>
              ))
            }
          </div>

        </div>
      </div>
        
        
        
      


      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
