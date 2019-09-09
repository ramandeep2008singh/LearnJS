class sampleClass {
    setDetails(name, id, city) {

        this.name = name;
        this.id = id;
        this.city = city;

    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getCity() {
        return this.city;
    }

}

let details = new sampleClass();
details.setDetails('Ramandeep', 11233944, 'Munich');
console.log(details.getName());
console.log(details.getId());
console.log(details.getCity());

