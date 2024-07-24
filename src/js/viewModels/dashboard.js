/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['knockout', 'ojs/ojmenu', 'ojs/ojoption', 'ojs/ojbutton'],
 function(ko) {
    function DashboardViewModel() {
      this.menuaction = (event) => {
        // console.log(event.detail.selectedValue);
        switch (event.detail.selectedValue) {
          case 'Product 1':
            // logic (api call)
            break;
          case 'Product 2':

              break;
        
          default:
            break;
        }
      }

      this.addp = (_) => {
        console.log(this.menuItems());
        this.menuItems.push(
          { id: 'print', label: 'Print...', disabled: true, value: 'Print...' }
        )        
      }

      this.menuItems = ko.observableArray([
        { id: 'new', label: 'New', disabled: false, value: 'New' },
        { id: 'open', label: 'Open', disabled: false, value: 'Open' },
        { id: 'save', label: 'Save', disabled: false, value: 'Save' },
        { id: 'saveas', label: 'Save As...', disabled: false, value: 'Save As...' },
        { id: 'print', label: 'Print...', disabled: true, value: 'Print...' }
      ]);
      

    }

    return DashboardViewModel;
  }
);
