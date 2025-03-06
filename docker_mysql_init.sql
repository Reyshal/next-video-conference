-- Create the main user and set password
CREATE USER IF NOT EXISTS 'reyshal'@'%' IDENTIFIED BY 'p@55w0rd';

-- Grant full privileges on the main and shadow databases to reyshal
GRANT ALL PRIVILEGES ON videoconference.* TO 'reyshal'@'%' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON videoconference_shadow.* TO 'reyshal'@'%' WITH GRANT OPTION;

-- Apply changes immediately
FLUSH PRIVILEGES;

-- Create the main database if it doesn’t already exist
CREATE DATABASE IF NOT EXISTS videoconference
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_unicode_ci;

-- Create the shadow database for migrations if it doesn’t already exist
CREATE DATABASE IF NOT EXISTS videoconference_shadow
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_unicode_ci;
