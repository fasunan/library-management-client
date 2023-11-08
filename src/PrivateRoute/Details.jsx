import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProviders";
import Swal from "sweetalert2";
import Rating from "react-rating";

const Details = () => {
  const { user } = useContext(AuthContext);
  const booksDetails = useLoaderData();
  const [canBorrow, setCanBorrow]=useState(true);
  const [availableQuantity, setAvailableQuantity] = useState(booksDetails.quantity);


  // console.log(booksDetails);
  const { name, image, authorName, category, rating, details, quantity, _id } =
    booksDetails;


  const handleBorrowBook = (e) => {
    e.preventDefault();

    const form = e.target;
    const issueDate = new Date().toLocaleDateString();
    const returnDate = form.date.value;
    const image = booksDetails.image;
    const name = booksDetails.name;
    const category = booksDetails.category;
    const userName = user?.displayName;
    const email = user?.email;
    const borrowInfo = {
      issueDate,
      returnDate,
      userName,
      email,
      name,
      image,
      category
    }
    console.log(borrowInfo)


    // Close the modal after submitting the form
    const modal = document.getElementById('my_modal_3');
    modal.close();

// Update the quantity of the book
     const updatedQuantity = availableQuantity - 1;
    setAvailableQuantity(updatedQuantity);

    if (updatedQuantity === 0) {
      // Disable the 'Borrow' button when the quantity reaches zero
      setCanBorrow(false);
    }


    fetch("http://localhost:5000/seeDetails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(borrowInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Book borrowed Successfully and Added to BorrowedBooks",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  }

  const closeDialog = () => {
    const modal = document.getElementById('my_modal_3');
    modal.close(); // Close the modal when the cross button is clicked
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <h3>
              {authorName}
            </h3>
            <p>Rating: {rating}</p>
            <p>
              <Rating
                initialRating={rating}
                emptySymbol={<span className="text-gray-300">☆</span>}
                fullSymbol={<span className="text-yellow-500">★</span>}
                readonly={true}
              />
            </p>

            <p>Genre: {category}</p>
            <p>Available Quantity: {quantity}</p>
            <p className="py-6">
              {details}
            </p>
            <div>
              <Link to={`/read/${_id}`}>
                <button className="relative w-24 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Read 
                  </span>
                </button></Link>

              <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button onClick={() => document.getElementById('my_modal_3').showModal()} 
                disabled={!canBorrow}
                className="w-24 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Borrow
                  </span>
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form onSubmit={handleBorrowBook} method="dialog">
                      <button onClick={closeDialog} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                      <h3 className="text-xl font-bold text-center text-blue-600 mb-4">Borrow this book!!</h3>
                      <p className="mb-4">Name: {user?.displayName}</p>

                      <p className="mb-4">Email:{user?.email}</p>
                      <div>
                        <h2 className="text-lg font-bold  mb-2">
                          Return Date
                        </h2>
                        <input
                          type="date"
                          name="date"
                          placeholder="Date"
                          className="input input-primary w-full max-w-xs"
                        />
                      </div>
                      <input
                        type="submit"
                        value="Submit"
                        className="btn mt-6 w-full max-w-xs  bg-indigo-200 text-sky-700"
                      />
                    </form>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
