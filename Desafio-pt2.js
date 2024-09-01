/*
    Desafio Map + Reduce + Filter
        Subtrair 10% de valor de mercado a todas as companhias -> MAP
        Filtrar somente companhias fundadas depois de 1980 -> FILTER
        Somar o valor de mercado das restantes -> REDUCE
*/

const companies = [
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 }
]

const newValueForCompanies = company => {
    company.marketValue = company.marketValue * 0.9
    return company
}

const onlyNewCompanies = company => company.foundedOn > 1980

const totalMarketValueNewCompanies = (acc, company) => acc + company.marketValue

const marketValueNewCompanies = companies.map(newValueForCompanies)
.filter(onlyNewCompanies)
.reduce(totalMarketValueNewCompanies, 0)

console.log(marketValueNewCompanies)