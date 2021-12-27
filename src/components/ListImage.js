import Image from './Image';

const ListImage = ({ images }) => {
   return (
      <div className='col-12 p-5 row'>
         {images.map((imagen) => (
            <Image key={imagen.id} imagen={imagen} />
         ))}
      </div>
   );
};

export default ListImage;
