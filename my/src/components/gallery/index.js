import './style.css';
import GalleryItemComponent from './galleryItem';

const dataSet = [
 {
  title: 'title 1',
  imageSrc: './images/colors-1383652.jpg'
 },
 {
  title: 'title 2',
  imageSrc: './images/forest-1400475.jpg'
 },
 {
  title: 'title 3',
  imageSrc: './images/smoky-mountains-at-sunset-north-carolina-2152413.jpg'
 },
];

const GalleryComponent = () => {
 return (
  <div className='gallery'>
   {/* <GalleryItemComponent title='title 1' imageSrc='./images/colors-1383652.jpg' />
   <GalleryItemComponent imageSrc='./images/forest-1400475.jpg' title='title 2' />
   <GalleryItemComponent imageSrc='./images/smoky-mountains-at-sunset-north-carolina-2152413.jpg' title='title 3' /> */}

   {
    dataSet.map(el => {
     return (<GalleryItemComponent title={el.title} imageSrc={el.imageSrc} />);
    })
   }
  </div>
 );
};

export default GalleryComponent;