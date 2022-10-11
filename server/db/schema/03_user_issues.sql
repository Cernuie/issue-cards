DROP TABLE IF EXISTS user_issues CASCADE;

CREATE TABLE user_issues (
    user_id int NOT NULL,
    issue_id int NOT NULL,
    PRIMARY KEY (user_id, issue_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE,
    FOREIGN KEY (issue_id) REFERENCES issues(id) ON UPDATE CASCADE
)