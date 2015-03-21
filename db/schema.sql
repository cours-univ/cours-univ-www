-- Version

CREATE TABLE version
(
  id_version SERIAL PRIMARY KEY NOT NULL,
  content_version VARCHAR NOT NULL,
  datetime_version TIMESTAMP NOT NULL,
  comment_version VARCHAR,
  next_version INT,
  FOREIGN KEY (next_version) REFERENCES version (id_version)
);

-- Course

CREATE TABLE course
(
  id_course SERIAL PRIMARY KEY NOT NULL,
  name_course VARCHAR NOT NULL,
  current_version_course INT NOT NULL,
  FOREIGN KEY (current_version_course) REFERENCES version (id_version)
);
CREATE UNIQUE INDEX unique_name_course ON course (name_course);
