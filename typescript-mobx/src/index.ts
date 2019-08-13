import { observable, autorun } from "mobx";

class Model {
    @observable public property = "text";
}

const model = new Model();

autorun(() => console.log(model.property));

model.property = "Hello";