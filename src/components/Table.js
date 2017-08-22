import React from 'react';
import _ from 'lodash';

const Table = props => {
  const { data } = props;

  const firstElem = _.head(data) || {};
  const dataKeys = Object.keys(firstElem);

  const headers = dataKeys.map((i, idx) => {
    return (
      <th key={idx}>
        <a
          href
          onClick={e => {
            e.preventDefault();
            const invertDirection = props.sortDirection === 'asc' ? 'desc' : 'asc';
            const nextDirection = i === props.sortKey ? invertDirection : 'asc';

            props.sortBy(i, nextDirection);
          }}
        >
          {i} <span>V</span>
        </a>
      </th>
    );
  });

  const content = data.map((item, idx) => {
    const rowContent = dataKeys.map((key, index) =>
      <td key={index}>
        {item[key]}
      </td>
    );

    return (
      <tr key={idx}>
        {rowContent}
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          {headers}
        </tr>
      </thead>
      <tbody>
        {content}
        <tr className="tableTotal">
          <td>Total</td>
          <td>0</td>
          <td>0</td>
          <td>12500</td>
          <td>0</td>
          <td>0</td>
          <td>2</td>
          <td>0</td>
          <td>187</td>
          <td>22.17</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
