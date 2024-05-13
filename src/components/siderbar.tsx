
import menina from '../assets/menina.jpg'

export function SiderBar(){
  return(
    <section className="bg-gray2 text-gray4 col-span-2 border-4 border-slate-800 rounded-md p-4 mx-4 w-auto">

    <div className='flex justify-between items-center p-2'>
         <div className='flex gap-4 items-center'>
         <img src={menina} className='h-16 w-16  border-2 rounded border-emerald-800 '/>
           <div className='flex flex-col  '>
             <strong className='text-white'>saimon brito</strong>
             <span> Dev full Stack</span>
           </div>
         </div>
         <p>Publicado ha 1h </p>
    </div>

   <h3 className='py-2'>Fala galera</h3>

   <p className='pb-6'>acabei de colocar mais um projeto no github . Mais um pojeto massa vai show bora conferir  qui em saimon academy</p>
   
   <span>saimon.full Stack/spicktop</span>
   <span>#novo projeto #saimon #saimonAcademy</span>
   <div>
     <h2>deixe su feedback</h2>
     <form action="">
      <textarea name="campo" id="campo" cols="70" rows="5"></textarea>
     </form>
     <button type='submit'>Submit</button>
   </div>

 </section>
  )
}