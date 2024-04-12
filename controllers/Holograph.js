
var Holograph = require('../models/Holograph');
// List of all Costumes
exports.Holograph_list = async function (req, res) {
    try {
        theHolograph = await Holograph.find();
        res.send(theHolograph);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



// for a specific Costume.
exports.Holograph_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Holograph.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle Costume create on POST.
// Handle Holograph create on POST.
exports.Holograph_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Holograph();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.holograph_name = req.body.holograph_name;
    document.creator = req.body.creator;
    document.edition_number = req.body.edition_number;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send({ "error": `Error: ${err}` });

    }
};

// Handle Icecream delete from on DELETE.
exports.Holograph_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Costume.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

//Handle Costume update form on PUT.
exports.Holograph_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Holograph.findById(req.params.id)
        // Do updates of properties
        if (req.body.holograph_name)
            toUpdate.holograph_name = req.body.holograph_name;
        if (req.body.creator) toUpdate.creator = req.body.creator;
        if (req.body.edition_number) toUpdate.edition_number = req.body.edition_number;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};


// Handle a show all view
exports.Holograph_view_all_Page = async function (req, res) {
    try {
        theHolograph = await Holograph.find();
        res.render('Holograph', { title: 'Holograph Search Results', results: theHolograph });
    }
    catch (err) {
        res.status(500);
        res.send({ "error": `Error: ${err}` });

    }
};

// Handle Holograph create on POST.
exports.Holograph_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Holograph();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.holograph_name = req.body.holograph_name;
    document.creator = req.body.creator;
    document.edition_number = req.body.edition_number;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send({ "error": `Error: ${err}` });

    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Holograph_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('Holographcreate', { title: 'Holograph Create' });
    }
    catch (err) {
        res.status(500)
        res.send({ 'error': '${err}' });
    }
};
// Handle building the view for updating a costume.
// query provides the id
exports.Holograph_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Holograph.findById(req.query.id)
        res.render('Holographupdate', { title: 'Holograph Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send({ 'error': '${err}' });
    }
};
// Handle a delete one view with id from query
exports.Holograph_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Holograph.findById(req.query.id)
        res.render('Holographdelete', {
            title: 'Holograph Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send({ 'error': '${err}' });
    }
};
