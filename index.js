const express = require('express');
const bodyParser = require('body-parser');
const {AuthRoute} = require('./routes/auth.js');
const {CustomerRouters} = require('./routes/customer.js');
const {ProductRouters} = require('./routes/product.js');
const {OrderRouters} = require('./routes/order.js');
const {UserRoutes} = require('./routes/user.js');
const {PaymentRouters} = require('./routes/payment.js');
const {CompanyRouters} = require('./routes/company.js');
const {SampleProductRouters} = require('./routes/sample_product.js');
const {SampleBusinessRouters} = require('./routes/sample_business.js');

var cors = require('cors')


const dotenv = require('dotenv').config();
const app = express();



const PORT= dotenv.parsed.PORT;

app.use(cors())
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'))
app.use('/admin', AuthRoute)
app.use('/admin/customers', CustomerRouters)
app.use('/admin/products', ProductRouters)
app.use('/admin/orders', OrderRouters)
app.use('/admin/users', UserRoutes)
app.use('/admin/payments', PaymentRouters)
app.use('/admin/companies', CompanyRouters)
app.use('/admin/sample-products', SampleProductRouters)
app.use('/admin/sample-business', SampleBusinessRouters)



app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => console.log(`server running on PORT: http://localhost:${PORT}`))