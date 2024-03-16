import PropTypes from 'prop-types';

const SingleFood = ({product}) => {
    console.log(product);
    return (
        <div>
            
          <div className='rounded-2xl border border-solid border-[#28282833] w-[380px] p-6'>
            <img className='mb-6' src="/public/Images/Rectangle 20170.png" alt="" />
            <p className='mb-4'>{product.recipe_name}</p>
            <p className='mb-10'>{product.short_description}</p>
            <div className='bg-[#2828281A] h-[1px] w-[330px]'>

            </div>
            <p className='mb-1'>ingredients: {product.ingredients.length}</p>
            <p className='mb-4'>{product.ingredients}</p>
            <div className='bg-[#2828281A] h-[1px] w-[330px] mb-6'>

            </div>
            <div className='flex gap-3 mb-6'>
              <div className='flex'>
                <img src="/public/Images/Clock.png" alt="" />
                <p>{product.preparing_time}</p>
              </div>
              <div className='flex'>
                <img src="/public/Images/Fire.png" alt="" />
                <p>{product.calories}</p>
              </div>
            </div>

            <button className="btn btn-success">Success</button>


          </div>

      
      
        </div>
    );
};

SingleFood.propTypes = {
    product:PropTypes.object
}

export default SingleFood;