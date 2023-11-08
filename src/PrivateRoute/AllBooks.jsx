import { Link, useLoaderData } from "react-router-dom";
import Rating from "react-rating";

const AllBooks = () => {
  const loadedBooks = useLoaderData();

  return (
    <div>
      <h2 className="text-center mt-10 font-bold text-4xl text-blue-600">Books By Category By Selected Category</h2>
      <p className="text-center mt-2 font-bold mb-7">Find your desire Books from the thousands of books, Read, Borrow, and explore</p>
      <div className="grid grid-cols-1 lg:grid-cols-4 ">
        {loadedBooks.map((books) => (
          <div key={books._id}>
            <div className="card">
              <figure className="px-10 pt-10">
                <img src={books.image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{books.name}</h2>
                <p>
              <Rating
                initialRating={books.rating}
                emptySymbol={<span className="text-gray-300">☆</span>}
                fullSymbol={<span className="text-yellow-500">★</span>}
                readonly={true}
              />
            </p>
                <p>Author: {books.authorName}</p>
                <p>Category:{books.category}</p>
                <div className="card-actions">
                  <Link to={`/seeDetails/${books._id}`}>
                  <button className="text-white bg-gradient-to-r from-emerald-400 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        See Details
                      </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
