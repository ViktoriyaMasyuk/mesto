import Popup from "./popup.js";

export default  class PopupWithForm extends Popup {
    constructor(popupElement, handleSubmit, form) {
        super(popupElement);
        this._form = form;
        this._handleSubmit = handleSubmit;
        this._inputs = this._form.querySelectorAll('.form__info');
    }

    _getInputValues() {
        //собирает данные всех полей формы.
        this._formValues = {};
        this._inputs.forEach(input => {
          this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        //добавлять обработчик сабмита формы.
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues())
        });
    }

    close() {
        //форма должна ещё и сбрасываться
        super.close();
        this._form.reset();
    }
}