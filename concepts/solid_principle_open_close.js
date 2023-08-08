class ShoppingCart {
    constructor() {
        this.items = [];
    }

    add_item(item, price) {
        this.items.push({ item, price });
    }

    calculate_total_price() {
        let total_price = 0;
        for (const { price } of this.items) {
            total_price += price;
        }
        return total_price;
    }
}

// Extension: Introducing a discount feature without modifying the ShoppingCart class.
class DiscountedShoppingCart extends ShoppingCart {
    constructor() {
        super();
    }

    add_item_with_discount(item, price, discount_percentage) {
        const discounted_price = price * (1 - discount_percentage / 100);
        this.add_item(item, discounted_price);
    }
}
