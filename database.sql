CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,   --make this todo unique 
    description VARCHAR(255)
);