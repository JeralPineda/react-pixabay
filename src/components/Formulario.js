import { useState } from 'react';

import Error from './Error';

const Formulario = ({ setBusqueda }) => {
   const [termino, setTermino] = useState('');
   const [error, setError] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();

      // Validar el formulario
      if (termino.trim() === '') {
         setError(true);
         return;
      }

      setError(false);

      // Enviar el termino de busqueda al componente principal
      setBusqueda(termino);
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className='row'>
            <div className='form-group col-md-8'>
               <input
                  //
                  type='text'
                  className='form-control form-control-lg'
                  placeholder='Busca una imagen'
                  onChange={(e) => setTermino(e.target.value)}
               />
            </div>

            <div className='form-group col-md-4'>
               <button
                  //
                  type='submit'
                  className='btn btn-lg btn-secondary btn-block'
               >
                  Buscar
               </button>
            </div>
         </div>

         {error ? <Error mensaje='Agrega un termino de búsqueda' /> : null}
      </form>
   );
};

export default Formulario;
