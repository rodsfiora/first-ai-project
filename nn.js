function sigmoid(x) {
    //squeeze all range of values in between 0 and 1
    return 1/(1+ Math.exp(-x));
}


class NeuralNetwork{

    //10.16 2:02
    constructor(input_nodes, hidden_nodes, output_nodes, numO){
        this.input_nodes = input_nodes;
        this.hidden_nodes = hidden_nodes;
        this.output_nodes = output_nodes;

        this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
        this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
        this.weights_ih.randomize();
        this.weights_ho.randomize();

        this.bias_h = new Matrix(this.hidden_nodes);
        this.bias_o = new Matrix(this.output_nodes);
        this.bias_h.randomize();
        this.bias_o.randomize();
        
    }
    feedforward(input_array){

        //generating hidden outputs 
        let inputs = Matrix.fromArray(input_array);
        let hidden = Matrix.multiply(this.weights_ih, inputs);
        hidden.add(this.bias_h);

        //activation function
        hidden.map(sigmoid);

        //
        let output = Matrix.multiply(this.weights_ho, hidden);
        output.add(this.bias_o);
        output.map(sigmoid);

        //return output;
        return output.toArray;
    }

    train(inputs, targets){
        let outputs = this.feedforward(inputs);

        //inputs,targets is array, so outputs becames array
        //we want matrix
        outputs = Matrix.fromArray(outputs);
        targets = Matrix.fromArray(targets); 

        //calculate the error; error = targets - outputs

        let output_errors = Matrix.subtract(targets, outputs);
        
        //weights fomr hidden to output transpose
        let who_t = Matrix.transpose(this.weights_ho);

        //calculate hidden layer errors
        let hidden_errors = Matrix.multiply(who_t, output_errors);

        outputs.print();
        targets.print();
        error.print();

    }

}
