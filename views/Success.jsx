var React = require('react');
const Layout = require('./layoutUser.jsx');
class indexPage extends React.Component {
    render() {



        return (
            <Layout name={this.props.name}>

                <div className ="container">
                    <div className ="row">
                        <div className ="col-10 offset-1">
                            <p className ="thankyou"> Thank you for signing up for the event</p>
                            <p className ="event-link"> Click <a className="back-to-index" href ="/user/events">here</a> to continue browsing</p>
                        </div>
                    </div>
                </div>
        </Layout>
        );
    }
}
module.exports = indexPage;