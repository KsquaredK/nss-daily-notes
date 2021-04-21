const notes = [{
        id: 1,
        subject: "Command Line",
        date: "April 5, 2021",
        feeling: "excited",
        timeSpent: 180

    },

    {
        id: 2,
        subject: "CSS Flexbox",
        date: "April 6, 2021",
        feeling: "excited and confused",
        timeSpent: 240

    }
]
console.log(notes)

const apr1621 = {
    id: 3,
    subject: "js review - arrays",
    date: "April 16, 2021",
    feeling: "comfortable - glad to have a working framework to understand this",
    timeSpent: 167

}

notes.push(apr1621);

for (const note of notes) {
    console.log(`Note ${note.id}
    Date: ${note.date}
    I learned ${note.subject}.
    I spent ${note.timeSpent} minutes working on it.
    I felt ${note.feeling}.`)
}

const searchTerm = "excited"
for (const note of notes) {
    if (note.feeling === searchTerm) {
        console.log(`On ${note.date}, which was the first day of class, mostly I felt ${note.feeling}.`)
    }
}

const createNote = (note) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1
    note.id = idForNewNote
    notes.push(note)

}

const moreNewerNote = {
    subject: "functions",
    date: "April 19, 2021",
    feeling: "alternating delight and despair",
    timeSpent: 246
}
createNote(moreNewerNote)

console.log(notes)