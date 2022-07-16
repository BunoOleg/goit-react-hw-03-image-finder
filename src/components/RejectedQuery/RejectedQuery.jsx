import PropTypes from 'prop-types';
import styles from './RejectedQuery.module.css';

const RejectedQuery = ({ searchQuery }) => {
  return (
    <h1 className={styles.RejectedQuery}>Nothing found by "{searchQuery}" query</h1>
  );
};

RejectedQuery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default RejectedQuery;