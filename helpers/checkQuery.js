

class check {
    Orders(query, req){
        
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
    
        if (req.query.start_date && req.query.end_date){
            let start_date = req.query.start_date;
            let end_date =  req.query.end_date + " 23:59:59";
            query += ` AND orders.created_at >= '${start_date}' 
            AND orders.created_at < '${end_date}'`
        }
        if (req.query.larTotal){
            query += ` AND orders.total >= '${req.query.larTotal}'`
        }
        if (req.query.lesTotal){
            query += ` AND orders.total <= '${req.query.lesTotal}'`
        }
        if(query.includes("count(*)")){
            return query;
        }
        query += '  ORDER BY orders.created_at DESC  '
        if ((req.query.offset >= 0) && (req.query.limit > 0)) {
            query += " LIMIT " + req.query.limit + " OFFSET "+ req.query.offset
        }
        if ((req.query.offset < 0) || (req.query.limit <= 0)) {
            query += " LIMIT " + 0 + " OFFSET "+ 0
        }
        return query;
    }

    Customers(req, query){
        
        if (req.query.name){
            query += ` AND customers.name LIKE '%${req.query.name}%'`
        }
        if (req.query.phone_number){
            query += ` AND customers.phone_number LIKE '%${req.query.phone_number}%'`
        }
        if (req.query.phone == 'nn'){
            query += ` AND customers.phone_number IS NOT NULL`
        }
        if (req.query.phone_number){
            query += ` AND customers.address LIKE '%${req.query.address}%'`
        }
        if((req.query.start_date == 'all') && req.query.end_date){
            let end_date =  req.query.end_date + " 23:59:59";
            query += ` AND customers.created_at < '${end_date}'`
        }
        if ((req.query.start_date !== 'all') && req.query.end_date){
            let start_date = req.query.start_date;
            let end_date =  req.query.end_date + " 23:59:59";
            query += ` AND customers.created_at >= '${start_date}' 
            AND customers.created_at < '${end_date}'`
        }
        if(query.includes("count(*)")){
            return query;
        }
        query += '  ORDER BY customers.created_at DESC  '
        if (req.query.offset && req.query.limit) {
            query += " LIMIT " + req.query.limit + " OFFSET "+req.query.offset
        }
        return query;
    }

    Products(req, query){
        
        if (req.query.name){
            query += ` AND products.name LIKE '%${req.query.name}%'`
        }
        if (req.query.price){
            query += ` AND products.price = '${req.query.price}'`
        }
        if (req.query.free){
            query += ` AND products.price IS NULL`
        }
        // if (req.query.start_date && req.query.end_date){
        //     let start_date = req.query.start_date;
        //     let end_date =  req.query.end_date + " 23:59:59";
        //     query += ` AND products.created_at >= '${start_date}' 
        //     AND products.created_at < '${end_date}'`
        // }
        if (req.query.larPrice){
            query += ` AND products.price >= '${req.query.larPrice}'`
        }
        if (req.query.lesPrice){
            query += ` AND products.price <= '${req.query.lesPrice}'`
        }
        if(query.includes("count(*)")){
            return query;
        }
        query += 'ORDER BY products.created_at DESC'
        if (req.query.page) {
            query += " LIMIT " + LIMIT + " OFFSET "+((req.query.page - 1) * LIMIT)
        }
        return query;
    }
}

const checkQuery = new check()

module.exports = {checkQuery}