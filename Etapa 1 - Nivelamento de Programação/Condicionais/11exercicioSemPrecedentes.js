// Escreva a função podeSeAposentar que recebe por parâmetro a idade, o sexo e os anos de contribuição previdenciária que uma pessoa tem. Tenha em mente que a idade mínima para se aposentar para mulheres é 60 anos, enquanto que para homens é 65. Em ambos os casos, você deve ter pelo menos 30 anos de contribuição.

function podeSeAposentar (idade, sexo, anos) {
    if (idade > 60 && sexo == "F" && anos > 30) {
        return true;
    } else if (idade > 65 && sexo == "M" && anos > 30) {
        return true;
    } else 
        return false;
}