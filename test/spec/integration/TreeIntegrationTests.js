describe("Trees", function() {
  var searcher, appID, appKey;

  beforeEach(function() {
      appID = $.url().param('app_id');
      appKey = $.url().param('app_key');
      appUrl = $.url().param('app_url');
      searcher = new Openphacts.TreeSearch(appUrl, appID, appKey);
  });

  describe("get root nodes for enzymes", function() {

    it("and return a response", function() {
      var this_success = null;
      var this_status = null;
      var this_result = null;
      var callback=function(success, status, response){
        this_success = success;
        this_status = status;
        this_result = searcher.parseRootNodes(response);
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toBe(true);
        expect(this_status).toBe(200);
        expect(this_result.length).toBeGreaterThan(1);
      });
      searcher.getRootNodes('enzyme', callback);
    });
    it("and handle errors", function() {
      var this_success = null;
      var this_status = null;
      var callback=function(success, status){
        this_success = success;
        this_status = status;
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toEqual(false);
        expect(this_status).toEqual(500);
      });
      searcher.getRootNodes('http://sdfgdgdg', callback);
    });
  });

  describe("get root nodes for chebi", function() {

    it("and return a response", function() {
      var this_success = null;
      var this_status = null;
      var this_result = null;
      var callback=function(success, status, response){
        this_success = success;
        this_status = status;
        this_result = searcher.parseRootNodes(response);
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toBe(true);
        expect(this_status).toBe(200);
        expect(this_result.length).toBeGreaterThan(1);
      });
      searcher.getRootNodes('chebi', callback);
    });
    it("and handle errors", function() {
      var this_success = null;
      var this_status = null;
      var callback=function(success, status){
        this_success = success;
        this_status = status;
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toEqual(false);
        expect(this_status).toEqual(500);
      });
      searcher.getRootNodes('http://sdfgdgdg', callback);
    });
  });

  describe("get root chembl", function() {

    it("and return a response", function() {
      var this_success = null;
      var this_status = null;
      var this_result = null;
      var callback=function(success, status, response){
        this_success = success;
        this_status = status;
        this_result = searcher.parseRootNodes(response);
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toBe(true);
        expect(this_status).toBe(200);
        expect(this_result.length).toBeGreaterThan(0);
      });
      searcher.getRootNodes('chembl', callback);
    });
    it("and handle errors", function() {
      var this_success = null;
      var this_status = null;
      var callback=function(success, status){
        this_success = success;
        this_status = status;
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toEqual(false);
        expect(this_status).toEqual(500);
      });
      searcher.getRootNodes('http://sdfgdgdg', callback);
    });
  });

  describe("get root nodes for go", function() {

    it("and return a response", function() {
      var this_success = null;
      var this_status = null;
      var this_result = null;
      var callback=function(success, status, response){
        this_success = success;
        this_status = status;
        this_result = searcher.parseRootNodes(response);
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toBe(true);
        expect(this_status).toBe(200);
        expect(this_result.length).toBeGreaterThan(1);
      });
      searcher.getRootNodes('go', callback);
    });
    it("and handle errors", function() {
      var this_success = null;
      var this_status = null;
      var callback=function(success, status){
        this_success = success;
        this_status = status;
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toEqual(false);
        expect(this_status).toEqual(500);
      });
      searcher.getRootNodes('http://sdfgdgdg', callback);
    });
  });

  describe("get child nodes for enzyme", function() {

    it("and return a response", function() {
      var this_success = null;
      var this_status = null;
      var this_result = null;
      var callback=function(success, status, response){
        this_success = success;
        this_status = status;
        this_result = searcher.parseChildNodes(response);
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toBe(true);
        expect(this_status).toBe(200);
        expect(this_result.label).not.toBeNull();
        expect(this_result.children.length).toBeGreaterThan(1);
        expect(this_result.children[0].uri).toBeDefined();
        expect(this_result.children[0].names.length).toBeGreaterThan(0);
      });
      searcher.getChildNodes('http://purl.uniprot.org/enzyme/1.1.1.-', callback);
    });
    it("and handle errors", function() {
      var this_success = null;
      var this_status = null;
      var callback=function(success, status){
        this_success = success;
	    this_status = status;
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toEqual(false);
        expect(this_status).toEqual(404);
      });
      searcher.getChildNodes('http://34534533', callback);
    });
  });

  describe("get parent nodes for enzyme", function() {

    it("and return a response", function() {
      var this_success = null;
      var this_status = null;
      var this_result = null;
      var callback=function(success, status, response){
        this_success = success;
        this_status = status;
        this_result = searcher.parseParentNodes(response);
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toBe(true);
        expect(this_status).toBe(200);
        expect(this_result.label).not.toBeNull();
        expect(this_result.parents.length).toBeGreaterThan(0);
        expect(this_result.parents[0].uri).toBeDefined();
        expect(this_result.parents[0].names.length).toBeGreaterThan(0);
      });
      searcher.getParentNodes('http://purl.uniprot.org/enzyme/3.5.4.31', callback);
    });
    it("and handle errors", function() {
      var this_success = null;
      var this_status = null;
      var callback=function(success, status){
        this_success = success;
	    this_status = status;
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toEqual(false);
        expect(this_status).toEqual(404);
      });
      searcher.getParentNodes('http://34534533', callback);
    });
  });


  describe("get child nodes for chembl", function() {

    it("and return a response", function() {
      var this_success = null;
      var this_status = null;
      var this_result = null;
      var callback=function(success, status, response){
        this_success = success;
        this_status = status;
        this_result = searcher.parseChildNodes(response);
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toBe(true);
        expect(this_status).toBe(200);
        expect(this_result.label).not.toBeNull();
        expect(this_result.children.length).toBeGreaterThan(1);
        expect(this_result.children[0].uri).toBeDefined();
        expect(this_result.children[0].names.length).toBeGreaterThan(0);
      });
      searcher.getChildNodes('http://rdf.ebi.ac.uk/resource/chembl/protclass/CHEMBL_PC_1000', callback);
    });
    it("and handle errors", function() {
      var this_success = null;
      var this_status = null;
      var callback=function(success, status){
        this_success = success;
	    this_status = status;
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toEqual(false);
        expect(this_status).toEqual(404);
      });
      searcher.getChildNodes('http://34534533', callback);
    });
  });

  describe("get child nodes for chebi", function() {

    it("and return a response", function() {
      var this_success = null;
      var this_status = null;
      var this_result = null;
      var callback=function(success, status, response){
        this_success = success;
        this_status = status;
        this_result = searcher.parseChildNodes(response);
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toBe(true);
        expect(this_status).toBe(200);
        expect(this_result.label).not.toBeNull();
        expect(this_result.children.length).toBeGreaterThan(1);
        expect(this_result.children[0].uri).toBeDefined();
        expect(this_result.children[0].names.length).toBeGreaterThan(0);
      });
      searcher.getChildNodes('http://purl.obolibrary.org/obo/CHEBI_24431', callback);
    });
    it("and handle errors", function() {
      var this_success = null;
      var this_status = null;
      var callback=function(success, status){
        this_success = success;
	    this_status = status;
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toEqual(false);
        expect(this_status).toEqual(404);
      });
      searcher.getChildNodes('http://34534533', callback);
    });
  });

  describe("get child nodes for go", function() {

    it("and return a response", function() {
      var this_success = null;
      var this_status = null;
      var this_result = null;
      var callback=function(success, status, response){
        this_success = success;
        this_status = status;
        this_result = searcher.parseChildNodes(response);
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toBe(true);
        expect(this_status).toBe(200);
        expect(this_result.label).not.toBeNull();
        expect(this_result.children.length).toBeGreaterThan(1);
        expect(this_result.children[0].uri).toBeDefined();
        expect(this_result.children[0].names.length).toBeGreaterThan(0);
      });
      searcher.getChildNodes('http://purl.org/obo/owl/GO#GO_0003674', callback);
    });
    it("and handle errors", function() {
      var this_success = null;
      var this_status = null;
      var callback=function(success, status){
        this_success = success;
	    this_status = status;
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toEqual(false);
        expect(this_status).toEqual(404);
      });
      searcher.getChildNodes('http://34534533', callback);
    });
  });

  describe("get pharmacology count for enzymes", function() {

    it("and return a response", function() {
      var this_success = null;
      var this_status = null;
      var this_result = null;
      var callback=function(success, status, response){
        this_success = success;
        this_status = status;
        this_result = searcher.parseTargetClassPharmacologyCount(response);
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toBe(true);
        expect(this_status).toBe(200);
        expect(this_result).toBeGreaterThan(1);
      });
      searcher.getTargetClassPharmacologyCount('http://purl.uniprot.org/enzyme/1.1.1.-', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, callback);
    });
    it("and handle errors", function() {
      var this_success = null;
      var this_status = null;
      var callback=function(success, status){
        this_success = success;
        this_status = status;
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toEqual(false);
        expect(this_status).toEqual(400);
      });
      searcher.getTargetClassPharmacologyCount('90879879879879797', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, callback);
    });
  });

  describe("get pharmacology paginated for enzymes", function() {

    it("and return a response", function() {
      var this_success = null;
      var this_status = null;
      var this_result = null;
      var callback=function(success, status, response){
        this_success = success;
	this_status = status;
        this_result = searcher.parseTargetClassPharmacologyPaginated(response);
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        //TODO need the mandatory and optional values from the api docs
        expect(this_success).toBe(true);
        expect(this_status).toBe(200);
        expect(this_result.length).toBeGreaterThan(1);
        expect(this_result[0].targets.length).toBeGreaterThan(0);
        expect(this_result[0].chemblActivityURI).toBeDefined();
        expect(this_result[0].pmid).toBeDefined();
        expect(this_result[0].relation).toBeDefined();
        expect(this_result[0].standardUnits).toBeDefined();
        expect(this_result[0].standardValue).toBeDefined();
        expect(this_result[0].activityType).toBeDefined();
        expect(this_result[0].inDataset).toBeDefined();
        expect(this_result[0].fullMWT).toBeDefined();
        expect(this_result[0].chemblURI).toBeDefined();
        expect(this_result[0].cwURI).toBeDefined();
        expect(this_result[0].prefLabel).toBeDefined();
        expect(this_result[0].csURI).toBeDefined();
        expect(this_result[0].inchi).toBeDefined();
        expect(this_result[0].inchiKey).toBeDefined();
        expect(this_result[0].smiles).toBeDefined();
        expect(this_result[0].ro5Violations).toBeDefined();
        expect(this_result[0].pChembl).toBeDefined();
        expect(this_result[0].targets).toBeDefined();
        //expect(this_result[0].targetOrganism).toBeDefined();
        expect(this_result[0].assayURI).toBeDefined();
        expect(this_result[0].assayDescription).toBeDefined();
      });
      searcher.getTargetClassPharmacologyPaginated('http://purl.uniprot.org/enzyme/1.1.1.-', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, callback);
    });
    it("and handle errors", function() {
      var this_success = null;
      var this_status = null;
      var callback=function(success, status){
        this_success = success;
        this_status = status;
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toEqual(false);
        expect(this_status).toEqual(404);
      });
      searcher.getTargetClassPharmacologyPaginated('http://90879879879879797', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, callback);
    });
  });
});
