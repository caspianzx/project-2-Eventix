var React = require('react');

const Layout = require('./layoutUser.jsx');


class Form extends React.Component {
    render() {
        let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

        const eventList= this.props.eventHost.map(eachEvent => {
            let dateString = eachEvent._date;
            let day = dateString.getDate();
            let month = monthNames[dateString.getMonth()];
            let year = dateString.getFullYear();

            return(
                <li class="list-group-item list-group-item-success">
                    {eachEvent.name} <br/> {day} {month}, {eachEvent.to_char}, {eachEvent.venue}
                </li>
                )
        });



        return (
            <Layout name={this.props.name} >
                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-3">
                            <h1 className= "create">WELCOME </h1>
                            <p className ="welcomeName"> {this.props.name}</p>
                            <p>I love Bootstrap! Really.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className ="container p-0">
                                <div className="row">
                                    <div className="col">
                                        <p className ="text-center" id="attending"> Events that you are attending!</p>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p id="hosting"> Events that you are hosting!</p>
                                            <ul class="list-group">
                                                {eventList}
                                            </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                        <div className="col-6">
                            <p> Hosting an event?</p>
                            <p>Click the button below to get started!</p>
                            <a className="btn btn-secondary" href="/events/new">Get started</a>
                        </div>
                    </div>

                </div>
            </Layout>
        );
    }
}

module.exports = Form;