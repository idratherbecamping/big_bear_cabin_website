import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    {
      src: "/IMG_4547.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_6750.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_6675.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_6672.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_6671.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_6668 2.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_6668.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_6664.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_6752.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_6656_hero.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_6655.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_6640.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_6639.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_6630.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_6339.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_6333.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_4554.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_4553.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_4548.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_4546.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_4545.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_4540.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_4539.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_4538.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_4532.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_4495.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_4494.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_4486.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_4456.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_3672.JPG",
      alt: "Cabin view"
    },
    {
      src: "/IMG_3321.JPG",
      alt: "Cabin view"
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="gallery" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Cabin Gallery
          </h2>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Take a virtual tour of our beautiful cabin and see what awaits you
          </p>
        </div>

        {/* Main Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-96 md:h-[500px] object-cover cursor-pointer"
              onClick={() => openModal(currentImage)}
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-900 p-2 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-900 p-2 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImage + 1} / {images.length}
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentImage(index);
                openModal(index);
              }}
              className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                currentImage === index ? 'ring-4 ring-amber-500' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-24 object-cover"
              />
            </button>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation in Modal */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;