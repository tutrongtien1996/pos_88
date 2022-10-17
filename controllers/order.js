const { ResponseSuccess, ResponseFail } = require('../helpers/response.js');
const {getID, setOrder} = require('../helpers/util')
const {orderModel} = require('../models/order')


class OrderControllerClass {
    getList (req, res){
        orderModel.getList(req, (err, results) => {
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
        orderModel.create(order, (err, result) => {
            if (err) throw err;
            var orderItems = {
                product: req.body.items,
                order_id: result.insertId
            }
            return orderModel.createItems(orderItems, (err, data) => {
                if (err) throw err;
                const input = getID(orderItems.order_id, req.auth_user.company_id);
                return orderModel.getOne(input, (err, results) => {
                    if(err) throw err;
                    const order = setOrder(results);
                    return ResponseSuccess(res, "", order)
                }) 
            })
        })
    } 

    getOne (req, res) {
        const input = getID(req.params.id, req.auth_user.company_id);
        orderModel.getOne(input, (err, results) => {
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
        orderModel.delete(input, (err, data) => {
            if (err) throw err;
            orderModel.deleteOrderItems(input, (err, result) => {
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
        orderModel.update(order, (err, result) => {
            if (err) throw err 
            orderModel.getOneItems(order.id, (err, results) => {
                if(err) throw err
                for(var index = 0; index < results.length; index ++){
                    orderModel.updateItems(order.body.items[index], results[index].id, (err, data) => {
                        if(err) throw err
                        const input = getID(req.params.id, req.auth_user.company_id);
                        orderModel.getOne(input, (err, results) => {
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