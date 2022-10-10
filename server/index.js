// load .env data into process.env
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const ENV = process.env.ENV || "development";
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require('morgan');
app.use(cors());

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use("/styles", sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: 'expanded'
}));
app.use(express.static("public"));

const issuesRoute = require('./routes/issues')

app.use('/api/issues', issuesRoute(db));

app.get("/", (req, res) => {
    res.end("hello");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

