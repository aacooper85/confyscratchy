export class ScratchRow {
    length: number;
    answer: number;
	scratches: Set<number>;

    constructor(length: number = 5, answer: number = 0) {
        this.length = length;
        this.answer = answer;
        this.scratches = new Set();
    }

	scratch(index:number){
		this.scratches.add(index);
	}
	
	answered(){
		return this.scratches.has(this.answer);
	}
	
	scratched(index:number){
		return this.scratches.has(index);
	}
	
	score() {
        if (!this.scratches.has(this.answer)) {
            return 0;
        } else if (this.scratches.size === 1) {
            return this.length ;
        } else if (this.scratches.size === 2) {
            return this.length - 2;
        } else if (this.scratches.size === 3) {
            return this.length - 4;
        }else {
            return 0;
        }
    }

}

export class ScratchChoice{
	scratched: boolean;
	correct: boolean;
	buttonlabel: String;
	
	constructor(scratched:boolean=false,correct:boolean=false,buttonlabel:String="?"){
		this.scratched = scratched;
		this.correct = correct;
		this.buttonlabel = buttonlabel;
	}
	
	scratch(){
		this.scratched=true;
	}
}
