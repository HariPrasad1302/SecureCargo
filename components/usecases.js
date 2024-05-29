import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export const MovingLine = () => {
  const transition = {
    duration: 14,
    ease: "easeInOut",
  };

const ref = useRef(null);

// Track scroll progress, lies between 0 and 1.
const { scrollYProgress } = useScroll({
target: ref,
offset: ["end end", "start start"],
});

// when scroll progress reached 1, path length becomes 0.
const pathLengthValue = useTransform(scrollYProgress, [0, 1], [1, 0]);

const PATH = "M0.5 0.980671L0.5 1566.02";
return (

    <>
    <div id="fourth-section" className="min-h-screen bg-black">
        <div className="text-center">
            <h1 className="text-5xl font-bold text-white py-12 ">Tamper-Proof Documentation <br></br> and Tracking</h1>
        </div>
    <div
  className="max-w-6xl mx-auto flex flex-row space-x-10 py-16 items-start w-full "
  ref={ref}
>
  <svg
    width="1"
    height="1567"
    viewBox="0 0 1 1567"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path d={PATH} stroke="url(#paint0_linear_207_38)" />
    <defs>
      <linearGradient
        id="paint0_linear_207_38"
        x1="1"
        y1="-102.823"
        x2="1"
        y2="1566.02"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3879E7" stop-opacity="0" />
        <stop offset="1" stop-color="#3879E7" />
      </linearGradient>
    </defs>
    <motion.path
      // animatng pathLength value, goes from 1 to 0
      style={{
        pathLength: useSpring(pathLengthValue, {
          stiffness: 500,
          damping: 100,
        }),
      }}
      transition={transition}
      d={PATH}
      stroke="var(--blue-500)"
      strokeOpacity="1"
      strokeLinecap={"round"}
      strokeWidth="3"
    />
  </svg>
  <div className="flex flex-col w-full">
    {/* <Content /> */}
    <Content1 />
    <Content2 />
    <Content3/>
  </div>
</div>
    </div>
    </>
); };

{/* dummy content to fill up the screen */}

export const Content = () => {
  return (
    <div className="content w-full mb-10 ">
      <p className="text-2xl font-bold text-white  ">
      Digital Document Transfer

      </p>
      <p className="text-base font-normal text-neutral-300  ">
      Authentic and confidential business document transfer in a trusted and transparent digital ecosystem.
      </p>
      <div className="flex space-x-4 w-full ">
        <div className="w-full h-40 md:h-96 rounded-md bg-gradient-to-tr py-8 px-4 from-slate-800 to-slate-700 mt-4">
        <h1 className="text-white  text-lg mb-4">
Topic            </h1>
            <h1 className="text-white  text-md">
            If you look closely, you can see the path is being animated.If you look closely, you can see the path is being animated.If you look closely, you can see the path is being animated.If you look closely, you can see the path is being animated.If you look closely, you can see the path is being animated.If you look closely, you can see the path is being animated.
            </h1>
        </div>
        <div className="bg-[url('/useCase1.png')] bg-cover w-full h-40 md:h-96 rounded-md  mt-4">

        </div>
      </div>
    </div>
  );
};
export const Content1 = () => {
    return (
      <div className="content w-full mb-10 ">
        <p className="text-2xl font-bold text-white  ">
        Digital Document Transfer
  
        </p>
        <p className="text-base font-normal text-neutral-300  ">
        Authentic and confidential business document transfer in a trusted and transparent digital ecosystem.
        </p>
        <div className="flex space-x-4 w-full ">
        <div className="bg-[url('/useCase2.png')] bg-cover w-full h-40 md:h-96 rounded-md  mt-4">
  
  </div>
  <div className="w-full h-40 md:h-96 bg-gradient-to-tr from-slate-800 to-slate-700 rounded-md py-6 px-4  mt-4">
          <h1 className="text-white font-medium text-xl mb-4">
          Blockchain Based Solution
            </h1>
              <h1 className="text-white  text-md">
              If you look closely, you can see the path is being animated.If you look closely, you can see the path is being animated.If you look closely, you can see the path is being animated.If you look closely, you can see the path is being animated.If you look closely, you can see the path is being animated.If you look closely, you can see the path is being animated.
               </h1>
               <h1 className="text-white font-medium text-md mt-4">
Benefits :            </h1>
                <ul className="mt-2 ml-8 text-md space-y-2">
                    <li className="text-white">1. <span>Simplify the process of verifying certificates</span></li>
                    <li className="text-white">2. <span>Quick Drop Off</span></li>
                    <li className="text-white">3. <span>Visibility to different players</span></li>

                </ul>
          </div>
        </div>
      </div>
    );
  };
  export const Content2 = () => {
    return (
      <div className="content w-full mb-10 ">
        <p className="text-2xl font-bold text-white  ">
        Payments and Reconciliation
  
        </p>
        <p className="text-base font-normal text-neutral-300  ">
        Authentic and confidential business document transfer in a trusted and transparent digital ecosystem.
        </p>
        <div className="flex space-x-4 py-12 w-full ">
          <div className="w-full h-40 md:h-96 bg-gradient-to-tr from-slate-800 to-slate-700 rounded-md py-6 px-4  mt-4">
          <h1 className="text-white font-medium text-xl mb-4">
          Blockchain Based Solution
            </h1>
              <h1 className="text-white  text-md">
              Air cargo transportation is accompanied by financial settlements between airports, airlines, aircraft ground handlers, airport cargo handlers, forwarders, logistics companies and general agents for the sale of freight. Agents collect freight charges from shippers to pay to the carriers. Carriers then produce invoices to their agents for these sales. Each carrier prepares an invoice to each agent individually.              
               </h1>
               <h1 className="text-white font-medium text-md mt-4">
Benefits :            </h1>
                <ul className="mt-2 ml-8 text-md space-y-2">
                    <li className="text-white">1. <span>Simplify the process of verifying certificates</span></li>
                    <li className="text-white">2. <span>Quick Drop Off</span></li>
                    <li className="text-white">3. <span>Visibility to different players</span></li>

                </ul>
          </div>

          <div className="bg-[url('/useCase5.jpg')] bg-cover w-full h-40 md:h-96 rounded-md  mt-4">
  
          </div>
        </div>
      </div>
    );
  };
  export const Content3 = () => {
    return (
        <div className="content w-full mb-10 ">
        <p className="text-2xl font-bold text-white  ">
        Invoice Lending
  
        </p>
        <p className="text-base font-normal text-neutral-300  ">
        Invoice financing is a procedure by which businesses can obtain loans on unpaid bills. The businesses shall pay a share of the overall invoice sum to their lender.    
        </p>
        <div className="flex space-x-4 w-full ">
        <div className="bg-[url('/useCase3.png')] bg-cover w-full h-40 md:h-96 rounded-md  mt-4">
  
  </div>
  <div className="w-full h-40 md:h-96 bg-gradient-to-tr from-slate-800 to-slate-700 rounded-md py-6 px-4  mt-4">
          <h1 className="text-white font-medium text-xl mb-4">
          Blockchain Based Solution
            </h1>
              <h1 className="text-white  text-md">
              Using Blockchain in this system could enhance the transparency of the mutual settlements. Supplier uploads the invoice with all the required details like invoice amount, invoice date and credit period etc. Buyer attests the invoice saying all the information provided by the supplier is true and valid. List of Funders registered in this platform will bid for the invoice.               </h1>
               <h1 className="text-white font-medium text-md mt-4">
Benefits :            </h1>
                <ul className="mt-2 ml-8 text-md space-y-2">
                    <li className="text-white">1. <span>Simplify the process of verifying certificates</span></li>
                    <li className="text-white">2. <span>Quick Drop Off</span></li>
                    <li className="text-white">3. <span>Visibility to different players</span></li>

                </ul>
          </div>
        </div>
      </div>
    );
  };