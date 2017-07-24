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
     item.quality < 0 ? item.quality = 0 : item.quality
  }

  checkOver50(item) {
    item.quality > 50 ? item.quality = 50 : item.quality
  }

  conjuredUpdate(item) {
    item.quality -= 2
  }

  standardUpdate(item) {
    this.reduceSellDate(item)
    item.sellIn < 0 ? item.quality -= 2 : item.quality -= 1
  }

  reduceSellDate(item) {
    item.sellIn -= 1
  }

  checkNegativeAndOver50(item){
    this.checkOver50(item)
    this.checkNegative(item)
  }

  determineItem(item) {
    switch (item.name) {
      case 'Aged Brie':
        this.reduceSellDate(item)
        agedBrieUpdater(item);
        break;
      case 'Sulfuras, Hand of Ragnaros':
        sulfurasUpdater(item);
        break;
      case 'Backstage passes to a TAFKAL80ETC concert':
        this.reduceSellDate(item)
        backStagePassUpdater(item);
        this.checkNegativeAndOver50(item)
        break;
      case 'Conjured Mana Cake':
        this.reduceSellDate(item)
        this.conjuredUpdate(item);
        this.checkNegativeAndOver50(item);
        break;
      default:
        this.checkNegativeAndOver50(item);
        this.standardUpdate(item);
        break;
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
  item.sellIn < 0 ? item.quality += 2 : item.quality += 1
}

function sulfurasUpdater(item){
  item.quality = 80
}

function backStagePassUpdater(item) {
  if (item.sellIn < 0) {
    item.quality = 0
  } else if (item.sellIn <= 5) {
    item.quality += 3
  } else if (item.sellIn <= 10) {
    item.quality += 2
  }
  else {
    item.quality += 1
  }
}
