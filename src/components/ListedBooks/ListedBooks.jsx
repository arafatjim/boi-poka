import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/AddToDb";
import SingleBook from "../SingleBook/SingleBook";
import sortBy from "sort-by";

// import Books from "../Books/Books";
const ListedBooks = () => {
          const [readList,setReadList]=useState([]);
          // const [WishList,setWishList]=useState([]);
          const [sort,setSort]=useState('');
          const allBooks= useLoaderData();
          useEffect(() => {
                    const storedReadList = getStoredReadList();
                    const storedReadListInt = storedReadList.map(id=> parseInt(id))
                    // console.log(storedReadList, 'stored list integer ', storedReadListInt, allBooks);
                    const readBookList = allBooks.filter(book  => storedReadListInt.includes(book.bookId));
                    setReadList(readBookList);
          }, [allBooks]);


const handlesSortList = sortType => {
                    setSort(sortType);
                    if(sortType === 'NoOfPages'){
                              const sortedReadList = [...readList].sort((a,b)=> a.totalPages - b.totalPages);
                              console.log('sorted read list :' ,sortedReadList);
                              setReadList(sortedReadList);
                              
          }
          else if(sortType === 'Ratings'){
                    const sortedReadList = [...readList].sort((a,b)=>a.rating - b.rating);
                    setReadList(sortedReadList);
          }
          
}
  return (
    <div>
<div className="dropdown dropdown-center flex mx-auto py-8 items-center justify-center text-center ">
  <div tabIndex={0} role="button" className="btn mt-1 bg-[#13cb87] ">
          {
                    sort ? `Sort By :${sort}` : 'Sorted By ⬇️'
          }
          </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 mt-36 shadow-sm">
    <li><a onClick={()=>handlesSortList('Ratings')}>Ratings</a></li>
    <li ><a onClick={()=>handlesSortList('NoOfPages')}>No. of pages </a></li>
  </ul>
</div>


      <Tabs>
        <TabList className='bg-[#00afe4]'>
          <Tab>Read Books</Tab>
          <Tab>WishList Books</Tab>
        </TabList>
      

        <TabPanel className='bg-[#081d5d]'>
          <h1 className="text-2xl font-bold text-center items-center text-white pt-3">Listed of books : {readList.length}</h1>
          <div className="w-full grid  justify-around gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
                    {
                              readList.map((book,index) =><SingleBook  book={book} key={index}></SingleBook> )
                    }
          </div>
        </TabPanel>
        <TabPanel>
          <h2>wish Listed book</h2>
        </TabPanel>
      </Tabs>
      
    </div>
  );

};

export default ListedBooks;
