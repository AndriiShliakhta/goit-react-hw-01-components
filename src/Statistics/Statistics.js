import React from 'react';
import PropTypes from 'prop-types';
import { Section, List, Item } from './statisticsStyle';

function BGColour() {
  return Math.round(255 * Math.random());
}

export default function Statistics({ stats, title }) {
  return (
    <Section>
      {title && <h2>{title}</h2>}
      <List>
        {stats.map(item => {
          return (
            <Item
              key={item.id}
              style={{
                backgroundColor: `rgb(${BGColour()}, ${BGColour()}, ${BGColour()})`,
              }}
            >
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </Item>
          );
        })}
      </List>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
