import { useDebouncing } from "../../Hooks/useDebouncing";

// eslint-disable-next-line react/prop-types
function Search({ updateSearchTerm }) {
  const debounceCallBack = useDebouncing((e) => updateSearchTerm(e.target.value));
  return (
    <div className="flex items-center justify-center mt-2">
      <label htmlFor="photoId" className="relative block">
        <input
          type="text"
          id="photoId"
          className="px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer focus:border-indigo-600 bg-inherit"
          onChange={debounceCallBack}
        />
        <span className="absolute left-2 top-3 text-lg uppercase tracking-wide peer-focus:text-indigo-600 peer-focus:bg-white pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 peer-valid:text-sm">
          Enter photo Id
        </span>
      </label>
    </div>
  );
}

export default Search;
