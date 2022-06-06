import './upload.css'
import { storage } from "./firebase";
import {ref, uploadBytesResumable} from 'firebase/storage'
import Download from './download';
import ListItems from './list-items';
import GetFile from './get-file';

const Upload = () => {

    const uploadFunc = (e) => {
        let file = e.target.files[0];

        let fileRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(fileRef, file)

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`upload is ${progress} % done`);
        })

    }
    return (
        <div className="upload">
            <h1>upload something</h1>
            <input type="file"  onChange={uploadFunc}/>

            
            <Download />
            
            
        </div>
        
    )
}

export default Upload;