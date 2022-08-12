import React from "react";

export default function Alert(props) {
  
  
  const cap = (word) => {
    const lower = word.toLowerCase();

    if(lower.charAt(0)==='p'){
      return 'Success';
    }else{

      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  };

  return (
    <div style={{height:'60px'}}>
{    props.alert && (
      <div className="container">
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{cap(props.alert.type)} :</strong> {props.alert.msg}
            {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close"> */}
            {/* <span aria-hidden="true">&times;</span> */}
            {/* </button> */}
          </div>
        </div>
        )}
        </div>
  );
}
