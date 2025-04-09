import imageShow from "./imageShow"
import './ImageList.css'
import imageList from "./imageList"

const imageList = ({images}) => { 
    const renderImage = images.map({image}) => { 
        return <imageShow key={Image.id} image= {image} />
    })
    return( 
        <div className="image-list">
            {renderImage}
 
        </div>
    )
}
 export default imageList
