export class listTemplate {
    constructor(contaniner) {
        this.contaniner = contaniner;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.contaniner.prepend(li);
        }
        else {
            this.contaniner.append(li);
        }
    }
}
