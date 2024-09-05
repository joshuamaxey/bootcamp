const express = require("express");
const app = express();

// app.use('/blogs', (req, res) => {

//     return res.json({
//         url: req.url
//     });
// });

// app.use((req, res) => {
//     return res.json({
//         message: "Resource Not Found"
//     })
// })

app.use('/blogs', (req, res) => {
    return res.json({ method: req.method + " Blogs" });
});

app.delete('/blogs/:id', (req, res) => {
    return res.json({
        message: `Blog # ${req.params.id} was deleted`
    })
})

const port = 8000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
