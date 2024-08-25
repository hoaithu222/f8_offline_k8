export const httpClient = {
  name: "HttpClient",
  baseUrl: null,
  headers: {},
  requestConfig: null,
  responseConfig: null,
  create: function ({ baseUrl, headers = {} }) {
    const instance = { ...this };
    instance.baseUrl = baseUrl;
    instance.headers = headers;
    return instance;
  },
  send: async function (path, method = "GET", body = null, headers = {}) {
    try {
      let url = path;
      if (this.baseUrl) {
        url = `${this.baseUrl}${path}`;
      }
      const options = {
        method,
        headers: { ...this.headers, ...headers },
      };
      if (body) {
        options.body = JSON.stringify(body);
        options.headers["Content-Type"] = "application/json";
      }
      let initialRequest = { ...options };
      if (this.requestConfig) {
        initialRequest = this.requestConfig(initialRequest);
      }

      const response = await fetch(url, initialRequest);

      let responseClone = response.clone();
      if (this.responseConfig) {
        responseClone = await this.responseConfig(responseClone);
      }
      if (responseClone.name === "HttpClient") {
        //Xử lý gọi lại
        return this.send(path, method, body, headers);
      }
      if (!responseClone.ok) {
        throw new Error("Fetch to failed");
      }
      const data = await response.json();
      responseClone.data = data;
      return responseClone;
    } catch (e) {
      return false;
    }
  },
  request: function (callback) {
    if (typeof callback === "function") {
      this.requestConfig = callback;
    }
  },
  response: function (callback) {
    if (typeof callback === "function") {
      this.responseConfig = callback;
    }
  },
  get: function (path, headers = {}) {
    return this.send(path, "GET", null, headers);
  },
  post: function (path, body = null, headers = {}) {
    return this.send(path, "POST", body, headers);
  },
  put: function (path, body = null, headers = {}) {
    return this.send(path, "PUT", body, headers);
  },
  patch: function (path, body = null, headers = {}) {
    return this.send(path, "PATCH", body, headers);
  },
  delete: function (path, headers = {}) {
    return this.send(path, "DELETE", null, headers);
  },
};

//httpClient.get('/path')
//httpClient.post('/path', body)
//httpClient.put('/path', body)
//httpClient.patch('/path', body)
//httpClient.delete('/path')
