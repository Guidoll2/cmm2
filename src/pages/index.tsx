import Image from 'next/image'
import { Inter } from 'next/font/google'
import background from '../../public/logopng.png'
import back from '../../public/logosvg.svg'
import backcctv from '../../public/logosvg.svg'
import backcontact from '../../public/logosvg.svg'
import backtienda from '../../public/logosvg.svg'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [showAlarmaDetalle, setShowAlarmaDetalle] = useState(false);
  const [showCCTVDetalle, setShowCCTVDetalle] = useState(false);
  const [showContactoDetalle, setShowContactoDetalle] = useState(false);
  const [showTiendaDetalle, setShowTiendaDetalle] = useState(false);
  const [showIdentidadDetalle, setShowIdentidadDetalle] = useState(false);

  const mostrarDetalleContacto = () => {
    setShowContactoDetalle(true);
    setShowCCTVDetalle(false); 
    setShowAlarmaDetalle(false);
    setShowTiendaDetalle(false);
    setShowIdentidadDetalle(false)
  };

  const mostrarIdentidadDetalle = () => {
    setShowIdentidadDetalle(true);
    setShowCCTVDetalle(false); 
    setShowAlarmaDetalle(false);
    setShowTiendaDetalle(false);
    setShowContactoDetalle(false)
  };

  const mostrarTiendaDetalle = () => {
    setShowTiendaDetalle(true);
    setShowCCTVDetalle(false); 
    setShowAlarmaDetalle(false);
    setShowContactoDetalle(false);
    setShowIdentidadDetalle(false)
  };


  const mostrarAlarmaDetalle = () => {
    setShowAlarmaDetalle(true);
    setShowCCTVDetalle(false); 
    setShowContactoDetalle(false);
    setShowTiendaDetalle(false);
    setShowIdentidadDetalle(false)
  };

  const mostrarDetalleCCTV = () => {
    setShowCCTVDetalle(true);
    setShowContactoDetalle(false);
    setShowAlarmaDetalle(false);
    setShowTiendaDetalle(false); 
    setShowIdentidadDetalle(false)
  };  

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
  
  {/*
  <div id='IMAGENBACKGROUND' className='fixed z-1'>
  <Image src={background} alt='background-image' className='h-[1000px] opacity-50' width={2000} height={0}/>
  </div>
  */}
    <Image
          className="absolute left-0 top-3 opacity-90 z-20"
          src="/logosinfondo.png"
          alt="iconocctv"
          width={220}
          height={0}
          priority
        />
 <div id='CONTENEDORHEADER' className='absolute top-5 bg-stone-800 w-screen h-[110px] shadow-2xl'>
   <div className='absolute w-20 h-20 right-0 top-5'>
  {/**  <button className='bg-gradient-to-t text-sm from blue-700 to blue-500 rounded-l-[100px] shadow-2xl text-[20px] checked:bg-blue-500 font-roboto'>- - -</button>*/}
</div>   
   
 
   
  <div id='CONTENEDORCMM' className="top-0">
    <span className="absolute text-[70px] right-0 md:text-[80px] text-blue-700 font-light font-sans">
     CMM 
    </span> 
  
    
    <div id='CONTENEDORLOGOSVG' className="absolute top-0 md:w-[300px] md:top-60 ">
       </div>
  </div>


<div id='CONTENEDORSEGURIDADELECTRONICA' className='absolute top-[55px] left-1'>
<h1 className='absolute top-[2px] font-light md:text-xl text-[14px] p-1 md:p-4 ml-3 uppercase whitespace-nowrap font-mono text-black'>  </h1>
</div> 
</div>


{/**ACA EMPIEZAN LOS ICONOS */}

<div id='CONTENEDORICONOS' 
className='absolute z-20 grid grid-rows-5 grid-cols-5 w-screen bg-stone-300 h-[700px] top-[140px] z-10'>
{/* <Image src={background} alt='background-image' className='absolute w-screen opacity-50' width={0} height={0}/>*/}
<Image src={back} alt='background-image' className='absolute top-40 opacity-30 w-screen' width={10} height={0}/>
<span className="uppercase absolute text-[25px] font-light left-5 md:text-[80px] text-sky-700 font-sans">
      Seguridad electrónica
    </span>
    <span className='absolute font-bold font-sans text-[20px] left-5 text-teal-700 top-[30px] uppercase'>residencias, comercios e industrias. </span>

<div id="ICONO-ALARMAS"
className="absolute top-[60px] right-0 shadow-2xl w-[90px] rounded-l-[100px] bg-gradient-to-l from-blue-700 to-blue-950 h-[90px] md:top-[250px] md:left-[100px5]"
      >
  
  <div onClick={mostrarAlarmaDetalle}>
   
   <a
    href="#CONTENEDORDETALLEALARMA"
    onClick={() => setShowAlarmaDetalle(!showAlarmaDetalle)}
    className="cursor-pointer"
  >
          <span  className="absolute ml-6 mt-4" >
          <Image
          className=""
          src="/alarmanegro.svg"
          alt="iconoalarmas"
          width={60}
          height={0}
          priority
        />
          </span>

            <h2 className={`absolute top-[90px] text-[15px] left-3 font-bold opacity-80 text-gray-800 uppercase`}>
            Alarmas
          </h2>
        </a>
        </div>
      </div>

      
      <div
        id="ICONO-CAMARAS"
        className="absolute w-[90px] right-0 h-[90px] top-[190px] shadow-2xl bg-gradient-to-l from-blue-700 to-blue-950 rounded-l-[100px]"
      >
       <div onClick={mostrarDetalleCCTV}>
        <a href="#CONTENEDORDETALLECCTV" onClick={() => setShowCCTVDetalle(!showCCTVDetalle)}
    className="cursor-pointer">
          <span className="absolute mt-4 ml-6">
          <Image
          className=""
          src="/cctvnegro.svg"
          alt="iconocctv"
          width={60}
          height={0}
          priority
        />
          
          </span>

           <h2
            id="ICONO-CAMARAS"
            className={`absolute top-[95px] text-[18px] left-6 font-bold opacity-80  text-gray-800 uppercase`}>
            CCTV
          </h2>

          <h2 className={`text-[12px] ml-5 font-semibold`}>
            
          </h2>
        </a></div>
      </div>     

     <div id="ICONO-STECNICO"
        className="absolute w-[90px] right-0 h-[90px] top-[450px] shadow-2xl bg-gradient-to-l from-blue-700 to-blue-950 rounded-l-[100px]"
      >
           
        <a href='tel:+541133324034' className="">
          <span  className="absolute ml-7 mt-5" >
          <Image
          className=""
          src="/servicio.svg"
          alt="iconoalarmas"
          width={50}
          height={0}
          priority
        />
          </span>

           <h2 className={`absolute top-[95px] text-[15px] left-1 font-bold opacity-80  text-gray-800 uppercase`}>
            S.Técnico
          </h2>
        </a>
</div> 
    

    
        <div
        id="ICONO-CONTACTO"
        className="sticky left-2 top-60 w-[70px] h-[70px] bg-gradient-to-l from-blue-700 to-blue-950 shadow-2xl opacity transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:opacity-100 duration-300 group shadow-2xl rounded-[40px] border-indigo-900 px-5 py-4"
      >
        <div onClick={mostrarDetalleContacto}>
        <a href="#CONTENEDORDETALLECONTACTO" onClick={() => setShowContactoDetalle(!showContactoDetalle)}
    className="cursor-pointer">
          <span className="absolute top-[13px] left-[15px] opacity-70">
          <Image
          className=""
          src="/call.svg"
          alt="iconocctv"
          width={40}
          height={0}
          priority
        />
          </span>
          
          <h2
            className={`absolute top-[95px] text-[15px] left-1 font-bold opacity-80  text-gray-800 uppercase`}
          >
            
          </h2>
        </a></div>
      </div>

    <div
        id="ICONOIDENTIDAD"
        className="absolute w-[90px] right-0 h-[90px] top-[570px] shadow-2xl bg-gradient-to-l from-blue-700 to-blue-950 rounded-l-[100px]"
      >
       
       <div onClick={mostrarIdentidadDetalle}>
     
        <a
    href="#NOSOTROSDETAIL"
    onClick={() => setShowIdentidadDetalle(!showIdentidadDetalle)}
    className="cursor-pointer"
  >
          
          <span className="absolute ml-4 mt-2">
          <Image
          className=""
          src="/grupo.svg"
          alt="iconocctv"
          width={70}
          height={0}
          priority
        />
          </span>

          <h2
            id=""
            className={`absolute top-[95px] text-[15px] left-1 font-bold opacity-80  text-gray-800 uppercase`}
          >
            Nosotros 
          </h2>
        </a>
        </div>
      </div> 

      <div
        id="ICONO-TIENDA"
        className="absolute w-[90px] right-0 h-[90px] top-[320px] shadow-2xl bg-gradient-to-l from-blue-700 to-blue-950 rounded-l-[100px]"
      >
       
       <div onClick={mostrarTiendaDetalle}>
        
        <a
    href="#CONTENEDORDETALLETIENDA"
    onClick={() => setShowTiendaDetalle(!showTiendaDetalle)}
    className="cursor-pointer"
  >
          <span className="absolute top-[18px] left-7">
          <Image
          className=""
          src="/tiendanegro.svg"
          alt="iconocctv"
          width={50}
          height={0}
          priority
        />
          </span>

          <h2
            id="LEYENDA-TIENDAVIRTUAL"
            className={`absolute top-[95px] text-[15px] left-6 font-bold opacity-80  text-gray-800 uppercase`}
          >
            Tienda
          </h2>
        </a>
        </div>
      </div>
      </div>
 
{/** ACA EMPIEZAN LOS RECUADROS DE DETALLE */}




{showAlarmaDetalle && (
  <div id="CONTENEDORDETALLEALARMA" className="absolute top-[850px] z-10 w-screen shadow-2xl bg-gradient-to-b from-blue-950 to-blue-700 text-[20px] h-screen">
      <div className='absolute'>
      <Image src={backcontact} alt='background-image' className='flex items-center justify-center h-screen opacity-20' width={2000} height={0}/>
  </div>
<h1 className='font-bold flex items-center justify-center h-20 uppercase text-gray-100 text-2xl font-sans'>Monitoreo de alarmas</h1>
<span className='text-[18px]'>
<p className='text-[15px] text-gray-200 p-5'>
Instalar un equipo de alarmas es el primer paso para salvaguardar lo que más te importa. 
Nuestro equipo altamente capacitado estará atento a cualquier evento y actuará de inmediato en caso de emergencia.
 Además, monitoreamos constantemente la corriente eléctrica y la comunicación para detectar cualquier fallo y garantizar la
  protección continua de tu hogar, negocio o industria.
</p>
<p className='text-[15px] text-gray-200 p-4'>
Nuestras alarmas monitoreadas brindan una protección inigualable las 24 horas, todos los días del año. 
Con nuestra app exclusiva, tendrás el control total de tu sistema de seguridad: recibirás notificaciones en tiempo real, 
podrás armar y desarmar tu alarma fácilmente, ¡todo desde la palma de tu mano!
</p>


<p className="text-[15px] absolute p-4 text-gray-300">Hace click en la tienda para conocer nuestros equipos.</p>
<a href='https://guidoll.mercadoshops.com.ar/' target='_blank' >
<Image
          className="absolute bottom-2 right-40"
          src="/tiendanegro.svg"
          alt="tienda"
          
          width={50}
          height={0}
          priority
        />
   </a>     

</span>
<span className=''>
<a href='#CONTENEDORPRINCIPAL' >
<Image
          className="absolute right-5 bottom-2"
          src="/flecha-arribab.svg"
          alt="flechaup"
          
          width={40}
          height={0}
          priority
        />
        </a>
</span>

    </div> )}

    {showCCTVDetalle && (
    <div id='CONTENEDORDETALLECCTV' className='absolute top-[850px] w-screen bg-gradient-to-b from-blue-950 to-blue-700 text-[20px] h-[550px] opacity-100 shadow-2xl'>
    <div className='absolute'>
    <Image src={backcontact} alt='background-image' className='flex items-center justify-center h-screen opacity-20' width={2000} height={0}/>
  </div>
<h1 className='font-bold flex items-center justify-center h-20 uppercase text-gray-100 text-2xl'>Camaras de seguridad:</h1>
<span className=''>
  <p className='text-[15px] p-4 text-left text-white'>
  Observa tu propiedad desde cualquier lugar, en cualquier momento, directamente en tu celular. Accede a grabaciones para revisar eventos pasados.
  No importa si estás de vacaciones, en el trabajo o simplemente fuera de casa, siempre vas a estar al tanto de lo que sucede en tu propiedad. 

</p>
<p className='text-[15px] p-4 text-left text-white'>
Un sistema de camaras es un complemento perfecto para nuestro servicio de alarma monitoreada. Juntos, forman un escudo de protección integral, brindándote una mayor seguridad y confianza en la protección de tus seres queridos y tus bienes más preciados.
  </p>


</span>
<div className="flex p-4">
<span className=''>
<a href='https://guidoll.mercadoshops.com.ar/' target='_blank' >
<Image
          className="absolute bottom-2 right-40"
          src="/tiendanegro.svg"
          alt="tienda"
          
          width={30}
          height={0}
          priority
        />
   </a>     
</span>
<div className="text-[15px] absolute">Hace click en la tienda para conocer nuestras ofertas</div>
<div className="ml-2"></div>
</div>
<span className=''>
<a href='#CONTENEDORPRINCIPAL' >
<Image
          className="absolute right-5 bottom-20 "
          src="/flecha-arribab.svg"
          alt="flechaup"
          
          width={40}
          height={0}
          priority
        />
        </a>
</span>

    </div>)}
    {showContactoDetalle && (
   <div id='CONTENEDORDETALLECONTACTO' className='absolute shadow-2xl top-[850px] w-screen bg-gradient-to-b from-blue-950 to-blue-700 text-[20px] h-[420px] scroll-smooth'>
   <div className='absolute'>
   <Image src={backcontact} alt='background-image' className='relative right-[130px] h-[70px] opacity-40' width={0} height={0}/>
   </div>

<h1 className='font-bold flex items-center justify-center h-20 uppercase text-gray-100 text-2xl'>Contáctenos</h1>


<div className="flex p-2 items-center">
<a href='https://wa.me/+5490111533324034' target='_blank'  >
<Image
          className=""
          src="/whatsappn.svg"
          alt="whatsapplogo"
          
          width={30}
          height={0}
          priority
        />
        </a> 

  <div className="text-[15px] text-white p-2">Whatsapp:+549 011 15-3332-4034</div>
  <div className="ml-2">
  
  </div>
</div>

<div className="flex p-2 items-center">
<a href='mailto:cmm@alarmascmm.com' >
<Image
          className="a"
          src="/correo.svg"
          alt="logogmail"
          
          width={30}
          height={0}
          priority
        />
        </a>
  <div className="text-[15px] text-white p-2">Correo: cmm@alarmascmm.com</div>
  <div className="ml-2">
  
  </div>
</div>

<div className="flex p-2 items-center">
<span className=''>
<a href='tel:+541133324034' >
<Image
          className=""
          src="/llamada-telefonica.svg"
          alt="logotelefono"
          
          width={30}
          height={0}
          priority
        />
        </a>
</span>
<div className="text-[15px] p-2 text-white">Teléfono: 011 1533324034</div>
<div className="ml-2">
  
  </div>
</div>

<div className="flex p-2 items-center">
<span className=''>
<a href='tel:+541133324034' >
<Image
          className=""
          src="/reloj.svg"
          alt="reloj"
          
          width={30}
          height={0}
          priority
        />
        </a>
</span>
<div className="text-[15px] p-2 text-white">Horario de atención: Lunes a Viernes de 9:00 a 17:00</div>
<div className="ml-2">
  
  </div>
</div>


<span className=''>
<a href='#CONTENEDORPRINCIPAL' >
<Image
          className="absolute bottom-20 right-5"
          src="/flecha-arribab.svg"
          alt="flechaup"
          
          width={40}
          height={0}
          priority
        />
        </a>
</span>
<span className=''>
<a href='#CONTENEDORDETALLETIENDA' >
<Image
          className="absolute bottom-2 right-4"
          src="/flecha-abajob.svg"
          alt="flechaup"
          
          width={30}
          height={0}
          priority
        />
        </a>
</span> 
 

    </div> )}

    {showTiendaDetalle && (
    <div id='CONTENEDORDETALLETIENDA' className='absolute top-[850px] w-screen bg-gradient-to-b from-blue-950 to-blue-700 text-[20px] h-[400px] shadow-2xl'>
    <div className='absolute'>
    <Image src={backcontact} alt='background-image' className='relative right-[130px] h-[70px] opacity-40' width={0} height={0}/>
    </div>
<h1 className='font-bold flex items-center justify-center h-20 uppercase text-gray-800 text-2xl text-white'>Tienda Virtual</h1>


<div className="flex p-8 items-center">
<span className=''>
<a href='tel:+541133324034' >
<Image
          className=""
          src="/tiendanegro.svg"
          alt="reloj"
          
          width={100}
          height={0}
          priority
        />
        </a>
</span>
<div className="text-[15px] p-2 text-white">Hace click en la tienda y conoce todos nuestros productos y servicios.</div>
<div className="ml-2">
  
  </div>
</div>
<p className='absolute text-[20px] p-4 top-60 text-white font-sans text-left w-screen'>Asesoramiento sin costo! no dudes en contactarnos. </p>
<span className=''>
<a href='#CONTENEDORPRINCIPAL' >
<Image
          className="absolute right-5 bottom-20"
          src="/flecha-arribab.svg"
          alt="flechaup"
          
          width={35}
          height={0}
          priority
        />
        </a>
</span>
 
    </div> )}

    
    {showIdentidadDetalle && (
    <div id='NOSOTROSDETAIL' className='absolute bg-gradient-to-t from-blue-950 to-blue-700 w-screen h-[700px] shadow-2xl top-[850px]'>
<div className='absolute'>
    <Image src={backcontact} alt='background-image' className='relative w-screen h-screen opacity-40' width={0} height={0}/>
    </div>
<h1 className='font-bold flex items-center justify-center h-20 uppercase text-gray-800 text-2xl text-white'>Nosotros</h1>
<h2  className='text-[15px] p-4 text-left text-white'>Durante más de 12 años, CMM ha estado comprometida en proteger y cuidar lo que más importa:
 tu seguridad y tranquilidad. Nuestra historia comenzó con un enfoque en brindar soluciones de 
 seguridad a casas de fin de semana en San Miguel del Monte. A medida que nuestra reputación creció y 
 la demanda de nuestros servicios aumentó, nos embarcamos en una expansión que nos llevó a abarcar 
 Cañuelas y Lobos.

 Lo que comenzó como una empresa enfocada en la protección de hogares se ha transformado en una organización que brinda seguridad integral a diferentes sectores, incluyendo industrias y empresas de internet. Nos enorgullecemos de haber forjado relaciones sólidas con nuestros clientes a lo largo de los años, ofreciendo servicios de monitoreo de alarmas líderes en la industria y soluciones personalizadas para cada necesidad.
 
  </h2>

<span className='absolute right-5 bottom-20'>
<a href='https://www.instagram.com/alarmascmm/' target='_blank' >
<Image
          className=""
          src="/instagramb.svg"
          alt="logoinstragram"
          
          width={40}
          height={0}
          priority
        />
        </a>
</span> 

<span className=''>
<a href='https://www.facebook.com/CMM.ALARMAS' target='_blank' >
<Image
          className="absolute right-20 bottom-20"
          src="/facebookb.svg"
          alt="logofacebook"
          
          width={40}
          height={0}
          priority
        />
        </a>
</span>   

<span className=''>
<a href='#CONTENEDORPRINCIPAL' >
<Image
          className="absolute left-4 bottom-20"
          src="/flecha-arribab.svg"
          alt="flechaup"
          
          width={40}
          height={0}
          priority
        />
        </a>
</span>
    </div>)}

  
<footer id="FOOTERDELAMOR" className="fixed bottom-0 grid grid-rows-1 place-items-jusitfy w-screen border-t bg-gradient-to-t from-blue-950 to-blue-700">
 
  <p className="text-[17px] text-center items-center text-white font-light">© 2023 <span className='font-bold'>CMM</span>. San Miguel del Monte - Cañuelas - Lobos.</p>

</footer>

</div>

  
    </main>
  )
}
