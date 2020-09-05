const dbConnection = require('../../config/dbConnection');



module.exports = app => {

    const connection = dbConnection();


    app.get('/', (req,res)=>{
        connection.query('SELECT * FROM NEWS', (err,result) => {
            console.log(result);
            res.render('news/news', {
                news: result
            });
        });   
    });

    app.post('/news', (req,res) => {
        const TITLE = req.body.news[0];
        const NEWS = req.body.news[1];

        connection.query('INSERT INTO NEWS SET?', {
            TITLE,
            NEWS
        },(err,result)=>{
            res.redirect('/');
        })
    })
}