import express from "express";
import students from "./data/data.js";

const app = express();
app.use(express.json());

// ✅ Route Param - Get student by ID
app.get("/api/students/:id", (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id);
  const student = students.find((s) => s.id === parsedId);

  if (!student) {
    return res.status(404).send("Student not found");
  }

  res.status(200).send(student);
});

// ✅ Query Param - Filter students by course
app.get("/api/students", (req, res) => {
  const { course } = req.query;

  if (course) {
    const filtered = students.filter((s) => s.course === course);
    return res.status(200).send(filtered);
  }

  // If no query, return all students
  res.status(200).send(students);
});

// ✅ Server Start
app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
