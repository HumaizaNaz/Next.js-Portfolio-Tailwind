import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // import the icons
import { IoMdMail } from 'react-icons/io'; // another icon library

const Footer = () => {
  return (
    <div className="mt-8 bg-[#ff7f50] pt-9">
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          <div className="md:w-[316px]">
            <p className="text-[18px] font-medium text-white">
              <span className="text-white font-extrabold">
                <span className="text-rose-600">Humaiza</span> Naz
              </span>
            </p>
            <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
            Welcome to my portfolio! I am a web developer with expertise in HTML, CSS, Tailwind CSS, and Next.js. I create responsive, dynamic, and accessible websites that provide seamless user experiences. Whether it is building a personal portfolio or a complex web application, my goal is always to deliver high-quality results with attention to detail.
            </p>
            <div className="mt-[18px] flex gap-4">
              <Link className="hover:scale-110" target="_blank" href="#">
                <FaFacebookF size={36} className="text-white" />
              </Link>
              <Link className="hover:scale-110" target="_blank" href="/">
                <FaLinkedinIn size={36} className="text-white" />
              </Link>
              <Link className="hover:scale-110" target="_blank" href="/">
                <FaInstagram size={36} className="text-white" />
              </Link>
              <Link className="hover:scale-110" target="_blank" href="">
                <FaTwitter size={36} className="text-white" />
              </Link>
              <Link className="hover:scale-110" target="_blank" href="https://www.youtube.com/">
                <FaYoutube size={36} className="text-white" />
              </Link>
            </div>
          </div>
          <div className="md:w-[316px]">
            <div className="mt-[23px] flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                <FaPhoneAlt size={24} className="text-white" />
              </div>
              <div className="ml-[18px]">
                <Link href="tel:+911800123444" className="font-Inter text-[14px] font-medium text-white">
                  +92 312-1234567
                </Link>
                <p className="font-Inter text-[12px] font-medium text-white"> Number</p>
              </div>
            </div>
            <div className="mt-[23px] flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                <IoMdMail size={24} className="text-white" />
              </div>
              <div className="ml-[18px]">
                <Link href="mailto:help@lorem.com" className="font-Inter text-[14px] font-medium text-[#fff]">
                humaizaasghar@gmail.com
                </Link>
                <p className="font-Inter text-[12px] font-medium text-[#fff]">Support Email</p>
              </div>
            </div>
            <div className="mt-[23px] flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                <FaEnvelope size={20} className="text-white" />
              </div>
              <div className="ml-[18px]">
                <Link href="mailto:contact@lorem.com" className="font-Inter text-[14px] font-medium text-white">
                https://www.linkedin.com/in/humaiza-naz
                </Link>
                <p className="font-Inter text-[12px] font-medium text-white">General Inquiry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

