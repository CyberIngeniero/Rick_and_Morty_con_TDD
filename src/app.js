import express from "express";
import axios from "axios";

const app = express();

app.use(express.json());

const apiUrl = 'https://rickandmortyapi.com/api';

// Endpoint #1 - Obtener todos los personajes
app.get('/characters', async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/character`);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Error al obtener los personajes' });
  }
});

// Endpoint #2 - Obtener un personaje específico por su ID
app.get('/characters/:id', async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/character/${req.params.id}`);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: `Error al obtener el personaje con ID ${req.params.id}` });
  }
});

// Endpoint #3 - Obtener todos los episodios
app.get('/episodes', async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/episode`);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Error al obtener los episodios' });
  }
});

// Endpoint #4 - Obtener un episodio específico por su ID
app.get('/episodes/:id', async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/episode/${req.params.id}`);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: `Error al obtener el episodio con ID ${req.params.id}` });
  }
});

// Endpoint #5 - Obtener todas las ubicaciones
app.get('/locations', async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/location`);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las ubicaciones');
  }
});

export default app;
