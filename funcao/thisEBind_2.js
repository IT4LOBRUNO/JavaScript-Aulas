function pessoa() {
    this.idade = 0
    
    const self = this // Serve para driblar a variação do this com uma variavel
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // Bind serve para direcionar o codigo para o local certo
}

new pessoa