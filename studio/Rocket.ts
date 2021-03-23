import {Payload} from './Payload';
import {Cargo} from './Cargo'
import {Astronaut} from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems = [];
    astronauts = []
    constructor(name:string, totalCapacityKg:number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg
    }

    sumMass(items: Payload[]):number {
        let payloadSum:number = 0;
        for (let i = 0; i < items.length; i++){
            payloadSum += items[i].massKg
        }
        return payloadSum
    };

    currentMassKg():number {
        let astronautAndCargo = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return astronautAndCargo;

    };

    canAdd(item:Payload):Boolean {
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true
        };
    };

    addCargo(cargo:Cargo):boolean {
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true
        } else {return false}
    };

    addAstronaut(astronaut: Astronaut):boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {return false}
    };

}