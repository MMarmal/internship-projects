#!/bin/bash

source venv/bin/activate
gunicorn app:app --workers 4 --bind 0.0.0.0:8000
