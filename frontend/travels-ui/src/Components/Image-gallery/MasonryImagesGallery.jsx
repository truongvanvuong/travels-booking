import galleryImages from "./galleryImgae";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 576: 1, 767: 2, 992: 4 }}>
      <Masonry gutter="1.7rem">
        {galleryImages.map((item, index) => {
          return (
            <img
              src={item}
              key={index}
              alt="Image"
              className="w-full block rounded-[10px] hover:scale-105 transition-transform"
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
