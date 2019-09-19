import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';
import pricingPlanItems from '../../pricing-plan.json';

const linkicon = pricingPlanItems.map(item => {
  const valueItem = Object.values(item);

  return valueItem[1];
});

const PricingItem = ({ item = [] }) => {
  const { label, icon, capacity, price, description } = item;
  return (
    <div className={styles.pricingItem}>
      <img src={icon} alt="icon" className={styles.icon} />
      {(icon === linkicon[0] && (
        <h2 className={styles.labelBronze}>{label}</h2>
      )) ||
        (icon === linkicon[1] && (
          <h2 className={styles.labelSilver}>{label}</h2>
        )) ||
        (icon === linkicon[2] && <h2 className={styles.labelGold}>{label}</h2>)}
      <p className={styles.capacity}>{capacity} Storage</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}/MO</p>
      {(icon === linkicon[0] && (
        <button className={styles.buttonBronze} type="button">
          Get Started
        </button>
      )) ||
        (icon === linkicon[1] && (
          <button className={styles.buttonSilver} type="button">
            Get Started
          </button>
        )) ||
        (icon === linkicon[2] && (
          <button className={styles.buttonGold} type="button">
            Get Started
          </button>
        ))}
    </div>
  );
};

PricingItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PricingItem;
