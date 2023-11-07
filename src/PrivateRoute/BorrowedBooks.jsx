import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProviders";

const BorrowedBooks = () => {
    const borrowedBooks = useLoaderData();
    console.log(borrowedBooks);
    const [borrowedBook, setBorrowedBook]=useState(borrowedBooks)
const {user}= useContext(AuthContext);
const userBorrowedBooks = borrowedBook.filter(book => book.email === user?.email);


    const handleReturnBook=(id)=>{
        Swal.fire({
            title: 'Are you finished Reading?',
            text: "You Want to return this book!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Return it!'
        })
        .then(result=>{
            if(result.isConfirmed){
                console.log('returned')
                fetch(`http://localhost:5000/seeDetails/${id}`, {
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Return!',
                                'Book has been Returned.',
                                'success'
                            )
                            const remainingBorrowedBook = borrowedBook.filter(BBook => BBook._id !== id);
                            setBorrowedBook(remainingBorrowedBook)
                        }
                    })
            }
        })

    }
   
    return (
        <div>
            <h2>Total Borrowed book: {userBorrowedBooks.length}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 p-14 font-semibold">
                {
                    userBorrowedBooks.map(borrowed => <div key={borrowed.id}>
                        <div>
                            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                                <figure><img className="w-44 h-48" src={borrowed.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Book Name: {borrowed.name}</h2>
                                    <p>Category: {borrowed.category}</p>
                                    <p>Issue Date: {borrowed.issueDate}</p>
                                    <p>Return Date: {borrowed.returnDate}</p>
                                    <div className="card-actions">
                                        
                                        <button onClick={()=>handleReturnBook(borrowed._id)} className="btn border-none bg-indigo-300 shadow-lg text-base text-red-700">Return Book</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;