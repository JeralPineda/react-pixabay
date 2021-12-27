import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import ListImage from './components/ListImage';

function App() {
   // State de la app
   const [busqueda, setBusqueda] = useState('');
   const [images, setImages] = useState([]);

   // State para la paginacion
   const [paginaActual, setPaginaActual] = useState(1);
   const [totalPaginas, setTotalPaginas] = useState(1);

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
         setImages(resultado.hits);

         // Paginacion, Calcular el total de paginas
         const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);

         setTotalPaginas(calcularTotalPaginas);
      };
      consultarApi();
   }, [busqueda]);

   return (
      <div className='content'>
         <div className='jumbotron'>
            <p className='lead text-center'>Buscador de Imágenes</p>

            <Formulario setBusqueda={setBusqueda} />
         </div>

         <div className='row justify-content-center'>
            <ListImage images={images} />
         </div>
      </div>
   );
}

export default App;
