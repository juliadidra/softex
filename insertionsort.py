'''Faça um algoritmo de ordenação utilizando o método insertion sort.
Crie um método que execute as seguintes operações:

- Tamanho do vetor: 30;
- Utilize números ímpares;
- Opere em ordem crescente.'''

import random
def insertion_sort(vetor):
    i = 1
    while i < len(vetor):
        temp = vetor[i]
        trocou = False
        j = i - 1
        while j >= 0 and vetor[j] > temp:
            vetor[j+1] = vetor[j]
            trocou = True
            j -= 1
        if trocou:
            vetor[j+1] = temp
        i += 1


vetor = list(range(0,30))
random.shuffle(vetor)

insertion_sort(vetor)

print(vetor)
