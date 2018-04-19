var answer = process.arv[2];

            function Letter(answer) {
                this.character = answer;
                this.result = false;

                this.letterRender = function(character) {
                    if(this.character === false) {
                        return "_";
                    }
                    else {
                        return character;
                    }
                }
            }

            module.exports = Letter;