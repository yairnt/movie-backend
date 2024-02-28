# BACKEND FOR LITEFLIX (Litebox challenge)

This is a Movie Play Website created by Yair Segura



- This backend is already deployed on [Render](https://www.render.com/), but if you want to run locally, follow the instructions.

- The link to the frontend repo is: https://github.com/yairnt/challenge-liteflix?tab=readme-ov-file

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version v18.12.1 or higher)
- [npm](https://www.npmjs.com/) (version 8.19.2 or higher)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) 


## Installation

1. Clone this repository to your local machine.
    

2. Navigate to the root project directory.


3. Install project dependencies:

    bash
    npm install
    

## Run local

Once you have all installed, you may change db.js and database.json to local variables these values.

      USER: user
      PASSWORD: password
      DB: database
      HOST: db
    ports:
      - "5432:5432"

After that, then run these comands:
- docker-compose build
- docker-compose up