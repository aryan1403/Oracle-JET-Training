/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { h } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";
import * as ResponsiveUtils from "ojs/ojresponsiveutils";
import "ojs/ojtoolbar";
import "ojs/ojmenu";
import "ojs/ojbutton";
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import { ojNavigationList } from "ojs/ojnavigationlist";

type Props = Readonly<{
  appName: string,
  userLogin: string,
  page?: string,
  routes: Array<Object>,
  onPageChanged: (value: string) => void;
}>;

type Route = {
  path: string;
  detail: object;
}

export function Header({ appName, userLogin, page, onPageChanged, routes }: Props) {
  const [currentPage, setcurrentPage] = useState<string>(page ? page : "home");
  const routesDP = new ArrayDataProvider(routes.slice(1), { keyAttributes: "path" });


  const onPageChangedHandler = (event: ojNavigationList.selectionChanged<Route["path"], Route>) => {
    if(event.detail.updatedFrom === "internal") {
      onPageChanged(event.detail.value);
    }
  }
  const mediaQueryRef = useRef<MediaQueryList>(window.matchMedia(ResponsiveUtils.getFrameworkQuery("sm-only")!));
  
  const [isSmallWidth, setIsSmallWidth] = useState(mediaQueryRef.current.matches);

  useEffect(() => {

    mediaQueryRef.current.addEventListener("change", handleMediaQueryChange);
    return (() => mediaQueryRef.current.removeEventListener("change", handleMediaQueryChange));
  }, [mediaQueryRef]);

  function handleMediaQueryChange(e: MediaQueryListEvent) {
    setIsSmallWidth(e.matches);
  }

  function getDisplayType() {
    return (isSmallWidth ? "icons" : "all");
  };

  function getEndIconClass() {
    return (isSmallWidth ? "oj-icon demo-appheader-avatar" : "oj-component-icon oj-button-menu-dropdown-icon");
  }

  const navList = (item: ojNavigationList.ItemContext<string, Route>) => {
    console.log(item);
    
    return (
      <li id={item.data.path}>
        <a href="#">
          {console.log(item.data.detail.label)}
          {item.data.detail.label}
          {getDisplayType() == "all" ? item.data.detail.label : ""}
        </a>
      </li>
    )
  }

  return (
    <header role="banner" class="oj-web-applayout-header">
      <div class="oj-web-applayout-max-width oj-flex-bar oj-sm-align-items-center">
        <div class="oj-flex-bar-end">
        <div role="navigation" class="oj-web-applayout-max-width oj-web-applayout-navbar">
            <oj-navigation-list
              selection={page}
              edge="top"
              id="navlist1"
              aria-label="navigation"
              onselectionChanged={onPageChangedHandler}
              drillMode="none"
              data={routesDP}
            >
              <template slot="itemTemplate" render={navList}/>

            </oj-navigation-list>
          </div>
        </div>
      </div>
    </header>
  );  
}
