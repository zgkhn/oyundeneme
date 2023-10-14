import React, { Component } from 'react';
import './App.css'; // CSS dosyanızın adınıza göre düzenleyin

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(9)
        .fill(null)
        .map(() =>
          Array(9)
            .fill(null)
            .map(() => ({ 

              thickBorder: false,

      


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
                    className={'td-c'}
                    onClick={() => this.handleSquareClick(rowIndex, colIndex)}
                  >{rowIndex},{colIndex},</td>
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
      </div>
    );
  }
}

export default App;
