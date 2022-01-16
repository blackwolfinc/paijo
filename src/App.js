import "./Assets/App.scss";

function App() {
  return (
    <div className="container">
      <div className="header">header</div>

      <div className="Section">
        <div className="Card  Section-1">1</div>
        <div className="Card  Section-2">2</div>
        <div className="Card  Section-3">3</div>
        <div className="Card  Section-4">4</div>
        <div className="Card  Section-5">5</div>
        <div className="Card  Section-6">6</div>
      </div>

      <div className="Body">
        <div className="Body-Anak Body-1">1</div>
        <div className="Body-Anak Body-2">
          <div className="Body-2-anak">1</div>
          <div className="Body-2-anak">2</div>
        </div>
        <div className="Body-Anak Body-3">
          <div className="Body-3-anak">1</div>
          <div className="Body-3-anak">2</div>
          <div className="Body-3-anak">3</div>
          <div className="Body-3-anak">4</div>
          <div className="Body-3-anak">5</div>
        </div>
      </div>
    </div>
  );
}

export default App;
