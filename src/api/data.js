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
  async fetchPosts() {
    const response = await this.axiosInstance.get("/wp-json/wp/v2/posts");
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
  async createCategories(name, description) {
    this.axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.token}`;
    const response = await this.axiosInstance.post("/wp-json/wp/v2/categories", {
      name: name,
      description:description
    });
    return response.data;
  }
  async updateCategory(categoryId, categoryName, categoryDescription) {
    this.axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.token}`;
    const response = await this.axiosInstance.post(
      `/wp-json/wp/v2/categories/${categoryId}`, {
        name: categoryName,
        description: categoryDescription
      }
    );
    return response.data;
  }
  async deleteCategory(categoryId) {
    this.axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.token}`;
    const response = await this.axiosInstance.delete(
      `/wp-json/wp/v2/categories/${categoryId}?force=true`
    );
    return response.data;
  }
  async fetchComments(postId) {
    this.axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.token}`;
    const response = await this.axiosInstance.get(
      `/wp-json/wp/v2/comments?post=${postId}`
    );
    return response.data;
  }

  // Mutation Methods (Add, Update, Delete)
  async createPost(postData, cardID) {
    // ... (Handle authentication if needed)
    this.axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.token}`;
    const response = await this.axiosInstance.post(
      "/wp-json/wp/v2/posts",
      {
        title: postData.title,
        content: postData.content,
        status: "publish",
        categories: cardID
      }
    );
    return response.data;
  }
  
  async fetchPostByCategoryId(id) {
    const response = await this.axiosInstance.get(`/wp-json/wp/v2/posts?categories=${id}`);
    return response.data;
  }
  async fetchPostByState() {
    const response = await this.axiosInstance.get(`/wp-json/wp/v2/posts?state=wheurg-out`);
    return response.data;
  }
  async updatePostByState(id) {
    this.axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.token}`;
    const response = await this.axiosInstance.post(`/wp-json/wp/v2/posts/${id}`,{
      state:"published"
    });
    return response.data;
  }
 
  // ... (Similar methods for updating and deleting posts, categories, comments)
}
const apiInstance = new WordPressAPI("http://localhost/wordpress")
export default apiInstance;