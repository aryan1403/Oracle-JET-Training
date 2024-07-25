/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import CoreRouter = require("ojs/ojcorerouter");
import { h } from "preact";
import { Dashboard } from "../dashboard/index";
import { Home } from "../home/index";

type Props = {
  page: string;
  router: CoreRouter;
}

export const Content = ({router, page}: Props) => {
  let pageContent = (page: string) => {
    switch (page) {
      case "home":
        return ( 
          <>
          <h1>Home</h1>
          <oj-button onClick={() => router.go({path: "about"})}>About</oj-button>
          </>
        )
      case "about":
        return <h1>About</h1>
      case "contact":
        return <h1>Contact</h1>    
      default:
        return <h1>No Page Found</h1>
    }
  }

  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      {pageContent(page as string)}
    </div>
  )
};
