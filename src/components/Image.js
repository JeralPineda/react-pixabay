import React from 'react';

const Image = ({ imagen }) => {
   const { largeImageURL, likes, previewURL, tags, views } = imagen;

   return (
      <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-5'>
         <div className='card'>
            <img
               //
               className='card-img-top'
               src={previewURL}
               alt={tags}
            />
         </div>
      </div>
   );
};

export default Image;
