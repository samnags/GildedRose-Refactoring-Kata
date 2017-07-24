class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  doubleDegrade(item) {
    return item.quality - 2
  }

  checkNegative(item) {
    item.quality < 0 ? item.quality = 1 : item.quality
  }

  checkOver50(item) {
    item.quality > 50 ? item.quality = 50 : item.quality
  }

  conjuredUpdate(item) {
    item.quality -= 2
    debugger
  }

  standardUpdate(item) {
    item.sellIn < 0 ? item.quality -= 2 : item.quality -= 1
    this.reduceSellDate(item)
  }

  reduceSellDate(item) {
    item.sellIn -= 1
    debugger
  }

  checkNegativeAndOver50(item){
    this.checkNegative(item)
    this.checkOver50(item)
    debugger
  }

  determineItem(item) {
    switch (item.name) {
      case 'Aged Brie':
        agedBrieUpdater(item);
        this.reduceSellDate(item)
      case 'Sulfuras, Hand of Ragnaros':
        sulfurasUpdater(item);
      case 'Backstage passes to a TAFKAL80ETC concert':
        backStagePassUpdater(item);
        this.reduceSellDate(item)
      case 'Conjured':
        this.checkNegativeAndOver50(item);
        this.reduceSellDate(item)
        this.conjuredUpdate(item);
      default:
        this.checkNegativeAndOver50(item);
        this.standardUpdate(item);
    }
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.determineItem(this.items[i])
    }
    return this.items
  }
}


function agedBrieUpdater(item){
  item.quality += 1
}

function sulfurasUpdater(item){
  item.sellIn = false
  item.quality = 80
}

function backStagePassUpdater(item) {
  if (item.sellIn < 5) {
    item.quality += 3
  } else if (item.sellIn < 10) {
    item.quality += 2
  } else if (item.sellIn == 0) {
    item.quality = 0
  } else {
    item.quality += 1
  }
}
