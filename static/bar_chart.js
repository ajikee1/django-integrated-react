'use strict';

// https://stackoverflow.com/questions/63883713/using-es-modules-with-babel-standalone
import { PieChart } from 'https://cdn.skypack.dev/react-minimal-pie-chart';
import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function Pie(){
    return(<div>
        <PieChart
            data={[
                { title: 'One', value: 10, color: '#E38627' },
                { title: 'Two', value: 15, color: '#C13C37' },
                { title: 'Three', value: 20, color: '#6A2135' },
            ]}  radius={20}
        />;
    </div>);
}

ReactDOM.render(<Pie />,document.getElementById("like_button_container"));