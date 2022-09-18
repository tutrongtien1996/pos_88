SELECT products.name, order_items.price, order_items.quantity, orders.id, orders.total, customers.name 
FROM order_items
INNER JOIN products ON products.id = order_items.product_id
INNER JOIN orders ON order_items.order_id = orders.id
INNER JOIN customers ON orders.customer_id = customers.id
WHERE orders.id = 1
