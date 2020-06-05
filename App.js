import React from "react";
import  ReactDom from "react-dom";


ReactDom.render(React.createElement("h2", {}, "hello"), document.getElementById("content"));


function getJWT(){
   
    fetch("http://lux-escanor12.000webhostapp.com/jwttoken.php")
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          localStorage.setItem("jwt", responseJson.nekiFejkToken);
        })
    
    }

    function checkJWT(){
   
      fetch("http://lux-escanor12.000webhostapp.com/jwttoken.php")
          .then(response => response.json())
          .then(responseJson => {
           if(localStorage.getItem("jwt").toString() === responseJson.nekiFejkToken.toString()){
           alert("welcome");
           }else{
           localStorage.removeItem("jwt");
           alert("please log in");
           }
          })
      
      }

    if(localStorage.getItem("jwt")){
      checkJWT();
    }else{
      getJWT();
    }