#!/usr/bin/env python

# project imports
from application import create_app
# from config import DeploymentConfig
from config import DevelopmentConfig


# app = create_app(DeploymentConfig)
app = create_app(DevelopmentConfig)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
