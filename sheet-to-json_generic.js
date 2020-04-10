const { task } = require("./lib");
const c = require("./lib/constants");


(async function main() {
  console.log("Running task on start...");
  await task({
    sheet: c.SPREAD_SHEET_FAQ,
    tabs: {
      faq: c.TAB_FAQ
    },
    file: c.FILE_FAQ
  });
  await task({
    sheet: c.SPREAD_SHEET_TNC,
    tabs: {
      tnc: c.TAB_TNC
    },
    file: c.FILE_TNC
  });
  await task({
    sheet: c.SPREAD_SHEET_LINKS,
    tabs: {
      links: c.TAB_LINKS
    },
    file: c.FILE_LINKS
  });
  await task({
    sheet: c.SPREAD_SHEET_DOCTORS,
    tabs: {
      faq: c.TAB_DOCTOR
    },
    file: c.FILE_DOCTORS
  });
  console.log("End of sheet-to-json_generic");
})();
