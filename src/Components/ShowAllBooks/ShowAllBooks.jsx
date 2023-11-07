import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";


const ShowAllBooks = () => {
    const showAllBooks = useLoaderData();
    const {user} =useContext(AuthContext);
    console.log(user)

    return (
        <div>
            <h2>all books :{showAllBooks.length}</h2>
           <div className="grid grid-cols-1 lg:grid-cols-4">
           {
                showAllBooks.map(allBook => <div key={allBook._id}>
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
                                    <Link to={`/update/${allBook._id}`}>
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