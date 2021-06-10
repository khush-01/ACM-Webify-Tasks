function submitForm(form) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let improve = [];
  for (var i = 0; i < checkboxes.length; i++)
    checkboxes[i].checked && improve.push(checkboxes[i].value);

  const formObj = {
    name: form.name.value,
    email: form.email.value,
    age: form.age.value,
    role: form.role.value,
    recommend: form.recommend.value,
    improve: improve,
  };

  console.log(formObj);
  return 0;
}