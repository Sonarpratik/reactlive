import React, { useState } from "react";

export default function About(props) {
  


    const [myStyle, setmyStyle] = useState  ({
    color: "black",
    backgroundColor: "white"
  })

    const [cf, setmycf] = useState  ({
    // color: "black",
    // backgroundColor: "white"
  })


  const [df,setdf] = useState ( "Enable Dark mode")
  const toggle = () => {
    if (myStyle.color ==='white') {
      setmyStyle({
        color: "black",
        backgroundColor: "white"
      })
      setmycf({
        // color: "black",
        // backgroundColor: "white"
      })

      setdf("Enable Dark mode");
    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "black"
      })
      setmycf({
        color: "white",
        backgroundColor: "black"
      })
      setdf("Enable Light mode");
    }
  }

  return (
    <>
      <div className="container" style={props.myStyle1}>
        <h1 className="my-3">About Us</h1>
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne" style={props.myStyle}>
              <h5 className="mb-0"  >
                    
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={props.myStyle}
                >
                  Collapsible Group Item #1
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body" style={props.myStyle}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo" style={props.myStyle}>
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={props.myStyle}

                >
                  Collapsible Group Item #2
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="card-body" style={props.myStyle}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree" style={props.myStyle}>
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={props.myStyle}

                >
                  Collapsible Group Item #3
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="card-body" style={props.myStyle}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
        <button style={props.cf} onClick={toggle} onDoubleClick={props.toggleMode} className="btn btn-success  my-4">
          {props.df}
        </button>
      </div>
    </>
  );
}
