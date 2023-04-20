import express, {Request, Response}  from 'express'
const app = express()
const port = process.env.PORT || 3001

app.get('/', (req:Request, res:Response) => {
    res.send('Hellonnnn  qwerty dqwertyfg tyui!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
