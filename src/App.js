import React from 'react';
import './App.css';
import Table from './Table';

function App() {
  return (
    <div className="App">

      <div className="grid-container">
      <div className="grid-item"></div>

        <div className="grid-item item1"><h3>Kutu Oyunu (Dots and Boxes) Oyun Kuralı ve Oynanışı</h3>
          <p>
            Kutu Oyunu, iki oyunculu bir strateji oyunudur. Oyuncular, sırayla bir noktadan diğerine çizgi çekerek birer kare oluşturmaya çalışırlar. Oyunun amacı, kareleri tamamlamak ve en fazla kareyi kazanmaktır.
          </p></div>
        <div className="grid-item item2"><Table stn={29} str={29} p1={"red"} p2={"blue"} /></div>
        <div className="grid-item item3">
          <h3>Oyun Kuralları</h3>
          <p>
          * Oyuncular sırayla bir çizgi çizerler. Bir çizgi, iki noktayı birleştirir ve yalnızca dikey veya yatay olabilir. Çizgilerin köşegen olması veya iki noktanın zaten birleşik olduğu bir çizgi çizilmesi yasaktır.</p>
          <p>* Bir oyuncu bir kare tamamladığında (dört çizgi ile çevrili), o kareyi kendisi için işaretler ve bir ekstra hamle hakkı kazanır.
Oyuncu, bir kareyi tamamladığında sırası devam eder ve oyun sona erene kadar bu şekilde devam eder.</p>
          
          <p>* Oyun sona erdiğinde, tüm kareler tamamlanmış olmalıdır. </p>
          <p>* Oyun sona erdiğinde Kazanan, daha fazla kareyi tamamlayan oyuncudur.
 </p>

</div>
          <div className="grid-item"></div>


      </div>


      </div>




      );
}

      export default App;
