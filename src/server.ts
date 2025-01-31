import express from "express"



const PORT = 3333


const app = express()
app.use(express.json())

// midleware global
//app.use(myMiddleware)




app.listen(PORT, () =>  console.log(`Server is running on port ${PORT}`))
