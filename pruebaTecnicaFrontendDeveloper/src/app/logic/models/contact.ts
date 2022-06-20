export class Contact {
    id: String = "";
    age: number = -1;
    name: String = "";
    gender: String = "";
    company: String = "";
    email: String = "";
    photo: String = "";
    connections: Array<String> = [];

    constructor
        (
            id: String = "", age: number = -1,
            name: String = "", gender: String = "",
            company: String = "", email: String = "",
            photo: String = "", connections: Array<String> = []
        ) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.gender = gender;
        this.company = company;
        this.email = email;
        this.photo = photo;
        this.connections = connections;
    }
}