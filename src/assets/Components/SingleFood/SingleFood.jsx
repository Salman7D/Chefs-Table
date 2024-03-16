import PropTypes from 'prop-types';

const SingleFood = ({product, handleCart}) => {
    // console.log(handleCart);
    return (
        <div>
            
          <div className='rounded-2xl border border-solid border-[#28282833] w-[380px] p-6'>
            <img className='mb-6 rounded-2xl' src={product.recipe_image} alt="" />
            <p className='mb-4 text-[#282828] text-xl font-semibold'>{product.recipe_name}</p>
            <p className='mb-10 text-[#878787] text-base font-normal'>{product.short_description}</p>
            <div className='bg-[#2828281A] h-[1px] w-[330px]'>

            </div>
            <p className='mb-1 text-[#282828] text-lg font-medium'>ingredients: {product.ingredients.length}</p>
            <p className='mb-4 text-[#878787] text-lg font-normal'>{product.ingredients}</p>
            <div className='bg-[#2828281A] h-[1px] w-[330px] mb-6'>

            </div>
            <div className='flex gap-3 mb-6'>
              <div className='flex'>
                <img src="/src/assets/Images/Clock.png" alt="" />
                <p className='text-[#282828CC] text-base font-normal'>{product.preparing_time}</p>
              </div>
              <div className='flex'>
                <img src="/src/assets/Images/Fire.png" alt="" />
                <p className='text-[#282828CC] text-base font-normal'>{product.calories}</p>
              </div>
            </div>

            <button onClick={() => handleCart(product)} className="p-2 rounded-3xl bg-[#0BE58A] text-[#150B2B] text-lg font-medium">Want to Cook</button>


          </div>

      
      
        </div>
    );
};

SingleFood.propTypes = {
    product:PropTypes.object,
    handleCart:PropTypes.func,
    
}

export default SingleFood;