const express = require("express");
const { getFirestore } = require('firebase-admin/firestore');
let admin = require("firebase-admin");
let serviceAccount = require("./.env/firebaseadmin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();
const app = express();
const PORT = 3001;

const docRef = db.collection('notes').doc('m17EzriB2G8xIYUVEDje ');

app.get("/notes", async (req, res) => {
    const snapshot = await db.collection('notes').get();
    const notes = snapshot.docs.map(doc => doc.data());
    res.send(notes);
    }
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
