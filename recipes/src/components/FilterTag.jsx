import { arrayOf, string, func } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function FilterTag({ value, filterIngredients, setFilterList }) {
  function onClose(ingredient) {
    const idx = filterIngredients.indexOf(ingredient);
    if (idx > -1) {
      let arr = [...filterIngredients];
      arr.splice(idx, 1);
      setFilterList(arr);
    }
  }

  return (
    <button
      className="flex justify-between items-center mx-3 px-2 border-solid border border-black hover:bg-white rounded text-sm"
      type="info"
      onClick={() => onClose(value)}
    >
      <span className="pl-1 pr-5">{value}</span>
      <FontAwesomeIcon className="text-xs" icon={faX} />
    </button>
  );
}

FilterTag.propTypes = {
  value: string.isRequired,
  filterIngredients: arrayOf(string).isRequired,
  setFilterList: func.isRequired,
};

export default FilterTag;
