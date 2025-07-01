var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function ticketManager(input, sortingCriteria) {
    var tickets = input.map(function (ticket) {
        var _a = ticket.split("|"), destination = _a[0], price = _a[1], status = _a[2];
        return new Ticket(destination, Number(price), status);
    });
    return tickets.sort(function (a, b) {
        var aValue = a[sortingCriteria];
        var bValue = b[sortingCriteria];
        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return aValue - bValue;
        }
        return aValue.toString().localeCompare(bValue.toString());
    });
}
console.log(ticketManager([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination'));
console.log(ticketManager([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status'));
