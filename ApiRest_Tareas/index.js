const express = require("express");
const app = express();
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json()); // Middleware para leer JSON en las peticiones
app.use("/tareas", taskRoutes); // Prefijo de rutas

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));