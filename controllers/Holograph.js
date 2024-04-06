
var Holograph = require('../models/Holograph');
// List of all Costumes
exports.Holograph_list = async function (req, res) {
res.send('NOT IMPLEMENTED: Costume list');
};


// for a specific Costume.
exports.Holograph_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Holograph detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Holograph_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Holograph create POST');
};
// Handle Costume delete from on DELETE.
exports.Holograph_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Holograph delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Holograph_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Holograph update PUT' + req.params.id);
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
    document.Holograph_flavour = req.body.Holograph_flavour;
    document.Holograph_toppings = req.body.Holograph_toppings;
    document.Holograph_price = req.body.Holograph_price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send({ "error": `Error: ${err}` });

    }
};