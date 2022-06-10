function addCheese() {
    var toppingsPizza = document.getElementById("toppings1");

    var theToppings = getStyles(toppingsPizza, "background-image");
    //console.log(theToppings["background-image"]); 

    var toppingsString = theToppings["background-image"];
    var newToppings = toppingsString + "," + "url('https://assets.codepen.io/6306176/pizza-cheese3.png')";
    toppingsPizza.style.backgroundImage = newToppings;

}


const convertRestArgsIntoStylesArr = ([...args]) => {
    return args.slice(1);
}
const getStyles = function () {
    const args = [...arguments];
    const [element] = args;

    let stylesProps = [...args][1] instanceof Array ? args[1] : convertRestArgsIntoStylesArr(args);

    const styles = window.getComputedStyle(element);
    const stylesObj = stylesProps.reduce((acc, v) => {
        acc[v] = styles.getPropertyValue(v);
        return acc;
    }, {});

    return stylesObj;
};