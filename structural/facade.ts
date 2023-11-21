class HttpRequestHandler {
  sendRequest(method: string, url: string, data?: any): void {
    console.log(`Sending ${method} request to ${url}`);
    if (data) {
      console.log("Data:", data);
    }
    console.log("Request sent successfully");
  }
}

class ApiRequestFacade {
  httpRequest: HttpRequestHandler;
  constructor() {
    this.httpRequest = new HttpRequestHandler();
  }
  get(url: string) {
    this.httpRequest.sendRequest("GET", url);
  }
  post(url: string, data: any) {
    this.httpRequest.sendRequest("POST", url, data);
  }
  put(url: string, data: any) {
    this.httpRequest.sendRequest("PUT", url, data);
  }
}

function clientCode(apiFacade: ApiRequestFacade): void {
  apiFacade.get("https://api.example.com/users");
  apiFacade.post("https://api.example.com/users", {
    name: "John Doe",
    age: 30,
  });
  apiFacade.put("https://api.example.com/users/1", { age: 31 });
}

const apiRequestFacade = new ApiRequestFacade();
clientCode(apiRequestFacade);
