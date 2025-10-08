// Este archivo se ejecuta en el servidor de Vercel (Node.js)
export default async function handler(req, res) {
  // Tu API Key de Football-Data.org
  const API_KEY = 'bf4de732be074fef9a967c716a5fc4a2';

  try {
    // Llamada a la API oficial (desde el servidor, no desde el navegador)
    const response = await fetch('https://api.football-data.org/v4/matches', {
      headers: {
        'X-Auth-Token': API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`API respondió con estado ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error en el backend:', error);
    res.status(500).json({ error: 'No se pudieron cargar los partidos' });
  }
}
