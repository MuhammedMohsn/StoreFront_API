/* Replace with your SQL commands */
CREATE TABLE orders_products (
id INTEGER PRIMARY KEY NOT NULL,
order_id INTEGER REFERENCES orders(order_id) ON DELETE CASCADE ON UPDATE  CASCADE,
product_id INTEGER REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
quantity INTEGER
);
INSERT INTO orders_products VALUES (1,1,1,5);