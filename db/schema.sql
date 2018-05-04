CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(50),
    devoured boolean,
    PRIMARY KEY (id)
);

insert into burgers (burger_name, devoured) VALUES ('cheese', 1);
insert into burgers (burger_name, devoured) VALUES ('veggie', 0);
insert into burgers (burger_name, devoured) VALUES ('hamburger', 1);
                                                                                                      