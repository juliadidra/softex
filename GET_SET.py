'''Crie uma classe e insira nela, no mínimo, dois atributos, os quais devem ter um método acessor (
get
) e um método modificador (
set
) para cada. Defina um objeto para cada atributo e elabore um construtor para criar alguma regra.

A atividade pode ser realizada em qualquer linguagem de programação ou apenas utilizando algoritmos.'''

class Pet():
    def __init__(self, animal = 0 , especie = ''):
        self._animal = animal
        self._especie = especie
        
    def get_atributos (self):
        return self._animal
        
        
    def set_atributos (self,y):
        self._animal = y
        
    def construtor_especie(self):
        if self._especie == 'gato':
            especie = 'felino'
        elif self._especie == 'cachorro':
            especie = 'canino'
        else:
            print('digite apenas uma das 2 opções de pet')
        self._especie = especie
        return self._especie
teste = Pet()
pet = input('qual o seu pet de estimação? (gato/cachorro) ')
teste.set_atributos(pet)
print(teste.get_atributos())
print(teste.construtor_especie())
