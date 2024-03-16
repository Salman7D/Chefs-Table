import PropTypes from 'prop-types';

const Cooking = ({cooking}) => {
    return (
        <div>
            <p className='text-[#282828] text-2xl font-semibold'>Currently Cooking: {cooking.length}</p>
        </div>
    );
};

Cooking.propTypes = {
    cooking:PropTypes.array
}
export default Cooking;