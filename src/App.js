// import logo from './logo.svg';
import React from "react";

import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Textfrom from "./components/Textfrom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// let nam = "Its me bro";

function App() {
  const [mode, setmode] = useState("light"); //Weather dark mode is enabled or not
  const [m, setm] = useState("dark"); //Weather dark mode is enabled or not
  const [Btn, setbtn] = useState(""); //Weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [myStyle1, setmyStyle1] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [cf, setmycf] = useState({
    // color: "black",
    // backgroundColor: "white"
  });
  const [df, setdf] = useState("Enable Dark mode");

  //   const [cf, setmycf] = useState  ({
  //   // color: "black",
  //   // backgroundColor: "white"
  // })

  // const [df,setdf] = useState ( "Enable Dark mode")
  // const toggle = () => {
  //   if (myStyle.color ==='white') {
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor: "white"
  //     })
  //     setmycf({
  //       // color: "black",
  //       // backgroundColor: "white"
  //     })

  //     setdf("Enable Dark mode");
  //   } else {
  //     setmyStyle({
  //       color: "white",
  //       backgroundColor: "black"
  //     })
  //     setmycf({
  //       color: "white",
  //       backgroundColor: "black"
  //     })
  //     setdf("Enable Light mode");
  //   }
  // }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      setm("light");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      // xxxxx document.body.textarea.style.color='white'
      setbtn("outline-");
      showAlert("Dark mode has been activated", "danger");
      document.title = "TExt App-Dark Mode";
      //   setInterval(()=>{
      //     document.title='Install';

      // },100);
      //   setInterval(()=>{
      //     document.title='Now';

      // },200);
      setmyStyle({
        color: "white",
        backgroundColor: "rgb(36 74 104)",
      });
      setmyStyle1({
        color: "white",
        backgroundColor: "#042743",
      });
      setmycf({
        color: "white",
        backgroundColor: "rgb(36 74 104)",

      });
      setdf("Enable Light mode");
    } else {
      setmode("light");
      setm("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setbtn("");
      showAlert("Light mode has been activated", "success");
      document.title = `TExt App-Light Mode`;

      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setmyStyle1({
        color: "black",
        backgroundColor: "white",
      });
      setmycf({
        color: "white",
        backgroundColor: "#28a745",
      });
      setdf("Enable Dark mode");
    }
  };

  return (
    
      //{" "}
      <Router>
        <Navbar
          ab="About"
          ti="iTextChanger"
          mode={mode}
          f={m}
          toggleMode={toggleMode}
          // toggle={toggle}
        />
          <Alert alert={alert} />
        <Routes>
          <Route
            path="/reactlive/about"
            element={
              <About
                myStyle={myStyle}
                cf={cf}
                df={df}
                toggleMode={toggleMode}
              />
            }
          />
          <Route path="/reactlive" element={<Home />} />
          <Route
            path="/reactlive/text"
            element={
              <Textfrom
                show={showAlert}
                heading="Enter Text To Analysis"
                mode={mode}
                b={Btn}
              />
            }
          />
        </Routes>

        {/* <About  /> */}
      </Router>
    
  );
}

export default App;

// CANT USE ROUTING IN GITHUB
