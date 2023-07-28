n1 = 430.2
window.alert(n1)
//mostra até a segunda casa decimal depois da virgula
n1 = n1.toFixed(2)
window.alert(n1)
//subtitui o ponto por virgula
n1 = n1.replac ('.',',')
window.alert(n1)
//vira dinheiro
n1 = n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
window.alert(n1)




