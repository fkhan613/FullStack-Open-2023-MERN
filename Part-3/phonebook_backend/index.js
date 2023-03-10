require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Person = require("./models/person");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

morgan.token("type", function (req, res) {
  return JSON.stringify(req.body);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :type")
);

let people = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const generateId = () => {
  return Math.floor(Math.random() * 1000000000000000000);
};

const isDuplicate = (newName) => {
  existingPerson = Person.find({ name: newName }).then((person) => {
    return person;
  });

  console.log(existingPerson);
};

app.get("/", (request, response) => {
  response.send(
    "<h1>You want people? Go through the api route</h1> <br><br> <a href='http://localhost:3001/api/people/'>Click here to be redirected</a>"
  );
});

app.get("/api/people", (request, response) => {
  Person.find({}).then((people) => {
    response.json(people);
  });
});

app.get("/api/info", (request, response) => {
  let dateRequested = new Date();

  response
    .status(200)
    .send(
      `Phonebook has info for ${people.length} people <br><br> ${dateRequested} `
    );
});

app.get("/api/people/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = people.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).send("person not found");
  }
});

app.delete("/api/people/:id", (request, response) => {
  const id = Number(request.params.id);
  people = people.filter((person) => person.id !== id);
  response.status(204).end("person deleted successfully!");
});

app.post("/api/people", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "name or number missing",
    });
  }

  if (isDuplicate(body.name)) {
    console.log("duplicate found");
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => {
    return response.json(savedPerson);
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
