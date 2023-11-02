import React from "react"
import {VictoryChart,VictoryScatter,VictoryHistogram,VictoryTheme} from "victory";

export default function App() {
    return (
        <div>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={10}
          >
            <VictoryHistogram
                style={{ data: { fill: "#c43a31" } }}
                data={[{"x":7},{"x":1},{"x":7},{"x":3},{"x":1}]}
            />
          </VictoryChart>

          <div>
           <VictoryChart
              theme={VictoryTheme.material}
              domain={{ x: [0, 10], y: [0, 10] }}
            >
            <VictoryScatter
              style={{ data: { fill: "#c43a31" } }}
              size={2}
              data={[{"x":6,"y":0},{"x":5,"y":4},{"x":0,"y":1},{"x":1,"y":2},{"x":6,"y":0}]}
            />
            </VictoryChart>
        </div>
        </div>
    )
}