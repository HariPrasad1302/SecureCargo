import Head from 'next/head';
import { useEffect } from 'react';
import { initAnimation } from './animation';

export default function HeroScreen() {
  useEffect(() => {
    initAnimation();
  }, []);

  return (
    <>
    <div id="large-header" className="bg-[url('/cargo3.png')]  bg-cover  min-h-screen">
    <canvas id="demo-canvas" className="absolute inset-0"></canvas>

    <div  className=" w-full flex items-center justify-center min-h-screen">
        {/* Overlay */}
          <div className="container mx-auto flex items-center flex-col md:flex-row">
            {/* Content */}
            <div className="md:w-3/4 mr-4 relative z-10">
              <div className=" p-4 md:p-8 text-white">
                <h2 className='uppercase font-semibold text-[2.2em] md:text-[5.0em] tracking-[0.1em]'>SECURE <span className='font-light'>CARGO</span></h2>
                <p className='mx-auto max-w-2xl'>
                  Secured Cargo is a decentralised platform that links the physical world of trade and transport 
                  with the main goal of making cargo document transfer simpler, trustworthy and efficient. 
                  It provides a transparent method of payment and reconciliation and provides insurance and an 
                  invoice for cargo. Secured Cargo also provides an effective track and trace solution for the entire 
                  cargo process. Secured Cargo uses Blockchain technology to create a user-focused platform for 
                  the cargo process.
                </p>

                <div className='ml-2 mt-12'>
                  <a href="#_" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                    <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                    <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                    <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                    <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                    <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                    <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                    <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                    <span class="relative">Explore Secure Cargo</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Box Container */}
            <div className="box-container flex items-center justify-center md:w-1/2 relative z-10">
              <div className="box relative z-20">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="content space-y-8">
                  <h2 className='text-xl mt-2 underline'>SECURED CARGO - DECENTRALIZED PLATFORM</h2>
                  <p className=' mx-auto max-w-sm'>
                    Secured Cargo is a decentralised platform that links the physical world of trade and transport 
                    with the main goal of making cargo document transfer simpler, trustworthy and efficient. 
                    It provides a transparent method of payment and reconciliation and provides insurance and an 
                    invoice for cargo. Secured Cargo also provides an effective track and trace solution for the entire 
                    cargo process. Secured Cargo uses Blockchain technology to create a user-focused platform for 
                    the cargo process.
                  </p>
                </div>
              </div>
            </div>
          </div>

        {/* Background Image with Blur */}
        {/* <div className="absolute inset-0">
          <div className=""></div>
          <canvas id="demo-canvas" className="absolute inset-0"></canvas>
        </div> */}
      </div>

    </div>
      
    </>
  );
}
