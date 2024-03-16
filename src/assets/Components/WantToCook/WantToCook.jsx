import PropTypes from 'prop-types';

const WantToCook = ({cart}) => {
    return (
        <div>
            <p className='text-[#282828] text-2xl font-semibold'>Want To Cook: {cart.length}</p>
        </div>
    );
};

WantToCook.propTypes = {
    cart:PropTypes.array
}

export default WantToCook;