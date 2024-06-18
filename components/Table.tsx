import React from 'react';

interface TableProps {
}

const Table: React.FC<TableProps> = () => {
  return (<table>
    <thead>
      <tr>
        <th scope="col">1</th>
        <th scope="col">2</th>
        <th scope="col">3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">4</th>
        <td>5</td>
        <td>6</td>
      </tr>
      <tr>
        <th scope="row">7</th>
        <td>8</td>
        <td>9</td>
      </tr>
      <tr>
        <th scope="row">10</th>
        <td>11</td>
        <td>12</td>
      </tr>
      <tr>
        <th scope="row">13</th>
        <td>14</td>
        <td>15</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th scope="row">16</th>
        <td>16</td>
        <td>17</td>
      </tr>
    </tfoot>
  </table>
  );
};

export default Table;