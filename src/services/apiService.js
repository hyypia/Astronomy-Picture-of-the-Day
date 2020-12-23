export default class ApiService {
  _key = 'fXQ5MaFBHMZP7oiG4usDKm9ZgcR1Brl06LmAOyts';

  async getResource(url) {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error('Not found');

    return data;
  }

  getDayImage() {
    return this.getResource(
      `https://api.nasa.gov/planetary/apod?api_key=${this._key}`
    );
  }

  getSearchResults(searchRequest) {
    return this.getResource(
      `https://images-api.nasa.gov/search?q=${searchRequest}&media_type=image`
    );
  }
}
