const express = require('express')
const app = express()

app.get("/api", (req, res) => {
	res.json({ "users": ["user1", "user2", "user3"]})
})

app.get("/", (req, res) => {
	res.json({ "users": ["user1", "user2", "user3"]})
})
app.listen     res.json({ "users": ["user1", "user2", "user3"]})
})     res.json({ "users": ["user1", "user2", "user3"]})
})(5000, () => {console.log("Server started on port 5000")})
