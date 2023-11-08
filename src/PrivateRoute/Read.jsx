import { useLoaderData } from "react-router-dom";


const Read = () => {
    const readingBook = useLoaderData();
    // console.log(readingBook);
    const { name, photo } = readingBook;
    // console.log(name, photo);
    return (
        <div>

            <h2 className="text-4xl text-center p-5 font-bold text-green-400">Read some content of {name}</h2>
            <div className="card m-10 bg-base-100 shadow-xl">
                <figure><img className="" src={photo} alt="Album" /></figure>
            </div>
        </div>
    );
};

export default Read;