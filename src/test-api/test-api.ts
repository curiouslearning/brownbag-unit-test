export class TestApi {
  baseUrl = 'https://cat-fact.herokuapp.com/facts/'
  async get() {
    return this.responseToJson(await fetch(this.baseUrl));
  }

  async responseToJson(response: Response) {
    return await response.json();
  }
}