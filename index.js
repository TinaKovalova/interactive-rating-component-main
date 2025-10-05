"use strict";

const rateForm = document.querySelector("#rate-form");
rateForm?.addEventListener("submit", (e) => {
   e.preventDefault();
    const rateLabel = document.querySelector(".rate-card__label-result span");
    const radioBtnChecked = e.target.querySelector(".rate-form__radio-btn:checked");
    if (radioBtnChecked && rateLabel) {
      rateLabel.textContent = radioBtnChecked.value;
      document.querySelector(".rate-card__body").classList.add("_show-back");
    }
       
})

