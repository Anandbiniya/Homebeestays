import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ContactInfo from "./components/ContactInfo";
import HeaderChildComponent from "./components/HeaderChildComponent";
import SubHeader from "./components/SubHeader";
import ParentSubHeader from "./components/ParentSubHeader";
import ParentSearch from "./components/ParentSearch";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-6">
          <HeaderChildComponent />

          <ParentSubHeader />
          {/* <SubHeader/> */}
          <ParentSearch/>
        </div>
      </div>
      {/* <SubHeader /> */}
    </div>
  );
}

export default App;
