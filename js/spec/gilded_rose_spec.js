describe("Gilded Rose", function() {

  describe("standard items", function(){
    it("should reduce quality for a regular item", function() {
      const gilgedRose = new Shop([ new Item("foo", 10, 20) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].quality).toEqual(19);
    });

    it("should reduce the sell date by one", function() {
      const gilgedRose = new Shop([ new Item("foo", 10, 20) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].sellIn).toEqual(9);
    });

    it("should always be positive", function() {
      const gilgedRose = new Shop([ new Item("foo", 10, -1) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    it("should degrade twice as fast once sell date has past", function() {
      const gilgedRose = new Shop([ new Item("foo", -1, 20) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].quality).toEqual(18);
    })
  });

  describe("conjure items", function(){
    it("should decline twice as fast", function(){
      const gilgedRose = new Shop([ new Item("Conjured", 10, 20) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].quality).toEqual(18);
    })
  })


});


// standard item
// conjure item
// Sulfuras
// backstage passes
// aged brie
