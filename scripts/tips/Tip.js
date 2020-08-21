// generate html for tip

export const TipHTMLGenerator = (tip, num) => {
    return `
    <div class="tipcard"><small>tip number ${num}</small><br>${tip.tip}</div>
    `
}


