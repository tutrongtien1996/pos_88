const { query } = require('express');
const {mysqlConnection} = require('../comon/connect.js');

class order {
    id
    customer_id
    company_id
    total
    created_at
    updated_at

    getList(req, callback){
        let query = "SELECT * FROM orders";
        if (req.query.page) {
            query += " LIMIT " + LIMIT + " OFFSET "+((req.query.page - 1) * LIMIT)
        }
        mysqlConnection.query(query, callback)
    }

    create(order, callback){
        if(order){
            let query = `INSERT INTO orders (company_id, customer_id, total)
            VALUES ('${order.company_id}', '${order.customer_id}', '${order.total}')`;
            mysqlConnection.query(query, callback)
        }
    }
    createItems(orders,insertId, callback){
        var valueInserts = "";
        orders.forEach(item => {
            valueInserts += `('${insertId}', '${item.product_name}', '${item.quantity}', ${item.price}),`;
        });
        valueInserts = valueInserts.slice(0, -1);
        let query = `INSERT INTO order_items (order_id, product_name, quantity, price)
            VALUES ${valueInserts}`;
            mysqlConnection.query(query, callback)
    }

    getOne (req, callback) {
        const {id} = req.params;
        let query = `SELECT customers.name, order_items.product_name, order_items.quantity, order_items.price, orders.total FROM order_items
        INNER JOIN orders 
        ON orders.id = order_items.order_id
        INNER JOIN customers
        ON orders.customer_id = customers.id
        WHERE orders.id = ${id}`
        mysqlConnection.query(query, callback)
    }

    delete (req, callback){
        const {id} = req.params;
        const query = `DELETE FROM orders WHERE id = '${id}'`;
        mysqlConnection.query(query, callback)
    }
    deleteOrderItems (req, callback){
        const {id} = req.params;
            const query = `DELETE FROM order_items WHERE order_id = '${id}'`;
            mysqlConnection.query(query, callback)
    }
    
    update (id, order, callback){
        let query = `UPDATE orders SET customer_id = '${order.customer_id}', total = '${order.total}' WHERE id = ${id}`;
        mysqlConnection.query(query, callback)
    }

    getOneItems (id, callback){
        let query = `SELECT * FROM order_items WHERE order_id = '${id}'`
        mysqlConnection.query(query, callback)
    }

    updateItems (order, id, callback){
        let query = `UPDATE order_items SET product_name = '${order.product_name}', quantity = '${order.quantity}', price = '${order.price}' WHERE id = ${id}`
        mysqlConnection.query(query, callback)
    }
}
const orderModle = new order()

module.exports = {orderModle}
