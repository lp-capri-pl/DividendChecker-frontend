import axios from 'axios';

async function fetchBackendMessage() {
    try {
        const response = await axios.get('http://127.0.0.1:5000/');
        console.log('Backend Response:', response.data);
    } catch (error) {
        console.error('Error fetching from backend:', error);
    }
}

console.log("Welcome to DividendChecker frontend!");
fetchBackendMessage();
