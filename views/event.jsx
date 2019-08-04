var React = require('react');

const Layout = require('./layoutUser.jsx');


class Form extends React.Component {
    render() {
        let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        let daysInWeek = ["sunday", "mon", "tues", "wed", "thurs", "fri", "sat"];

            let dateString = this.props.eventDetails._date;
            let day = dateString.getDate();
            let weekDay = daysInWeek[dateString.getDay()];
            let month = monthNames[dateString.getMonth()];
            let year = dateString.getFullYear();


        return (
            <Layout name={this.props.name} >
                <div className="container individualEvent">
                <div className="col-8 offset-2">
                    <div className="row">
                        <div className="card mb-3 p-3" id="event-card">
                            <img src={this.props.eventDetails.img_url} className="img-fluid event-image card-img-top" alt="Responsive image"/>

                                <div className="card-body">
                                        <h5 className="card-title">{this.props.eventDetails.name}</h5>

                                        <div className ="container">
                                            <div className = "row">
                                                <div className ="col-8">
                                                    <p className="card-text text-left">Description</p>
                                                    <p className ="text-left"> {this.props.eventDetails.description} </p>
                                                </div>
                                                <div className ="col-4 event-date-venue">
                                                    <div className ="container event-button">
                                                        <div className = "row">
                                                            <div className ="col">

                                                            <form method ="POST" action = {"/user/events/" + this.props.eventDetails.id}>
                                                                <input type ="submit" className="btn btn-success" value ="Attend this event">

                                                                </input>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="event-info "> Date: {day} {month} {year} </p>
                                                    <p className="event-info ">Time: {this.props.eventDetails.to_char}</p>
                                                    <p className=" event-info">Venue: {this.props.eventDetails.venue}</p>

                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>


                        {/*
                        <div className="col-8 p-0 eventImage">
                            <img src={this.props.eventDetails.img_url} class="img-fluid" alt="Responsive image"/>
                        </div>
                        <div className="col-4 eventDetails">
                            <div>event details goes here. description </div>
                        </div>

                        <div className="col-8 p-0 eventDescription">
                            <div className ="smallHeader" >Description goes here </div>
                        </div>
                        <div className="col-4 p-0 eventLocation">
                            <div className ="smallHeader">Location </div>
                            <p> optionalPeople that are Attending (similar to fb)</p>
                            <p>attendEventButton goes here, modal to confirm attending? </p>
                        </div>

                        */}
                    </div>
                </div>
            </Layout>
        );
    }
}

module.exports = Form;