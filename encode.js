const authorization = require("./middleware/authorization")

module.exports = function encode (req, res) {
    const input_value = req.body.input;
    console.log(input_value);
    
    a = authorization(req, res, next);
    return res.send({ encoded_value: encoder(input_value) });

}

function next() {
    console.log('Request authorized!');
}

function encoder(input){

    // let uInput = input.toUpperCase();
    let current_letter = input[0];
    let occurences = 0;
    let encoded = '';

    for (let i=0; i<input.length; i++){
        if(input[i] == current_letter){
            occurences++;
            if (i == input.length-1){
                encoded = encoded.concat(current_letter).concat(occurences.toString());
            }
            continue;
        }
        else{
            encoded = encoded.concat(current_letter).concat(occurences.toString());
            current_letter = input[i];
            occurences = 1;
            if (i == input.length-1){
                encoded = encoded.concat(current_letter).concat(occurences.toString());
            }
        }
    }

    return encoded;
}