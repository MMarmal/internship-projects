from flask import Flask

# Create the Flask app
app = Flask(__name__)

# Define a simple route
@app.route("/")
def home():
    return "Hello, Flask! 🚀 This is my first app."

@app.route("/about")
def about():
    return "This is the about page."

@app.route("/user/<name>")
def user(name):
    return f"Hello, {name}!"

# Run locally in development mode
if __name__ == "__main__":
    app.run(debug=True)  # debug=True auto-reloads when code changes


