class GildedRose

  def initialize(items)
    @items = items
  end

  def update_quality()
    @items.each do |item|
      determine_item(item)
    end
  end

  def standard_degrade(item)
    item.quality -= 1
  end

  def double_degrade(item)
    item.quality -= 2
  end

  def check_negative(item)
    item.quality < 0 ? item.quality = 0 : item.quality
  end

  def check_over_50(item)
    item.quality > 50 ? item.quality = 50 : item.quality
  end

  def conjured_update(item)
    double_degrade(item)
  end

  def standard_update(item)
    reduce_sell_date(item)
    item.sell_in < 0 ? double_degrade(item) : standard_degrade(item)
  end

  def reduce_sell_date(item)
    item.sell_in -= 1
  end

  def check_negative_and_over_50(item)
    check_over_50(item)
    check_negative(item)
  end

  def determine_item(item)
    case item.name
      when 'Aged Brie'
        reduce_sell_date(item)
        aged_brie_updater(item)
        check_negative_and_over_50(item)
      when 'Sulfuras, Hand of Ragnaros'
        sulfuras_updater(item)
      when 'Backstage passes to a TAFKAL80ETC concert'
        reduce_sell_date(item)
        back_stage_pass_updater(item)
      when 'Conjured Mana Cake'
        reduce_sell_date(item)
        conjured_update(item)
        check_negative_and_over_50(item)
      else
        standard_update(item)
        check_negative_and_over_50(item)
    end
  end

  def aged_brie_updater(item)
    item.sell_in < 0 ? item.quality += 2 : item.quality += 1
  end

  def sulfuras_updater(item)
    item.quality = 80
  end

  def back_stage_pass_updater(item)
    if item.sell_in < 0
      item.quality = 0
    elsif item.sell_in < 5
      item.quality += 3
    elsif item.sell_in < 10
      item.quality += 2
    else
      item.quality += 1
    end
  end

end


class Item
  attr_accessor :name, :sell_in, :quality

  def initialize(name, sell_in, quality)
    @name = name
    @sell_in = sell_in
    @quality = quality
  end

  def to_s()
    "#{@name}, #{@sell_in}, #{@quality}"
  end
end
