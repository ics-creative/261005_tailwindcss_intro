import { galleryItems } from '../data/galleryItems';
import { GalleryPreview } from './GalleryPreview';
import { GalleryTitle } from './GalleryTitle';
import { Fragment, useState } from 'react';

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="relative flex w-full max-w-7xl px-12">
      <ol className="w-full py-10 sm:w-3/5">
        {galleryItems.map((item, index) => (
          <Fragment key={item.title}>
            {/* 画像タイトル */}
            <GalleryTitle
              index={index}
              title={item.title}
              isActive={activeIndex === index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            />
          </Fragment>
        ))}
      </ol>

      {activeIndex !== null && (
        <GalleryPreview
          src={galleryItems[activeIndex].image}
          position={(activeIndex / (galleryItems.length - 1)) * 100}
        />
      )}
    </div>
  );
};
