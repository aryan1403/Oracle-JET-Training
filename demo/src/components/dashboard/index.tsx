import { h } from "preact";
import "ojs/ojinputtext";
import "ojs/ojbutton";
import "oj-c/checkbox";
import "ojs/ojchart";
import { BindTextElement } from "ojs/ojknockout";
import { ojChart } from "ojs/ojchart";
import { useState, useRef } from "preact/hooks";
import ArrayDataProvider = require("ojs/ojarraydataprovider");

export function Dashboard() {
    function ChartItemTemplate(item: ojChart.ItemTemplateContext) {
        return (
            <oj-chart-item
                value={item.data.value}
                seriesId={item.data.series}
                groupId={item.data.group}
            >

            </oj-chart-item>
        );
    }
    const data1 = [
        {
          "id": 0,
          "series": "Series 1",
          "group": "Group A",
          "value": 42
        },
        {
          "id": 1,
          "series": "Series 1",
          "group": "Group B",
          "value": 34
        },
        {
          "id": 2,
          "series": "Series 2",
          "group": "Group A",
          "value": 55
        },
        {
          "id": 3,
          "series": "Series 2",
          "group": "Group B",
          "value": 30
        },
        {
          "id": 4,
          "series": "Series 3",
          "group": "Group A",
          "value": 36
        },
        {
          "id": 5,
          "series": "Series 3",
          "group": "Group B",
          "value": 50
        },
        {
          "id": 6,
          "series": "Series 4",
          "group": "Group A",
          "value": 22
        },
        {
          "id": 7,
          "series": "Series 4",
          "group": "Group B",
          "value": 46
        },
        {
          "id": 8,
          "series": "Series 5",
          "group": "Group A",
          "value": 22
        },
        {
          "id": 9,
          "series": "Series 5",
          "group": "Group B",
          "value": 46
        }
      ];
    // ojet create demo --template=basic --vdom --> typescript
    // MVVM (html, js), VDOM (tsx)
    // const name = useRef("");
    const [name, setname] = useState<string>("");
    const [enabled, setenabled] = useState<boolean>(true);
    const [counter, setcounter] = useState(0);
    return (
        <>
        <h1>hello from dashboard</h1>
        {/*<oj-input-text value={name} id="input-text" labelHint="Name"></oj-input-text>
        <oj-button id="mybtn" onojAction={() => setname("aaryan")}>Click me</oj-button>

        <oj-c-checkbox id="enabledCheckboxOn" onvalueChanged={() => setenabled(!enabled)} value={enabled}>
            <p>{String(enabled)}</p>
    </oj-c-checkbox>*/}
        <oj-chart
              id="barChart"
              type="bar"
              orientation="vertical"
              stack="off"
              data={new ArrayDataProvider(data1, {
                keyAttributes: 'id'
              })}
              animation-on-display="auto"
              animation-on-data-change="auto"
              hover-behavior="dim">
              <template slot="itemTemplate" render={ChartItemTemplate} />
            </oj-chart>
        </>
    );
}