const express = require('express');
// const mongoose = require('mongoose');
const path  = require('path');
const fileUpload = require('express-fileupload');
let initialPath = path.join(__dirname, "public");

// mongoose.connect('mongodb://127.0.0.1/blog');

const app = express();
app.use(express.static(initialPath));
app.use(fileUpload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initialPath, "editor.html"));
})

app.get('/admin', (req, res) => {
    res.sendFile(path.join(initialPath, "dashboard.html"));
})
app.get('/public/assets/js/editor.js', (req, res) => {
    res.sendFile(path.join(initialPath, "assets/js/editor.js"));
});
app.get('/public/assets/js/firebase.js', (req, res) => {
    res.sendFile(path.join(initialPath, "assets/js/firebase.js"));
});

app.get('/pomodoro', (req, res) => {
    res.sendFile(path.join(initialPath, "pomodoro.html"));
})
app.get('/notes', (req, res) => {
    res.sendFile(path.join(initialPath, "notes.html"));
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(initialPath, "login.html"))
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(initialPath, "register.html"))
})
app.get('/dictionary', (req, res) => {
    res.sendFile(path.join(initialPath, "dictionary.html"));
})

app.get('/:blog', (req, res) => {
    res.sendFile(path.join(initialPath, "blog.html"));
})



app.get('/public/assets/js/login.js', (req, res) => {
    res.sendFile(path.join(initialPath, "assets/js/login.js"));
});
app.get('/public/assets/js/dashboard.js', (req, res) => {
    res.sendFile(path.join(initialPath, "assets/js/dashboard.js"));
});
app.get('/public/assets/js/dictionary.js', (req, res) => {
    res.sendFile(path.join(initialPath, "assets/js/dictionary.js"));
});
app.get('/public/assets/js/pomodoro.js', (req, res) => {
    res.sendFile(path.join(initialPath, "assets/js/pomodoro.js"));
});
app.get('/public/assets/js/notes.js', (req, res) => {
    res.sendFile(path.join(initialPath, "assets/js/notes.js"));
});
// app.use((req, res) => {
//     res.json("404");
// })


// Upload Image
app.post('/uploads', (req, res) => {
    let file = req.files.image;
    let date = new Date();

    // Image Name
    let imageName = date.getDate() + date.getTime() + file.name;
    // Image Path
    let imagePath = 'public/uploads/' + imageName;

    // Create Upload
    file.mv(imagePath, (err, result) => {
        if(err){
            throw err;
        }
        else{
            res.json(`uploads/${imageName}`);
        }
    })
})

app.listen("3000", () => {
    console.log('listening!');
})

