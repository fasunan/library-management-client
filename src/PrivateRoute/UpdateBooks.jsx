import Swal from "sweetalert2";

import { useLoaderData } from "react-router-dom";


const UpdateBooks = () => {
  const updateBooksData = useLoaderData();
  console.log(updateBooksData);
  const { name, image, authorName, category, rating, _id, photo} = updateBooksData;
  console.log(photo);


  const handleUpdateBooks = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
  
    const authorName = form.authorName.value;
    const category = form.category.value;
    const rating = form.rating.value;

    const updateBook = {
      name,
      image,
      authorName,
      category,
      rating,
    };
    console.log(updateBook);

    // send add books data to server

    fetch(`http://localhost:5000/booksId/${_id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateBook)
    })
      .then(res => res.json())
      .then(data => {

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Book Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          // Clear the form fields
          form.reset();
        
        }
      })
  };

  return (
    <div>
      <div className="m-10 ">
        <h1 className="text-3xl font-bold text-center">Update this Book!!</h1>
        <p className="text-lg text-center">
          Update the details below and share the joy of reading with others!
        </p>
      </div>
      <div>
        <div className=" ">
          <form onSubmit={handleUpdateBooks}>
            {/* form name and quantity row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pl-10">
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">Name</h2>
                <input
                  defaultValue={name}
                  type="text"
                  name="name"
                  placeholder="Books Name"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">
                  Image URl
                </h2>
                <input
                  defaultValue={image}
                  type="Photo"
                  name="image"
                  placeholder="Image URL"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">
                  Books Category
                </h2>
                <select
                  defaultValue={category}
                  className="select select-success w-full max-w-xs input"
                  type="text"
                  name="category"
                >
                  <option disabled selected>
                    Category Name
                  </option>
                  <option>Religion</option>
                  <option>Science Fiction</option>
                  <option>History</option>
                  <option>Biographic</option>
                  <option>Comics</option>
                  <option>Cooking</option>
                </select>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">
                  Author Name
                </h2>
                <input
                  defaultValue={authorName}
                  type="text"
                  name="authorName"
                  required
                  placeholder="Author Name"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">Rating</h2>
                <input
                  defaultValue={rating}
                  type="text"
                  name="rating"
                  required
                  placeholder="Rating"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>

              <input
                type="submit"
                value="Submit Update"
                className="btn mt-6 w-60  bg-indigo-200 text-sky-700"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBooks;