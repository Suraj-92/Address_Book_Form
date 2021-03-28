class EmployeePayrollData {
    //getter and setter method
    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get fullname() {
        return this._name;
    }

    set fullname(fullname) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(fullname)) this._fullname = fullname;
        else throw "Name is incorrect!";
    }
    
    get address() {
        return this._address;
    }

    set address(address) {
        this._address = address;
    }

    get phonenumber() {
        return this._phonenumber;
    }

    set phonenumber(phonenumber) {
        this._phonenumber = phonenumber;
    }

    //method
    toString() {
        const option = { City: "String", State: "String", zipcode: "String" };
        return (
            "id=" + this.id +
            ",fullname '" + this.fullname +
           
            ",address= '" + this.address +
            ",phonenumber= '" + this.phonenumber +
            
            ",Adress_city=" + option 
            
        );
    }
}