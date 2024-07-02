import express from 'express'
const app = express()
const port = 3001;
import path from 'path'
const __dirname = path.resolve();

app.use(express.static(__dirname))
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


