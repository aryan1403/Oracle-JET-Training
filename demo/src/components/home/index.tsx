import CoreRouter = require("ojs/ojcorerouter");
import "ojs/ojbutton";

type Props = {
    router: CoreRouter;
}
export function Home({router}: Props) {
    return (
        <>
        <h1>Home</h1>
        <oj-button onClick={() => router.go({path: "about"})}>About</oj-button>
        </>
          
    );
}