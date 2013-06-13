Openphacts.EnzymeSearch = function EnzymeSearch(baseURL, appID, appKey) {
	this.baseURL = baseURL;
	this.appID = appID;
	this.appKey = appKey;
}

Openphacts.EnzymeSearch.prototype.getClassificationRootClasses = function(callback) {
	var enzymeQuery = $.ajax({
		url: this.baseURL + '/target/enzyme/root',
                dataType: 'json',
		cache: true,
		data: {
			_format: "json",
			app_id: this.appID,
			app_key: this.appKey
		},
		success: function(response, status, request) {
			callback.call(this, true, request.status, response.result.primaryTopic);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

Openphacts.EnzymeSearch.prototype.getClassificationClass = function(enzymeURL, callback) {
	var enzymeQuery = $.ajax({
		url: this.baseURL + '/target/enzyme/node',
                dataType: 'json',
		cache: true,
		data: {
			_format: "json",
                        uri: enzymeURL,
			app_id: this.appID,
			app_key: this.appKey
		},
		success: function(response, status, request) {
			callback.call(this, true, request.status, response.result.primaryTopic);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

Openphacts.EnzymeSearch.prototype.getClassificationClassMembers = function(enzymeURL, callback) {
	var enzymeQuery = $.ajax({
		url: this.baseURL + '/target/enzyme/members',
                dataType: 'json',
		cache: true,
		data: {
			_format: "json",
                        uri: enzymeURL,
			app_id: this.appID,
			app_key: this.appKey
		},
		success: function(response, status, request) {
			callback.call(this, true, request.status, response.result.primaryTopic);
		},
		error: function(request, status, error) {
			callback.call(this, false, request.status);
		}
	});
}

Openphacts.EnzymeSearch.prototype.parseClassificationRootClasses = function(response) {
        var enzymeRootClasses = [];
	$.each(response.rootNode, function(i, member) {
            enzymeRootClasses.push({uri: member["_about"], name: member.name});
	});
	return enzymeRootClasses;
}

Openphacts.EnzymeSearch.prototype.parseClassificationClass = function(response) {
        var enzymeClasses = [];
	$.each(response.sibling, function(i, member) {
            enzymeClasses.push({uri: member["_about"], name: member.name});
	});
	return enzymeClasses;
}

Openphacts.EnzymeSearch.prototype.parseClassificationClassMembers = function(response) {
        var enzymeClasses = [];
	$.each(response.has_member, function(i, member) {
            var about = member["_about"];
            var names = [];
            if ($.isArray(member.name)) {
                $.each(member.name, function(j, label) {
                    names.push(label);
                });
            } else {
                names.push(member.name);
            }
            enzymeClasses.push({uri: about, names: names});
	});
	return enzymeClasses;
}
