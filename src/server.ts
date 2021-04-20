import express from 'express';

const app = express();


app.get("/", (request, response) => {
    return response.json({
        "message": "teste"
    });
});

app.post("/", (request, response) => {
    return response.json({
        "message": "requisição post"
    })
});


app.listen(3333, () => console.log('server is running on port 3333'));