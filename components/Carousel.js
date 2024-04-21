'use client';

import { Carousel } from 'flowbite-react';
import SpinnerLoading from "@/components/spinner";

export default function DefaultCarousel({item, loading}) {

  return (
    <>
      {
        item ? 
        <div id="default-carousel" className="w-full md:h-96" data-carousel="slide">
          {
            loading ? 
            <SpinnerLoading />
            :
              <Carousel slideInterval={5000}  >
                {
                  item.map((item, index) => 
                    <img
                    key={index}
                    alt="..."
                    src={item.gambar}
                    />
                    )
                }
              </Carousel>
          }
        </div>
        :
        <div id="default-carousel" class="relative w-full md:h-96" data-carousel="slide">
          <Carousel slide={false}  >
            <div className=''>
              <img
                alt="..."
                src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/9/27/c20e55c5-3024-4676-b593-c5f903403143.jpg.webp?ect=4g"
              />
              <span>takin</span>
            </div>
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            />
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            />
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            />
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            />
          </Carousel>
        </div>
      }
    </>
  )
}


