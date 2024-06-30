export class ScratchRow {
    length: number;
    answer: number;
	scratches: Set<number>;

    constructor(length: number = 5, answer: number = 0) {
        this.length = length;
        this.answer = answer;
        this.scratches = new Set<number>();
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
            return this.rowlength ;
        } else if (this.scratches.size === 2) {
            return this.rowlength - 2;
        } else if (this.scratches.size === 3) {
            return this.rowlength - 4;
        }else {
            return 0;
        }
    }

}