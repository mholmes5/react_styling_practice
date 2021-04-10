//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
const hour = new Date().getHours();
let heading = "";

const colorStyle = {
  color: "black"
};

if (hour < 12) {
  heading = "Good Morning";
  colorStyle.color = "red";
} else if (hour >= 12 && hour <= 18) {
  heading = "Good Afternoon";
  colorStyle.color = "green";
} else {
  heading = "Good Night";
  colorStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={colorStyle}>
    {heading}
  </h1>,
  document.getElementById("root")
);
