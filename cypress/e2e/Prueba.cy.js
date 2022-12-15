//describe() toma dos argumentos, el primero es el nombre del grupo de pruebas, y el segundo es una función callback
//it : se utiliza para un caso de prueba individual. it() toma dos argumentos, una cadena (string) que explica lo que la prueba debe hacer, y una función de devolución de llamada que contiene nuestra prueba real.

describe ('Primer Prueba', ()=> {
    it ('Navegar a nuestra primer página', ()=> {
        cy.visit('https://www.platzi.com')

    })
})