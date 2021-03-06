describe("Pathways", function() {
  var searcher, appID, appKey;

  beforeEach(function() {
      appID = $.url().param('app_id');
      appKey = $.url().param('app_key');
      appUrl = $.url().param('app_url');
      searcher = new Openphacts.PathwaySearch(appUrl, appID, appKey);
  });

  describe("get information", function() {

    it("can be executed", function() {
      spyOn(searcher, 'information');
      searcher.information('uri', 'lens', 'callback');
      expect(searcher.information).toHaveBeenCalled();
    });
    it("executes asynchronously", function() {
      var callback = jasmine.createSpy();
      searcher.information('http://rdf.wikipathways.org/WP1019', null, callback);
      waitsFor(function() {
          return callback.callCount > 0;
      });
      runs(function() {
          expect(callback).toHaveBeenCalled();
      });
    });
  });

  describe("by compound", function() {

    it("can be executed", function() {
      spyOn(searcher, 'byCompound');
      searcher.byCompound('URI', 'organism', 'lens', 'page', 'pageSize', 'orderBy', 'callback');
      expect(searcher.byCompound).toHaveBeenCalled();
    });
    it("executes asynchronously", function() {
      var callback = jasmine.createSpy();
      searcher.byCompound('http://www.conceptwiki.org/concept/83931753-9e3f-4e90-b104-e3bcd0b4d833', null, null, null, null, null, callback);
      waitsFor(function() {
          return callback.callCount > 0;
      });
      runs(function() {
          expect(callback).toHaveBeenCalled();
      });
    });
  });

  describe("count pathways by compound", function() {

    it("can be executed", function() {
      spyOn(searcher, 'countPathwaysByCompound');
      searcher.countPathwaysByCompound('URI', 'organism', 'lens', 'callback');
      expect(searcher.countPathwaysByCompound).toHaveBeenCalled();
    });
    it("executes asynchronously", function() {
      var callback = jasmine.createSpy();
      searcher.countPathwaysByCompound('http://www.conceptwiki.org/concept/83931753-9e3f-4e90-b104-e3bcd0b4d833', null, null, callback);
      waitsFor(function() {
          return callback.callCount > 0;
      });
      runs(function() {
          expect(callback).toHaveBeenCalled();
      });
    });
  });

  describe("by target", function() {

    it("can be executed", function() {
      spyOn(searcher, 'byTarget');
      searcher.byTarget('URI', 'organism', 'lens', 'page', 'pageSize', 'orderBy', 'callback');
      expect(searcher.byTarget).toHaveBeenCalled();
    });
    it("executes asynchronously", function() {
      var callback = jasmine.createSpy();
      searcher.byTarget('http://identifiers.org/ncbigene/282478', null, null, null, null, null, callback);
      waitsFor(function() {
          return callback.callCount > 0;
      });
      runs(function() {
          expect(callback).toHaveBeenCalled();
      });
    });
  });

  describe("count pathways by target", function() {

    it("can be executed", function() {
      spyOn(searcher, 'countPathwaysByTarget');
      searcher.countPathwaysByTarget('URI', 'organism', 'lens', 'callback');
      expect(searcher.countPathwaysByTarget).toHaveBeenCalled();
    });
    it("executes asynchronously", function() {
      var callback = jasmine.createSpy();
      searcher.countPathwaysByTarget('http://identifiers.org/ncbigene/282478', null, null, callback);
      waitsFor(function() {
          return callback.callCount > 0;
      });
      runs(function() {
          expect(callback).toHaveBeenCalled();
      });
    });
  });

  describe("get targets for pathway ", function() {

    it("can be executed", function() {
      spyOn(searcher, 'getTargets');
      searcher.getTargets('URI', 'lens', 'callback');
      expect(searcher.getTargets).toHaveBeenCalled();
    });
    it("executes asynchronously", function() {
      var callback = jasmine.createSpy();
      searcher.getTargets('http://identifiers.org/ncbigene/282478', null, callback);
      waitsFor(function() {
          return callback.callCount > 0;
      });
      runs(function() {
          expect(callback).toHaveBeenCalled();
      });
    });
  });

  describe("get compounds for pathway ", function() {

    it("can be executed", function() {
      spyOn(searcher, 'getCompounds');
      searcher.getCompounds('URI', 'lens', 'callback');
      expect(searcher.getCompounds).toHaveBeenCalled();
    });
    it("executes asynchronously", function() {
      var callback = jasmine.createSpy();
      searcher.getCompounds('http://identifiers.org/ncbigene/282478', null, callback);
      waitsFor(function() {
          return callback.callCount > 0;
      });
      runs(function() {
          expect(callback).toHaveBeenCalled();
      });
    });
  });

  describe("by reference", function() {

    it("can be executed", function() {
      spyOn(searcher, 'byReference');
      searcher.byReference('URI', 'organism', 'lens', 'page', 'pageSize', 'orderBy', 'callback');
      expect(searcher.byReference).toHaveBeenCalled();
    });
    it("executes asynchronously", function() {
      var callback = jasmine.createSpy();
      searcher.byReference('http://identifiers.org/pubmed/9789062', null, null, null, null, null, callback);
      waitsFor(function() {
          return callback.callCount > 0;
      });
      runs(function() {
          expect(callback).toHaveBeenCalled();
      });
    });
  });

  describe("count pathways by reference", function() {

    it("can be executed", function() {
      spyOn(searcher, 'countPathwaysByReference');
      searcher.countPathwaysByReference('URI', 'organism', 'lens', 'callback');
      expect(searcher.countPathwaysByReference).toHaveBeenCalled();
    });
    it("executes asynchronously", function() {
      var callback = jasmine.createSpy();
      searcher.countPathwaysByReference('http://identifiers.org/pubmed/9789062', null, null, callback);
      waitsFor(function() {
          return callback.callCount > 0;
      });
      runs(function() {
          expect(callback).toHaveBeenCalled();
      });
    });
  });

  describe("get references for pathway ", function() {

    it("can be executed", function() {
      spyOn(searcher, 'getReferences');
      searcher.getReferences('URI', 'lens', 'callback');
      expect(searcher.getReferences).toHaveBeenCalled();
    });
    it("executes asynchronously", function() {
      var callback = jasmine.createSpy();
      searcher.getReferences('http://identifiers.org/wikipathways/WP1015', null, callback);
      waitsFor(function() {
          return callback.callCount > 0;
      });
      runs(function() {
          expect(callback).toHaveBeenCalled();
      });
    });
  });

  describe("count pathways", function() {

    it("can be executed", function() {
      spyOn(searcher, 'countPathways');
      searcher.countPathways('organism', 'lens', 'callback');
      expect(searcher.countPathways).toHaveBeenCalled();
    });
    it("executes asynchronously", function() {
      var callback = jasmine.createSpy();
      searcher.countPathways(null, null, callback);
      waitsFor(function() {
          return callback.callCount > 0;
      });
      runs(function() {
          expect(callback).toHaveBeenCalled();
      });
    });
  });

  describe("list", function() {

    it("can be executed", function() {
      spyOn(searcher, 'list');
      searcher.list('organism', 'lens', 'page', 'pageSize', 'orderBy', 'callback');
      expect(searcher.list).toHaveBeenCalled();
    });
    it("executes asynchronously", function() {
      var callback = jasmine.createSpy();
      searcher.list(null, null, null, null, null, callback);
      waitsFor(function() {
          return callback.callCount > 0;
      });
      runs(function() {
          expect(callback).toHaveBeenCalled();
      });
    });
  });

  describe("organisms", function() {

    it("can be executed", function() {
      spyOn(searcher, 'organisms');
      searcher.organisms('lens', 'page', 'pageSize', 'orderBy', 'callback');
      expect(searcher.organisms).toHaveBeenCalled();
    });
    it("executes asynchronously", function() {
      var callback = jasmine.createSpy();
      searcher.organisms(null, null, null, null, callback);
      waitsFor(function() {
          return callback.callCount > 0;
      });
      runs(function() {
          expect(callback).toHaveBeenCalled();
      });
    });
  });

});
