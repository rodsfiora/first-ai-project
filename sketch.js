var brain;

function setup(){

    let nn = new NeuralNetwork(2,2,1);
    
    let input = [1,0];
    let targets = [1];
    //let output = nn.feedforward(input);
    nn.train(inputs, targets);
    
    //console.log(output);


}