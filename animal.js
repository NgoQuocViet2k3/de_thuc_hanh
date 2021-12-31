class Animal{
    _name;
    _weight
    constructor(_name,_weight) {

        this._name = _name;
        this._weight = _weight;
    }
    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }
toString(){
        document.write("Tên: " + this._name + "<br/>" + "Cân nặng: " + this._weight + "<br/>");
}
}