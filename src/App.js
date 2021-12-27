import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';

function App() {
   // State de la app
   const [busqueda, setBusqueda] = useState('');

   useEffect(() => {
      const consultarApi = async () => {
         if (busqueda === '') return;

         const imagenesPorPagina = 30;
         const key = process.env.REACT_APP_API_KEY;

         const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

         //    &page=${paginaactual}

         const respuesta = await fetch(url);
         const resultado = await respuesta.json();

         // Guardamos el resultado en el estado
         setBusqueda(resultado.hits);
      };
      consultarApi();
   }, [busqueda]);

   return (
      <div className='content'>
         <div className='jumbotron'>
            <p className='lead text-center'>Buscador de Imágenes</p>

            <Formulario setBusqueda={setBusqueda} />
         </div>
      </div>
   );
}

export default App;
