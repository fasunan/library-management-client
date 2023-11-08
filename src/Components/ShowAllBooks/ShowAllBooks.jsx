
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const ShowAllBooks = () => {
    const showAllBooks = useLoaderData();
    const [availableBook, setAvailableBook] = useState(false);

    const handleFilterBook = () => {
        setAvailableBook(!availableBook);
    }

    const filteredBooks = availableBook ? showAllBooks.filter((book) => book.quantity > 0) : showAllBooks;

    return (
        <div>
            <h2 className="text-center text-rose-600 font-bold text-4xl mt-10"> All Books Of Our Library</h2>
            <div className="flex items-center justify-center">

                <h3 className="text-center font-bold text-xl">Want to Show</h3>
                <button className="btn btn-ghost text-lg text-blue-500" onClick={handleFilterBook}>
                    {availableBook ? 'All Books' : ' Available Books'}
                </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                {
                    filteredBooks.map(allBook => <div key={allBook._id}>
                        <div key={allBook._id}>
                            <div className="card">
                                <figure className="px-10 pt-10">
                                    <img src={allBook.image} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{allBook.name}</h2>
                                    <p>{allBook.authorName}</p>
                                    <p>{allBook.category}</p>
                                    <div className="card-actions">
                                        <Link to={`/updateBooks/${allBook._id}`}>
                                            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                                Update
                                            </button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ShowAllBooks;