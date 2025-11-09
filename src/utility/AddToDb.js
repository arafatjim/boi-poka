import { toast } from "react-toastify";

const getStoredReadList= ()=>{
          const storedListString=localStorage.getItem("readlist");
          if(storedListString){
                    return JSON.parse(storedListString)
          }
          else{
                    return []
          }
          
}

const addToStoredReadList = (id) => {
          const storedList = getStoredReadList();
          if(storedList.includes(id)){
                    toast('You have already read this book')
          }
          else{
                    storedList.push(id);
                    const storedListSting = JSON.stringify(storedList);
                    localStorage.setItem("readlist",storedListSting)
          }
}
const getStoredWishList= ()=>{
          const storedListString=localStorage.getItem("wishlist");
          if(storedListString){
                    return JSON.parse(storedListString)
          }
          else{
                    return []
          }
          
}

const addToStoredWishList = (id) => {
          const storedList = getStoredWishList();
          if(storedList.includes(id)){
                    toast('You have already read this book');
          }
          else{
                    storedList.push(id);
                    const storedListSting = JSON.stringify(storedList);
                    localStorage.setItem("wishlist",storedListSting)
          }
}

export {addToStoredReadList,addToStoredWishList,getStoredReadList,getStoredWishList};
