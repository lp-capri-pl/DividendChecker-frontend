import axios from 'axios';

const backendUrl = "https://dividendchecker-backend.onrender.com";

async function fetchBackendMessage() {
    try {
        const response = await axios.get(`${backendUrl}/`);
        console.log('Backend Response:', response.data);
    } catch (error) {
        console.error('Error fetching from backend:', error);
    }
}

console.log("Welcome to DividendChecker frontend!");
fetchBackendMessage();
