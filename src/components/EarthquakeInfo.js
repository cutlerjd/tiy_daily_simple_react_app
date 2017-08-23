import React, { Component } from 'react'
import moment from 'moment'

class EarthquakeInfo extends Component {
    render() {
        return (
            <div className="earthquake-title">
                <p>This is a list of Earthquakes occurring on {moment().format("MMM Do")} across the United States</p></div>
        )
    }
}

export default EarthquakeInfo