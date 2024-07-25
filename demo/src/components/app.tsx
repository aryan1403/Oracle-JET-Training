/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { registerCustomElement } from "ojs/ojvcomponent";
import { h } from "preact";
import { useEffect } from "preact/hooks";
import Context = require("ojs/ojcontext");
import { Footer } from "./footer";
import { Header } from "./header";
import { Content } from "./content/index";
import CoreRouter = require("ojs/ojcorerouter");
import UrlParamAdapter = require("ojs/ojurlparamadapter");
import {useState} from "preact/hooks";

type Props = Readonly<{
  appName?: string;
  userLogin?: string;
}>;

type Route = {
  path: string;
  detail? : Object;
  redirect? : String;
}

function toRecord<
  T extends { [K in keyof T]: string | number | symbol }, // added constraint
  K extends keyof T
>(array: T[], selector: K): Record<T[K], T> {
  return array.reduce((acc, item) => (acc[item[selector]] = item, acc), {} as Record<T[K], T>)
}

const routeArray: Array<Route> = [
  { path: "", redirect: "home"},
  {
    path: "home",
    detail: {
      label: "Home Page",
    }
  },
  {
    path: "about",
    detail: {
      label: "About Page",
    }
  },
  {
    path: "Contact",
    detail: {
      label: "Contact Page",
    }
  },
];

const router = new CoreRouter<CoreRouter.DetailedRouteConfig>(Object(routeArray), {
  urlAdapter: new UrlParamAdapter(),
});

const pageChangeHandler = (value: string) => {
  router.go({path: value})
}

export const App = registerCustomElement(
  "app-root",
  ({ appName = "App Name", userLogin = "john.hancock@oracle.com" }: Props) => {
    useEffect(() => {
      Context.getPageContext().getBusyContext().applicationBootstrapComplete();
    }, []);

    const [routePath, setroutePath] = useState<string>("");

    useEffect(() => {
      Context.getPageContext().getBusyContext().applicationBootstrapComplete();
      router.currentState.subscribe(routerUpdated);
      router.sync();
    }, []);

    const routerUpdated = (actionable: CoreRouter.ActionableState<CoreRouter.DetailedRouteConfig>): void => {
      const newPath = actionable.state?.path;
      setroutePath(newPath);
    }
    
    return (
      <div id="appContainer" class="oj-web-applayout-page">
        <Header
          appName={appName} 
          userLogin={userLogin} 
          page={routePath}
          onPageChanged={pageChangeHandler}
          routes={routeArray}
        />
        <Content page={routePath} router={router} />
        <Footer />
      </div>
    );
  }
);
