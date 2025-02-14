const axios = require('axios');

class ApiActions {
    static async get(url) {
        return await axios.get(url);
    }

    static async post(url, data) {
        return await axios.post(url, data);
    }

    static async put(url, data) {
        return await axios.put(url, data);
    }

    static async delete(url) {
        return await axios.delete(url);
    }
}

module.exports = ApiActions;