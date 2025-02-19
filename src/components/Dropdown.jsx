import PropTypes from "prop-types";
const Dropdown = ({ items }) => {
  return (
    <select
      className="bg-transparent text-[#848895] text-[17px] py-2 rounded-lg border-none leading-[27.3px]
    font-normal focus:outline-none"
    >
      {items.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
//  Prop Validation
Dropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Dropdown;
