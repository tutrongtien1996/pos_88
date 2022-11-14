const express = require('express');
const bodyParser = require('body-parser');
const {AuthRoute} = require('./routes/auth.js');
const {CustomerRouters} = require('./routes/customer.js');
const {ProductRouters} = require('./routes/product.js');
const {OrderRouters} = require('./routes/order.js');
const {UserRoutes} = require('./routes/user.js');
var cors = require('cors')


const dotenv = require('dotenv').config();
const app = express();



const PORT= dotenv.parsed.PORT;

app.use(cors())
app.use(bodyParser.json());
app.use('/public', express.static('uploads'))
app.use('/admin', AuthRoute)
app.use('/admin/customers', CustomerRouters)
app.use('/admin/products', ProductRouters)
app.use('/admin/orders', OrderRouters)
app.use('/admin/users', UserRoutes)


app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => console.log(`server running on PORT: http://localhost:${PORT}`))