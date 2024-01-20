
// Task 1. find element with id=2
let array = [
    {id: 1},
    {id: 2}, // <--
    {id: 3}
];

array.find((item) => item.id === 2); // i used array.filter => it's a kill beacuse we are finding only one item
// -> [{id: 2}]


// Task 2: array.flat() to flatten the array containing mixed data types i.e objects, arrays 
let data = [{
		id: 1,
		value: 1
	},
	[{
		id: 2,
		value: 2
	},
	{
		id: 3,
		value: 3
	}, 
	[{
		id: 4,
		value: 4
	}]
	]
];

// Task 3: output => 
setTimeout(() => console.log(3), 0);
console.log(4);


// Task 4. write angular code for below task
// template for TaskPad
<app-task-pad>
	<app-select></app-select>
</app-task-pad>

export class TaskPad {
    data = [{
		id: 1,
		value: task_1
	},
	{
		id: 2,
		value: task_2
	}];
	
}


// template for Select
<select>

</select>

class Select {

}

// Service
export class SomeService {
	const inputData = [{
		id: 1,
		value: task_1
	},
	{
		id: 2,
		value: task_2
	}];

	getData() {
	 return data;
	}
}


// solution for angular task 
// template for TaskPad
<app-task-pad>
	<app-select [inputData]="data" (dataEmit)="dataEmitHandler($event)"></app-select>
</app-task-pad>

export class TaskPad {
    data = [{
		id: 1,
		value: task_1
	},
	{
		id: 2,
		value: task_2
	}];
	
	constructor(){
	    
	}
	
	dataEmitHandler(){
	    
	}
}


// template for Select
<select>
<div *ngFor="let data of inputData"> {{data.value}} </div> 

</select>

class Select {
    @Input() data;
    
    @Output() dataEmit = EventEmitter();
    
   emitAction(data){
	    this.dataEmit.emit(data);
	}

}

export class SomeService {
	const inputData = [{
		id: 1,
		value: task_1
	},
	{
		id: 2,
		value: task_2
	}];

	getData() {
	 return data;
	}

}


