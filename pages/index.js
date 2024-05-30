import About, { BackgroundCellAnimation, LampDemo } from '@/components/About';

import HeroScreen from '@/components/HeroScreen';
import Footer from '@/components/Layouts/Footer';
import Navbar from '@/components/Layouts/Navbar';
import Uses from '@/components/Uses';
import Tokenomics from '@/components/tokenomic';

import { HoverEffect, MovingLine, Radar } from '@/components/usecases';

export default function Home() {


  return (
    <>
    <Navbar/>
      <HeroScreen/>
      <MovingLine/>
      <Tokenomics/>
      <Uses/>
      <BackgroundCellAnimation/>
      <Footer/>

    </>
  );
}
