const express = require('express');
const app = express();

app.get('/letter-preview/:id', (req, res) => {
    const letterContent = "This is your dynamically generated letter content!";
    res.send(`
        <html>
        <head>
            <title>Letter Preview</title>
        </head>
        <body>
            <h1>Your Letter</h1>
            <p>${letterContent}</p>
        </body>
        </html>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
