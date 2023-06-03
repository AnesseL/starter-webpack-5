export const showParagraph = () => {
    const paragraph = document.createElement('p');
    paragraph.textContent = "babel-loader @babel/core @babel/preset-env";
    paragraph.style.color = "#00ff00";
    document.body.appendChild(paragraph);
};

function checkFunction() {
    alert("checkFunction() it's OK");
}
export {
    checkFunction
};