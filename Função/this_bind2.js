function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        this.self++
        console.log(this.self)
    }/*.bind(this)*/,1000)
}

new Pessoa