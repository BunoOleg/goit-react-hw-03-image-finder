import PropTypes from 'prop-types';
import styles from './IconButton.module.css';

const IconButton = ({ children, ...allyProps }) => (
  <button type="submit" className={styles.SearchFormButton} {...allyProps}>
    {children}
  </button>
);

IconButton.defaultProps = {
  children: null,
};

IconButton.propTypes = {
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;