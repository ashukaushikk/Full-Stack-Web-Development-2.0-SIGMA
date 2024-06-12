import ListOfImages from "../ListOfImages";
import Search from "../Search"

function Category() {
  return (
    <div className="photo_wrapper flex flex-col h-full gap-4 justify-between items-center">
      <Search />
      <ListOfImages/>
    </div>
  );
}

export default Category