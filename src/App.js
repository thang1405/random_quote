import "./App.css";
// import RandomQuote from "./Component/RandomQuote";
import RandomQuoteXML from "./Component/RandomQuoteXML";

function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <RandomQuoteXML />
    </div>
  );
}

export default App;
