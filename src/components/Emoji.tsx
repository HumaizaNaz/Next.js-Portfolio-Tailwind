// Import statements
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Emoji = () => {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS with a fade duration
  }, []);

  return (
    <>
      <div  className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900" id="reviews">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="mb-10 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-2xl font-bold text-[#ff7f50] dark:text-white md:text-4xl">
              We have some fans.
            </h2>
          </div>

          <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
            {/* First user review */}
            <div
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
              data-aos="fade-right"
            >
              <div className="flex gap-4">
                <Image
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt="user avatar"
                  width={400}
                  height={400}
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-[#ff7f50] dark:text-white">Daniella Doe</h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                </div>
              </div>
              <p className="mt-8">
              Humaiza work with HTML and CSS is fantastic. She creates clean, responsive websites that look great on any device. Her attention to detail and focus on accessibility and SEO make her stand out. I always trust her with web projects!
              </p>
            </div>

            {/* Second user review */}
            <div
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
              data-aos="fade-right"
            >
              <div className="flex gap-4">
                <Image
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/14.jpg"
                  alt="user avatar"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-[#ff7f50] dark:text-white">Jane Doe</h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p>
                </div>
              </div>
              <p className="mt-8">
              Humaiza is a Next.js expert. She builds fast, SEO-friendly sites with great performance. Her skills with SSR and static sites have really made a difference in our projects. Highly recommend working with her!
              </p>
            </div>

            {/* Third user review */}
            <div
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
              data-aos="fade-right"
            >
              <div className="flex gap-4">
                <Image
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/18.jpg"
                  alt="user avatar"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-[#ff7f50] dark:text-white">Yanick Doe</h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p>
                </div>
              </div>
              <p className="mt-8">
              Humaiza makes great use of Tailwind CSS. She creates beautiful, responsive designs quickly and efficiently. Her ability to prototype and customize layouts is impressive. A true pro when it comes to Tailwind!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Emoji;






