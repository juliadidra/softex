class Carro:
    def __init__ (self, marca, ano, direcao):
        self.marca = marca
        self.ano = ano
        self.direcao = direcao
        
    def ligar(self):
        print('o carro esta ligado')
        
    def buzinar(self):
        print('bi bi!')
    
    def informaçoes(self):
        print(self.marca, self.ano, self.direcao)
    
carro1 = Carro('Nissan', '2013', 'eletrica')
carro1.ligar()
carro1.buzinar()
carro1.informaçoes()
