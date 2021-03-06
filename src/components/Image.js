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

            <div className='card-body'>
               <p className='card-text'>{likes} Me Gusta</p>
               <p className='card-text'>{views} Vistas</p>
            </div>

            <div className='card-footer'>
               <a
                  //
                  className='btn btn-outline-secondary btn-block'
                  href={largeImageURL}
                  target='_blank'
                  rel='noopener noreferrer'
               >
                  Ver Imagen
               </a>
            </div>
         </div>
      </div>
   );
};

export default Image;
