module.exports = app => {
    app.get('/api/curso/GetCursos', (req, res) => {
        var data = require('../json/curso.json');
        res.json(data);
    })
    app.get('/api/matricula/GetMatricula', (req, res) => {
        var data = require('../json/curso.json');
        res.json(data);
    })    

    app.get('/api/matricula/GetUsuaMatricula', (req, res) => {
        var data = require('../json/alumnos.json');
        res.json(data);
    })  
    
}