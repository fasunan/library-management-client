
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const ShowAllBooks = () => {
    const showAllBooks = useLoaderData();
    const [availableBook, setAvailableBook]=useState(false);

    const handleFilterBook= ()=>{
        setAvailableBook(!availableBook);
    }

    const filteredBooks= availableBook ? showAllBooks.filter((book)=>book.quantity > 0) : showAllBooks;

    return (
        <div>
            <h2>all books :{filteredBooks.length}</h2>
            <button onClick={handleFilterBook}>
        {availableBook ? 'Show All Books' : 'Show Available Books'}
      </button>
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
                                        <button className="btn btn-primary">Update</button>
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