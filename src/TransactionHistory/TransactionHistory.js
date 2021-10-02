import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transactions.module.css';
import { Table, Td, Th, Tr } from './transactionsStyle';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <Tr key={item.id} className={styles.row}>
              <Td>{item.type}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.currency}</Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};
