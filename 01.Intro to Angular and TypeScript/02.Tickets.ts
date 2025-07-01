class Ticket {
    constructor(
        public destination: string,
        public price: number,
        public status: string) { }
}


function ticketManager(input: string[], sortingCriteria: string): Ticket[] {

    const tickets = input.map(ticket => {
        let [destination, price, status] = ticket.split("|");
        return new Ticket(destination, Number(price), status);
    });


    return tickets.sort((a, b) => {
        const aValue = a[sortingCriteria];
        const bValue = b[sortingCriteria];

        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return aValue - bValue;
        }

        return aValue.toString().localeCompare(bValue.toString());
    }
    )

}

console.log(ticketManager(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'

))


console.log(ticketManager(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
))

