-- Table for storing tasks
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT, -- Using TEXT datatype for longer descriptions
    done BOOLEAN NOT NULL DEFAULT 0,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Automatic update of updatedAt field on each update
);

-- Index for improving performance on frequently searched fields
CREATE INDEX idx_title ON tasks (title);
CREATE INDEX idx_done ON tasks (done);

-- Table for storing users (assuming you have a user management system)
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Table for linking tasks to users (assuming each task is associated with a user)
CREATE TABLE user_tasks (
    user_id INTEGER,
    task_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (task_id) REFERENCES tasks(id),
    PRIMARY KEY (user_id, task_id)
);
