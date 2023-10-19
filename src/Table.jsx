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
import CachedIcon from '@mui/icons-material/Cached';
function Table({ stn, str, p1, p2 }) {


  const siraa = () => {
    if (player === p1) { setPlayer(p2) }
    if (player === p2) { setPlayer(p1) }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [dikey, setDikey] = React.useState();
  const [yatay, setYatay] = React.useState();
  const [deneme, setdeneme] = React.useState();

  const [sec1, setSec1] = React.useState("");
  const [sec2, setSec2] = React.useState("");
  const [sec3, setSec3] = React.useState("");

  const [sec1Dikey, setSec1Dikey] = React.useState("");
  const [sec1Yatay, setSec1Yatay] = React.useState("");

  const [sec2Dikey, setSec2Dikey] = React.useState("");
  const [sec2Yatay, setSec2Yatay] = React.useState("");

  const [sec3Dikey, setSec3Dikey] = React.useState("");
  const [sec3Yatay, setSec3Yatay] = React.useState("");
  const [deger11, setDeger1] = React.useState(0);
  const [deger21, setDeger2] = React.useState(0);
  console.log("sec1Dikey", sec1Dikey)
  console.log("sec1Yatay", sec1Yatay)

  console.log("sec2Dikey", sec2Dikey)
  console.log("sec2Yatay", sec2Yatay)

  console.log("sec3Dikey", sec3Dikey)
  console.log("sec3Yatay", sec3Yatay)


  const handleClick = (dikey, yatay) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
    setDikey(dikey);
    setYatay(yatay);


  };

  const sec = (dikey, yatay, veri, player) => (event) => {
    let shouldSetSira = true;
    let scor = 0; console.log("deger1", deger11)
    console.log("deger2", deger21)

    if (sec1 === "") {
      if (veri === "S") {
        setSec1Yatay(yatay)
        setSec1Dikey(dikey)
        setSec1(dikey.toString() + "." + yatay.toString())

      }
    } else if ((veri === "O") && (sec1Dikey === dikey - 1 || sec1Dikey === dikey || sec1Dikey === dikey + 1) &&
      (sec1Yatay === yatay - 1 || sec1Yatay === yatay || sec1Yatay === yatay + 1)) {

      setSec2(dikey.toString() + "." + yatay.toString())

      setSec2Yatay(yatay)
      setSec2Dikey(dikey)
      if (dikey > sec1Dikey) {
        setDeger1(dikey + 1)
      }
      if (dikey < sec1Dikey) {
        setDeger1(dikey - 1)

      }
      if (dikey === sec1Dikey) {
        setDeger1(dikey)

      }
      if (yatay === sec1Yatay) {
        setDeger2(yatay)

      }
      if (yatay > sec1Yatay) {
        setDeger2(yatay + 1)
      }
      if (yatay < sec1Yatay) {
        setDeger2(yatay - 1)
      }
      setSec3Yatay("")
      setSec3Dikey("")
      setSec3("")

    } else if (sec2 !== "" && veri === "S" && dikey === deger11 && yatay === deger21) {



      if (yatay === sec1Yatay) {

        const updatedTableData = [...tableData];
        updatedTableData[sec1Dikey][sec1Yatay].imgDikey = true;
        updatedTableData[sec2Dikey][sec2Yatay].imgDikey = true;
        updatedTableData[dikey][yatay].imgDikey = true;

        setTableData(updatedTableData);
      }
      if (dikey === sec1Dikey) {

        const updatedTableData = [...tableData];
        updatedTableData[sec1Dikey][sec1Yatay].imgYatay = true;
        updatedTableData[sec2Dikey][sec2Yatay].imgYatay = true;
        updatedTableData[dikey][yatay].imgYatay = true;

        setTableData(updatedTableData);
      }
      if ((dikey > sec1Dikey && yatay < sec1Yatay) || (dikey < sec1Dikey && yatay > sec1Yatay)) {

        const updatedTableData = [...tableData];
        updatedTableData[sec1Dikey][sec1Yatay].imgSag = true;
        updatedTableData[sec2Dikey][sec2Yatay].imgSag = true;
        updatedTableData[dikey][yatay].imgSag = true;

        setTableData(updatedTableData);
      }
      if ((dikey < sec1Dikey && yatay < sec1Yatay) || (dikey > sec1Dikey && yatay > sec1Yatay)) {

        const updatedTableData = [...tableData];
        updatedTableData[sec1Dikey][sec1Yatay].imgSol = true;
        updatedTableData[sec2Dikey][sec2Yatay].imgSol = true;
        updatedTableData[dikey][yatay].imgSol = true;

        setTableData(updatedTableData);
      }

      shouldSetSira = false;
      scor = scor + 1;


      setSec1Yatay("")
      setSec1Dikey("")
      setSec1("")
      setSec2("")
      setDeger2(0)
      setDeger1(0)
      setSec2Yatay("")
      setSec2Dikey("")
      setSec3Yatay("")
      setSec3Dikey("")
      setSec3("")
    } else {

      setSec1Yatay("")
      setSec1Dikey("")
      setSec1("")
      setSec2("")
      setDeger2(0)
      setDeger1(0)
      setSec2Yatay("")
      setSec2Dikey("")
      setSec3Yatay("")
      setSec3Dikey("")
      setSec3("")
    }
    if (shouldSetSira === true) {

    }
    if (scor > 0) {
      skor(player, scor)
      scor = 0;
      console.log(scor)
    }

    shouldSetSira = false;


  };

  const handlePopoverClose = () => {
    setOpen(false);
    setDikey("");
    setYatay("");
  };
  const guncelle = (deger) => {

    const updatedTableData = [...tableData];
    updatedTableData[dikey][yatay].veri = deger;
    setTableData(updatedTableData);


    setOpen(false);
    setDikey("");
    setYatay("");
  };
  console.log(deneme)

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
        row.push({ cellText: `Cell ${i}-${j}`, isClicked: false, veri: "", imgDikey: false, imgYatay: false, imgSag: false, imgSol: false });
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
        <Popper open={open} onClose={handlePopoverClose} anchorEl={anchorEl} placement="bottom" transition modifiers={[
          {
            name: 'arrow',
            enabled: true,

          },
        ]}>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={10}>
              <Paper>
                <Button onClick={() => guncelle("O")}>O</Button>
                <Button onClick={() => guncelle("S")}>S</Button>
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
                  className={"sos " + ((sec1 === (rowIndex.toString() + "." + colIndex.toString()) || sec2 === (rowIndex.toString() + "." + colIndex.toString()) || sec3 === (rowIndex.toString() + "." + colIndex.toString())) ? "secim" : "")}


                  //onClick={handleClick(rowIndex,colIndex)}
                  // onClick={ cell.veri ? handleCellClick(rowIndex,colIndex): handleClick(rowIndex,colIndex)}
                  onClick={cell.veri !== "" ? sec(rowIndex, colIndex, cell.veri, player) : handleClick(rowIndex, colIndex)}
                >



                  {cell.imgDikey ? (<><img src={Dikey} className="resim" alt="Resim 1" /></>) : ""}
                  {cell.imgYatay ? (<><img src={Yatay} className="resim" alt="Resim 1" /></>) : ""}
                  {cell.imgSag ? (<><img src={Sag} className="resim" alt="Resim 1" /></>) : ""}
                  {cell.imgSol ? (<><img src={Sol} className="resim" alt="Resim 1" /></>) : ""}

                  {/* <img src={Dikey} className="resim" alt="Resim 1" />
                  <img src={Yatay} className="resim" alt="Resim 1" />
                  <img src={Sol} className="resim" alt="Resim 1" />
                  <img src={Sag} className="resim" alt="Resim 1" /> */}


                  <span>{cell.veri}</span>


                </td>

              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ color: player, height: "20px", fontSize: '20px' }}>
      </div>
      <Button onClick={() => siraa()}
        component="label" variant="contained" startIcon={<CachedIcon />}>
        Sıra Değiştir
      </Button>
      {/* {open && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'transparent',
            zIndex: 999,
          }}
          onClick={handlePopoverClose}
        ></div>
      )} */}
    </div>
  );
}

export default Table;
