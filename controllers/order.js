const {mysqlConnection} = require('../comon/connect.js');
const { ResponseSuccess, ResponseFail } = require('../helpers/response.js');
const {getID, setOrder} = require('../helpers/util')
const {orderModle} = require('../modles/order')


class OrderControllerClass {
    getList (req, res){
        orderModle.getList(req, (err, results) => {
            if(err) throw err;
            if(results.length > 0){
                return ResponseSuccess(res, "", results)
            }
            return ResponseFail(res, "unsuccesful")
        })  
       
    }
    create (req, res){
        var order = {
            body: req.body,
            company_id: req.auth_user.company_id
        };
        orderModle.create(order, (err, result) => {
            if (err) throw err;
            var orderItems = {
                product: req.body.items,
                order_id: result.insertId
            }
            return orderModle.createItems(orderItems, (err, data) => {
                if (err) throw err;
                const input = getID(orderItems.order_id, req.auth_user.company_id);
                return orderModle.getOne(input, (err, results) => {
                    if(err) throw err;
                    const order = setOrder(results);
                    return ResponseSuccess(res, "", order)
                }) 
            })
        })
    } 

    getOne (req, res) {
        const input = getID(req.params.id, req.auth_user.company_id);
        orderModle.getOne(input, (err, results) => {
            if(err) throw err;
            if(results.length > 0){
                const order = setOrder(results);
                return ResponseSuccess(res, "", order)
            }
            return ResponseFail(res, "unsuccesful")
        })
    }

    delete (req, res) {
        const input = getID(req.params.id, req.auth_user.company_id);
        orderModle.delete(input, (err, data) => {
            if (err) throw err;
            orderModle.deleteOrderItems(input, (err, result) => {
            if(err) throw err
            return ResponseSuccess(res, "", result)
            })  
            return ResponseFail(res, "unsuccesful")    
        })
    }

    update (req, res)  {
        var order = {
            id: req.params.id,
            body: req.body,
            company_id: req.auth_user.company_id
        };
        orderModle.update(order, (err, result) => {
            if (err) throw err 
            orderModle.getOneItems(order.id, (err, results) => {
                if(err) throw err
                for(var index = 0; index < results.length; index ++){
                    orderModle.updateItems(order.body.items[index], results[index].id, (err, data) => {
                        if(err) throw err
                        const input = getID(req.params.id, req.auth_user.company_id);
                        orderModle.getOne(input, (err, results) => {
                            if(err) throw err;
                            if(results.length > 0){
                                const order = setOrder(results);
                                return ResponseSuccess(res, "", order)
                            }
                            return ResponseFail(res, "unsuccesful")
                        })
                    })
                } 
            })
        })
    }
}
const OrderController = new OrderControllerClass();
module.exports = {OrderController}