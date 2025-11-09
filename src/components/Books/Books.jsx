import React, { useEffect, useState } from 'react';
import SingleBook from '../SingleBook/SingleBook';
import bookJson from '../../../public/booksData.json'
const Books = () => {
          const [books, setBooks]=useState([]);
          useEffect(()=>{
                  setBooks(bookJson);
          },[]);
          
          return (
                    <div className='bg-base-200 mx-auto items-center rounded-2xl max-w-7xl my-3'>
                              <h1 className='text-center text-5xl pt-4 font-extrabold text-[#0dad35]'>Books: { books.length} </h1>
                              <div className='grid gap-4 justify-center mx-auto md:grid-cols-2 lg:grid-cols-3'>
                                        {
                                           books.map((book, index)=> <SingleBook book={book} key={index}></SingleBook>)       
                                        }
                              </div>
                    </div>
          );
};

export default Books;
