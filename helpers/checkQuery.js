

class check {
    Orders(query, req){
        if (req.query.page) {
            query += " LIMIT " + LIMIT + " OFFSET "+((req.query.page - 1) * LIMIT)
        }
        if (req.query.product_id){
            query = `SELECT orders.id, orders.company_id, orders.customer_id,  orders.created_at, orders.updated_at,
            companies.name AS company_name, 
            customers.name AS customer_name, 
            order_items.id AS orderItiems_id, order_items.quantity AS orderItiems_quantity, order_items.price AS orderItiems_price, 
            products.id AS product_id, products.name AS product_name,  products.image AS product_image
                
            FROM order_items
            INNER JOIN orders 
            ON orders.id = order_items.order_id
            LEFT JOIN customers
            ON orders.customer_id = customers.id
            INNER JOIN companies
            ON companies.id = orders.company_id
            LEFT JOIN products
            ON order_items.product_id = products.id
            WHERE products.id = '${req.query.product_id}' AND companies.id = '${req.auth_user.company_id}'`   
        }
    
        if (req.query.total == 'max') {
            query += ` AND total = (SELECT max(total) FROM orders WHERE company_id = '${req.auth_user.company_id}')`
        }
        if (req.query.total == 'min'){
            query += ` AND total = (SELECT min(total) FROM orders WHERE company_id = '${req.auth_user.company_id}')`
        }
        if (req.query.customer){
            query += ` AND customers.name LIKE '%${req.query.customer}%'`
        }
        if (req.query.phone_number){
            query += ` AND customers.phone_number LIKE '%${req.query.phone_number}%'`
        }
    
        if (req.query.startDate && req.query.endDate){
            let startDate = req.query.startDate;
            let endDate =  req.query.endDate + " 23:59:59";
            query += ` AND orders.created_at >= '${startDate}' 
            AND orders.created_at < '${endDate}'`
        }
        if (req.query.lesTotal && req.query.larTotal){
            query += ` AND orders.total >= '${req.query.larTotal}' 
            AND orders.total <= '${req.query.lesTotal}'`
        }
        return query;
    }
}

const checkQuery = new check()

module.exports = {checkQuery}