const mockCategoryList = [{"strCategory":"Ordinary Drink"},{"strCategory":"Cocktail"},{"strCategory":"Shake"},{"strCategory":"Other \/ Unknown"},{"strCategory":"Cocoa"},{"strCategory":"Shot"},{"strCategory":"Coffee \/ Tea"},{"strCategory":"Homemade Liqueur"},{"strCategory":"Punch \/ Party Drink"},{"strCategory":"Beer"},{"strCategory":"Soft Drink"}]

const mockIngrList = [{"strIngredient1":"Light rum"},{"strIngredient1":"Applejack"},{"strIngredient1":"Gin"},{"strIngredient1":"Dark rum"},{"strIngredient1":"Sweet Vermouth"},{"strIngredient1":"Strawberry schnapps"},{"strIngredient1":"Scotch"},{"strIngredient1":"Apricot brandy"},{"strIngredient1":"Triple sec"},{"strIngredient1":"Southern Comfort"},{"strIngredient1":"Orange bitters"},{"strIngredient1":"Brandy"},{"strIngredient1":"Lemon vodka"},{"strIngredient1":"Blended whiskey"},{"strIngredient1":"Dry Vermouth"},{"strIngredient1":"Amaretto"},{"strIngredient1":"Tea"},{"strIngredient1":"Champagne"},{"strIngredient1":"Coffee liqueur"},{"strIngredient1":"Bourbon"},{"strIngredient1":"Tequila"},{"strIngredient1":"Vodka"},{"strIngredient1":"A\u00f1ejo rum"},{"strIngredient1":"Bitters"},{"strIngredient1":"Sugar"},{"strIngredient1":"Kahlua"},{"strIngredient1":"demerara Sugar"},{"strIngredient1":"Dubonnet Rouge"},{"strIngredient1":"Watermelon"},{"strIngredient1":"Lime juice"},{"strIngredient1":"Irish whiskey"},{"strIngredient1":"Apple brandy"},{"strIngredient1":"Carbonated water"},{"strIngredient1":"Cherry brandy"},{"strIngredient1":"Creme de Cacao"},{"strIngredient1":"Grenadine"},{"strIngredient1":"Port"},{"strIngredient1":"Coffee brandy"},{"strIngredient1":"Red wine"},{"strIngredient1":"Rum"},{"strIngredient1":"Grapefruit juice"},{"strIngredient1":"Ricard"},{"strIngredient1":"Sherry"},{"strIngredient1":"Cognac"},{"strIngredient1":"Sloe gin"},{"strIngredient1":"Apple juice"},{"strIngredient1":"Pineapple juice"},{"strIngredient1":"Lemon juice"},{"strIngredient1":"Sugar syrup"},{"strIngredient1":"Milk"},{"strIngredient1":"Strawberries"},{"strIngredient1":"Chocolate syrup"},{"strIngredient1":"Yoghurt"},{"strIngredient1":"Mango"},{"strIngredient1":"Ginger"},{"strIngredient1":"Lime"},{"strIngredient1":"Cantaloupe"},{"strIngredient1":"Berries"},{"strIngredient1":"Grapes"},{"strIngredient1":"Kiwi"},{"strIngredient1":"Tomato juice"},{"strIngredient1":"Cocoa powder"},{"strIngredient1":"Chocolate"},{"strIngredient1":"Heavy cream"},{"strIngredient1":"Galliano"},{"strIngredient1":"Peach Vodka"},{"strIngredient1":"Ouzo"},{"strIngredient1":"Coffee"},{"strIngredient1":"Spiced rum"},{"strIngredient1":"Water"},{"strIngredient1":"Espresso"},{"strIngredient1":"Angelica root"},{"strIngredient1":"Orange"},{"strIngredient1":"Cranberries"},{"strIngredient1":"Johnnie Walker"},{"strIngredient1":"Apple cider"},{"strIngredient1":"Everclear"},{"strIngredient1":"Cranberry juice"},{"strIngredient1":"Egg yolk"},{"strIngredient1":"Egg"},{"strIngredient1":"Grape juice"},{"strIngredient1":"Peach nectar"},{"strIngredient1":"Lemon"},{"strIngredient1":"Firewater"},{"strIngredient1":"Lemonade"},{"strIngredient1":"Lager"},{"strIngredient1":"Whiskey"},{"strIngredient1":"Absolut Citron"},{"strIngredient1":"Pisco"},{"strIngredient1":"Irish cream"},{"strIngredient1":"Ale"},{"strIngredient1":"Chocolate liqueur"},{"strIngredient1":"Midori melon liqueur"},{"strIngredient1":"Sambuca"},{"strIngredient1":"Cider"},{"strIngredient1":"Sprite"},{"strIngredient1":"7-Up"},{"strIngredient1":"Blackberry brandy"},{"strIngredient1":"Peppermint schnapps"},{"strIngredient1":"Creme de Cassis"}]

const mockCocktails = [{"strDrink":"Absinthe #2","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uxxtrt1472667197.jpg","idDrink":"12790"},{"strDrink":"Amaretto Liqueur","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/swqxuv1472719649.jpg","idDrink":"12792"},{"strDrink":"Angelica Liqueur","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yuurps1472667672.jpg","idDrink":"12794"},{"strDrink":"Caribbean Orange Liqueur","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qwxuwy1472667570.jpg","idDrink":"12796"},{"strDrink":"Coffee Liqueur","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ryvtsu1441253851.jpg","idDrink":"12798"},{"strDrink":"Coffee-Vodka","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qvrrvu1472667494.jpg","idDrink":"12800"},{"strDrink":"Cranberry Cordial","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qtspsx1472667392.jpg","idDrink":"12802"},{"strDrink":"Creme de Menthe","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yxswtp1441253918.jpg","idDrink":"12808"},{"strDrink":"Homemade Kahlua","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uwtsst1441254025.jpg","idDrink":"17044"},{"strDrink":"Irish Cream","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/90etyl1504884699.jpg","idDrink":"12820"},{"strDrink":"Scottish Highland Liqueur","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/upqvvp1441253441.jpg","idDrink":"12854"},{"strDrink":"Tia-Maria","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/sih81u1504367097.jpg","idDrink":"12856"}]

const mockCocktail = {"idDrink":"11007","strDrink":"Margarita","strDrinkAlternate":null,"strTags":"IBA,ContemporaryClassic","strVideo":null,"strCategory":"Ordinary Drink","strIBA":"Contemporary Classics","strAlcoholic":"Alcoholic","strGlass":"Cocktail glass","strInstructions":"Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.","strInstructionsES":null,"strInstructionsDE":"Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der \u00e4u\u00dfere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genie\u00dfers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis sch\u00fctteln und vorsichtig in das Glas geben.","strInstructionsFR":null,"strInstructionsIT":"Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.","strInstructionsZH-HANS":null,"strInstructionsZH-HANT":null,"strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg","strIngredient1":"Tequila","strIngredient2":"Triple sec","strIngredient3":"Lime juice","strIngredient4":"Salt","strIngredient5":null,"strIngredient6":null,"strIngredient7":null,"strIngredient8":null,"strIngredient9":null,"strIngredient10":null,"strIngredient11":null,"strIngredient12":null,"strIngredient13":null,"strIngredient14":null,"strIngredient15":null,"strMeasure1":"1 1\/2 oz ","strMeasure2":"1\/2 oz ","strMeasure3":"1 oz ","strMeasure4":null,"strMeasure5":null,"strMeasure6":null,"strMeasure7":null,"strMeasure8":null,"strMeasure9":null,"strMeasure10":null,"strMeasure11":null,"strMeasure12":null,"strMeasure13":null,"strMeasure14":null,"strMeasure15":null,"strImageSource":"https:\/\/commons.wikimedia.org\/wiki\/File:Klassiche_Margarita.jpg","strImageAttribution":"Cocktailmarler","strCreativeCommonsConfirmed":"Yes","dateModified":"2015-08-18 14:42:59"}

export {
  mockCategoryList,
  mockIngrList,
  mockCocktails,
  mockCocktail,
}