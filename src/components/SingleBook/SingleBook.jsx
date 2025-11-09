import React from 'react';
import ratingImg from '../../assets/star.png'
import { Link } from 'react-router-dom';
const SingleBook = ({book}) => {
          const {image,author,bookName,category,rating,tags,bookId}=book;
          return (
                    <Link to={`/books/${bookId}`}>
                          <div className='bg-[#ffffff] border-2 border-[#F3F3F3] my-6 w-96 p-1 mx-auto rounded-2xl'>
                              
                              <div className='mx-auto  rounded-2xl p-4 mb-4 '>
                                       <div className=' py-8 rounded-xl bg-[#eaeaea]'>
                                         <img className='block w-[150px] h-[200px] mx-auto rounded-2xl  ' src={image} alt="" />
                                       </div>
                                        <div className='tags flex justify-between gap-10 my-2 mx-auto'>                                      
                                            {
                                              tags.map((tag,index) => <button key={index} className='btn btn-xs border-none text-[#23BE0A] bg-[#F4FBF2] rounded-xl py-[4px] px-3'>{tag}</button>)
                                            }
                                      </div>
                              <p className='text-[1.2rem] font-bold '> {bookName}</p>
                              <p className='text-sm text-[#7a7a7a] font-semibold'>By : {author}</p>
                              </div>
                              <hr className='mx-4 border-t-2 border-dashed'/>
                              <div className='flex justify-between px-3 font-semibold py-2 flex-grow'>
                                        <p>{category} </p>
                                        <div className='flex gap-2 items-center'>
                                          <p>{rating}</p>
                                          <img className='w-4 h-4' src={ratingImg} alt="" />
                                        </div>
                              </div>

                    </div>
                    </Link>
          );
};

export default SingleBook;