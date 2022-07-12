import { createRoot } from "react-dom/client";

import Root from "./config/Root"


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Root/>);
