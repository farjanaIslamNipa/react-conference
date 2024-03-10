import footerLogo from '../../assets/react-white-logo.svg'
import facebookIcon from '../../assets/facebook.svg'
import twitterIcon from '../../assets/twitter.svg'
import linkedinIcon from '../../assets/linked-in.svg'
import webIcon from '../../assets/web.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-secondary pt-[42px] md:pt-[68px] pb-[45px] md:pb-[75px] flex justify-center px-8">
      <div>
        <Image src={footerLogo} alt="Logo" className='h-8 md:h-12 w-[116px] md:w-[176px] mx-auto' />
        <div className="mt-[48px] md:mt-[75px]">
          <div className="flex gap-x-[30px] md:gap-x-8 justify-center">
            <a href="#">
              <Image src={twitterIcon} alt="Twitter" className='h-6 w-6' />
            </a>
            <a href="#">
              <Image src={linkedinIcon} alt="Linkedin" className='h-6 w-6' />
            </a>
            <a href="#">
              <Image src={facebookIcon} alt="Facebook" className='h-6 w-6' />
            </a>
            <a href="#">
              <Image src={webIcon} alt="Website" className='h-6 w-6' />
            </a>
          </div>
          <p className='text-white text-base mt-6 md:mt-7'>&copy; {new Date().getFullYear()} Lemonhive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;