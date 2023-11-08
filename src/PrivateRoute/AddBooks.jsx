import Swal from "sweetalert2";

const AddBooks = () => {
  const handleAdaBooks = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const authorName = form.authorName.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const details = form.details.value;
    const quantity = form.quantity.value;

    const allBooks = {
      name,
      image,
      authorName,
      category,
      rating,
      details,
      quantity,
    };
    console.log(allBooks);

    // send add books data to server

    fetch("https://b8a11-server-side-fasunan.vercel.app/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allBooks),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Book Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <div>
      <div className="m-10 ">
        <h1 className="text-3xl font-bold text-center">Add a New Book</h1>
        <p className="text-lg text-center">
          Help us enrich our library by contributing a new book to our
          collection. <br />
          Fill in the details below and share the joy of reading with others!
        </p>
      </div>
      <div>
        <div className=" ">
          <form onSubmit={handleAdaBooks}>
            {/* form name and quantity row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pl-10">
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">Name</h2>
                <input
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
                  type="text"
                  name="rating"
                  required
                  placeholder="Rating"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">
                  Short description
                </h2>
                <input
                  type="text"
                  name="details"
                  required
                  placeholder="Short description"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">
                  Quantity of the book
                </h2>
                <input
                  type="text"
                  name="quantity"
                  required
                  placeholder="Quantity"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <input
                type="submit"
                value="Add Book"
                className="btn mt-6 w-60  bg-indigo-200 text-sky-700"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
