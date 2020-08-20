// generate html for tip

export const TipHTMLGenerator = (tip, num) => {
    return `
    <div class="tipcard">tip number ${num}<br>${tip.tip}</div>
    `
}


