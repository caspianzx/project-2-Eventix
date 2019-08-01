CREATE TABLE IF NOT EXISTS  account (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS  event (
    id SERIAL PRIMARY KEY,
    name TEXT,
    venue TEXT,
    _date DATE,
    _time TIME,
    category TEXT,
    img_url TEXT,
    description TEXT,
    account_id INTEGER
);

CREATE TABLE IF NOT EXISTS  attending_event (
    id SERIAL PRIMARY KEY,
    account_id INTEGER,
    event_id INTEGER
);