import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utility/AddToDb.js";


const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const {
    review,
    image,
    bookName,
    author,
    tags,
    publisher,
    category,
    yearOfPublishing,
    totalPages,
    rating,
  } = book;
  console.log(book);
  const handleMarkAsRead = (id) =>{
          console.log('handle mark as read clicked');
          addToStoredReadList(id);
  }
  const handleWishLish = ()=>{
      addToStoredWishList(id);
  }
  return (
    <div className="hero bg-base-200 min-h-screen font-sans">
      <div className="grid gap-6 py-3 mx-auto px-2 sm:grid-cols-1 md:grid-cols-2">
        <div className="sm:h-[150px]">
          <img
            className="w-full  rounded-xl py-1 h-[580px] "
            src={image}
            alt=""
          />
        </div>
        <div className="">
          <p className="text-xl font-extrabold pt-3">{bookName}</p>
          <p className="text-sm text-[#7a7a7a] font-semibold py-3">
            By: {author}
          </p>
          <hr className=" border-t-2 border-[#f0dbdb]" />
          <p className="text-[1rem] py-3">{category}</p>
          <hr className=" border-t-2 border-[#f0dbdb]" />
          <div className="py-3">
            <span className="font-bold pr-1">Review:</span>
            <span className="text-xs text-[#7a7a7a]">{review}</span>
          </div>
          <div className="tags flex justify-start gap-10 my-2 mx-auto items-center">
            <p className="text-[1.2rem] font-bold">Tags:</p>
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs border-none text-[#23BE0A] bg-[#dae6d7] rounded-xl py-[6px] px-2"
              >
                #{tag}
              </button>
            ))}
          </div>
          <hr className=" border-t-2 border-[#f0dbdb] py-1" />
          <div>
            <span className="text-[#7a7a7a]">Number of Pages:</span>
            <span className="font-bold pl-16">{totalPages}</span>
          </div>
          <div>
            <span className="text-[#7a7a7a]">Publisher:</span>
            <span className="font-bold pl-30 items-end">{publisher} </span>
          </div>
          <div>
            <span className="text-[#7a7a7a]">Year of publishing:</span>
            <span className="font-bold pl-14">{yearOfPublishing}</span>
          </div>
          <div>
            <span className="text-[#7a7a7a]">Rating:</span>
            <span className="font-bold pl-35">{rating}</span>
          </div>
          <div className="flex gap-4 pt-14 mx-auto justify-center">
            <button onClick={()=>handleMarkAsRead(id)} className="btn bg-[#13cb87]  text-white px-2">Mark as Read</button>
            <button onClick={()=> handleWishLish(id)} className="btn bg-[#13cb87]  text-white px-2">
              Add to WishList
            </button>
            <button className="btn bg-[#13cb87]  text-white px-2"><Link to="/">Go Back</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
