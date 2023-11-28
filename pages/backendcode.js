import { useState , useEffect } from "react";
import axios from "axios";

function Backend(){
    const [file,setFile] = useState()
    const [image, setImage] = useState()
    // console.log(image)

    const handleUpload = (e) =>{
        // console.log(file)
        const formdata = new FormData()
        formdata.append('file',file)
        axios.post("http://localhost:5000/uploadimage", formdata)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        axios.get("http://localhost:5000/getimage")
        .then(res => setImage(res.data[0].image))
        .catch(err => console.log(err))
    },[])

    return(
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
            <br/>
           
        </div>

    )
}
export default Backend;