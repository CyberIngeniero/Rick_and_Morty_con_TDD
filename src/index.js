import app from "./app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`API escuchando en el puerto ${port}`);
  });
