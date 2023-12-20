const showModal = () => {
  let modal = document.getElementById("modal");
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
  }, 20);
};

const listOfItems = [];

const hideModal = () => {
  let modal = document.getElementById("modal");
  modal.classList.add("opacity-0");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 500);
  clearData();
};

const clearData = () => {
  const clearSelect = (data) => {
    const mySelect = document.getElementById(data);
    mySelect.value = "";
    mySelect.nextElementSibling.classList.add("invisible");
    mySelect.classList.remove("border-red-500");
    mySelect.classList.add("border-slate-200");
  };

  clearSelect("title");
  clearSelect("price");
  clearSelect("date");
};

const validate = () => {
  const itemRow = {};

  let title = document.getElementById("title");
  let price = document.getElementById("price");
  let date = document.getElementById("date");

  const regexTitle = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
  const regexPrice = /^[1-9]+$/;
  const regexDate =
    /^([0-2][0-9]|3[0-1]).(0[1-9]|1[0-2]).[1-2][0-9][0-9][0-9] ([0-1][0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]$/;

  const testInput = (reg, element) => {
    const nextElement = element.nextElementSibling;

    if (!reg.test(element.value)) {
      element.classList.remove("border-slate-200");
      element.classList.add("border-red-500");
      nextElement.classList.remove("invisible");
    } else {
      element.classList.remove("border-red-500");
      element.classList.add("border-slate-200");
      nextElement.classList.add("invisible");
      itemRow[element.id] = element.value;
      return true;
    }
  };

  if (
    testInput(regexTitle, title) &&
    testInput(regexPrice, price) &&
    testInput(regexDate, date)
  ) {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    itemRow.id = listOfItems.length + 1;
    listOfItems.push(itemRow);
    console.log(listOfItems);
    clearData();
    hideModal();
    DrowItems();
  }
};

const DrowItems = () => {
  listOfItems.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  const tbody = document.getElementById("tbody");

  listOfItems.forEach((item) => {
    const tr = document.createElement("tr");
    tr.classList.add("border-t-2", "border-slate-200");

    for (key in item) {
      const td = document.createElement("td");
      td.append(item[key]);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
};
