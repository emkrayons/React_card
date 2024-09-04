import "./App.css";
import Name from "./Name";
import Description from "./Description";
import Image from "./Image";
import Price from "./Price";

function App() {
  const firstName = "Emmanuel";
  return (
    <div className="App">
      <div className="card">
        <Image />
        <div className="Info">
          <Name />
          <Price />
          <Description />
        </div>
      </div>

      <div className="greeting">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="" alt="" />
          </>
        ) : (
          <p>Hello, there</p>
        )}
      </div>
    </div>
  );
}

export default App;
