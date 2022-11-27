-- project [
--     title
--     tags
--     description
--     img
--     source link
-- ]


REATE TABLE projects(
 id SERIAL PRIMARY KEY,
 title VARCHAR(255) NOT NULL,
tags VARCHAR(255) NOT NULL,
 img VARCHAR(255)  NOT NULL,
 description TEXT  NOT NULL,
source VARCHAR(255) NOT NULL
);