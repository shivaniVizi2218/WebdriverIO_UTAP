const assert = require("assert");
const apiActions = require("../../utils/ApiActions");
const url = require("../../data/apiUrls.json");
const apiData = require("../../data/apidata.json");
describe("API Testing for JsonPlaceHolder APIs", () => {
  it("GET - Request to get list of users", async () => {
    const response = await apiActions.get(url.getRequestApiUrl);
    // console.log('GET Response:', response.data);
    assert(Array.isArray(response.data), "Response data should be an array");
  });

  it("POST - Request to create a new post", async () => {
    const response = await apiActions.post(
      url.postRequestApiUrl,
      apiData.postData
    );
    // console.log('POST Response:', response.data);
    assert(
      response.data.title === apiData.postData.title,
      "Title should match"
    );
    assert(response.data.body === apiData.postData.body, "Body should match");
    assert(
      response.data.userId === apiData.postData.userId,
      "User ID should match"
    );
  });

  it("PUT - Request to update a post", async () => {
    const response = await apiActions.put(
      url.putRequestApiUrl,
      apiData.putData
    );
    // console.log('PUT Response:', response.data);
    assert(response.data.title === apiData.putData.title, "Title should match");
    assert(response.data.body === apiData.putData.body, "Body should match");
    assert(
      response.data.userId === apiData.putData.userId,
      "User ID should match"
    );
  });

  it("DELETE - Request to delete a post", async () => {
    const response = await apiActions.delete(url.deleteRequestApiUrl);
    // console.log('DELETE Response:', response.data);
    assert.deepStrictEqual(response.data, {}, "Response data should be empty");
  });
});
