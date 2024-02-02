CREATE DATABASE pernotodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,   --make this todo unique 
    description VARCHAR(255)   --setting a max character of 255
);