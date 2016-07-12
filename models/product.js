//Dependencies
var express = require('express');
var restful = require('node-restful');
var mongoose = restful.mongoose;
var Schema = mongoose.Schema;

//Schema
var Images = new Schema({
	kind: String,
	url: String
});

// Desktop Model
var Desktop = new Schema({
	desktop: {
		name: String,
		sku: String,
		price: Number,
		modified: Date,
		comments: String,
		  office: {
		  	Sunnyvale: {
		  		amount: {type: Number, default: 0}
		  	},
		  	MountainView: {
		  		amount: {type: Number, default: 0}
		  	},
		  	SanFrancisco: {
		  		amount: {type: Number, default: 0}
		  	},
		  	NewYork: {
		  		amount: {type: Number, default: 0}
		  	},
		  	Carpinteria: {
		  		amount: {type: Number, default: 0}
		  	}
		}
	}
});

// Laptop Model
var Laptop = new Schema({
	laptop: {
		name: String,
		sku: String,
		price: Number,
		modified: Date,
		comments: String,
		  office: {
		  	Sunnyvale: {
		  		amount: {type: Number, default: 0}
		  	},
		  	MountainView: {
		  		amount: {type: Number, default: 0}
		  	},
		  	SanFrancisco: {
		  		amount: {type: Number, default: 0}
		  	},
		  	NewYork: {
		  		amount: {type: Number, default: 0}
		  	},
		  	Carpinteria: {
		  		amount: {type: Number, default: 0}
		  	}
		}
	}
});

// Apple Peripherals Model
var Apple_Perif = new Schema({
	apple_perif: {
		name: String,
		sku: String,
		price: Number,
		modified: Date,
		comments: String,
		  office: {
		  	Sunnyvale: {
		  		amount: {type: Number, default: 0}
		  	},
		  	MountainView: {
		  		amount: {type: Number, default: 0}
		  	},
		  	SanFrancisco: {
		  		amount: {type: Number, default: 0}
		  	},
		  	NewYork: {
		  		amount: {type: Number, default: 0}
		  	},
		  	Carpinteria: {
		  		amount: {type: Number, default: 0}
		  	}
		}
	}
});

// Windows Peripherals Model
var Windows_Perif = new Schema({
	windows_perif: {
		name: String,
		sku: String,
		price: Number,
		modified: Date,
		comments: String,
		  office: {
		  	Sunnyvale: {
		  		amount: {type: Number, default: 0}
		  	},
		  	MountainView: {
		  		amount: {type: Number, default: 0}
		  	},
		  	SanFrancisco: {
		  		amount: {type: Number, default: 0}
		  	},
		  	NewYork: {
		  		amount: {type: Number, default: 0}
		  	},
		  	Carpinteria: {
		  		amount: {type: Number, default: 0}
		  	}
		}
	}
});

// Other Peripherals Model
var Other = new Schema({
	other_perif: {
		name: String,
		sku: String,
		price: Number,
		modified: Date,
		comments: String,
		  office: {
		  	Sunnyvale: {
		  		amount: {type: Number, default: 0}
		  	},
		  	MountainView: {
		  		amount: {type: Number, default: 0}
		  	},
		  	SanFrancisco: {
		  		amount: {type: Number, default: 0}
		  	},
		  	NewYork: {
		  		amount: {type: Number, default: 0}
		  	},
		  	Carpinteria: {
		  		amount: {type: Number, default: 0}
		  	}
		}
	}
});

// Logs Model
var Logs = new Schema({
	logs: {
		name: String,
		sku: String,
		price: Number,
		modified: Date,
		comments: String,
		  office: {
		  	Sunnyvale: {
		  		amount: {type: Number, default: 0}
		  	},
		  	MountainView: {
		  		amount: {type: Number, default: 0}
		  	},
		  	SanFrancisco: {
		  		amount: {type: Number, default: 0}
		  	},
		  	NewYork: {
		  		amount: {type: Number, default: 0}
		  	},
		  	Carpinteria: {
		  		amount: {type: Number, default: 0}
		  	}
		}
	}
});

// Product Model
var Product = new Schema({
	item: {
		name: String,
		sku: String,
		price: Number,
		modified: {type: Date, default: Date.now},
		comments: String,
	  	office: {
	  		Sunnyvale: {
	  			amount: {type: Number, default: 0}
	  		},
	  		MountainView: {
	  			amount: {type: Number, default: 0}
	  		},
	  		SanFrancisco: {
	  			amount: {type: Number, default: 0}
	  		},
	  		NewYork: {
	  			amount: {type: Number, default: 0}
	  		},
	  		Carpinteria: {
	  			amount: {type: Number, default: 0}
	  		}
	  	}
	}
});



//return model

module.exports = restful.model('Products', Product);
module.exports = restful.model('Logs', Logs);
module.exports = restful.model('Desktop', Desktop);
module.exports = restful.model('Laptop', Laptop);
module.exports = restful.model('Apple_Perif', Apple_Perif);
module.exports = restful.model('Windows_Perif', Windows_Perif);
module.exports = restful.model('Other', Other);
