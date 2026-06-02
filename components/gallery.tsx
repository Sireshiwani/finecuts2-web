import Image from "next/image";

import { galleryImages } from "@/lib/site-images";

export default function Gallery() {
  return (
    <section id="gallery" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-4xl font-black sm:text-5xl">Transformation Gallery</h2>

        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {galleryImages.map((img) => (
            <div key={img.src} className="relative break-inside-avoid overflow-hidden rounded-3xl">
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={1000}
                className="w-full transition duration-500 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
