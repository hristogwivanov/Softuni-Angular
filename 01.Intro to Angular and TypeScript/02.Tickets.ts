class Ticket {
    constructor(
        public destinationName: string,
        public price: number,
        public status: string) { }
}


function ticketManager(input: string[], sortingCriteria: string): Ticket[]{

    const tickets = input.map(ticket => {
        let [destination, price, status] = ticket.split("|");
        return new Ticket(destination, Number(price), status);
    });

    


}