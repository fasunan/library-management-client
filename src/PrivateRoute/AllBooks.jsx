import { Link, useLoaderData } from "react-router-dom";

const AllBooks = () => {
  const loadedBooks = useLoaderData();

  return (
    <div>
      <h2>books coming: {loadedBooks.length}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 ">
        {loadedBooks.map((books) => (
          <div key={books._id}>
            <div className="card">
              <figure className="px-10 pt-10">
                <img src={books.image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{books.name}</h2>
                <p>{books.authorName}</p>
                <p>{books.category}</p>
                <div className="card-actions">
                  <Link to={`/seeDetails/${books._id}`}>
                    <button className="btn btn-primary">See Details</button>
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
