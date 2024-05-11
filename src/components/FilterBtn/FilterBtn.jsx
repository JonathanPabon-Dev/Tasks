import PropTypes from 'prop-types';

const FilterBtn = ({ selected = false, text = 'Clic me' }) => {
  return (
    <>
      <button
        type="button"
        className={`btn ${selected ? 'btn-primary' : 'btn-secondary'}`}
      >
        {text}
      </button>
    </>
  );
};

FilterBtn.propTypes = {
  selected: PropTypes.bool,
  text: PropTypes.string,
};
export default FilterBtn;
