

function vm() {
    var self = this;
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });

    self.description = ko.observable();

    self.retailPrice = ko.observable();
    self.retailPriceDisplay = ko.pureComputed(function () {
        return parseCurrency(self.retailPrice());
    });

    self.salePrice = ko.observable();
    self.salePriceDisplay = ko.pureComputed(function () {
        return parseCurrency(self.salePrice());
    });

    self.imagePath = ko.observable();

    function parseCurrency(num) {
        if (num === undefined) return formatter.format(0);
        return formatter.format(num);
    }
}

ko.applyBindings(new vm());