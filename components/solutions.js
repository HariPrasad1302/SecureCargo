"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [

  {
    title: "Secured Cargo Hybrid Blockchain ",
    description:
      "Secured Cargo uses a hybrid blockchain architecture. XinFin Blockchain is used for a private blockchain, that regulates who are the participants of cargo supply chain and has the entire transactions managed. The public blockchain, which supports all the applications and services on our platform, is powered by the XRC20 token on the XinFin Network. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "XinFin and Smart Contract ",
    description:
      "XinFin is a hybrid blockchain platform that is built to modernize global trade and finance through efficient, accessible, and decentralized structure. The public Ethereum (ETH) blockchain and the private Quorum blockchain are two well-known platforms from which XinFin has inherited much of its functionality. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Secured Cargo Platform ",
    description:
      "Basically, every mode of cargo transportation requires different documents to be submitted. Digital-based document transfer is quite popular and efficient because of the time and cost reductions. Digital document transfer is way more cost-efficient than physical document transfer as the documents are stored digitally and will remain in a database.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
