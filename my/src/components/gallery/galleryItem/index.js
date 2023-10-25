import './style.css';
import * as uuid from 'uuid';

/**
 * 
 * @param {Object} props 
 * @param {string} props.title 
 * @param {string} props.imageSrc 
 * @returns 
 */
const GalleryItemComponent = (props) => {
 const radioGroupId = uuid.v1();

 const likeId = `like-${radioGroupId}`;
 const dislikeId = `dislike-${radioGroupId}`;
 const groupId = `group-${radioGroupId}`;
 return (
  <div className='gallery-item'>
   <img src={props.imageSrc} />
   <div className='gallery-title'>title: {props.title}</div>
   <div className='gallery-feedback'>
    <input id={likeId} type='radio' name={groupId} /><label for={likeId}>Like</label>
    <input id={dislikeId} type='radio' name={groupId} /><label for={dislikeId}>Dislike</label>
   </div>
  </div>
 );
};

export default GalleryItemComponent;