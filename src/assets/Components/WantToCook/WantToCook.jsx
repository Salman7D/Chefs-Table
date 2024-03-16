import PropTypes from 'prop-types';

const WantToCook = ({cart}) => {
    return (
        <div>
            <p>Want To Cook: {cart.length}</p>
        </div>
    );
};

WantToCook.propTypes = {
    cart:PropTypes.array
}

export default WantToCook;