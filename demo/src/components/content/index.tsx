/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { h } from "preact";
import { Dashboard } from "../dashboard/index";
import { Home } from "../home/index";

export function Content() {
  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <Dashboard />
      <Home />
    </div>
  );
};
