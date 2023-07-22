import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`bg-gradient-to-t from-gray-600 to-gray-500 ${inter.className}`} 
    > 
    
  <div id='CONTENEDORCMM' className="grid grid-rows-1 grid-cols-2 w-full bg-gradient-to-b from-cyan-600 to-cyan-800 mb-4">
    <span className="grid place-items-left ml-8 text-[40px] md:text-[80px] text-black-200 ">
      CMM
    </span>    
  </div>

<div id='CONTENEDORSEGURIDADELECTRONICA' className='flex fixed md:w-[300px] md:top-60 right-0 top-30 rounded-tl-[100px] rounded-bl-[100px] w-[200px] shadow-xl opacity-80 bg-gradient-to-l from-indigo-600 to-gray-400'>
<h1 className='flex font-extrabold md:text-xl text-xs p-1 md:p-4 ml-3 uppercase whitespace-nowrap'> Seguridad Electrónica</h1>
</div>

<div id='CONTENEDORICONOS' className='grid grid-rows-2 grid-cols-5 w-full'>

<div id="ICONO-ALARMAS"
        className="flex bg-gradient-to-t from-green-500 to-sky-500 mt-7 ml-2 w-[100px] opacity-50 rounded-[100px] h-[100px]"
      >
           
        <a href="#alarmasmonitoreadasdetail" className="">
          <span className="flex ml-6 mt-1">
           <svg clip-rule="evenodd" fill-rule="evenodd" height="50" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 1707 1707" width="50" xmlns="http://www.w3.org/2000/svg" id="fi_8977578"><g id="Layer_x0020_1"><path d="m1517 1499h-1327c-13 0-23-10-23-23v-707c0-21 22-27 35-19l649-594 661 591c12-2 28 5 28 22v707c0 13-10 23-23 23z" fill="#eee"></path><path d="m335 502c-13 0-23-10-23-23v-356c0-13 10-23 23-23h200c13 0 23 10 23 23v180c0 6-3 13-8 17l-200 176c-4 4-10 6-15 6z" fill="#828282"></path><path d="m853 216-673 592c-9 8-23 7-32-2l-81-90c-9-10-8-24 2-32l769-678c9-8 22-8 30 0l770 678c10 8 10 22 2 32l-82 90c-8 9-22 10-31 2z" fill="#a1a1a1" fill-rule="nonzero"></path><g fill="#cacaca"><path d="m1090 710c-11 0-17-11-12-20l52-89c9-15 31-2 23 13l-52 89c-2 4-7 7-11 7z"></path><path d="m601 710c-5 0-9-3-12-7l-51-89c-9-15 14-29 22-13l52 89c5 9-1 20-11 20z"></path><path d="m845 650c-7 0-13-5-13-13v-109c0-18 26-18 26 0v109c0 7-6 13-13 13z"></path></g><path d="m1169 1358h-632c-7 0-13-6-13-14l38-498c5-63 52-109 110-109h362c58 0 105 46 110 109l38 498c1 7-5 14-13 14z" fill="#848485"></path><path d="m885 1256h-64c-7 0-13-6-13-13v-136c0-17 23-18 26-3l39-2c4-12 25-11 25 5v136c0 7-5 13-13 13z" fill="#4a4a4a"></path><path d="m992 1358h-277c-8 0-13-6-13-13v-80c0-20 15-35 34-35h234c19 0 35 15 35 35v80c0 7-6 13-13 13z" fill="#6b6b6b"></path><path d="m784 1058h-52c-18 0-18-26 0-26h52c17 0 17 26 0 26z"></path><path d="m975 1058h-52c-17 0-17-26 0-26h52c17 0 17 26 0 26z"></path><path d="m700 1175c-13 0-21-13-21-29v-202c0-28 21-38 39-21l82 82c8 9 2 20-6 23v34c8 3 14 14 6 22l-82 83c-7 6-13 8-18 8z" fill="#cacaca"></path><path d="m1007 1175c-5 0-11-2-18-8l-82-83c-8-7-4-17 4-21v-36c-8-4-12-14-4-22l82-82c17-17 39-7 39 21v202c0 16-8 29-21 29z" fill="#cacaca"></path><path d="m853 1128c-45 0-83-37-83-83s38-83 83-83c46 0 83 37 83 83s-37 83-83 83z" fill="#b0b0b1"></path><path d="m1264 1498h-821c-7 0-13-6-13-13v-108c0-25 20-45 46-45h755c25 0 46 20 46 45v108c0 7-6 13-13 13z" fill="#d7d7d7"></path><path d="m1632 1707h-1558c-34 0-63-29-63-63v-127c0-35 29-63 63-63h1558c35 0 63 28 63 63v127c0 34-28 63-63 63z" fill="#828282"></path></g></svg>
          </span>

          <h2
            id="LEYENDAALARMAS"
            className={`text-[12px] ml-1 font-semibold]`}
          >
            Monitoreo de
          </h2>

       

          <h2 className={`text-[12px] ml-6 mb-2 font-semibold `}>
            Alarmas
          </h2>
        </a>
      </div>
      <div
        id="ICONO-CAMARAS"
        className="absolute mt-60 ml-2 w-[100px] h-[100px]  bg-gradient-to-b from-sky-200 to-sky-600 rounded-[100px]"
      >
        <a href="#camarasdetail">
          <span className="flex mt-2 ml-5">
            <svg id="fi_5541070" enable-background="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><g><path d="m97.487 197.476-56.197-.054-.017 21.163 62.282.061c3.891 0 7.291-2.1 9.129-5.228l30.289-52.169c-4.494-2.627-13.733-8.027-18.268-10.678z" fill="#717180"></path><g fill="#595965"><path d="m33.865 277.645c0 3.189-2.585 5.774-5.774 5.774-3.188 0-5.773-2.585-5.773-5.774l.136-139.368c0-3.189 2.585-5.774 5.774-5.774 3.188 0 5.774 2.585 5.774 5.774z"></path><path d="m39.873 165.983-17.473-.033-.082 84.005 17.473.033c1.597.003 2.973-.564 4.104-1.692s1.702-2.502 1.703-4.099l.059-72.413c.003-3.19-2.594-5.795-5.784-5.801z"></path><path d="m122.982 121.3 45.392 26.548-7.58 14.039c-3.546 6.058-12.015 9.284-18.068 5.744l-23.469-13.718c-6.053-3.541-7.402-12.51-3.861-18.568z"></path></g><path d="m234.293 150.211 37.861-17.38.841 1.125c2.184 2.921 3.79 6.244 4.734 9.767 1.956 7.296.959 15.127-2.821 21.674-3.797 6.577-10.025 11.315-17.355 13.278-7.294 1.954-15.122.956-21.667-2.822l-12.401-7.16z" fill="#a0e1fd"></path><path d="m235.517 151.562-16.835 28.789c-1.63 2.788-5.213 3.726-7.697 1.576l-134.822-78.834c-13.305-7.079-17.68-23.781-10.077-36.782l21.897-37.451c7.603-13.003 24.305-17.379 37.306-9.776 56.865 33.25 113.729 66.499 170.594 99.749.957.56 1.487 1.537 1.432 2.645s-.678 2.028-1.686 2.491z" fill="#595965"></path><path d="m158.002 110.131-47.869 12.826c2.866 1.676 5.84 3.415 8.891 5.199 14.459 8.455 30.663 17.929 45.395 26.543 25.488 14.903 46.566 27.229 46.566 27.229 2.484 2.151 6.067 1.212 7.697-1.576l16.835-28.79-68.76-40.252c-2.745-1.607-5.684-2.003-8.755-1.179z" fill="#717180"></path><path d="m110.146 51.888c-2.751-1.613-3.673-5.151-2.06-7.902s5.151-3.673 7.902-2.06l29.881 17.472c2.751 1.613 3.673 5.151 2.06 7.902s-5.151 3.673-7.902 2.06z" fill="#fdcd56"></path><path d="m273.639 37.968c1.933-3.337 6.206-4.476 9.543-2.543s4.476 6.206 2.543 9.543l-7.692 13.322c-1.933 3.337-6.206 4.476-9.543 2.543s-4.476-6.206-2.543-9.543zm-36.156-1.685c-.634-3.806 1.937-7.405 5.742-8.039s7.405 1.937 8.039 5.743l2.582 15.165c.634 3.806-1.937 7.405-5.742 8.039s-7.405-1.937-8.039-5.742zm62.93 26.033-14.424 5.346c-3.624 1.329-5.485 5.345-4.156 8.969s5.345 5.485 8.969 4.156l14.424-5.346c3.624-1.329 5.485-5.345 4.156-8.969s-5.345-5.485-8.969-4.156z" fill="#fdcd56"></path></g><g><path d="m400.192 212.342h28.25v108.179h-28.25z" fill="#595965"></path><path d="m432.561 207.698c2.565 0 4.644 2.079 4.644 4.644s-2.079 4.644-4.644 4.644h-36.489c-2.565 0-4.644-2.079-4.644-4.644s2.08-4.644 4.644-4.644z" fill="#424852"></path><path d="m442.582 299.931v182.04c0 8.108-6.571 14.679-14.679 14.679h-189.485c-8.108 0-14.679-6.571-14.679-14.679 0 0 0-142.033 0-182.04l109.421-88.715z" fill="#edebfd"></path><path d="m376.567 365.532h9.3v28.002h-16.225v-21.076c-.001-3.815 3.11-6.926 6.925-6.926zm20.754 0h9.299c3.815 0 6.926 3.111 6.926 6.926v21.076h-16.225zm16.225 39.456v21.076c0 3.814-3.111 6.926-6.926 6.926h-9.299v-28.001h16.225zm-27.68 28.002h-9.3c-3.814 0-6.926-3.111-6.926-6.926v-21.076h16.225v28.002z" fill="#a0e1fd"></path><path d="m261.168 355.846v140.804h75.544v-140.804c0-5.334-4.351-9.685-9.685-9.685h-56.174c-5.334.001-9.685 4.351-9.685 9.685z" fill="#efc7a4"></path><path d="m313.048 409.743c0-3.163 2.564-5.727 5.727-5.727s5.727 2.565 5.727 5.727v16.716c0 3.163-2.564 5.727-5.727 5.727s-5.727-2.564-5.727-5.727z" fill="#937661"></path><path d="m179.09 301.539 143.037-115.969c6.609-5.374 15.954-5.124 22.25.148l142.854 115.822c2.838 2.301 3.276 6.493.975 9.331l-13.672 16.864c-2.301 2.838-6.493 3.276-9.331.975l-132.042-107.055-132.042 107.054c-2.838 2.301-7.03 1.863-9.331-.975l-13.672-16.864c-2.302-2.838-1.864-7.03.974-9.331z" fill="#f76c82"></path></g></g></svg>
          </span>

          <h2
            id="ICONO-CAMARAS"
            className={`flex ml-6  text-[12px] font-semibold`}
          >
            Camaras
          </h2>

          <h2 className={`text-[12px] ml-8 font-semibold`}>
            CCTV
          </h2>
        </a>
      </div>     

<div id='CONTENEDORLOGOSVG' className="flex mt-[130px] ml-[60px] md:w-[300px] md:top-60 rounded-[100px] h-[100px] w-[100px] shadow-xl opacity-80 bg-gradient-to-l from-indigo-600 to-gray-400 ">
      <a href="#destino-somos">
        <Image
          className="flex mt-5"
          src="/logosvg.svg"
          alt="CMM Logo"
          width={100}
          height={0}
          priority
        />
      </a>
    </div> 

    

    <div className="">
      

      

      <div
        id="ICONO-CONTACTO"
        className="flex w-[100px] h-[100px] mt-8 ml-20 transition ease-in-out delay-150 bg-gradient-to-b from-sky-200 to-sky-600 opacity-70 hover:-translate-y-1 hover:scale-110 hover:opacity-100 duration-300 group shadow-2xl rounded-[100px] border-indigo-900 px-5 py-4 transition-colors border-gray-300 bg-gray-200"
      >
        <a href="#contactodetail">
          <span className="flex ml-1">
            <svg clip-rule="evenodd" fill-rule="evenodd" height="50" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 1707 1707" width="50" xmlns="http://www.w3.org/2000/svg" id="fi_7229022"><g id="Layer_x0020_1"><g id="_516668112"><path d="m1631 418h-135c-11 0-20-9-20-20v-138c0-11 9-20 20-20h135c42 0 76 34 76 75v27c0 42-34 76-76 76z" fill="#1d74bc"></path><path d="m1543 418h-47c-11 0-20-9-20-20v-138c0-11 9-20 20-20h47z" fill="#1a68a9"></path><path d="m1631 683h-135c-11 0-20-9-20-20v-138c0-11 9-20 20-20h135c42 0 76 34 76 75v27c0 42-34 76-76 76z" fill="#feb03d"></path><path d="m1543 683h-47c-11 0-20-9-20-20v-138c0-11 9-20 20-20h47z" fill="#fe9e37"></path><path d="m1631 948h-135c-11 0-20-9-20-20v-138c0-11 9-20 20-20h135c42 0 76 34 76 75v27c0 42-34 76-76 76z" fill="#f44142"></path><path d="m1543 948h-47c-11 0-20-9-20-20v-138c0-11 9-20 20-20h47z" fill="#dc3b3b"></path><path d="m1403 1698h-1116c-62 0-113-51-113-113v-1463c0-63 51-114 113-114h1116c62 0 113 51 113 114v1463c0 62-51 113-113 113zm-1038-1373c-33 0-60-27-60-59 0-33 27-60 60-60s60 27 60 60c0 32-27 59-60 59zm0 392c-33 0-60-27-60-60 0-32 27-59 60-59s60 27 60 59c0 33-27 60-60 60zm0 392c-33 0-60-27-60-60s27-59 60-59 60 26 60 59-27 60-60 60zm0 392c-33 0-60-27-60-60s27-60 60-60 60 27 60 60-27 60-60 60z" fill="#27aae2"></path><path d="m543 1698h-256c-62 0-113-51-113-113v-1463c0-63 51-114 113-114h256zm-178-1373c-33 0-60-27-60-59 0-33 27-60 60-60s60 27 60 60c0 32-27 59-60 59zm0 392c-33 0-60-27-60-60 0-32 27-59 60-59s60 27 60 59c0 33-27 60-60 60zm0 392c-33 0-60-27-60-60s27-59 60-59 60 26 60 59-27 60-60 60zm0 392c-33 0-60-27-60-60s27-60 60-60 60 27 60 60-27 60-60 60z" fill="#2399cb"></path><path d="m1279 1543h-525c-11 0-20-9-20-20s9-20 20-20h525c11 0 20 9 20 20s-9 20-20 20z" fill="#414143"></path><path d="m1279 204h-525c-11 0-20-9-20-20 0-12 9-20 20-20h525c11 0 20 8 20 20 0 11-9 20-20 20z" fill="#414143"></path><path d="m516 1698v-1690h-229c-62 0-113 51-113 114v1463c0 62 51 113 113 113zm-151-981c-33 0-60-27-60-60 0-32 27-59 60-59s60 27 60 59c0 33-27 60-60 60zm0 392c-33 0-60-27-60-60s27-59 60-59 60 26 60 59-27 60-60 60zm0 392c-33 0-60-27-60-60s27-60 60-60 60 27 60 60-27 60-60 60zm0-1176c-33 0-60-27-60-59 0-33 27-60 60-60s60 27 60 60c0 32-27 59-60 59z" fill="#414143"></path><g fill="#27aae2"><path d="m365 286h-345c-11 0-20-9-20-20s9-20 20-20h345c11 0 20 9 20 20s-9 20-20 20z"></path><path d="m365 677h-345c-11 0-20-9-20-20s9-20 20-20h345c11 0 20 9 20 20s-9 20-20 20z"></path><path d="m365 1069h-345c-11 0-20-9-20-20s9-20 20-20h345c11 0 20 9 20 20s-9 20-20 20z"></path><path d="m365 1461h-345c-11 0-20-9-20-20s9-20 20-20h345c11 0 20 9 20 20s-9 20-20 20z"></path></g><circle cx="1016" cy="853" fill="#2399cb" r="403"></circle><circle cx="1016" cy="853" fill="#fff" r="393"></circle><path d="m1293 1133c-71 70-169 114-277 114s-205-44-276-114c13-78 81-138 163-138h18v7c0 52 42 95 95 95s96-43 96-95c0-3 0-5 0-7h18c81 0 149 60 163 138z" fill="#dd291b"></path><path d="m1116 1009-22-76c-25 13-50 20-78 20s-52-7-77-20l-22 77c0 56 43 101 99 101s100-46 100-102z" fill="#e69b87"></path><path d="m1104 967-10-34c-25 13-50 20-78 20s-52-7-77-20l-10 34c25 20 54 33 87 33s62-13 88-33z" fill="#e98c7a"></path><path d="m1016 978c-73 0-133-81-154-161-1-1-1-3-1-4 1-80 50-108 96-108h9l4 1c38 0 66-9 81-25 12-12 12-26 12-26 0-5 1-10 5-13 3-4 8-5 13-5 77 9 96 102 95 155v3c-15 88-80 183-160 183z" fill="#e3ac96"></path><path d="m877 829c-6 0-11-3-14-9-38-75-36-155 3-219 34-54 89-88 144-88 46 0 85 24 112 68 20 1 73 14 78 103 6 101-25 120-35 124-5 1-11 1-15-3-4-3-7-8-7-13 0-1 2-97-50-118-3 9-8 20-18 30-22 23-57 34-105 34h-5c-1 0-1 0-2 0 0 0-2 0-6 0-23 0-63 10-63 75 0 8-5 14-13 16-1 0-2 0-4 0z" fill="#40484b"></path><path d="m658 870c0-217 176-393 393-393 54 0 105 11 152 30-56-30-119-47-187-47-217 0-393 176-393 393 0 110 45 209 117 280 1-6 2-12 4-18-54-67-86-152-86-245z" fill="#e6e6e6"></path></g></g></svg>
          </span>

          <h2
            id="ICONO-CONTACTO"
            className={`text-[15px] font-semibold`}
          >
            Contacto
          </h2>
        </a>
      </div>

      <div
        id="ICONO-TIENDA"
        className="flex w-[100px] h-[100px] mt-[110px] ml-20 bg-gradient-to-b from-sky-200 to-sky-600 rounded-[100px]  "
      >
        <a href="#tiendavirtual">
          <span className="flex ml-7 mt-2">
            <svg height="60" viewBox="0 0 64 64" width="60" xmlns="http://www.w3.org/2000/svg" id="fi_2898445"><g id="Online_Shopping-Shopping-Smartphone-Shopping_Bag-Commerce" data-name="Online Shopping-Shopping-Smartphone-Shopping Bag-Commerce"><path d="m42 9v36a6 6 0 0 1 -6 6h-20a6.013 6.013 0 0 1 -5.2-3v-.01a5.939 5.939 0 0 1 -.8-2.99v-36a6 6 0 0 1 6-6h20a6 6 0 0 1 5.98 5.55c.01.15.02.3.02.45z" fill="#5aaae7"></path><path d="m42 11.25v27.49a14.919 14.919 0 0 1 -4.35-2.88l-7.03 1.31 3.64-6.16a15 15 0 0 1 7.74-19.76z" fill="#3d9ae2"></path><path d="m60.77 25.6a15 15 0 0 1 -17.37 12.17 12.932 12.932 0 0 1 -1.4-.32 14.927 14.927 0 0 1 -6.35-3.59l-7.03 1.31 3.64-6.16a14.995 14.995 0 0 1 16.34-20.78 15 15 0 0 1 12.17 17.37z" fill="#ffd422"></path><path d="m52 23h-2v-5a2 2 0 0 0 -4 0v5h-2v-5a4 4 0 0 1 8 0z" fill="#ebbf00"></path><path d="m41 20v12a2.006 2.006 0 0 0 2 2h10a2.006 2.006 0 0 0 2-2v-12z" fill="#ebbf00"></path><path d="m53 28v2a2.006 2.006 0 0 1 -2 2h-10a2.006 2.006 0 0 1 -2-2v-2z" fill="#d1d3d4"></path><path d="m39 18h14v10h-14z" fill="#3d9ae2"></path><path d="m28 43a2.006 2.006 0 0 1 2 2 2.015 2.015 0 0 1 -2 2h-4a2.006 2.006 0 0 1 -2-2 2.015 2.015 0 0 1 2-2z" fill="#e6e7e8"></path><path d="m22.9 43.71a3.012 3.012 0 0 1 -.4 1.5l-.33.58a1.9 1.9 0 0 1 -.17-.79 1.955 1.955 0 0 1 .59-1.41 2.258 2.258 0 0 1 .29-.25c.01.12.02.25.02.37z" fill="#e6e7e8"></path><path d="m22.83 20.17a4.008 4.008 0 1 1 -2.83-1.17 4.025 4.025 0 0 1 2.83 1.17z" fill="#3d9ae2"></path><path d="m20.83 18.17a4.008 4.008 0 1 1 -2.83-1.17 4.025 4.025 0 0 1 2.83 1.17z" fill="#ffd422"></path><path d="m20.9 41.71a3 3 0 0 0 -5.6-1.5l-4.5 7.78a5.939 5.939 0 0 1 -.8-2.99v-15.98a2 2 0 0 0 -1.54 1.14l-4.54 9.85a9.908 9.908 0 0 0 -.92 4.18v17.81l16-.01v-4.34a6.024 6.024 0 0 0 -.86-3.09l-2.14-3.56 4.5-7.79a3.012 3.012 0 0 0 .4-1.5z" fill="#ffc477"></path><path d="m18 6h2v2h-2z" fill="#3d9ae2"></path><path d="m22 6h8v2h-8z" fill="#3d9ae2"></path><path d="m50 21h-2v-5a2 2 0 0 0 -4 0v5h-2v-5a4 4 0 0 1 8 0z" fill="#1e81ce"></path><path d="m15.757 18h8.485v2h-8.485z" fill="#ed1c24" transform="matrix(.707 -.707 .707 .707 -7.577 19.707)"></path><g fill="#1e81ce"><path d="m25 18h4v2h-4z"></path><path d="m25 22h4v2h-4z"></path></g></g></svg>
          </span>

          <h2
            id="LEYENDA-TIENDAVIRTUAL"
            className={`flex ml-3 text-[11px] font-semibold `}
          >
            Tienda Virtual
          </h2>
        </a>
      </div>
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
