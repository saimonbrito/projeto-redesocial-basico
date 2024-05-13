import imgignite from '../assets/ciclistas.jpg'
import menina from '../assets/menina.jpg'


export function Post(){
  return(
    <div>
        <section className=" bg-gray2 pb-6 flex flex-col justify-center items-center overflow-hidden  rounded-md w-72   ">
          <img src={imgignite} className='h-28 w-96 pb-6'/>
          <img src={menina} className='h-20 w-20 -mt-14 border-2 rounded border-emerald-800 '/>
          <div className="flex flex-col  items-center  border-gray-600 border-b-2 pb-6 pt-6">
              <strong>saimon brito</strong>
              <span>desenvolvedor web</span>
          </div>
         <footer className='mb-2 mt-6 border-2 text-green hover:text-white hover:bg-green  border-green-light rounded-lg w-44 h-10 text-center pt-2' >
          <a href="" >
            Editar perfil
          </a>
          </footer>
      </section>  
    </div>
  )
}