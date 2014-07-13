function Item(name, sellIn, quality) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}

var items = [];
var maxQuality = 50;

var isAgedBrie= function(item) {
  return item.name === 'Aged Brie';
};

var isTix= function(item) {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert';
};

var isSulfuras=function(item){
  return item.name === 'Sulfuras, Hand of Ragnaros';
};

var isAgedBrieOrTix = function(item){
  return isAgedBrie(item) || isTix(item);
};

var qualityGreaterZero = function(item){
  return item.quality > 0;
};

var qualityLowerThanMax = function(item, maxQuality){
  return item.quality < maxQuality;
};

var updateQuality = function () {

  for (var i = 0; i < items.length; i++) {
    var currentItem = items[i];
    if (!isAgedBrieOrTix(currentItem)) {
      if (qualityGreaterZero(currentItem)) {
        if (!isSulfuras(currentItem)) {
          currentItem.quality -= 1;
        }
      }
    } else {
      if (currentItem.quality < maxQuality) {
        currentItem.quality += 1;
        if (isTix(currentItem)) {
          if (currentItem.sellIn < 11) {
            if (currentItem.quality < maxQuality) {
              currentItem.quality += 1;
            }
          }
          if (currentItem.sellIn < 6) {
            if (currentItem.quality < maxQuality) {
              currentItem.quality += 1;
            }
          }
        }
      }
    }
    if (!isSulfuras(currentItem)) {
      currentItem.sellIn -= 1;
    }
    if (currentItem.sellIn < 0) {
      if (!isAgedBrie(currentItem)) {
        if (!isTix(currentItem)) {
          if (currentItem.quality > 0) {
            if (!isSulfuras(currentItem)) {
              currentItem.quality -= 1;
            }
          }
        } else {
          currentItem.quality = currentItem.quality - currentItem.quality;
        }
      } else {
        if (currentItem.quality < maxQuality) {
          currentItem.quality += 1;
        }
      }
    }
  }
}