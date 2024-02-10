let inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function enterClick(event) {
  // აქ ისევ გადავეცით ეგ პარამეტრი ანუ event-ი
  if (event.key === "Enter") {
    // და აქ უკვე მივუთითეთ კონკრეტულად რომელი ღილაკია საჭირო ანუ Enter
    if (inputBox.value === "") {
      alert("VERRRRRAAAA");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      inputBox.value = ""; // ეს შვება იმას რო როცა შეიყვან ინფორმაციას და დააჭერ ენთერს გაასუფთავებს ინფუთს
    }
  }
}

// მთავარი პრობლემა იყო იმაში რომ შენ ეუბნებოდი ინფუთს რომ როგორც კი რომელიმე ღილაკს დააჭერ
// ეგრევე ფუნქცია ჩაეშვას მარა კონკრეტულად რომელ ღილაკს მაგას არ უთითებდი
