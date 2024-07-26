// api/api.js
import axios from "axios";

class WordPressAPI {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    });
    this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L3dvcmRwcmVzcyIsImlhdCI6MTcyMTgxODg2MCwibmJmIjoxNzIxODE4ODYwLCJleHAiOjE3MjI0MjM2NjAsImRhdGEiOnsidXNlciI6eyJpZCI6IjMifX19.4UC7VIdrX41qTIyuZ5OsADYpPYlwMuHSGyqtG5QaZY8"
  }

  // Fetch Methods
  async fetchPosts(params = {}) {
    const response = await this.axiosInstance.get("/wp-json/wp/v2/posts", {
      params,
    });
    return response.data;
  }

  async login(data = {}) {
    const response = await this.axiosInstance.post('/wp-json/jwt-auth/v1/token', {
      params,
    });
  }

  async fetchCategories() {
    const response = await this.axiosInstance.get("/wp-json/wp/v2/categories");
    return response.data;
  }
  async createCategories(name) {
    this.axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.token}`;
    const response = await this.axiosInstance.post("/wp-json/wp/v2/categories", {
      name: name
    });
    return response.data;
  }
  async updateCategory(categoryId, categoryData) {
    this.axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.token}`;
    const response = await this.axiosInstance.post(
      `/wp-json/wp/v2/categories/${categoryId}`, {
        name:categoryData
      }
    );
    return response.data;
  }
  async deleteCategory(categoryId) {
    this.axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.token}`;
    const response = await this.axiosInstance.delete(
      `/wp-json/wp/v2/categories/${categoryId}`
    );
    return response.data;
  }
  async fetchComments(postId) {
    const response = await this.axiosInstance.get(
      `/wp-json/wp/v2/comments?post=${postId}`
    );
    return response.data;
  }

  // Mutation Methods (Add, Update, Delete)
  async createPost(postData) {
    // ... (Handle authentication if needed)
    const response = await this.axiosInstance.post(
      "/wp-json/wp/v2/posts",
      postData
    );
    return response.data;
  }

  // ... (Similar methods for updating and deleting posts, categories, comments)
}
const apiInstance = new WordPressAPI("http://localhost/wordpress")
export default apiInstance;