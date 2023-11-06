import { useLoaderData } from "react-router-dom";

const AllBooks = () => {
  const loadedBooks = useLoaderData();

  return (
    <div>
      <h2>books coming: {loadedBooks.length}</h2>
    </div>
  );
};

export default AllBooks;
