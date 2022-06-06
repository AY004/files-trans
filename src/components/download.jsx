import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { useState } from "react";




const Download = () => {

    const [urlLink, setUrlLink] = useState('');

    const starsRef = ref(storage, 'files/file1 (4).JPG');
    
    const downlaod = () => {
        getDownloadURL(starsRef)
        .then((url) => {
            setUrlLink(url)
            

            fetch(url).then((data) => {
                console.log(data)
            }).catch((err) => {
                console.log(err)
            })
            
        }).catch((err) => {
            console.log(err)
        })
        
        
    }


    return (
        
        <div>
            <button onClick={downlaod}>Download</button>
            <ul>
                <li><img className="img-id" src={urlLink} alt="link" /></li>
            </ul>

        </div>

    )




}


export default Download;