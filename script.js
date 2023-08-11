import Table from "./script2.js";

console.log(Table, "table");

  const tableData = {
    columns: ["Name", "Email"],
    data: [
      ["Edi Hartono", "edi.eduwork@gmail.com"],
      ["Dodi Prakoso", "dodi@upscale.id"]
    ]
  };

  const myTable = new Table(tableData);

  const app = document.getElementById("app");

  console.log(myTable.render(app));
  myTable.render(app);
  