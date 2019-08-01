var React = require('react');

const Layout = require('./layoutRegistration.jsx');


class Form extends React.Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-3">
                            <h1 class= "create">CREATE AN ACCOUNT</h1>
                                <div className="formlist">
                                    <form method="POST" action="/signup">
                                        <div className="form-group">
                                            <label for="exampleFormControlInput1"> Name</label>
                                            <input name="name"  className="form-control" id="exampleFormControlInput1" placeholder="e.g. John" required/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Email</label>
                                            <input name="email"  className="form-control" id="exampleFormControlInput1" placeholder="e.g. john@gmail.com" required/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Create Password</label>
                                            <input type="password" name="password"  className="form-control" id="exampleFormControlInput1" placeholder="" required/>
                                        </div>
                                        <button type="submit" className="btn btn-secondary">Create Account!</button>
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