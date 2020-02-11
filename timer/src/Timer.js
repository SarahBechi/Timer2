import React, { Component } from "react";
class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            paused: true,
        };
    }

    secondsToTime = val => {
        var hours = val / 3600;
        var rhours = Math.floor(hours);
        if (rhours < 10) { rhours = "0" + rhours }
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.floor(minutes);
        if (rminutes < 10) { rminutes = "0" + rminutes }
        let seconds = this.state.val % 60;
        // if (seconds < 10) { seconds = "0" + seconds }
        return (<div>
            <span>{rhours} :</span>
            <span>{rminutes} :</span>
            <span>{String(seconds).padStart(2, "0")}</span>

        </div>)
    }

    start = () => {
        this.interval = setInterval(() => {
            this.setState({ val: this.state.val + 1, paused: false });
        }, 1000);

    }

    stop = () => {
        clearInterval(this.interval)
        this.setState({ paused: true })
    }



    reset = () => {
        clearInterval(this.interval)
        this.setState(
            {
                val: 0
            } ,

        );
    };


    render() {
        return (
            <div className="main">
                <img
                    src={
                        "https://www.pngitem.com/pimgs/m/225-2259677_iphone-6-outline-for-wireframe-mobile-phone-templates.png"
                    }
                    className="iphone"
                    alt="img"
                />

                <div className="time">
                    <div className="timeInNumbers">
                        {this.secondsToTime(this.state.val)}
                    </div>
                    <div className="hourMinute">
                        <span>Hour</span> <span>Minute</span> <span>Second</span>
                    </div>
                </div>
                <div className="buttons">
                    <span className="startBtn" onClick={this.state.paused ? this.start : this.stop}>
                        Start
          </span>
                    <span className="resetBtn" onClick={this.reset}>
                        Reset
          </span>
                </div>
            </div>
        );
    }
}

export default Time;
