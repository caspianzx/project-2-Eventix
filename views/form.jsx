var React = require('react');

const Layout = require('./layoutUserEvent.jsx');


class Form extends React.Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-3">
                            <h1 className= "create">CREATE AN EVENT</h1>
                            <div className="formlist">
                                <form method="POST" action="/events/new">
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Event Name</label>
                                        <input name="name"  className="form-control" id="exampleFormControlInput1" placeholder="e.g. Anime cosplay event"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Venue</label>
                                        <input name="venue"  class="form-control" id="exampleFormControlInput1" placeholder="e.g. Scape"/>
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Date</label>
                                        <input name="_date"  className="form-control" id="exampleFormControlInput1" placeholder="e.g. YYYY-MM-DD"/>
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Time</label>
                                        <input name="_time"  class="form-control" id="exampleFormControlInput1" placeholder="e.g. 19:00"/>
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleFormControlSelect1">Category</label>
                                        <select name ="category" className="form-control" id="exampleFormControlSelect1">
                                            <option>Business</option>
                                            <option>Charity</option>
                                            <option>Performing and Visual Arts</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">image URL</label>
                                        <input name="img_url" className="form-control" id="exampleFormControlInput1" placeholder="insert url here"/>
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Event description</label>
                                        <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder= "Be as descriptive as you can about the nature of the event to attract more like-minded folks to join!"></textarea>
                                    </div>

                                     <button type="submit" className="btn btn-secondary">Create Event!</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

module.exports = Form;