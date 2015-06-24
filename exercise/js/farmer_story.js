(function(){

	Parse.initialize("lb68hfMRYgqhmuro8Ook5xux5mORCjF59w6Exfek","PAQaaFUhvx52GXTHFsZ4MeLF2aaQNrJT1xx6je2S");


    document.getElementById('btnSubmit').addEventListener("click",function(){

    	alert('INSIDE JAVASCRIPT');
		var Crop = Parse.Object.extend("crop");
		var crop = new Crop();

		crop.set("cropName",document.getElementById('crop').value);
		crop.set("farmerName","somebody");
		crop.set("feature",document.getElementById('feature').value);
		crop.set("seedingTime",document.getElementById('start_time').value);
		crop.set("sellingTime",document.getElementById('sell_date').value);
		crop.set("seedingPosition",document.getElementById('location').value);
		crop.set("cropImageUrl",document.getElementById('photoUrl').value);

		crop.save(null,{
		  success: function(crop) {
		    // Execute any logic that should take place after the object is saved.
		    alert('New object created with objectId: ' + crop.id);
		  },
		  error: function(crop, error) {
		    // Execute any logic that should take place if the save fails.
		    // error is a Parse.Error with an error code and message.
		    console.log(error.message);
		    alert('Failed to create new object, with error code: ' + error.message);
		  }
		});
	});

}());
