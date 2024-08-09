from flask import Flask, request, jsonify
from flask_cors import CORS
from optimization import optimize_shifts

app = Flask(__name__)
CORS(app)

@app.route('/api/shifts', methods=['POST'])
def create_shifts():
    data = request.json
    optimized_shifts = optimize_shifts(data)
    return jsonify(optimized_shifts)

@app.route('/api/shifts', methods=['GET'])
def get_shifts():
    # TODO: シフトデータの取得ロジックを実装
    return jsonify([])

if __name__ == '__main__':
    app.run(debug=True)
