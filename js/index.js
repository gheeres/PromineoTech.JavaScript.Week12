(function(){
  const DefaultUrl = "http://localhost:3000";

  /**
   * Service for interacting with the backend API
   */
  class WorldService {
    /**
     * Creates an instance of the WorldService class.
     * @param {String} url The url of the backend API.
     */
    constructor(url) {
      this.url = url || DefaultUrl;
    }    

    /**
     * Retrieves the specified country by it's unique id.
     * @returns {Promise} Promise contains the data from the request.
     */
    getCountry(code) {    
      console.log(`WorldService.getCountry(${ code })`);
      // TODO
    }

    /**
     * Retrieves all of the available countries.
     * @returns {Promise} Promise contains the data from the request.
     */
    getCountries() {    
      console.log(`WorldService.getCountries()`);
      // TODO
    }

    /**
     * Retrieves all of the available cities in the specified country.
     * @param {String} code The unique id / code for the country.
     * @returns {Promise} Promise contains the data from the request.
     */
    getCitiesForCountry(code) {    
      console.log(`WorldService.getCitiesForCountry(${ code })`);
      // TODO
    }

    /**
     * Retrieves the specified city by its unique id.
     * @param {Number} id The unique id of the city.
     * @returns {Promise} Promise contains the data from the request.
     */
    getCity(id) {    
      console.log(`WorldService.getCity(${ id })`);
      // TODO
    }

    /**
     * Removes the specified city by its unique id.
     * @param {Number} id The unique id of the city.
     * @returns {Promise} Promise contains the data from the request.
     */
    deleteCity(id) {    
      console.log(`WorldService.deleteCity(${ id })`);
      // TODO
    }
  }

  /**
   * Our main application for the page.
   */
  class App {
    /**
     * Creates an instance of the App class.
     * @param {WorldService} service The backend service for data.
     */
    constructor(service) {
      this.service = service;
    }

    /**
     * Initializes the page or sets the default values.
     */
    initialize() {
      console.log(`App.initialize()`);
      // TODO
    }

    /**
     * Starts the application processing.
     */
    run() {
      console.log(`App.run()`);
      // TODO
    }
  }
  
  // Main method / execution point.
  $(document).ready(function() {
    const service = new WorldService();
  
    const app = new App(service);
    app.initialize();
    app.run();
  })  
})();