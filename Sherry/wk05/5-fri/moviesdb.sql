-- CREATE TABLE moviesdb (
-- 	id SERIAL PRIMARY KEY,
-- 	title VARCHAR(300),
-- 	year INTEGER,
-- 	rate TEXT,
-- 	image_url VARCHAR(400),	
-- 	plot TEXT
-- );

CREATE TABLE moviesdb (
	id SERIAL PRIMARY KEY,
	title VARCHAR(300),
	year VARCHAR(10),
	imdb_ID VARCHAR(200),
	rate TEXT,
	image_url VARCHAR(400),	
	plot TEXT
);

-- ALTER TABLE moviesdb
-- ADD rate TEXT;
