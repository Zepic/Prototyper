//model
const model = {
    user: {
        name: 'Terje',
        color: 'green'
    },
    currentSelectedPage: 0, //0 = group select 1 = aboutcolors 2 = summary 3 = peronal notes
    currentlySelectedGroup: 0, //0 = self 1 = next color 2 = next color
    groupCounts: {
        blue: 1,
        green: 1,
        red: 2,
    },
    groups: [
        {
            name: "Red1",
            color: "red",            
        }
    ],
    notes: [
        {// how the model of the notes would look.
            ID: 1,
            content: "text",
            aboutColor: "red",
            group: 'red 1',
            agree: 3,//['Terje', 'Per', 'Espen'],
            disagree: 0, //['Knut'],
            posX: 100, //x
            posY: 300, //y
            zIndex: 1
        },
        {
            ID: 2,
            content: "text",
            aboutColor: "red",
            group: 'red 1',
            agree: 3,
            disagree: 0, 
            posX: 100,
            posY: 300, 
            zIndex: 2
        },
        {
            ID: 3,
            content: "text",
            aboutColor: "red",
            group: 'red 1',
            agree: 3,
            disagree: 0, 
            posX: 100,
            posY: 300, 
            zIndex: 3
        },
        {
            ID: 4,
            content: "text",
            aboutColor: "red",
            group: 'red 1',
            agree: 3,
            disagree: 0, 
            posX: 100,
            posY: 300, 
            zIndex: 4
        },
        {
            ID: 5,
            content: "text",
            aboutColor: "red",
            group: 'red 1',
            agree: 3,
            disagree: 0, 
            posX: 100,
            posY: 300, 
            zIndex: 5
        },
        {
            ID: 6,
            content: "text",
            aboutColor: "red",
            group: 'red 1',
            agree: 3,
            disagree: 0, 
            posX: 100,
            posY: 300, 
            zIndex: 6
        },
    ],  
    updates: [] //insert fake news
};