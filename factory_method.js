function fabricarComputador (ram, hd, cpu, type) {
    let computador = {};
    computador.ram = ram;
    computador.hd = hd;
    computador.cpu = cpu;
    computador.type = type;
    if (type == 'server') {
    return new Pc (ram, hd, cpu, type);
    }
    if (type == 'pc') {
    return new Server (ram, hd, cpu, type);
    }
    return computador;
    
}

let pc = fabricarComputador('4', '8', '50', 'pc')
