import React, { Component } from 'react';
import './styles.css';
class Table extends Component {
  render() {
    const rows = 10;
    const cols = 10;

    const tableRows = [];

    for (let i = 0; i < rows; i++) {
      const tableCells = [];
      for (let j = 0; j < cols; j++) {
        const cellKey = `${i}-${j}`;
        tableCells.push(
          <td
            key={cellKey}
            onClick={() => this.handleCellClick(cellKey)}
          >{cellKey}sds</td>
        );
      }
      tableRows.push(<tr key={i}>{tableCells}</tr>);
    }

    return (
        <table className="custom-table">
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  }

  handleCellClick = (cellKey) => {
    console.log(`Tıklanan hücre: ${cellKey}`);
    // Burada tıklanan hücreye yapılmak istenen işlemi ekleyebilirsiniz.
  }
}

export default Table;
