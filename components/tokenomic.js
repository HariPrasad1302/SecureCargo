import React, { useRef } from "react";
import { PieChart } from 'react-minimal-pie-chart';


const Tokenomics = () => {
  const toolTip = useRef(null);
  const dataMock = [
    { title: 'ICO', value: 38.15, color: '#3260ed' },
    { title: 'Team', value: 16.38, color: '#8ca8ff' },
    { title: 'PreICO', value: 16.05, color: '#3290ed' },
    { title: 'Reserve', value: 13.41, color: '#7af0d1' },
    { title: 'Advertisers', value: 10, color: '#32e4ed' },
    { title: 'Dev Wallet', value: 5, color: '#7c7af0' },
    { title: 'Airdrop', value: 1, color: '#32bbed' },
  ];

  const colors = {
    "ICO": "#3260ED",
    "PreICO": "#3290ed",
    "airdrop": "#32bbed",
    "Advertisers": "#32e4ed",
    "Team1": "#8CA8FF",
    "Team2": "#8CAC4F",
    "dev": "#7c7af0",
    "Reserve": "#7af0d1"
  };

  const data = {
    labels: ["Mar 22", "Apr 22", "May 22", "Jul 22", "Aug 22"],
    datasets: [{
      label: 'ICO(Hard Cap)',
      data: [29376000, 29376000, 29376000, 29376000, 29376000],
      backgroundColor: colors.ICO,
    }, {
      label: 'Pre ICO (Soft Cap)',
      data: [12362112, 12362112, 12362112, 12362112, 12362112],
      backgroundColor: colors.PreICO,
    }, {
      label: 'Airdrop',
      data: [0, 777700, 777700, 777700, 777700],
      backgroundColor: colors.airdrop,
    }, {
      label: 'Advertisers',
      data: [0, 0, 7700000, 7700000, 7700000],
      backgroundColor: colors.Advertisers,
    }, {
      label: 'Team-Pool-1',
      data: [0, 0, 7700000, 7700000, 7700000],
      backgroundColor: colors.Team1,
    }, {
      label: 'Team-Pool-2',
      data: [0, 0, 0, 4910295, 4910295],
      backgroundColor: colors.Team2,
    }, {
      label: 'Dev Wallet',
      data: [0, 0, 0, 0, 3850000],
      backgroundColor: colors.dev,
    }, {
      label: 'Reserve',
      data: [0, 0, 0, 0, 10323893],
      backgroundColor: colors.Reserve,
    }],
  };
  return (
    <main id="third-section" className="max-w-screen-xl flex items-center justify-center h-screen mx-20 gap-10">
        <div className="gap-10 w-1/2">
        <h1 className="text-5xl text-black font-bold mb-8">
          Tokenomics
        </h1>

        <p className="text-lg font-semibold text-gray-600 mb-5">
          &#8226; To 	begin with, Cargo will produce a constrained amount of 100 million Cargo Tokens to support its digital ecosystem.
        </p>
        <p className="text-lg font-semibold text-gray-600 mb-5">
          &#8226; Leverage blockchain for a tamper-proof and clear transaction
          record.
        </p>
        <p className="text-lg font-semibold text-gray-600 mb-5">
          &#8226; Protect your business with secure, immutable blockchain
          technology.
        </p>
        <p className="text-lg font-semibold text-gray-600 mb-5">
          &#8226; Reduce fees and increase profitability with our streamlined
          platform.
        </p>
        <p className="text-lg font-semibold text-gray-600 mb-5">
          &#8226; Grow your business with a platform that adapts to your
          evolving needs.
        </p>
      </div>{" "}
      <div className="w-1/2">
      <div className="flex ml-24 mainPieCgar">

      <PieChart
                  className="w-[23rem] h-[23rem]"
                  animationDuration={1000}
                  animate={true}
                  data={dataMock}
                  onMouseOver={(e, index) => {
                    if (toolTip.current) {
                      toolTip.current.innerHTML = dataMock[index].value + " %";
                      e.target.style.opacity = "0.8";
                      e.target.style.cursor = "pointer";
                      toolTip.current.style.top = e.pageY + "px";
                      toolTip.current.style.left = e.pageX + "px";
                      toolTip.current.classList.add('active');
                    }
                  }}
                  onMouseOut={(e, index) => {
                    if (toolTip.current) {
                      e.target.style.opacity = "1";
                      e.target.style.cursor = "auto";
                      toolTip.current.classList.remove('active');
                    }
                  }}
                  lineWidth={45}
                  labelPosition={75}
                  label={({ dataEntry }) => `${dataEntry.value}%`}
                  labelStyle={{
                    fontSize: '5px',
                    fontFamily: 'sans-serif',
                    fill: '#fff'
                  }}
                />
                <p className="text-black text-2xl font-medium">Total supply <small>1,000,00,00 DOC</small></p>

<div ref={toolTip} className="tooltip"></div>
</div>
      </div>
      
    </main>
  );
};

export default Tokenomics;