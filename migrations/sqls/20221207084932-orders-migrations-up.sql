/* Replace with your SQL commands */
CREATE TABLE orders (
    order_id INTEGER  PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    status TEXT NOT NULL
);
INSERT INTO orders VALUES (1,1,'active');