import { motion } from 'framer-motion';
import styles from '@/styles';
import {  TitleText, TypingText } from '@/components/ui/CustomTexts';
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion';
import StartSteps from './ui/Startstep';

export default function Uses() {
    // useEffect(() => {
    //   initAnimation();
    // }, []);
    const startingFeatures = [
        'Developers conduct a Pre-sale crypto to create hype around their project ahead of the ICO. Usually, the developers hope to see their token prices increase before the token goes public. ',
        'A dedicated bug bounty program is run by SecuredCargo, encourages researchers and white-hat hackers to examine our code and report any flaws they discover. ',
        'No need to beat around the bush, just stay on the gas and have fun',
      ];
  
    return (<>
    <section className={`${styles.paddings} bg-black relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col mr-12"
      >
        <TypingText title="| Uses of Secured Cargo" />
        <TitleText title={<>Blockchain-Based Cargo Management Strategies</>} />
        <div className="mt-8 flex flex-col max-w-[600px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''}${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
    </>)}

