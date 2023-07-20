import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`absolute w-full flex-col items-center justify-between ${inter.className}`} 
    > 
    
  <div className="static w-[3000px] h-[600px] place-items-center bg-cyan-900 max-[420px]:h-[2700px]">
  
  <nav id="home" className="static h-[100px] max-[420px]:bg-gray-700 max-[420px]:h-[400px]">
     {/** <div className="relative">
      <Image
        className="absolute h-[600px] "
        src="/fondocheto.jpg"
        alt="fondogalactico"
        width={5000}
        height={0}
      />
    </div> */}

     <div className="static bg-white-200 bottom-[0px] w-[300px] h-[180px]">
      <a href="#destino-somos">
        <Image
          className="absolute top-[10px] left-[250px] rounded-[100px] bg-white-200 w-[900px] h-[600px] max-[420px]:top-[100px] max-[420px]:left-[650px] max-[420px]:h-[900px]"
          src="/logosvg.svg"
          alt="CMM Logo"
          width={0}
          height={0}
          priority
        />
      </a>
    </div> 

    <span className="relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-family-raleway text-5xl text-black-300 text-[90px]">
      {' '}
    </span>
    <span className="relative left-[50px] transform -translate-x-1/2 bottom-[170px] text-[80px] max-[420px]:text-[200px] text-black-200 font-light font-roboto max-[420px]:left-[600px] max-[420px]:font-light max-[420px]:text-cyan-600">
      CMM
    </span>
    <span className="relative text-[20px] bottom-[140px] right-[200px] text-black-200 max-[420px]:text-[60px] max-[420px]:right-[40px] max-[420px]:bottom-[100px] max-[420px]:font-semibold">
      SEGURIDAD ELECTRONICA.
    </span>

    <div className="relative bottom-[0px] top-[200px]">
      <div
        id="ICONO-ALARMAS"
        className="scroll-smooth relative w-[120px] h-[120px] bottom-[200px] left-[60px] opacity-50 transition ease-in-out delay-150 bg-indigo-200 hover:-translate-y-1 hover:scale-110 hover:opacity-100 duration-300 group shadow-2xl rounded-[60px] border-indigo-900 px-5 py-4 transition-colors border-gray-300 bg-gray-200 max-[420px]:top-[200px] max-[420px]:w-[400px] max-[420px]:h-[400px] max-[420px]:rounded-[200px] max-[420px]:left-[200px]"
      >
        <a href="#alarmasmonitoreadasdetail" className="scroll-smooth">
          <span className="relative h-[100px] w-[45px] top-[10px] left-[20px] inline-block transition-transform motion-reduce:transform-none max-[420px]:w-[200px] max-[420px]:top-[50px] max-[420px]:left-[90px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M384 480c0 11.7 3.1 22.6 8.6 32H392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L490.7 166.3C447.2 181.7 416 223.2 416 272v24.6c-19.1 11.1-32 31.7-32 55.4V480zM528 240c-17.7 0-32 14.3-32 32v48h64V272c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32V272z" />
            </svg>
          </span>

          <h2
            id="ICONO-ALARMAS"
            className={`relative text-[12px] left-[15px] h-[2px] bottom-[55px] justify-content font-semibold max-[420px]:top-[110px] max-[420px]:text-[50px] max-[420px]:left-[80px]`}
          >
            Alarmas
          </h2>

          <h2 className={`relative text-[11px] left-[5px] bottom-[40px] font-semibold max-[420px]:top-[150px] max-[420px]:text-[45px] max-[420px]:left-[32px]`}>
            Monitoreadas
          </h2>
        </a>
      </div>

      <div
        id="ICONO-CAMARAS"
        className="relative w-[120px] h-[120px] bottom-[320px] left-[260px] transition ease-in-out delay-150 bg-indigo-200 opacity-60 hover:-translate-y-1 hover:scale-110 hover:opacity-100 duration-300 group shadow-2xl rounded-[60px] border-indigo-900 px-5 py-4 transition-colors border-gray-300 bg-gray-200 max-[420px]:top-[600px] max-[420px]:w-[400px] max-[420px]:h-[400px] max-[420px]:rounded-[200px] max-[420px]:left-[200px] "
      >
        <a href="#camarasdetail">
          <span className="relative h-[100px] w-[45px] top-[10px] left-[20px] inline-block transition-transform motion-reduce:transform-none max-[420px]:w-[200px] max-[420px]:top-[50px] max-[420px]:left-[90px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
            </svg>
          </span>

          <h2
            id="ICONO-CAMARAS"
            className={`relative text-[12px] left-[15px] h-[2px] bottom-[55px] justify-content font-semibold max-[420px]:text-[50px] max-[420px]:left-[80px] max-[420px]:top-[100px] `}
          >
            Camaras
          </h2>

          <h2 className={`relative text-[11px] left-[5px] bottom-[40px] font-semibold max-[420px]:text-[45px] max-[420px]:left-[40px] max-[420px]:top-[150px]`}>
            de seguridad
          </h2>
        </a>
      </div>

      <div
        id="ICONO-CONTACTO"
        className="relative w-[120px] h-[120px] bottom-[440px] left-[950px] opacity-60 transition ease-in-out delay-150 bg-indigo-200 hover:-translate-y-1 hover:scale-110 hover:opacity-100 duration-300 group shadow-2xl rounded-[60px] border-indigo-900 px-5 py-4 transition-colors border-gray-300 bg-gray-200 max-[420px]:bottom-[600px] max-[420px]:w-[400px] max-[420px]:h-[400px] max-[420px]:rounded-[200px] max-[420px]:left-[1000px]"
      >
        <a href="#contactodetail">
          <span className="relative h-[100px] w-[45px] top-[10px] left-[20px] inline-block max-[420px]:w-[200px] max-[420px]:top-[50px] max-[420px]:left-[90px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" />
            </svg>
          </span>

          <h2
            id="ICONO-CONTACTO"
            className={`relative text-[10px] left-[20px] h-[20px] bottom-[40px] justify-content font-semibold max-[420px]:text-[50px] max-[420px]:left-[80px] max-[420px]:top-[150px]`}
          >
            Contacto
          </h2>
        </a>
      </div>

      <div
        id="ICONO-TIENDA"
        className="relative w-[120px] h-[120px] left-[1150px] bottom-[560px] opacity-60 transition ease-in-out delay-150 bg-indigo-200 hover:-translate-y-1 hover:scale-110 hover:opacity-100 duration-300 group shadow-2xl rounded-[60px] border-indigo-900 px-5 py-4 transition-colors border-gray-300 bg-gray-200 max-[420px]:bottom-[200px] max-[420px]:w-[400px] max-[420px]:h-[400px] max-[420px]:rounded-[200px] max-[420px]:left-[1000px]"
      >
        <a href="#tiendavirtual">
          <span className="relative h-[100px] w-[45px] top-[18px] left-[15px] inline-block max-[420px]:w-[200px] max-[420px]:top-[50px] max-[420px]:left-[90px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </span>

          <h2
            id="ICONO-TIENDAVIRTUAL"
            className={`relative text-[10px] left-[8px] h-[20px] bottom-[40px] justify-content font-semibold max-[420px]:text-[50px] max-[420px]:left-[10px] max-[420px]:top-[120px]`}
          >
            Tienda Virtual
          </h2>
        </a>
      </div>
    </div>
  </nav>
</div>

   
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
    <svg xmlns="http://www.w3.org/2000/svg" height='2em' viewBox="0 0 448 512">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
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
</div>



<footer className="fixed flex items-center justify-center bottom-0 mt-30 left-0 w-full h-6 border-t bg-gradient-to-r from-blue-500 to-white-500 max-[320px]:h-[100px]">
  <p className="text-black-500 max-[320px]:text-[40px]">© 2023 CMM. San Miguel del Monte - Cañuelas - Lobos.</p>
  <span className='ml-2'>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
    </svg>
  </span>
</footer>

  
    </main>
  )
}
