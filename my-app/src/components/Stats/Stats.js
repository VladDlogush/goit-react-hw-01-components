import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';
import color from './randomColor';

const Stats = ({ title, stats = [] }) => {
  return (
    <section className={styles.statsSection}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            className={styles.item}
            style={{ backgroundColor: `${color()}` }}
            key={stat.id}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.defaultProps = {
  title: 'Upload stats',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
