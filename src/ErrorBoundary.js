import { useRouteError } from "react-router-dom";
import nope from "./you-didnt-say-the-magic-word-ah-ah.gif";

function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    return <div><img src={nope} alt="You didn't say the magic word!" style={{height: 300, width: 300}}/></div>
}

export default ErrorBoundary;