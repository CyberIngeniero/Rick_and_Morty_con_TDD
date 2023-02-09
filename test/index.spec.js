import app from "../src/app.js";
import request from "supertest";

describe('Endpoint de personajes', () => {
    it('Debe devolver una lista de personajes', async () => {
      const response = await request(app)
        .get('/characters')
        .expect(200);
  
      expect(Array.isArray(response.body.results)).toBe(true);
      expect(response.body.results.length).toBeGreaterThan(0);
      expect(response.body.results[0]).toHaveProperty('id');
      expect(response.body.results[0].id).toBeDefined();
      expect(typeof response.body.results[0].id).toEqual('number');
    });
  
    it('Debe devolver un personaje específico por su ID', async () => {
      const characterId = 1;
  
      const response = await request(app)
        .get(`/characters/${characterId}`)
        .expect(200);
  
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body.id).toEqual(characterId);
      expect(response.body).toHaveProperty('name');
      expect(response.body.name).toBeDefined();
      expect(typeof response.body.name).toEqual('string');
    });
  
    it('Debe devolver un error si el personaje no existe', async () => {
        const characterId = 999;
  
        const response = await request(app)
        .get(`/characters/${characterId}`)
        .send();
      
        expect(response.statusCode).toBe(500);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body.error).toEqual(`Error al obtener el personaje con ID ${characterId}`);
    });
});

describe('Endpoint de episodios', () => {
    it('Debe devolver una lista de episodios', async () => {
        const response = await request(app)
        .get('/episodes')
        .expect(200);

        expect(Array.isArray(response.body.results)).toBe(true);
        expect(response.body.results.length).toBeGreaterThan(0);
        expect(response.body.results[0]).toHaveProperty('id');
        expect(response.body.results[0].id).toBeDefined();
        expect(typeof response.body.results[0].id).toEqual('number');
    });

    it('Debe devolver un episodio específico por su ID', async () => {
        const episodeId = 1;

        const response = await request(app)
        .get(`/episodes/${episodeId}`)
        .expect(200);

        expect(response.body).toBeInstanceOf(Object);
        expect(response.body.id).toEqual(episodeId);
        expect(response.body).toHaveProperty('name');
        expect(response.body.name).toBeDefined();
        expect(typeof response.body.name).toEqual('string');
    });

    it('Debe devolver un error si el episodio no existe', async () => {
        const episodeId = 999;

        const response = await request(app)
        .get(`/episodes/${episodeId}`)
        .send();

        expect(response.statusCode).toBe(500);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body.error).toEqual(`Error al obtener el episodio con ID ${episodeId}`);
    });
});

describe('Endpoint de locaciones', () => {
    it('Debe devolver todas las locaciones', async () => {
        const response = await request(app).get('/locations').expect(200);

        expect(response.body).toBeInstanceOf(Object);
        expect(Array.isArray(response.body)).toBe(false);
        expect(response.body.results).toBeInstanceOf(Array);
        expect(response.body.results.length).toBeGreaterThan(0);
        expect(response.body.results[0]).toHaveProperty('id');
        expect(response.body.results[0]).toHaveProperty('name');
        expect(response.body.results[0]).toHaveProperty('type');
        expect(response.body.results[0]).toHaveProperty('dimension');
        expect(response.body.results[0]).toHaveProperty('residents');
    });  
  
    it('Debe devolver un error si la locación no existe', async () => {
      const locationId = 999;
  
      const response = await request(app)
        .get(`/locations/${locationId}`)
        .expect(404);
    });
  });
