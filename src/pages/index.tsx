import Image from 'next/image'
import { Inter } from 'next/font/google'
import background from '../../public/logopng.png'
import { Roboto } from 'next/font/google'
import back from '../../public/keyboard.jpg'
import backcctv from '../../public/cctv.jpg'
import backcontact from '../../public/hadns.jpg'
import backtienda from '../../public/tienda.jpg'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main
      className={`bg-gradient-to-b from-sky-700 to-sky-300 ${inter.className}`} 
    > 

{/*
<div className='fixed w-full h-[1000px]'>
  <div className='fixed -z-1 w-full top-[0px] h-[900px]'>
<Image src={background} alt='background-image' className='w-full' width={0} height={1000}/>
  
  </div>
  </div> */}

   
    
  <div id='CONTENEDORPRINCIPAL' className='absolute grid grid-rows-5 grid-cols-5 w-full'>
  
  <div id='IMAGENBACKGROUND' className='fixed z-1'>
  <Image src={background} alt='background-image' className='h-[1000px] opacity-50' width={2000} height={0}/>
  </div>
  
  <div id='CONTENEDORHEADER' className='absolute top-5 bg-stone-300 w-screen h-[80px] shadow-2xl z-20'>
   <div className='absolute w-20 h-20 right-0 top-5'>
   <button className='bg-gradient-to-t text-sm from blue-700 to blue-500 rounded-l-[100px] shadow-2xl w-[80px] text-[20px] checked:bg-blue-500 font-roboto'>Menu</button>
</div>   
   
    <Image
          className="fixed"
          src="/logosinfondo.png"
          alt="iconocctv"
          width={100}
          height={1100}
          priority
        />
   
  <div id='CONTENEDORCMM' className="absolute top-0">
    <span className="absolute left-20 text-[40px] md:text-[80px] text-sky-600 font-light font-roboto">
      CMM
    </span> 
    <div id='CONTENEDORLOGOSVG' className="absolute top-0 md:w-[300px] md:top-60 ">
       </div>
  </div>

<div id='CONTENEDORSEGURIDADELECTRONICA' className='absolute top-[55px] left-1'>
<h1 className='absolute top-[2px] font-light md:text-xl text-[14px] p-1 md:p-4 ml-3 uppercase whitespace-nowrap font-mono text-black'> Seguridad Electrónica</h1>
</div> 
</div>


{/**ACA EMPIEZAN LOS ICONOS */}

<div id='CONTENEDORICONOS' 
className='absolute grid grid-rows-5 grid-cols-5 w-screen bg-stone-800 h-[700px] top-[140px] z-10'>

<div id="ICONO-ALARMAS"
className="absolute top-[50px] left-5 shadow-2xl bg-gray-700 w-[120px] rounded-[100px] h-[120px] md:top-[250px] md:left-[100px5]"
      >
   <a href="#CONTENEDORDETALLEALARMA" className="">
          <span  className="flex ml-9 mt-4" >
          <Image
          className=""
          src="/alarma2.svg"
          alt="iconoalarmas"
          width={60}
          height={0}
          priority
        />
          </span>

           <h2 className={`text-[15px] ml-8 mt-1 font-light text-white`}>
            Alarmas
          </h2>
        </a>
      </div>

      
      <div
        id="ICONO-CAMARAS"
        className="absolute w-[120px] left-5 h-[120px] top-[250px] shadow-2xl bg-gray-700 rounded-[100px]"
      >
        <a href="#CONTENEDORDETALLECCTV">
          <span className="flex mt-4 ml-8">
          <Image
          className=""
          src="/cctv.svg"
          alt="iconocctv"
          width={60}
          height={0}
          priority
        />
          
          </span>

          <h2
            id="ICONO-CAMARAS"
            className={`flex ml-8 mt-1 text-[18px] font-light text-white`}
          >
            CCTV
          </h2>

          <h2 className={`text-[12px] ml-5 font-semibold`}>
            
          </h2>
        </a>
      </div>     

     <div id="ICONO-STECNICO"
        className="absolute top-[450px] left-5 shadow-2xl bg-gray-700 w-[120px] rounded-[100px] h-[120px]"
      >
           
        <a href='tel:+541133324034' className="">
          <span  className="flex ml-5 mt-2" >
          <Image
          className=""
          src="/taller.svg"
          alt="iconoalarmas"
          width={80}
          height={0}
          priority
        />
          </span>

           <h2 className={`text-[15px] ml-6 mt-0 font-light text-white`}>
            S.Técnico
          </h2>
        </a>
</div> 
    

    
        <div
        id="ICONO-CONTACTO"
        className="absolute right-5 top-[50px] w-[120px] h-[120px] shadow-2xl transition ease-in-out delay-150 bg-stone-700 hover:-translate-y-1 hover:scale-110 hover:opacity-100 duration-300 group shadow-2xl rounded-[100px] border-indigo-900 px-5 py-4"
      >
        <a href="#CONTENEDORDETALLECONTACTO">
          <span className="flex ml-1">
          <Image
          className=""
          src="/contact-us.svg"
          alt="iconocctv"
          width={70}
          height={0}
          priority
        />
          </span>

          <h2
            className={`absolute text-[15px] ml-2 font-light text-white`}
          >
            Contacto
          </h2>
        </a>
      </div>

    <div
        id="ICONOIDENTIDAD"
        className="absolute right-5 top-[450px] w-[120px] h-[120px] shadow-2xl transition ease-in-out delay-150 bg-stone-700 hover:-translate-y-1 hover:scale-110 hover:opacity-100 duration-300 group shadow-2xl rounded-[100px] border-indigo-900 px-5 py-4"
      >
        <a href="#NOSOTROSDETAIL">
          <span className="flex ml-1">
          <Image
          className=""
          src="/capitan.svg"
          alt="iconocctv"
          width={70}
          height={0}
          priority
        />
          </span>

          <h2
            id="ICONO-CONTACTO"
            className={`absolute text-[15px] ml-2 font-light text-white`}
          >
            Nosotros 
          </h2>
        </a>
      </div> 

      <div
        id="ICONO-TIENDA"
        className="absolute right-5 top-[250px] w-[120px] h-[120px] bg-stone-700 rounded-[100px]"
      >
        <a href="#CONTENEDORDETALLETIENDA">
          <span className="absolute top-[15px] left-[25px]">
          <Image
          className=""
          src="/tienda.svg"
          alt="iconocctv"
          width={70}
          height={0}
          priority
        />
          </span>

          <h2
            id="LEYENDA-TIENDAVIRTUAL"
            className={`absolute top-[85px] left-[35px] text-[15px] font-light text-white `}
          >
            Tienda
          </h2>
        </a>
      </div>
      </div>

{/** ACA EMPIEZAN LOS RECUADROS DE DETALLE */}

      <div id='CONTENEDORDETALLEALARMA' className='absolute top-[850px] w-screen shadow-2xl bg-white text-[20px] h-[450px]'>
      <div className='absolute'>
  <Image src={back} alt='background-image' className='h-[450px] opacity-30' width={2000} height={0}/>
  </div>
<h1 className='font-bold indent-2.5 text-center font-fira-sans'>Monitoreo de alarmas</h1>
<h2 className='font-bold indent-2.5 text-center text-[15px]'>Como funciona?</h2>
<span className='text-[13px]'>
<ul className='p-4 space-y-5 list-disc list-inside font-mono font-bold'>
  <li>
    Instalamos y conectamos tu equipo de alarma a nuestra central.
  </li>
  <li>
    Monitoreamos y operamos los eventos las 24 horas del dia.
  </li>
  <li>
    Nuestros operadores se ponen en contacto con las fuerzas de seguridad y/o emergencia.
  </li>
  <li>
    Incluye APP donde vas a poder ver el estado de tu alarma, armar y desarmar tu sistema.
  </li>
  <li> Costo mensual aproximado servicio residencial: <span className='font-extrabold'>$7000.- (IVA incluido) </span></li>
</ul>

</span>
<span className=''>
<a href='#CONTENEDORPRINCIPAL' >
<Image
          className="absolute left-4 bottom-2"
          src="/flecha-arribab.svg"
          alt="flechaup"
          
          width={30}
          height={0}
          priority
        />
        </a>
</span>
<span className=''>
<a href='#CONTENEDORDETALLECCTV' >
<Image
          className="absolute right-2 bottom-2"
          src="/flecha-abajob.svg"
          alt="flechaup"
          
          width={30}
          height={0}
          priority
        />
        </a>
</span>
    </div>


    <div id='CONTENEDORDETALLECCTV' className='absolute top-[1350px] w-screen bg-white text-[20px] h-[350px] scroll-smooth'>
    <div className='absolute'>
  <Image src={backcctv} alt='background-image' className='h-[350px] opacity-40' width={2000} height={0}/>
  </div>
<h1 className='relative top-6 text-center font-semibold'>Camaras de seguridad:</h1>
<span className='text-[13px]'>
<ul className='relative font-bold top-10 space-y-5 list-disc list-inside font-mono'>
  <li>
  Instalamos equipos nuevos y/o adaptamos el tuyo.
  </li>
  <li>
  Incluye APP para visualización en vivo y/o acceso a grabaciones. (Requiere internet)
  </li>
  <li>
  Ideal para control de empleados, procesos productivos y/o industriales.
  </li>
  <li>
  Sin costo mensual
  </li>
  
</ul>

</span>
<span className=''>
<a href='#CONTENEDORPRINCIPAL' >
<Image
          className="absolute left-4 bottom-2 "
          src="/flecha-arribab.svg"
          alt="flechaup"
          
          width={30}
          height={0}
          priority
        />
        </a>
</span>
<span className=''>
<a href='#CONTENEDORDETALLECONTACTO' >
<Image
          className="absolute right-2 bottom-2"
          src="/flecha-abajob.svg"
          alt="flechaup"
          
          width={30}
          height={0}
          priority
        />
        </a>
</span>
    </div>
   
   <div id='CONTENEDORDETALLECONTACTO' className='absolute top-[1750px] w-screen bg-white text-[20px] h-[350px] scroll-smooth'>
   <Image src={backcontact} alt='background-image' className='h-[350px] opacity-40' width={2000} height={0}/>
<h1 className='absolute top-5 text-center font-bold left-20'>Contacto:</h1>
<h2 className='absolute top-20 text-m font-semibold'>¿Dudas? ¿Consultas? ¡No dudes en contactarnos!, nuestro horario de atencion es de Lunes a Viernes de 9:00 a 17:00</h2>
<div className='grid grid-rows-5 grid-cols-5 w-full '>
<span className=''>
<a href='https://wa.me/+5490111533324034' target='_blank'  >
<Image
          className="absolute bottom-20 left-2"
          src="/whatsappn.svg"
          alt="whatsapplogo"
          
          width={50}
          height={0}
          priority
        />
        </a>
</span>
<span className=''>
<a href='mailto:cmm@alarmascmm.com' >
<Image
          className="absolute bottom-20"
          src="/correo.svg"
          alt="logogmail"
          
          width={50}
          height={0}
          priority
        />
        </a>
</span>

<span className=''>
<a href='tel:+541133324034' >
<Image
          className="absolute bottom-20"
          src="/llamada-telefonica.svg"
          alt="logotelefono"
          
          width={50}
          height={0}
          priority
        />
        </a>
</span>
<span className=''>
<a href='https://www.facebook.com/CMM.ALARMAS' target='_blank' >
<Image
          className="absolute bottom-20"
          src="/facebookb.svg"
          alt="flechaup"
          
          width={50}
          height={0}
          priority
        />
        </a>
</span>   
<span className=''>
<a href='https://www.instagram.com/alarmascmm/' target='_blank' >
<Image
          className="absolute bottom-20"
          src="/instagramb.svg"
          alt="flechaup"
          
          width={50}
          height={0}
          priority
        />
        </a>
</span>  
<span className=''>
<a href='#CONTENEDORPRINCIPAL' >
<Image
          className="absolute left-4 bottom-2"
          src="/flecha-arribab.svg"
          alt="flechaup"
          
          width={30}
          height={0}
          priority
        />
        </a>
</span>
<span className=''>
<a href='#CONTENEDORDETALLETIENDA' >
<Image
          className="absolute right-2 bottom-2"
          src="/flecha-abajob.svg"
          alt="flechaup"
          
          width={30}
          height={0}
          priority
        />
        </a>
</span> 
 
</div>
    </div> 

    <div id='CONTENEDORDETALLETIENDA' className='absolute top-[2150px] w-screen bg-white text-[20px] h-[350px] scroll-smooth'>
    <Image src={backtienda} alt='background-image' className='h-[350px] opacity-50 w-screen' width={2000} height={0}/>
<h1 className='absolute top-5 font-semibold left-20'>Tienda Virtual:</h1>
<h2 className='absolute top-20 left-5'>Conoce nuestros productos y servicios:</h2>
<span className='absolute text-center'>
<a href='https://guidoll.mercadoshops.com.ar/' target='_blank' >
<Image
          className="relative bottom-60 left-40"
          src="/tiendab.svg"
          alt="flechaup"
          
          width={200}
          height={0}
          priority
        />
        </a>
</span>  




<span className=''>
<a href='#CONTENEDORPRINCIPAL' >
<Image
          className="absolute left-4 bottom-1"
          src="/flecha-arribab.svg"
          alt="flechaup"
          
          width={30}
          height={0}
          priority
        />
        </a>
</span>
<span className=''>
<a href='#CONTENEDORDETALLECONTACTO' >
<Image
          className="absolute right-2 bottom-1"
          src="/flecha-abajob.svg"
          alt="flechaup"
          
          width={30}
          height={0}
          priority
        />
        </a>
</span>  
    </div> 

    

    <div id='NOSOTROSDETAIL' className='absolute bg-stone-200 w-screen h-[100px] top-[2510px]'>
<h1 className='text-center font-bold font-mono'>Mas de 12 Años que CMM cuidando tus bienes.</h1>
    </div>
    
<footer id="FOOTERDELAMOR" className="absolute top-[2660px] grid grid-rows-1 place-items-jusitfy w-screen border-t bg-stone-300">
 
  <p className="text-black-500 text-[14px]">© 2023 <span className='font-bold'>CMM</span>. San Miguel del Monte - Cañuelas - Lobos.</p>
  <span className='absolute text-center'>
  
  <Image
          className="relative bottom-0 left-[390px]"
          src="/mapa.svg"
          alt="flechaup"
          
          width={20}
          height={0}
          priority
        />
        
   </span>  
</footer>

</div>

  
    </main>
  )
}
