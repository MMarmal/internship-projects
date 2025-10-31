# Simple Flask Application

## Create and Activate a Virtual Environment

Before running the app, create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

## Install Flask

Install Flask within the activated environment:

```bash
pip install flask
```

## (Optional) Save dependencies to a requirements file:

```bash
pip freeze > requirements.txt
```

## Run the App Locally

To run the app locally with Flask’s built-in development server:

```bash
python app.py
```

## Run the App with Gunicorn

1. Install Gunicorn

```bash
pip install gunicorn
```

2. Run the App

```bash
gunicorn app:app --workers 4 --bind 0.0.0.0:8000
```
