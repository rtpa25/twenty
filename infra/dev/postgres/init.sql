-- Create the default database for development
CREATE DATABASE "default";

-- Create the tests database for e2e testing
CREATE DATABASE "test";

-- Create a twenty user
CREATE USER twenty PASSWORD 'twenty';
ALTER USER twenty CREATEDB;

-- Connect to the "default" database
\c "default";

-- Create the metadata schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS "metadata";
GRANT ALL ON SCHEMA metadata TO twenty;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Connect to the "default" database
\c "test";

-- Create the metadata schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS "metadata";
GRANT ALL ON SCHEMA metadata TO twenty;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
