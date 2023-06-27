'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '../components/navbar'
import Script from 'next/script'
import type { NextPage } from "next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'


export default function Home() {
  useEffect(() => {
    AOS.init()
  }, []);
  const [tiltX1, setTiltX1] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const [tiltX2, setTiltX2] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const centerX1 = window.innerWidth / 4;
      const centerY = window.innerHeight / 2;
      const centerX2 = ((window.innerWidth / 4) + (window.innerWidth / 2));
      const maxTilt = 10;

      const tiltX1Percentage = (clientX - centerX1) / centerX1;
      const tiltX2Percentage = -(-clientX + centerX2) / centerX1;
      const tiltY1Percentage = (clientY - centerY) / centerY;

      const tiltX1 = maxTilt * tiltX1Percentage;
      const tiltX2 = maxTilt * tiltX2Percentage;
      const tiltY = maxTilt * tiltY1Percentage;

      setTiltX1(tiltX1);
      setTiltX2(tiltX2);
      console.log(tiltX2Percentage)
      setTiltY(-tiltY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  <Script src="https://unpkg.com/aos@next/dist/aos.js" ></Script >

  return (
    <main className={styles.main}>

      <Navbar />
      <div data-aos="fade-up" data-aos-duration="0.00" data-aos-offset="00"
        data-aos-delay="0">
        <div className={`${styles.banner}`}  >
          <div className={styles.bannerLeft}>
            <h1>
              Become a Financial Advisor and <span>Earn Rs.1 Lakh/Month</span>
            </h1>
            <p>No investment required</p>
            <Image className={styles.playstoreLogo} alt="google-play-logo" loading="lazy" width="162" height="48" decoding="async" src="/images/playstore-logo.svg"></Image>
          </div>
          <div >
            <Image
              className={styles.bannerRight}
              src="/images/banner.webp"
              alt="A Happy man with good earning"
              width={180}
              height={37}
              priority
            />
          </div>
        </div>
      </div>

      <div className={styles.topBrands}>
        <div className={styles.topBrandsText}>
          <p className='font-semibold text-2xl	'>
            Top Brands on ZET
          </p>
          <p className='text-lg	mt-2'>
            We are trusted by best brand in the country
          </p>
        </div>
        <div className="carousel-wrapper">

        </div>
      </div>

      <div className={styles.products}>
        <div className={styles.topBrandsText}>
          <p className='font-semibold text-2xl	'>
            Products on ZET          </p>
          <p className='text-lg	mt-2'>
            We are trusted by best brand in the country
          </p>
        </div>
        <Image className={styles.decoSide} alt="decorative stripes" loading="lazy" width="341" height="458" decoding="async" src="/images/cards/cardside.svg"></Image>
        <Image className={styles.decoSideDown} alt="decorative stripes" loading="lazy" width="341" height="458" decoding="async" src="/images/cards/cardside.svg"></Image>
        <div className={styles.grid} data-aos="fade-up"
          data-aos-duration="1000">
          <div className={styles.gridProduct}>
            <div className={`${styles.card} ${styles.creditCard} cartLeft`}>
              <Image className={styles.cardImage} alt="google-play-logo" loading="lazy" width="162" height="48" decoding="async" src="/images/cards/CC.webp"></Image>
              <div className={styles.chooseCardText}>

                <p className='font-semibold text-2xl	'>CREDIT CARDS</p>
                <p className='text-lg	mt-2'>100% Contactless Application Process with Instant Approval From Top Banks.</p>
              </div>
            </div>
          </div>
          <div className={styles.gridProduct}>
            <div className={`${styles.card} ${styles.creditCard} cartRight`}>
              <Image className={styles.cardImage} alt="google-play-logo" loading="lazy" width="162" height="48" decoding="async" src="/images/cards/CC.webp"></Image>

              <p className='font-semibold text-2xl	'>CREDIT CARDS</p>
              <p className='text-lg	mt-2'>100% Contactless Application Process with Instant Approval From Top Banks.</p>

            </div>
          </div>
          <div className={styles.gridProduct}>
            <div className={`${styles.card} ${styles.creditCard} cartLeft`}>
              <Image className={styles.cardImage} alt="google-play-logo" loading="lazy" width="162" height="48" decoding="async" src="/images/cards/CC.webp"></Image>
              <div className={styles.chooseCardText}>

                <p className='font-semibold text-2xl	'>CREDIT CARDS</p>
                <p className='text-lg	mt-2'>100% Contactless Application Process with Instant Approval From Top Banks.</p>
              </div>
            </div>
          </div>
          <div className={styles.gridProduct}>
            <div className={`${styles.card} ${styles.creditCard} cartRight`}>
              <Image className={styles.cardImage} alt="google-play-logo" loading="lazy" width="162" height="48" decoding="async" src="/images/cards/CC.webp"></Image>
              <div className={styles.chooseCardText}>

                <p className='font-semibold text-2xl	'>CREDIT CARDS</p>
                <p className='text-lg	mt-2'>100% Contactless Application Process with Instant Approval From Top Banks.</p>
              </div>
            </div>
          </div>
          <style jsx>{`
        .cartLeft:hover {
          transition: all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;
          transform: perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX1}deg) scale3d(1, 1, 1);
          box-shadow: rgba(0, 16, 60, 0.03) 3px 3px 18px 0px;
          background-color: white !important;
          .cardImage{
            filter: grayscale(0%);
          }
        }
        .cartRight:hover {
          transition: all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;
          transform: perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX2}deg) scale3d(1, 1, 1);
          box-shadow: rgba(0, 16, 60, 0.03) 3px 3px 18px 0px;
          background-color: white !important;
              .cardImage{
                filter: grayscale(0%);
              }
        };
      `}</style>


        </div>
      </div>
      <div className={styles.diagonalBg}>
        <div className={styles.diagonalInner}>
          <Image className={styles.diagonalImage} alt="peopleImage" loading="lazy" width="162" height="48" decoding="async" src="/images/diagonalimage.webp"></Image>
          <div className={styles.diagonalText}>
            <p className='font-semibold text-sm	'>
              THE ZET EFFECT          </p>
            <p className='text-4xl font-extrabold		mt-2'>
              More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans</p>
          </div>
        </div>
      </div>

      <div className={styles.chooseUs}>
        <div className="chooseLeft">
          <Image className={styles.chooseStripe} alt="decorative Stripes" loading="lazy" width="223" height="641" decoding="async" src="/images/choosestripe.webp"></Image>
          <div className={styles.chooseText}>
            <p className='font-semibold text-xl	'>
              Why <span>Choose Us</span> </p>
            <p className='text-lg	mt-2'>Why we are loved by our customers</p>
            <Image className={styles.chooseUsImage} alt="Choose us" loading="lazy" width="277" height="374" decoding="async" src="/images/chooseushero.webp"></Image>
          </div>
        </div>
        <div className={styles.chooseRight}>
          <div className={`${styles.chooseCard} `}>
            <Image className={styles.chooseUsCard} alt="Choose us Investment" loading="lazy" width="128" height="128" decoding="async" src="/images/choose/investment.svg"></Image>
            <div className={styles.chooseCardText}>
              <p className='font-semibold text-xl	'>CREDIT CARDS</p>
              <p className='text-base	mt-1'>100% Contactless Application Process with Instant Approval From Top Banks.</p>
            </div>
          </div>
          <div className={`${styles.chooseCard} `}>
            <Image className={styles.chooseUsCard} alt="Choose us Investment" loading="lazy" width="128" height="128" decoding="async" src="/images/choose/investment.svg"></Image>
            <div className={styles.chooseCardText}>
              <p className='font-semibold text-xl	'>CREDIT CARDS</p>
              <p className='text-base	mt-1'>100% Contactless Application Process with Instant Approval From Top Banks.</p>
            </div>
          </div>
          <div className={`${styles.chooseCard} `}>
            <Image className={styles.chooseUsCard} alt="Choose us Investment" loading="lazy" width="128" height="128" decoding="async" src="/images/choose/investment.svg"></Image>
            <div className={styles.chooseCardText}>
              <p className='font-semibold text-xl	'>CREDIT CARDS</p>
              <p className='text-base	mt-1'>100% Contactless Application Process with Instant Approval From Top Banks.</p>
            </div>
          </div>
          <div className={`${styles.chooseCard} `}>
            <Image className={styles.chooseUsCard} alt="Choose us Investment" loading="lazy" width="128" height="128" decoding="async" src="/images/choose/investment.svg"></Image>
            <div className={styles.chooseCardText}>
              <p className='font-semibold text-xl	'>CREDIT CARDS</p>
              <p className='text-base	mt-1'>100% Contactless Application Process with Instant Approval From Top Banks.</p>
            </div>
          </div>
          <div className={`${styles.chooseCard} `}>
            <Image className={styles.chooseUsCard} alt="Choose us Investment" loading="lazy" width="128" height="128" decoding="async" src="/images/choose/investment.svg"></Image>
            <div className={styles.chooseCardText}>
              <p className='font-semibold text-xl	'>CREDIT CARDS</p>
              <p className='text-base	mt-1'>100% Contactless Application Process with Instant Approval From Top Banks.</p>
            </div>
          </div>
          <div className={`${styles.chooseCard} `}>
            <Image className={styles.chooseUsCard} alt="Choose us Investment" loading="lazy" width="128" height="128" decoding="async" src="/images/choose/investment.svg"></Image>
            <div className={styles.chooseCardText}>
              <p className='font-semibold text-xl	'>CREDIT CARDS</p>
              <p className='text-base	mt-1'>100% Contactless Application Process with Instant Approval From Top Banks.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.startEarning}>
        <div className={styles.earningText}>
          <p className='font-semibold text-sm	'>
            THE ZET EFFECT          </p>
          <p className='text-4xl font-extrabold		mt-2'>
            More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans</p>
        </div>
        <div className={styles.earning}></div>
        <div className={styles.earningLeft}>
          <p className={styles.earningStep}>Step 1</p>
          <p>Start earning upto ₹ 1 Lakh every month</p>
        </div>
        <div className={styles.earningRight}>
          <Image className={styles.diagonalImage} alt="background" loading="lazy" width="162" height="48" decoding="async" src="/images/earningbg.svg"></Image>
        </div>
      </div> */}

    </main>
  )
}
