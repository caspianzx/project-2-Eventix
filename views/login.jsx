var React = require('react');

const Layout = require('./layoutLogin.jsx');


class Form extends React.Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-3">
                            <h1 className= "create">LOGIN</h1>
                                <div className = "tagline">Don't have an account? <a href="/signup">Register</a> </div>

                                <div className="formlist">
                                    <form method="POST" action="/login">
                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Email</label>
                                            <input name="email"  className="form-control" id="exampleFormControlInput1" placeholder="e.g. john@gmail.com" required/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Password</label>
                                            <input type="password" name="password"  className="form-control" id="exampleFormControlInput1" placeholder="" required/>
                                        </div>
                                        <button type="submit" className="btn btn-secondary">Log in!</button>
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