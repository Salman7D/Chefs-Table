import PropTypes from 'prop-types';

const Cooking = ({cooking}) => {
    return (
        <div>
            <p>Currently Cooking: {cooking.length}</p>
        </div>
    );
};

Cooking.propTypes = {
    cooking:PropTypes.array
}
export default Cooking;