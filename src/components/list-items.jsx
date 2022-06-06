import { getStorage, ref, listAll } from "firebase/storage";
import { storage } from "./firebase";
import { useState, } from "react";
import Download from "./download";

const ListItems = () => {

    const [items, setItems] = useState([[]])

    const [names, setNames] = useState([]);

    

 const listRef = ref(storage, 'files');
 

 const itemsList = () => {
    listAll(listRef)
    .then((res) => {
        const theList = res.items.map((itemRef) => itemRef.name)

        setItems(theList);
            
        
        })


        

        

    };

 

    return (
        <div>

            <button onClick={itemsList}>list items</button>
            {items.map((l) => {
                return(
                    <div>
                        <ul>
                    <li>{l} <button>download</button></li> 
                    </ul>
                    
                    </div>
                )
            })}
            
            
            <Download />
            
            
        </div>
    )
}

export default ListItems;