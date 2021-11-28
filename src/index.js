import "./styles/index.css";
import "./styles/global.scss";
import { render } from "react-dom";
import App from "./App";
const named = {names:"Shubh gupta"};
const cast = {...named, ac:"gupta"};
console.log(`my name is `,cast)
render(<App />,document.getElementById("root"))