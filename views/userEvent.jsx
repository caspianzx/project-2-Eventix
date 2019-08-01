var React = require('react');
const Layout = require('./layoutUserEvent.jsx');
class indexPage extends React.Component {
    render() {
        let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const eventCard = this.props.eventDetail.map(eachEvent => {
            let dateString = eachEvent._date;
            let day = dateString.getDate();
            let month = monthNames[dateString.getMonth()];
            let year = dateString.getFullYear();
            console.log(month);

            return(
                <div className =" col-4">
                    <div className="card">
                        <img src={eachEvent.img_url} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-3 date">
                                        <p className="dates-text">{month}</p>
                                        <p className="day-text">{day}</p>
                                    </div>
                                    <div className="col-9 title">
                                        <p className="card-text">{eachEvent.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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