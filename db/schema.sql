-- Course

CREATE TABLE public.course
(
    id_course SERIAL PRIMARY KEY NOT NULL,
    name_course VARCHAR NOT NULL,
    content_course TEXT NOT NULL
);
ALTER TABLE public.course
 ADD CONSTRAINT unique_slug_course UNIQUE (slug_course);