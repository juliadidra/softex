'''Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, 
ele deve ser tratado como nulo.
Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, 
aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos '''

import enum 
class Candidatos (enum.Enum):
    x = 889
    y = 847
    z = 515
    branco = 0
    nulo = 0
candidatos = {"candidato x":0, "candidato y":0, "candidato z": 0, "branco": 0 , "nulo": 0}
sair = True
while sair == True:
    try:
        votar = int(input('digite o numero do candidato que deseja votar: '))
        if votar == Candidatos.x.value:
            candidatos['candidato x'] += 1 
            
        elif votar == Candidatos.y.value:
            candidatos['candidato y'] += 1
            
        elif votar == Candidatos.z.value:
            candidatos['candidato z'] += 1 
            
        elif votar == Candidatos.branco.value:
            candidatos['branco'] += 1 
            
        else:
            candidatos["nulo"]+= 1 
        nov = input('Deseja votar novamente? (sim/nao) ' )
        if nov == 'nao':
            sair = False
        
    except:
        print ('voce nao inseriu um número valido para a votacao')
        
    print(f"O candidato elegido é: {max(candidatos, key=candidatos.get)}")
    print ('votos x: {}'.format(candidatos["candidato x"]))
    print ('votos y: {}'.format(candidatos["candidato y"]))
    print ('votos z: {}'.format(candidatos["candidato z"]))
    print ('votos branco: {}'.format(candidatos["branco"]))
    print ('votos nulo: {}'.format(candidatos["nulo"]))
    
