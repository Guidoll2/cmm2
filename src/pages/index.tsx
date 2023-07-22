import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`bg-gradient-to-b from-sky-700 to-sky-300 h-[500px] ${inter.className}`} 
    > 

    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20'>
    <a className='' href="#destino-somos">
        <Image
          className=""
          src="/logosvg.svg"
          alt="CMM Logo"
          width={100}
          height={0}
          priority
        />
      </a>
      </div>
     
  <div id='CONTENEDORPRINCIPAL' className='grid grid-rows-5 grid-cols-5 w-full'>
  
  <div id='CONTENEDORCMM' className="w-screen bg-gradient-to-l from-indigo-600 to-gray-400 h-14">
    <span className="absolute left-2 text-[40px] md:text-[80px] text-slate-800 font-raleway opacity-70">
      CMM
    </span> 
    <div id='CONTENEDORLOGOSVG' className="absolute top-0 md:w-[300px] md:top-60 ">
      
        </div>
  </div>

<div id='CONTENEDORSEGURIDADELECTRONICA' className='absolute right-0 md:w-[300px] h-[30px] rounded-[100px] w-[200px] shadow-xl opacity-80 bg-gradient-to-l from-indigo-600 to-gray-400'>
<h1 className='absolute top-[2px] font-arial font-extrabold md:text-xl text-[12px] p-1 md:p-4 ml-3 uppercase whitespace-nowrap font-mono'> Seguridad Electrónica</h1>
</div>

<div id="ICONO-ALARMAS"
        className="absolute top-[100px] shadow-xl bg-gradient-to-b from-white w-[100px] rounded-[100px] h-[100px]"
      >
           
        <a href="#alarmasmonitoreadasdetail" className="">
          <span  className="flex ml-6 mt-4" >
          <Image
          className=""
          src="/alarmacasa.svg"
          alt="iconocctv"
          width={50}
          height={0}
          priority
        />
          </span>

           <h2 className={`text-[15px] ml-5 mt-1 font-semibold `}>
            Alarmas
          </h2>
        </a>
      </div>
      
      <div
        id="ICONO-CAMARAS"
        className="absolute w-[100px] h-[100px] top-[300px] bg-gradient-to-b from-violet-800 to-sky-700 rounded-[100px]"
      >
        <a href="#camarasdetail">
          <span className="flex mt-4 ml-7">
          <Image
          className=""
          src="/cctv.svg"
          alt="iconocctv"
          width={50}
          height={0}
          priority
        />
          
          </span>

          <h2
            id="ICONO-CAMARAS"
            className={`flex ml-7 mt-2 text-[15px] font-semibold`}
          >
            CCTV
          </h2>

          <h2 className={`text-[12px] ml-5 font-semibold`}>
            
          </h2>
        </a>
      </div>     



    

    
        <div
        id="ICONO-CONTACTO"
        className="absolute right-0 top-[100px] w-[100px] h-[100px] shadow-xl transition ease-in-out delay-150 bg-gradient-to-b from-white opacity-70 hover:-translate-y-1 hover:scale-110 hover:opacity-100 duration-300 group shadow-2xl rounded-[100px] border-indigo-900 px-5 py-4 transition-colors border-gray-300 bg-gray-200"
      >
        <a href="#contactodetail">
          <span className="flex ml-1">
          <Image
          className=""
          src="/contact-us.svg"
          alt="iconocctv"
          width={50}
          height={0}
          priority
        />
          </span>

          <h2
            id="ICONO-CONTACTO"
            className={`relative text-[15px] right-[3px] font-semibold`}
          >
            Contacto
          </h2>
        </a>
      </div>

      <div
        id="ICONO-TIENDA"
        className="absolute right-0 top-[300px] w-[100px] h-[100px] bg-gradient-to-b from-violet-800 to-sky-700 rounded-[100px]"
      >
        <a href="#tiendavirtual">
          <span className="absolute top-[15px] left-[25px]">
          <Image
          className=""
          src="/tienda.svg"
          alt="iconocctv"
          width={50}
          height={0}
          priority
        />
          </span>

          <h2
            id="LEYENDA-TIENDAVIRTUAL"
            className={`absolute top-[65px] left-[25px] text-[15px] font-semibold `}
          >
            Tienda
          </h2>
        </a>
      </div>
    </div>
    


 {/**   
<div className="relative w-[400px] font-mono font-sans top-[150px] left-[1000px] rounded-[20px] bg-zinc-300">
  <p className="z-0">
    <span className="relative font-mono font-sans text-[20px] left-[10px]">
      Comprometidos con tu protección.
    </span>
  </p>
</div>

<div
  id="alarmasmonitoreadasdetail"
  className="scroll-smooth relative top-[200px] h-[350px] w-[1100px] left-[120px] shadow-2xl border-4 border-solid rounded-3xl p-4 border-blue-900 bg-gray-300 hover:bg-gray-100"
>
  <span className="relative h-[0px] w-[45px] top-[10px] left-[20px] inline-block transition-transform motion-reduce:transform-none">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <path d="M384 480c0 11.7 3.1 22.6 8.6 32H392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L490.7 166.3C447.2 181.7 416 223.2 416 272v24.6c-19.1 11.1-32 31.7-32 55.4V480zM528 240c-17.7 0-32 14.3-32 32v48h64V272c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32V272z" />
    </svg>
  </span>
  <h2 className={`relative left-[80px] top-[10px] text-2xl font-semibold`}>
    Monitoreo de alarmas ¿Cómo funciona?:
  </h2>
  <ul className="relative top-[40px] left-[20px] space-y-5">
    <li className="">
      <span className="inline-block align-middle mr-2 text-green-500">&#10003;</span>
      Conectamos tu alarma a nuestra central brindando un servicio de monitoreo 24Hs.
    </li>
    <li className="">
      <span className="inline-block align-middle mr-2 text-green-500">&#10003;</span>
      Ante un evento los operadores se comunican con los usuarios y/o fuerzas de seguridad y emergencia.
    </li>
    <li>
      <span className="inline-block align-middle mr-2 text-green-500">&#10003;</span>
      Incluye APP para control inmediato donde recibes notificaciones y gestionas alertas.
    </li>
    <li>
      <span className="inline-block align-middle mr-2 text-green-500">&#10003;</span>
      Instalamos sistemas a prueba de fallos en la corriente eléctrica y con doble vía de comunicación.
    </li>
    <li>
      <span className="inline-block align-middle mr-2 text-green-500">&#10003;</span>
      Costo mensual aproximado $7000.- (IVA incluido)
    </li>
  </ul>
  <a id="FLECHAVUELTAHOME" href="#home">
    <span className="relative h-[100px] w-[25px] top-[0px] left-[980px] inline-block">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
      </svg>
    </span>
  </a>
</div>

<div
  id="camarasdetail"
  className="relative bottom-[0px] top-[220px] h-[350px] w-[1100px] left-[120px] shadow-2xl border-4 border-solid rounded-3xl p-4 border-blue-900 bg-gray-300 hover:bg-gray-100"
>
  <span className="relative h-[0px] w-[40px] top-[5px] left-[20px] inline-block">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
    </svg>
  </span>
  <span className="relative h-[0px] w-[20px] top-[10px] left-[30px] inline-block">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
    </svg>
  </span>
  <h2 className={`relative left-[100px] text-2xl font-semibold`}>
    Cámaras de seguridad:{' '}
  </h2>
  <ul className="relative top-[40px] left-[20px] space-y-5">
    <li className="">
      <span className="inline-block align-middle mr-2 text-green-500">&#10003;</span>
      Instalamos equipos nuevos y/o adaptamos el tuyo.
    </li>
    <li className="">
      <span className="inline-block align-middle mr-2 text-green-500">&#10003;</span>
      Visualización en vivo y grabación las 24 horas. (Requiere internet)
    </li>
    <li>
      <span className="inline-block align-middle mr-2 text-green-500">&#10003;</span>
      Incluye APP para visualización, acceso a grabaciones, control remoto de cámaras (Depende del modelo)
    </li>
    <li>
      <span className="inline-block align-middle mr-2 text-green-500">&#10003;</span>
      Equipos de última generación, trabajamos con las mejores marcas del mercado.
    </li>
    <li>
      <span className="inline-block align-middle mr-2 text-green-500">&#10003;</span>
      Mayor costo de inversión inicial (vs alarma monitoreada). Sin costo mensual.
    </li>
  </ul>
  <a id="FLECHAVUELTAHOME" href="#home">
    <span className="relative h-[100px] w-[25px] top-[0px] left-[980px] inline-block">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
      </svg>
    </span>
  </a>
</div>


     
<div id='contactodetail' className='relative bottom-[0px] top-[240px] h-[350px] w-[1100px] left-[120px] shadow-2xl border-4 border-solid rounded-3xl p-4 border-blue-900 bg-gray-300 hover:bg-gray-100'>  
  <h2 className={`relative text-2xl font-semibold left-[60px] top-[20px]`}>
    Contacto:{' '}
  </h2>
  <p className={`relative text-[15px] opacity-70 left-[20px] top-[40px]`}>
    Estamos disponibles, contáctanos a través de tu medio favorito (Horario de atención: Lunes a Viernes de 9:00 AM a 17:00 PM):
  </p>
</div>

<span id='logocontacto' className="relative inline-block w-[40px] left-[150px] bottom-[80px]">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path d="M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"/>
  </svg>
</span>  

<a href="https://wa.me/0111533324034" target="_blank" rel="noopener noreferrer">
  <span id='ICONO-WA' className='relative left-[200px] text-[40px]'>
    <svg height="512pt" viewBox="-1 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg" id="fi_1384055"><path d="m10.894531 512c-2.875 0-5.671875-1.136719-7.746093-3.234375-2.734376-2.765625-3.789063-6.78125-2.761719-10.535156l33.285156-121.546875c-20.722656-37.472656-31.648437-79.863282-31.632813-122.894532.058594-139.941406 113.941407-253.789062 253.871094-253.789062 67.871094.0273438 131.644532 26.464844 179.578125 74.433594 47.925781 47.972656 74.308594 111.742187 74.289063 179.558594-.0625 139.945312-113.945313 253.800781-253.867188 253.800781 0 0-.105468 0-.109375 0-40.871093-.015625-81.390625-9.976563-117.46875-28.84375l-124.675781 32.695312c-.914062.238281-1.84375.355469-2.761719.355469zm0 0" fill="#e5e5e5"></path><path d="m10.894531 501.105469 34.46875-125.871094c-21.261719-36.839844-32.445312-78.628906-32.429687-121.441406.054687-133.933594 109.046875-242.898438 242.976562-242.898438 64.992188.027344 125.996094 25.324219 171.871094 71.238281 45.871094 45.914063 71.125 106.945313 71.101562 171.855469-.058593 133.929688-109.066406 242.910157-242.972656 242.910157-.007812 0 .003906 0 0 0h-.105468c-40.664063-.015626-80.617188-10.214844-116.105469-29.570313zm134.769531-77.75 7.378907 4.371093c31 18.398438 66.542969 28.128907 102.789062 28.148438h.078125c111.304688 0 201.898438-90.578125 201.945313-201.902344.019531-53.949218-20.964844-104.679687-59.09375-142.839844-38.132813-38.160156-88.832031-59.1875-142.777344-59.210937-111.394531 0-201.984375 90.566406-202.027344 201.886719-.015625 38.148437 10.65625 75.296875 30.875 107.445312l4.804688 7.640625-20.40625 74.5zm0 0" fill="#fff"></path><path d="m19.34375 492.625 33.277344-121.519531c-20.53125-35.5625-31.324219-75.910157-31.3125-117.234375.050781-129.296875 105.273437-234.488282 234.558594-234.488282 62.75.027344 121.644531 24.449219 165.921874 68.773438 44.289063 44.324219 68.664063 103.242188 68.640626 165.898438-.054688 129.300781-105.28125 234.503906-234.550782 234.503906-.011718 0 .003906 0 0 0h-.105468c-39.253907-.015625-77.828126-9.867188-112.085938-28.539063zm0 0" fill="#64b161"></path><g fill="#fff"><path d="m10.894531 501.105469 34.46875-125.871094c-21.261719-36.839844-32.445312-78.628906-32.429687-121.441406.054687-133.933594 109.046875-242.898438 242.976562-242.898438 64.992188.027344 125.996094 25.324219 171.871094 71.238281 45.871094 45.914063 71.125 106.945313 71.101562 171.855469-.058593 133.929688-109.066406 242.910157-242.972656 242.910157-.007812 0 .003906 0 0 0h-.105468c-40.664063-.015626-80.617188-10.214844-116.105469-29.570313zm134.769531-77.75 7.378907 4.371093c31 18.398438 66.542969 28.128907 102.789062 28.148438h.078125c111.304688 0 201.898438-90.578125 201.945313-201.902344.019531-53.949218-20.964844-104.679687-59.09375-142.839844-38.132813-38.160156-88.832031-59.1875-142.777344-59.210937-111.394531 0-201.984375 90.566406-202.027344 201.886719-.015625 38.148437 10.65625 75.296875 30.875 107.445312l4.804688 7.640625-20.40625 74.5zm0 0"></path><path d="m195.183594 152.246094c-4.546875-10.109375-9.335938-10.3125-13.664063-10.488282-3.539062-.152343-7.589843-.144531-11.632812-.144531-4.046875 0-10.625 1.523438-16.1875 7.597657-5.566407 6.074218-21.253907 20.761718-21.253907 50.632812 0 29.875 21.757813 58.738281 24.792969 62.792969 3.035157 4.050781 42 67.308593 103.707031 91.644531 51.285157 20.226562 61.71875 16.203125 72.851563 15.191406 11.132813-1.011718 35.917969-14.6875 40.976563-28.863281 5.0625-14.175781 5.0625-26.324219 3.542968-28.867187-1.519531-2.527344-5.566406-4.046876-11.636718-7.082032-6.070313-3.035156-35.917969-17.726562-41.484376-19.75-5.566406-2.027344-9.613281-3.035156-13.660156 3.042969-4.050781 6.070313-15.675781 19.742187-19.21875 23.789063-3.542968 4.058593-7.085937 4.566406-13.15625 1.527343-6.070312-3.042969-25.625-9.449219-48.820312-30.132812-18.046875-16.089844-30.234375-35.964844-33.777344-42.042969-3.539062-6.070312-.058594-9.070312 2.667969-12.386719 4.910156-5.972656 13.148437-16.710937 15.171875-20.757812 2.023437-4.054688 1.011718-7.597657-.503906-10.636719-1.519532-3.035156-13.320313-33.058594-18.714844-45.066406zm0 0" fill-rule="evenodd"></path></g></svg>
    
  </span>
</a>

<a href="mailto:cmm@alarmascmm.com" target="_blank" rel="noopener noreferrer">
  <span id='ICONOMAIL' className="relative left-[600px] bottom-[80px] text-[40px]">
    <svg xmlns="http://www.w3.org/2000/svg" height='2em' viewBox="0 0 512 512">
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
    </svg>
  </span>
</a>

<a href="tel:1133324034"> 
  <span id='ICONOTEL' className="relative left-[1000px] bottom-[150px] text-[40px]">
    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512">
      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
    </svg>
  </span>
</a>

<a id='FLECHAVUELTAHOME' href='#home'>
  <span className='relative h-[100px] bottom-[120px] left-[1150px]'>
    <svg xmlns="http://www.w3.org/2000/svg" height='2.5em' viewBox="0 0 384 512">
      <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
    </svg>
  </span>
</a>

<div className='relative bottom-[70px] w-[1100px] h-[320px] left-[120px] shadow-2xl hover:bg-gray-100 border-4 border-solid rounded-3xl border-blue-900 bg-gray-300]'>
 <h2 id='tiendavirtual' className={`relative text-2xl font-semibold left-[20px] top-[20px]`}>
    Nuestros productos:{' '}
  </h2>
  <p className='relative text-justify font-sans top-[50px] w-[1000px] left-[40px]'>
    Encontra todos nuestros productos en nuestra tienda virtual, no dudes en contactarnos para recibir el asesoramiento necesario. 
  </p>

  <a href="https://guidoll.mercadoshops.com.ar/">
          <span className="relative h-[100px] w-[90px] top-[100px] left-[450px] inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </span></a>

  <a id='FLECHAVUELTAHOME' href='#home'>
    <span className='relative h-[100px] w-[25px] top-[180px] left-[900px] inline-block'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
      </svg>
    </span>
  </a>      
</div>

<div className='relative bottom-[40px] w-[1100px] h-[320px] left-[120px] shadow-2xl hover:bg-gray-100 border-4 border-solid rounded-3xl border-blue-900 bg-gray-300]'>
  <Image
    className="relative left-[20px] top-[20px] dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    src="/logosinfondo.png"
    alt="CMM Logo"
    width={100}
    height={0}
    priority
  />
  <h2 id='destino-somos' className={`relative text-2xl font-semibold left-[110px] bottom-[20px]`}>
    Quienes somos:{' '}
  </h2>
  <p className='relative text-justify font-sans top-[20px] w-[1000px] left-[40px]'>
    Desde hace 10 años, CMM ha estado brindando servicios de seguridad electrónica en nuestro pueblo, San Miguel del Monte. Lo que en un principio fue un servicio dirigido a casas de fin de semana, hoy se ha convertido en una necesidad cada vez más demandada que nos ha impulsado a mejorar nuestra oferta. 
    Hemos ampliado nuestra presencia para acercarnos a las localidades vecinas de Cañuelas y Lobos, incorporando los conocimientos y la tecnología necesarios para enfrentar los nuevos desafíos que presenta la sociedad.
    A lo largo de los años, nos hemos capacitado para poder ofrecerte el mejor servicio al mejor costo, manteniendo la calidez y cercanía que nos caracterizan. En la actualidad, contamos con la estructura y los conocimientos necesarios para proteger tu hogar, comercio o industria. No dudes en contactarnos, estamos cerca tuyo para asesorarte.
  </p>
  <a id='FLECHAVUELTAHOME' href='#home'>
    <span className='relative h-[100px] w-[25px] top-[10px] left-[980px] inline-block'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
      </svg>
    </span>
  </a>      
</div>*/}



<footer id="FOOTERDELAMOR" className="flex fixed bottom-0 grid grid-rows-1 place-items-center w-full border-t bg-gradient-to-r from-blue-500 to-gray-500">
  <p className="text-black-500 text-[12px]">© 2023 <span className='font-bold'>CMM</span>. San Miguel del Monte - Cañuelas - Lobos.</p>
  <span className=''>
    
  <svg id="fi_9495432" height="30" viewBox="0 0 64 64" width="50" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m57.426 17.24h-52.855v33.3a6.073 6.073 0 0 0 6.073 6.073h46.782a2 2 0 0 0 2-2v-35.373a2 2 0 0 0 -2-2z" fill="#bbec6a"></path><path d="m59.429 19.24v19.87l-11.329-11.33 10.276-10.288a1.987 1.987 0 0 1 1.053 1.748z" fill="#66b373"></path><path d="m59.429 46.18v8.43a2 2 0 0 1 -2 2h-13.19l-12.49-12.49 12.81-12.81z" fill="#4ce166"></path><path d="m51.569 17.24-24.06 24.06v-24.06z" fill="#75db3a"></path><path d="m37.169 56.61h-17.91l8.96-8.95z" fill="#f6b545"></path><path d="m59.429 39.11v7.07l-14.87-14.87-12.81 12.81 12.49 12.49h-7.07l-8.95-8.95-8.96 8.95h-7.07l10.32-10.32v-29.05h5v24.06l24.06-24.06h5.063a5.328 5.328 0 0 1 1.3.07 2.224 2.224 0 0 1 .45.18l-10.282 10.29z" fill="#f8f2f0"></path><path d="m11.009 43.74h3.917v-36.355a10.354 10.354 0 0 0 -10.355 10.355v32.437a6.438 6.438 0 0 1 6.438-6.437z" fill="#475d63"></path><path d="m44.563 47.931s-9.229-7.713-9.229-16.043a9.229 9.229 0 0 1 18.459 0c0 8.331-9.23 16.043-9.23 16.043z" fill="#ff4a4a"></path><path d="m44.563 22.659a9.286 9.286 0 0 0 -1.112.073 9.226 9.226 0 0 1 8.117 9.156c0 6.539-5.671 12.679-8.117 15.026.67.643 1.112 1.017 1.112 1.017s9.229-7.713 9.229-16.043a9.229 9.229 0 0 0 -9.229-9.229z" fill="#e7343f"></path><circle cx="44.563" cy="31.945" fill="#fff" r="3.924"></circle><g fill="#546f7a"><path d="m11.445 8v35.74h3.481v-36.355a10.311 10.311 0 0 0 -3.481.615z"></path><path d="m8.578 13.014a1 1 0 0 0 -1.362.378 8.755 8.755 0 0 0 -1.1 3.463 1 1 0 1 0 1.99.2 6.777 6.777 0 0 1 .849-2.677 1 1 0 0 0 -.377-1.364z"></path><circle cx="10.126" cy="11.58" r="1.043"></circle></g></svg>
  </span>
</footer>

  
    </main>
  )
}
