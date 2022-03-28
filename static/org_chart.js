'use strict';

// https://stackoverflow.com/questions/63883713/using-es-modules-with-babel-standalone
import { Chart } from "https://cdn.skypack.dev/react-google-charts";
import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const data = [
    [
        {
            v: "Mike",
            f: 'Mike<div style="color:red; font-style:italic">President</div>',
        },
        "",
        "The President",
    ],
    [
        {
            v: "Jim",
            f: 'Jim<div style="color:red; font-style:italic">Vice President</div>',
        },
        "Mike",
        "VP",
    ],
    ["Alice", "Mike", ""],
    ["Bob", "Jim", "Bob Sponge"],
    ["Carol", "Bob", ""],
];

const options = {
    allowHtml: true,
};

function GoogleOrgChart() {
    return (
        <Chart
            chartType="OrgChart"
            data={data}
            options={options}
            width="100%"
            height="400px"
        />
    );
}

ReactDOM.render(<GoogleOrgChart />,document.getElementById("pivot_container"));