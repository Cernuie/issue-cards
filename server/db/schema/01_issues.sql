DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE issues (
    id SERIAL PRIMARY KEY NOT NULL,
    issue_name VARCHAR(255) NOT NULL,
    assigned_to text[],
    description VARCHAR(255) NOT NULL,
    created_at DATE DEFAULT CURRENT_TIMESTAMP
)