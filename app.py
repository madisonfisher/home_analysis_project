from flask import Flask, render_template
from os import environ

app = Flask(__name__, template_folder="docs")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/<page_name>")
def page(page_name):
    return render_template(f'{page_name}.html')

@app.route('/apikey')
def key():
    return environ.get("API_KEY")

if __name__ == "__main__":
    app.run(debug=True,threaded=True)