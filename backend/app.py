from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import os
from utils.analysis import analyze_data
from utils.ai_simulator import generate_insights_and_content

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(file_path)

    try:
        data = pd.read_csv(file_path) if file.filename.endswith('.csv') else pd.read_excel(file_path)
        insights = analyze_data(data)
        ai_response = generate_insights_and_content(insights)
        return jsonify(ai_response)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/')
def home():
    return "Markety Backend is running!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)