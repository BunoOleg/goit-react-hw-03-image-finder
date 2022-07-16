import styles from './Loader.module.css';
import PropTypes from 'prop-types';
import { BallTriangle } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loader = ({ searchQuery }) => {
  return (
    <div className={styles.Loader}>
      <BallTriangle
        height="200"
        width="200"
        color="#3f51b5"
        ariaLabel="loading"
      />
      <p className={styles.Text}>Searching results for {searchQuery}</p>
    </div>
  );
};

Loader.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default Loader;
