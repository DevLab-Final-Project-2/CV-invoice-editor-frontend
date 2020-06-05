import React from "react";
import  ReactDom from "react-dom";

const Prvi = () => {
    return React.createElement("div", {} , [
        React.createElement("h2", {}, "hello"),
        React.createElement("h2", {}, "hello"),
    ]);
}

ReactDom.render(React.createElement(Prvi), document.getElementById("content"));


function getJWT(){
   
    fetch("http://lux-escanor12.000webhostapp.com/jwttoken.php")
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
        })
    
    }

    getJWT();