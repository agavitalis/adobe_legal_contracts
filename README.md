# Using Adobe Document APIS in Legal Contracts Management

This is an express application that demonstrates the use of Adobe Document Service API in the manipulation of legal contracts documents.

## Application Setup

#### Clone the Repo

```bash
git clone https://github.com/agavitalis/adobe_legal_contracts.git
```

#### Install dependencies

```bash
npm install
```

#### Configure Adobe Credentials

- Update `private.key` with your Adobe Private Keys.
- Update  `pdftools-api-credentials.json` with your correct Adobe Credentials

#### Configure Database Credentials

- Update `config/default.json` with your database credentials.

### Run server

#### Using npm

```bash
npm start
```

#### Using nodemon

```bash
nodemon start
```

## Contributing
Adding features and making changes to the project.

#### Create your branch to work off

```bash
git checkout -b <type/your-branch-name>
```

#### Create pull request to master

```bash
git fetch --prune
git pull
git push --set-upstream origin <type/your-branch-name>
```

## Tech Stack

1. [Express](https://adonisjs.com/): NodeJS Web framework
2. [Adobe Document Node SDK](https://www.adobe.io/apis/documentcloud/dcsdk/docs.html): The Adobe Document Services PDF Tools API provides modern cloud-based capabilities for PDF manipulation.
3. [Mongo](https://www.mongodb.com/): A non relational database
4. [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose is a MongoDB object modeling tool
6. [Handlebars](https://www.npmjs.com/package/hbs): NodeJS view templating engine
