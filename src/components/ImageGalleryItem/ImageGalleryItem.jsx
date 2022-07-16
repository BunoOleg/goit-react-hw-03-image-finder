import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ result, onClick, modalSrcFetcher }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={onClick}>
      <img
        src={result.webformatURL}
        alt={result.tags}
        className={styles.ImageGalleryItemImage}
        onClick={modalSrcFetcher}
        srcSet={result.largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  result: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
  modalSrcFetcher: PropTypes.func.isRequired,
};

export default ImageGalleryItem;