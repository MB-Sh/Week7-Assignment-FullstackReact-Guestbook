export default function GalleryPage() {
    return (
      <>
        <h2>Photo Gallery</h2>
        <p>Check out some of the amazing travel photos we have!</p>
  
        <div className="gallery">
          <img
            src="https://cdn.pixabay.com/photo/2016/07/13/10/56/rice-1514141_640.jpg"
            alt="Bali, Indonesia"
          />
          <img
            src="https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416135_640.jpg"
            alt="Santorini, Greece"
          />
          <img
            src="https://cdn.pixabay.com/photo/2023/11/06/11/28/scotland-8369454_640.jpg"
            alt="Scottish Highlands"
          />
          <img
            src="https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045037_640.jpg"
            alt="Dubai"
          />
        </div>
      </>
    );
  }
  