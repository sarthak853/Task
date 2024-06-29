const images = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
    { src: 'image4.jpg', alt: 'Image 4' },
    { src: 'image5.jpg', alt: 'Image 5' },
    { src: 'image6.jpg', alt: 'Image 6' },
  ];
  
  const ImageItem = ({ image, onClick }) => {
    return (
      <div className="image-item" onClick={() => onClick(image)}>
        <img src={image.src} alt={image.alt} />
      </div>
    );
  };
  
  const ImageModal = ({ image, onClose }) => {
    return (
      <div className="image-modal">
        <div className="modal-content">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <img src={image.src} alt={image.alt} />
        </div>
      </div>
    );
  };
  
  const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);
  
    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  
    const handleModalClose = () => {
      setSelectedImage(null);
    };
  
    return (
      <div className="image-gallery">
        <div className="image-grid">
          {images.map((image, index) => (
            <ImageItem key={index} image={image} onClick={handleImageClick} />
          ))}
        </div>
        {selectedImage && (
          <ImageModal image={selectedImage} onClose={handleModalClose} />
        )}
      </div>
    );
  };
  
  ReactDOM.render(<ImageGallery />, document.getElementById('root'));