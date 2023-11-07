import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
    const borrowedBooks = useLoaderData();
    console.log(borrowedBooks);
    const [borrowedBook, setBorrowedBook]=useState(borrowedBooks)

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
            <h2>Total Borrowed book: {borrowedBook.length}</h2>
            <div>
                {
                    borrowedBook.map(borrowed => <div key={borrowed.id}>
                        <div>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={borrowed.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{borrowed.name}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        
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