export class Http {
  async ajax(method, url, body = null) {
    const json = body && !(body instanceof FormData); /* Existe body y no es formdata */
    const headers = body && json ? { "Content-Type": "application/json" } : {}; /* Si hay body y el paso anterior es cierto --> headers */
    const resp = await fetch(url, {
      method,
      headers,
      body: json ? JSON.stringify(body) : body, /* Para cuando no hay body o es formData (el navegador le pone las cabeceras correctas) */
    });

    if (!resp.ok) throw new Error(resp.statusText);

    if (resp.status != 204) {
      return await resp.json();
    } else {
      return null; // 204 implica una respuesta sin datos
    }
  }

  get(url) {
    return this.ajax("GET", url);
  }

  post(url, body) {
    return this.ajax("POST", url, body);
  }

  put(url, body) {
    return this.ajax("PUT", url, body);
  }

  delete(url) {
    return this.ajax("DELETE", url);
  }
}
