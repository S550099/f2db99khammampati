var train = require('../models/train');
// List of all Costumes
exports.train_list = function(req, res) {
 res.send('NOT IMPLEMENTED: train list');
};
// for a specific Costume.
exports.train_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: train detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.train_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: train create POST');
};
// Handle Costume delete form on DELETE.
exports.train_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: train delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.train_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: train update PUT' + req.params.id);
};
// VIEWS

   // List of all Costumes
exports.train_list = async function(req, res) {
    try{
    thetrain = await train.find();
    res.send(thetrain);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.train_view_all_Page = async function(req, res) {
    try{
    thetrain = await train.find();
    res.render('train', { title: 'train Search Results', results: thetrain });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.train_create_post = async function(req, res) {
    console.log(req.body)
    let document = new train();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.train_name = req.body.train_name;
    document.train_size = req.body.train_size;
    document.train_type = req.body.train_type;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}