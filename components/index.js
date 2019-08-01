// Configurations for express, method override, react, pg
const express = require('express');
const app = express();
const pg = require('pg');
const cookieParser = require('cookie-parser');


app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Initialise postgres client
const configs = {
  user: 'caspianzx',
  host: '127.0.0.1',
  database: 'event',
  port: 5432,
};
const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

// express configuration
app.use(express.static(__dirname+'/public/'));

const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

const methodOverride = require('method-override')
app.use(methodOverride('_method'));

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');


/////////////////////"model function goes here"/////////////////////////////

///redirect function. need to modify and clean up later

const redirectLogin = (request, response, next) => {
    if (!request.cookies.email) {
        response.redirect('/login')
    } else {
        next()
    }
};


////new event form done
app.post('/events/new', (request, response) => {
    // console.log("post works!");
    // // console.log(request.body);
    response.send(`<html>events created!</html>`);
    eventDetails = request.body;
    console.log(eventDetails);
    let queryText = 'INSERT INTO event (name, venue, _date, _time, category, img_url, description)  VALUES ($1, $2, $3 ,$4, $5, $6, $7)';

    const values = [eventDetails.name, eventDetails.venue, eventDetails._date, eventDetails._time, eventDetails.category, eventDetails.img_url, eventDetails.description ];

    pool.query(queryText, values, (err, res) => {
        if (err) {
            console.log("query error", err.message);
        } else {
            console.log("id of the thing you just created:");
        }
    });
});


app.get('/events/new', (request, response) => {
    response.render('formbs.jsx');
});


app.post('/signup', (request, response) => {
    // response.send(`<html>account created!</html>`);
    let queryText = 'SELECT email FROM account WHERE email = $1';
    const values = [request.body.email];
    //nested query
    pool.query(queryText, values, (err, res) => {
        if (err) {
            console.log("query error", err.message);
        } else {
            console.log("here's all the email!", res.rowCount);
            if (res.rowCount ===1) {
                response.send("this email already exist!");
            } else {
                console.log(request.body.email);
                let queryText = 'INSERT INTO account (name, email, password)  VALUES ($1, $2, $3)';
                const values = [request.body.name, request.body.email, request.body.password];
                pool.query(queryText, values, (err, res) => {
                    if (err) {
                        console.log("query error", err.message);
                    } else {
                        console.log("successfully created account");
                        //will update and redirect to log in page to overcome the issue of user id
                        response.redirect('/user');
                    }
                });
            }
        }
    });
});

app.get('/signup', (request, response) => {
    response.render('registration.jsx');
});

app.post('/login', (request, response) => {
    console.log("logged in");
    //check if email and password is correct
    //







    // response.cookie('loggedin', true);
    // response.cookie('email', request.body.email);



    // console.log(request.body)
    response.redirect('/user');


});

app.get('/login', (request, response) => {
    response.render('login.jsx');
});



app.get('/user', (request, response) => {
    response.render('account.jsx');
});


app.get('/cookbook/:id/edit', (request, response) => {
    // console.log(request.params.id);
    // response.send("yayy")
    jsonfile.readFile(file, (err, obj) => {
        if( err ){
            console.log("it didnt work");
        } else {
            let index = parseInt(request.params.id -1)
            let data = obj.recipes[index];
            console.log(data);
            response.render('editForm.jsx', data);
        }
    });
});

app.put("/cookbook/:id", (request, response) => {
    console.log("PUT works!");
    console.log(request.body);
    let newRecipe = request.body;
        //read file
    jsonfile.readFile(file, (err, obj) => {
        if( err ){
          console.log("error reading file");
          console.log(err)
        }else{
            //var edited pokeindex is the current id number
            let editedIndex = parseInt(newRecipe.id -1);
            console.log(editedIndex);
            // replace/ assign the current array object with new object
            obj.recipes[editedIndex] = newRecipe;
            // write the new obj into pokedex.json
            jsonfile.writeFile(file, obj, (err) => {
                if( err ) {
                    console.log("error writing file");
                    console.log(err)
                    response.status(503).send("no!");
                } else {
                     response.redirect('/cookbook');
                }
            });
        };
    });
});

app.delete("/cookbook/:id", (request, response) => {
    response.send("delete works!");
    // console.log(request.body);
    // let newRecipe = request.body;
    //     //read file
    // jsonfile.readFile(file, (err, obj) => {
    //     if( err ){
    //       console.log("error reading file");
    //       console.log(err)
    //     }else{
    //         //var edited pokeindex is the current id number
    //         let editedIndex = parseInt(newRecipe.id -1);
    //         console.log(editedIndex);
    //         // replace/ assign the current array object with new object
    //         obj.recipes[editedIndex] = newRecipe;
    //         // write the new obj into pokedex.json
    //         jsonfile.writeFile(file, obj, (err) => {
    //             if( err ) {
    //                 console.log("error writing file");
    //                 console.log(err)
    //                 response.status(503).send("no!");
    //             } else {
    //                  response.redirect('/cookbook');
    //             }
    //         });
    //     };
    // });
});



////display indexpage with info from database

app.get('/events/', (request,response) => {
    console.log('index is reading');
    const query = 'SELECT * FROM event';
    pool.query(query, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
            response.send( 'query error' );
        } else {
            var data = {eventDetail: result.rows};
            // console.log (data);
            response.render('indexPage.jsx', data)
        }
    });
});

// redirect to indexpage
app.get('/', (request,response) => {
    response.redirect('/events');
});



const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));

// app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
//