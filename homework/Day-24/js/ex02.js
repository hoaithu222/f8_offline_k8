function createPerson(name, age, address) {
    return {
        name: name,
        age: age,
        address: address
    };
}

function createCustomers(customers) {
    var newCustomers = customers.map(function (customer) {
        var nameParts = customer.name.split(' ');
        var firstName = nameParts[0];
        var lastName = nameParts[nameParts.length - 1];
        var shortName = firstName + ' ' + lastName.charAt(0);

        return {
            name: customer.name,
            age: customer.age,
            address: customer.address,
            shortName: shortName
        };
    });

    newCustomers.sort(function (a, b) {
        return a.age - b.age;
    });

    return newCustomers;
}

const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const result = createCustomers(customers);
console.log(result);
