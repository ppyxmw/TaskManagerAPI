const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const auth = require('./middleware/auth')

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT)
})
