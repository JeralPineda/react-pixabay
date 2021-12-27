const Formulario = () => {
   return (
      <form>
         <div className='row'>
            <div className='form-group col-md-8'>
               <input
                  //
                  type='text'
                  className='form-control form-control-lg'
                  placeholder='Busca una imagen'
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
      </form>
   );
};

export default Formulario;
