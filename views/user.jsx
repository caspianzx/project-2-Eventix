var React = require('react');

const Layout = require('./layoutUser.jsx');


class Form extends React.Component {
    render() {
        let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        let daysInWeek = ["sunday", "mon", "tues", "wed", "thurs", "fri", "sat"];

        const eventList= this.props.eventHost.map(eachEvent => {
            let dateString = eachEvent._date;
            let day = dateString.getDate();
            let weekDay = dateString.getDay();
            let month = monthNames[dateString.getMonth()];
            let year = dateString.getFullYear();
            let link = "/user/events/"+ eachEvent.id;

            return(
                <a href= {link}>
                    <li className="list-group-item list-group-item-success">
                        <p className = "event-name">{eachEvent.name} </p>
                        <p className = "event-details">{day} {month}, {eachEvent.to_char}, {eachEvent.venue}</p>
                    </li>
                </a>
                )
        });

        const eventRegisteredDisplay= this.props.eventRegistered.map(eachEvent => {
            let dateString = eachEvent._date;
            let day = dateString.getDate();
            let weekDay = dateString.getDay();
            let month = monthNames[dateString.getMonth()];
            let year = dateString.getFullYear();
            let link = "/user/events/"+ eachEvent.id;

            return(
                <a href= {link}>
                    <li className="list-group-item list-group-item-success">
                        <p className = "event-name">{eachEvent.name} </p>
                        <p className = "event-details">{day} {month}, {eachEvent.to_char}, {eachEvent.venue}</p>
                    </li>
                </a>
                )
        });



        return (
            <Layout name={this.props.name} >

                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-3">
                            <h1 className= "create">WELCOME </h1>
                            <p className ="welcomeName"> {this.props.name}</p>
                            <br/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6 event-attend" >
                            <p className ="text-center" id="attending"> Attending</p>
                            <ul className="list-group">
                                    {eventRegisteredDisplay}
                            </ul>
                        </div>

                        <div className="col-6 event-host">
                            <p id="hosting"> Hosting</p>
                            <ul className="list-group">
                                {eventList}
                            </ul>
                        </div>
                    </div>
                </div>

            </Layout>
        );
    }
}

module.exports = Form;