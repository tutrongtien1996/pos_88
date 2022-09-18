const {mysqlConnection} = require('../comon/connect.js');
const { ResponseSuccess, ResponseFail } = require('../helpers/response.js');
const {orderModle} = require('../modles/order')


class OrderControllerClass {
    getList (req, res){
        orderModle.getList(req, (err, results) => {
        return ResponseSuccess(res, "", results)
    })  
       
    }
    create (req, res){
        var order = req.body;
        order.company_id = 3;
        console.log(order);
        orderModle.create(order, (err, result) => {
                if (err) throw err;
               orderModle.createItems(order.items, result.insertId, (err, data) => {
                        if (err) throw err;
                        return ResponseSuccess(res, "", order)
                    })
            })
        } 

    getOne (req, res) {
        orderModle.getOne(req, (err, result) => {
            var items = [];
            result.forEach(item => {
                items.push({
                    product_name: item.product_name,
                    quantity: item.quantity,
                    price: item.price
                }); 
            });
            var order = {
                customer_name: result[0].name,
                total: result[0].total,
                items: items
            }
            return ResponseSuccess(res, "", order)
        })
    }

    delete (req, res) {
        orderModle.delete(req, (err, data) => {
            if (err) throw err;
            orderModle.deleteOrderItems(req, (err, result) => {
            if(err) throw err
            return ResponseSuccess(res, "", result)
            })     
        })
    }

    update (req, res)  {
        const {id} = req.params;
        const order = (req.body)
        orderModle.update(id, order, (err) => {
            if (err) throw err 
            orderModle.getOneItems(id, (err, results) => {
                if(err) throw err
                for(var index = 0; index < results.length; index ++){
                    orderModle.updateItems(order.items[index], results[index].id, (err, data) => {
                        if(err) throw err
                    })
                } 
            })
            return ResponseSuccess(res, "", order)
        })
    }
}
const OrderController = new OrderControllerClass();
module.exports = {OrderController}