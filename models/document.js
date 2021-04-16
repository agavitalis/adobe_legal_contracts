const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Document schema definition
var DocumentSchema = new Schema(
	{
		documentName: { type: String, required: false },
		url: { type: String, required: false },
	},
	{ timestamps: true }
);

//Exports the DocumentSchema for use elsewhere.
module.exports = mongoose.model("document", DocumentSchema);
