import { API_URL } from '../config';

const GENERIC_ERROR = "Une erreur est survenue, merci de réessayer ou de nous appeler.";

// POST JSON vers le backend. Retourne { ok, message } sans jamais lever d'exception.
export async function postJson(path, payload) {
  try {
    const response = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    let data = {};
    try {
      data = await response.json();
    } catch {
      /* réponse sans corps JSON */
    }

    if (!response.ok) {
      return { ok: false, message: data.message || data.error || GENERIC_ERROR };
    }
    return { ok: true, message: data.message || 'Votre demande a bien été envoyée !' };
  } catch {
    return { ok: false, message: GENERIC_ERROR };
  }
}
