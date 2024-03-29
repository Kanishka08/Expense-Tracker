function handleFormSubmit(event) {
  event.preventDefault();

  const expenseData = event.target.amount.value;
  const description = event.target.description.value;
  const category = event.target.category.value;

  const expDetail = {
    ExpenseAmount: expenseData,
    Description: description,
    Category: category,
  };

  const expDetails = JSON.stringify(expDetail);

  localStorage.setItem("Expense Details", expDetails);

  const unorderList = document.getElementById("listItem");
  const list = document.createElement("li");
  list.textContent = `ExpenseAmount: ${expenseData}, Description ${description}, Category: ${category}`;

  unorderList.appendChild(list);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  listItem.appendChild(deleteBtn);
  listItem.appendChild(editBtn);

  deleteBtn.addEventListener("click", function (event) {
    localStorage.removeItem("Expense Details")
    listItem.removeChild(list);
    listItem.removeChild(deleteBtn);
    listItem.removeChild(editBtn);
  });

  editBtn.addEventListener("click", function (event) {
    localStorage.removeItem("Expense Details");
    unorderList.removeChild(list);
    listItem.removeChild(deleteBtn);
    listItem.removeChild(editBtn);
    document.getElementById('expenseamount').value = expDetail.expenseData;
    document.getElementById('description').value = expDetail.Description;
    document.getElementById('category').value = expDetail.Category;

  });
}
