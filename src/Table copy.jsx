import React, { Component } from 'react';
import './styles.css';
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(3)
        .fill(null)
        .map(() =>
          Array(3)
            .fill(null)
            .map(() => ({ 

              thickBorder: false,
              deneme: "on"
      


            }))
        ),
    };
  }

  handleSquareClick = (row, col) => {
    const updatedGrid = this.state.grid.map((r, rowIndex) =>
      r.map((square, colIndex) => {
        if (rowIndex === row && colIndex === col) {
          return { thickBorder: !square.thickBorder };
        }
        return square;
      })
    );

    this.setState({ grid: updatedGrid });
  };

  render() {







    return (
      <div className="App">
        <table>
          <tbody>
            {this.state.grid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((square, colIndex) => (

                  colIndex % 2 === 0 && rowIndex % 2 === 0 ? (<>
                  <td
                    className={square.thickBorder ? 'thick-border' : 'td-a'}
                  ></td>
                  
                  </>)
: colIndex % 2 !== 0 && rowIndex % 2 !== 0 ?
(<>
<td
                    key={colIndex}
                    className={this.state.grid[rowIndex][colIndex] === true ? "deneme":""}
                    onClick={() => this.handleSquareClick(rowIndex, colIndex)}
                  >

{this.state.grid[rowIndex-1][colIndex] === true ? "true":"false"}
{/* {console.log(rowIndex-1,colIndex, ":",this.state.grid[rowIndex-1][colIndex])} */}
{console.log(square)}
                  </td>
</>):(<>
<td
                    key={colIndex}
                    className={square.thickBorder ? 'thick-border' : 'td-b'}
                    onClick={() => this.handleSquareClick(rowIndex, colIndex)}
                  ></td>
</>)

                ))}


                
              </tr>
            ))}
          </tbody>
        </table>
        {/* {console.log(this.state.grid[0][1])} */}
      </div>
    );
  }
}

export default Table;
