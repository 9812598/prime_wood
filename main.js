const showModal = () => {
  let modal = document.getElementById("modal");
  modal.classList.remove("modal--hidden");
};

const listOfItems = [];

const hideModal = () => {
  let modal = document.getElementById("modal");
  modal.classList.add("modal--hidden");
  clearData();
};

const clearData = () => {
  const clearSelect = (data) => {
    const mySelect = document.getElementById(data);
    mySelect.value = "";
    mySelect.classList.remove("modal__input--invalid");
    mySelect.nextElementSibling.classList.remove(
      "modal__invalid-desc--invalid"
    );
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
      element.classList.add("modal__input--invalid");
      nextElement.classList.add("modal__invalid-desc--invalid");
    } else {
      element.classList.remove("modal__input--invalid");
      nextElement.classList.remove("modal__invalid-desc--invalid");
      itemRow[element.id] = element.value;
      return true;
    }
  };

  testInput(regexTitle, title);
  testInput(regexPrice, price);
  testInput(regexDate, date);

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
    tr.classList.add("table__row");

    const tdId = document.createElement("td");
    tdId.classList.add("table__item-id");
    tdId.append(item["id"]);
    tr.appendChild(tdId);

    const tdTitle = document.createElement("td");
    tdTitle.append(item["title"]);
    tr.appendChild(tdTitle);

    const tdPrice = document.createElement("td");
    tdPrice.append(item["price"]);
    tr.appendChild(tdPrice);

    const tdDate = document.createElement("td");
    const dates = item["date"].split(" ");

    const br = document.createElement("br");

    tdDate.append(dates[0]);
    tdDate.appendChild(br);
    tdDate.append(dates[1]);
    tr.appendChild(tdDate);
    tbody.appendChild(tr);
  });
};
