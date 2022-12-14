DROP TABLE IF EXISTS issues CASCADE;

CREATE TABLE issues (
    id SERIAL PRIMARY KEY NOT NULL,
    issue_name VARCHAR(255) NOT NULL,
    assigned_to VARCHAR(255) NOT NULL,
    priority VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at DATE DEFAULT CURRENT_TIMESTAMP
)