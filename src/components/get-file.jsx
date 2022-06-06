import { getStorage, ref, getDownloadURL } from "firebase/storage";



const GetFile = () => {

    const storage = getStorage();

    const theFile = () => {
        getDownloadURL(ref(storage, 'files/App.css'))
        .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
        const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
        })
        
    }

    return (
        <div>
            <button onClick={theFile}>download</button>
        </div>
    )

        
    
    
}


export default GetFile;