import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import './App.css';
import Sol from "./img/v.png"
import Yatay from "./img/d.png"
import Sag from "./img/c.png"
import Dikey from "./img/y.png"
function Table({ stn, str, p1, p2 }) {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };


  
  const [tableData, setTableData] = useState([]);
  const [player, setPlayer] = useState(p1);
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);



  // Tablo verilerini oluştur
  const createTableData = (stn, str) => {
    const table = [];
    for (let i = 0; i < str; i++) {
      const row = [];
      for (let j = 0; j < stn; j++) {
        row.push({ cellText: `Cell ${i}-${j}`, isClicked: false, kazanan: "" });
      }
      table.push(row);
    }
    return table;
  };

  // Tablo verilerini başlat
  useState(() => {
    setTableData(createTableData(stn, str));
  }, [stn, str]);

  const skor = (p, scor) => {

    if (p === p1) { setPlayer1(player1 + scor) }
    if (p === p2) { setPlayer2(player2 + scor) }
  };
  // Hücreye tıklama işlevi
  const handleCellClick = (rowIndex, colIndex, pl) => {

    let shouldSetSira = true;
    let scor = 0;

    const updatedTableData = [...tableData];
    updatedTableData[rowIndex][colIndex].isClicked = true;
    setTableData(updatedTableData);

    for (var i = 0; i < tableData.length; i++) {
      for (var r = 0; r < tableData[i].length; r++) {
        if (i % 2 !== 0 && r % 2 !== 0) {
          if (tableData[i - 1][r].isClicked === true &&
            tableData[i + 1][r].isClicked === true &&
            tableData[i][r - 1].isClicked === true &&
            tableData[i][r + 1].isClicked === true &&
            tableData[i][r].kazanan === "") {

            const updatedTableData = [...tableData];
            updatedTableData[i][r].kazanan = pl;
            setTableData(updatedTableData);

            shouldSetSira = false;
            scor = scor + 1;

          }
        }
      }
    }


    if (shouldSetSira === true) {
      if (player === p1) { setPlayer(p2) }
      if (player === p2) { setPlayer(p1) }
    }
    if (scor > 0) {
      skor(pl, scor)
      scor = 0;
      console.log(scor)
    }

    shouldSetSira = false;







  };


  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ color: p1, fontSize: '20px', fontWeight: 'bold' }}>Player 1 = {player1} </div>
        <div style={{ color: p2, fontSize: '20px', fontWeight: 'bold' }}>Player 2 = {player2}</div>
      </div>
      <div style={{ color: player, height: "50px", fontSize: '20px' }}
      >
<Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      </div>
      <div style={{ color: player, height: "50px", fontSize: '20px' }}
      >

        Hamle Sırası  :  {player === p1 ? "Player 1" : "Player 2"}

      </div>
      <table>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  className={"sos"}
                  onClick={handleClick('bottom')}
                                  >
                  <img src={Dikey} className="resim" alt="Resim 1" />
                  <img src={Yatay} className="resim" alt="Resim 1" />
                  <img src={Sol} className="resim" alt="Resim 1" />
                  <img src={Sag} className="resim" alt="Resim 1" />
                  {/* <span>{rowIndex.toString()+colIndex.toString()}</span> */}




                  
                </td>

              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
