function Search() {
  return (
    <>
      <div className="flex items-center justify-center mt-2">
        <label className="relative">
          <input
            type="text"
            className="px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer focus:border-indigo-600 bg-inherit"
          />
          <span className="absolute left-0 top-3 text-lg uppercase tracking-wide peer-focus:text-indigo-600 peer-focus:bg-white pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 ml-2 peer-valid:text-sm">
            Enter photo Id
          </span>
        </label>
      </div>
    </>
  );
}

export default Search;
