const figlet = require("figlet");
const { ColorTheme } = require("./colors");

const colors = new ColorTheme();

function displayBanner() {
  const banner = figlet.textSync("Humanity BOT", {
    font: "ANSI Shadow", 
    horizontalLayout: "default", 
    verticalLayout: "default", 
    width: 100, 
  });

  // 
  console.log(colors.style(banner, "header"));
  console.log(
    colors.style("===============================================", "border") 
  );
  console.log(colors.style("Telegram Channel:", "https://t.me/layerairdrop")); 
  console.log(colors.style("Telegram Channel", "https://t.me/layerairdropdiskusi")); 
  console.log(
    colors.style("===============================================\n", "border") 
  );
}

module.exports = displayBanner;
