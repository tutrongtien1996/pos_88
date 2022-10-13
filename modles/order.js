
const {mysqlConnection} = require('../comon/connect.js');
const {checkQuery} = require('../helpers/checkQuery.js')

class order {
    id
    customer_id
    company_id
    total
    created_at
    updated_at

    getList(req, callback){
        let query =  `SELECT orders.*, companies.name AS company, customers.name AS customer, customers.phone_number FROM orders
        INNER JOIN companies ON companies.id = orders.company_id
        LEFT JOIN customers ON customers.id = orders.customer_id
        WHERE orders.company_id = '${req.auth_user.company_id}'`;
        
        mysqlConnection.query( checkQuery.Orders(query, req), callback)
    }

    create(order, callback){
        if(order.body){
            let query = `INSERT INTO orders (company_id, customer_id, total)
            VALUES ('${order.company_id}', '${order.body.customer_id}', '${order.body.total}')`;
            mysqlConnection.query(query, callback)
        }
    }
    createItems(orderItems, callback){
        var valueInserts = "";
        orderItems.product.forEach(item => {
            valueInserts += `('${orderItems.order_id}', '${item.product_id}', '${item.quantity}', ${item.price}),`;
        });
        valueInserts = valueInserts.slice(0, -1);
        let query = `INSERT INTO order_items (order_id, product_id, quantity, price)
            VALUES ${valueInserts}`;
            mysqlConnection.query(query, callback)
    }

    getOne (input, callback) {
        let query = `SELECT orders.id, orders.company_id, orders.customer_id, orders.total, orders.created_at, orders.updated_at,
        companies.name AS company_name, companies.email AS company_email, companies.phone_number AS company_phoneNumber, companies.logo AS company_logo,
        customers.name AS customer_name, customers.phone_number AS cutomer_phoneNumber, customers.address AS customer_address, 
        order_items.id AS orderItiems_id, order_items.quantity AS orderItiems_quantity, order_items.price AS orderItiems_price, 
        products.id AS product_id, products.name AS product_name, products.price AS product_price, products.image AS product_image
            
        FROM order_items
        INNER JOIN orders 
        ON orders.id = order_items.order_id
        LEFT JOIN customers
        ON orders.customer_id = customers.id
        INNER JOIN companies
        ON companies.id = orders.company_id
        LEFT JOIN products
        ON order_items.product_id = products.id
        WHERE orders.id = '${input.id}' AND orders.company_id = '${input.company_id}'`
        console.log(query)
        mysqlConnection.query(query, callback)

    }

    getListItem (req, callback){
        
    }

    delete (input, callback){
        const query = `DELETE FROM orders WHERE id = '${input.id}' AND '${input.company_id}'`;
        mysqlConnection.query(query, callback)
    }

    deleteOrderItems (input, callback){
            const query = `DELETE FROM order_items WHERE order_id = '${input.id}'`;
            mysqlConnection.query(query, callback)
    }
    
    update (order, callback){
        let query = `UPDATE orders SET customer_id = '${order.body.customer_id}', total = '${order.body.total}' WHERE id = '${order.id}' AND company_id = '${order.company_id}'`;
        mysqlConnection.query(query, callback)
    }

    getOneItems (id, callback){
        let query = `SELECT * FROM order_items WHERE order_id = '${id}'`
        mysqlConnection.query(query, callback)
    }

    updateItems (order, id, callback){
        let query = `UPDATE order_items SET product_id = '${order.product_id}', quantity = '${order.quantity}', price = '${order.price}' WHERE id = ${id}`
        mysqlConnection.query(query, callback)
    }
}
const orderModle = new order()

module.exports = {orderModle}
