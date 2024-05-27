import About, { BackgroundCellAnimation, LampDemo } from '@/components/About';
import Web3TokenStory from '@/components/About';
import Features from '@/components/Features';
import HeroScreen from '@/components/HeroScreen';
import { LampContainer } from '@/components/ui/lamp';

export default function Home() {


  return (
    <>
      <HeroScreen />
      {/* <Web3TokenStory/> */}
      <BackgroundCellAnimation/>
    </>
  );
}
