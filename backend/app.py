from flask import Flask, jsonify, request
import requests
from flask_cors import CORS
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "Welcome to DividendChecker backend!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

