import axios from "axios";
const Posts_url='https://jsonplaceholder.typicode.com/posts';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fakestoreApi.get<Product[]>('/products');
    return response.data;
});