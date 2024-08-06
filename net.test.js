const { clickElement, getText } = require("./lib/commands.js");
//const { generateName } = require("./lib/util.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  page.setDefaultNavigationTimeout(0);
  await page.goto("http://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
  page.close();
});

describe("Buy one ticket", () => {
  
  test("Reserve one ticket", async () => {
    await clickElement(page, "a:nth-child(6)"); //Выбор даты
    await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='217']"); // Выбор сеанса
    await clickElement(page, "span[class='buying-scheme__chair buying-scheme__chair_standart']", { timeout: 10000 }); // Клик по селектору места
    await page.click(".acceptin-button"); // Клик по кнопке "Забронировать"
    const movieTitle = await getText(page, ".ticket__details.ticket__title");
    expect(movieTitle).toContain("Сталкер(1979)");
  });

  test("Buy multiple seats", async () => {
    await clickElement(page, "a:nth-child(6)"); 
    await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='217']"); 
    await clickElement(page, "span[class='buying-scheme__chair buying-scheme__chair_standart']"); 
    await clickElement(page, "span[class='buying-scheme__chair buying-scheme__chair_standart']"); 
    await clickElement(page, "span[class='buying-scheme__chair buying-scheme__chair_standart']"); 
    await page.click(".acceptin-button"); 
    const movieTitle = await getText(page, ".ticket__details.ticket__title");
    expect(movieTitle).toContain("Сталкер(1979)");
  });

  test("Buy a reserved seat", async () => {
    await clickElement(page, "a:nth-child(6)"); 
    await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='217']"); 
    await clickElement(page, "span[class='buying-scheme__chair buying-scheme__chair_taken']"); // Клик по забронированному месту
    const acceptinButton = await page.$(".acceptin-button");
    const notAvailable = await acceptinButton.evaluate((btn) => btn.disabled);
    expect(notAvailable).toEqual(true);
  });
});
