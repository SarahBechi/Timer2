import React, { Component } from "react";
class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,

        };
    }

    secondsToTime = val => {
        var hours = val / 3600;
        var rhours = Math.floor(hours);

        var minutes = (hours - rhours) * 60;
        var rminutes = Math.floor(minutes);

        let seconds = this.state.val % 60;

        return (<div>
            <span>{rhours} :</span>
            <span>{rminutes} :</span>
            {console.log(rminutes)}
            <span>{seconds}</span>
            {console.log(seconds)}
        </div>)
    }

    start = () => {
        this.interval = setInterval(() => {
            this.setState({ val: this.state.val + 1 });
        }, 1000);

    }

    stop = () => {
        clearInterval(this.interval)

    }


    // incrementation (seconds > minutes > heures)


    /*setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);*/

    /**   if (this.state.seconds <= 60) {
        alert("ddd");
  
        this.setState({
          seconds: 0,
  
          minutes: this.state.minutes + 1
        });
        setInterval(() => {
          this.setState({ seconds: this.state.seconds + 1 });
        }, 1000);
  
  
      }
      else
        setInterval(() => {
          this.setState({ seconds: this.state.seconds + 1 });
        }, 1000); 
  
  
  
  
    }*/


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
                    <span className="startBtn" onClick={this.start}>
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
