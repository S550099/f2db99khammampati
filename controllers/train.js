var train = require('../models/train');
// List of all trains
exports.train_list = function(req, res) {
 res.send('NOT IMPLEMENTED: train list');
};
// for a specific train.
exports.train_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await train.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle train create on POST.
exports.train_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: train create POST');
};
// Handle train delete form on DELETE.
exports.train_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: train delete DELETE ' + req.params.id);
};
// Handle train update form on PUT.
exports.train_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: train update PUT' + req.params.id);
};
// VIEWS

   // List of all trains
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
   // Handle train create on POST.
exports.train_create_post = async function(req, res) {
    console.log(req.body)
    let document = new train();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"train_type":"goat", "cost":12, "size":"large"}
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
};
// Handle train update form on PUT.
exports.train_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await train.findById( req.params.id)
 // Do updates of properties
 if(req.body.train_name)
 toUpdate.train_name = req.body.train_name;
 if(req.body.train_size) toUpdate.train_size = req.body.train_size;
 if(req.body.train_type) toUpdate.train_type = req.body.train_type;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};