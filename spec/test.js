/*global describe, it */
'use strict';

(function () {
	var dummyItem;
  describe("At the end of each day our system lowers", function() {

  	beforeEach(function() {
    	var item = new Item('Dummy item', 10, 10);
  	    items = [];
    	items.push(item);
    	dummyItem = items[0];
  	 });

    it("sell in value", function() {
    	var oldSellIn = dummyItem.sellIn;
    	updateQuality();
      	expect(dummyItem.sellIn).toBeLessThan(oldSellIn);
    });

    it("quality", function() {
    	var oldQuality = dummyItem.quality;
    	updateQuality();
      	expect(dummyItem.quality).toBeLessThan(oldQuality);
    });

  });

describe("Once the sell date has passed", function() {

  	beforeEach(function() {
    	var item = new Item('Dummy item', 0, 10);
  	    items = [];
    	items.push(item);
    	dummyItem = items[0];
  	 });

    it("quality should degrade twice as fast", function() {
    	updateQuality();
      	expect(dummyItem.quality).toEqual(8);
    });

});

describe("Quality", function() {

  	beforeEach(function() {
    	var item = new Item('Dummy item', 20, 1);
  	    items = [];
    	items.push(item);
    	dummyItem = items[0];
  	 });

    it("should never be negative", function() {
    	updateQuality();
      	expect(dummyItem.quality).toEqual(0);
    });

  });

describe("Aged Brie", function() {

  	beforeEach(function() {
    	var item = new Item('Aged Brie', 10, 1);
  	    items = [];
    	items.push(item);
    	dummyItem = items[0];
  	 });

    it("increases in quality the older it gets", function() {
    	updateQuality();
      	expect(dummyItem.quality).toEqual(2);
    });

  });

describe("Backstage Passes: Quality", function() {

	beforeEach(function() {
    	var item = new Item('Backstage passes to a TAFKAL80ETC concert', 6, 20);
  	    items = [];
    	items.push(item);
    	dummyItem = items[0];
  	 });

    it("increases by 2 when there are 10 days or less", function() {
    	updateQuality();
      	expect(dummyItem.quality).toEqual(22);
      	console.log(dummyItem);
    });

	it("increases by 3 when there are 5 days or less", function() {
		updateQuality();
    	updateQuality();
    	console.log(dummyItem);
      	expect(dummyItem.quality).toEqual(25);
    });
  });


describe("Quality", function() {

  	beforeEach(function() {
    	var item = new Item('Aged Brie', 20, 50);
  	    items = [];
    	items.push(item);
    	dummyItem = items[0];
  	 });

    it("should never be more than 50", function() {
    	updateQuality();
      	expect(dummyItem.quality).toEqual(50);
    });

});

describe("Sulfuras, Hand of Ragnaros", function() {

  	beforeEach(function() {
    	var item = new Item('Sulfuras, Hand of Ragnaros', 10, 50);
  	    items = [];
    	items.push(item);
    	dummyItem = items[0];
  	 });

    it("should never be sold", function() {
    	console.log("dummyItem log" + dummyItem);
    	updateQuality();
      	expect(dummyItem.sellIn).toEqual(10);
    });

    it("should never be quality", function() {
		updateQuality();
	  	expect(items[0].quality).toEqual(50);
    });

});

})();
