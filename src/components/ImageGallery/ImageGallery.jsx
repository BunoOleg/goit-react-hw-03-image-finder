import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ children }) => {
  return <ul className={styles.ImageGallery}>{children}</ul>;
};

ImageGallery.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape),
};

export default ImageGallery;