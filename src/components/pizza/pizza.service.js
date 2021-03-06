import axios from "axios";

export default class PizzaService {

    constructor() {

    }

    getAll(url) {
        return axios.get(url)
            .then((response) => response.data)
            .catch((error) => error);
    }

    post(url) {
        return axios.post(url)
            .then((response) => response.data)
            .catch((error) => error);
    }

}

