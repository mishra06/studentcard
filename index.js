const express = require("express");

//Initialize
const deadpool = express();

deadpool.use(express.json());


//GET
deadpool.get("/", (request, response) =>{
    return response.json({ data: "HELLO Guys"});
});

deadpool.get("/b2/:id", (req, res) => {
    const students = [
        {
            id: 1,
            name: "mishra",
        },
        {
            id: 2,
            name: "vibhakar",
        },
        {
            id: 3,
            name: "vishal",
        },
    ];

    const studentId = req.params.id;

    //Filter the array
    const getstudent = students.filter((student) => student.id === parseInt(studentId));

    if (getstudent.length === 0) {
        return res.json({ error: "No student found!!!"});
    }

    return res.json({ data: getstudent });
});

//HTTP methods
deadpool.listen(7262, () => console.log("hy mishra, the server is running"))

