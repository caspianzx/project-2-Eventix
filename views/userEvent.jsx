var React = require('react');
const Layout = require('./layoutUserEvent.jsx');
class indexPage extends React.Component {
    render() {
        let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        let daysInWeek = ["Sunday", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        const eventCard = this.props.eventDetail.map(eachEvent => {
            let dateString = eachEvent._date;
            let day = dateString.getDate();
            let weekDay = daysInWeek[dateString.getDay()];
            let month = monthNames[dateString.getMonth()];
            let year = dateString.getFullYear();
            console.log(month);
            let backgroundImage = "url("+eachEvent.img_url+")";
            let link = "events/"+ eachEvent.id;
            console.log(eachEvent);
            return(
                <div className ="event-home-card col-4 ">

                    <a href={link}>
                        <div className="card">
                            <div className= "cardImage" style={{backgroundImage}}>
                            </div>
                            <div className="card-body">
                                <div className="container">
                                    <div className="row card-detail-container">
                                        <div className="col-3 date">
                                            <p className="dates-text">{month}</p>
                                            <p className="day-text">{day}</p>
                                        </div>
                                        <div className="col-9 title">
                                            <p className="card-text">{eachEvent.name}</p>
                                            <p className="information">{weekDay}, {day} {month}, {eachEvent.to_char}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                )
        });


        return (
            <Layout name={this.props.name}>

                <h1 className="head">Upcoming and unique</h1>
                <div className = "tagline">The best upcoming events, selected for you, by our local teams </div>

                <div className ="container">
                    <div className ="row">
                            {eventCard}
                    </div>
                </div>
        </Layout>
        );
    }
}
module.exports = indexPage;