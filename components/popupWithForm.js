import Popup from "./popup.js";
import { buttonEditPlace } from "../utils/constants.js";

export default  class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit, form) {
        super(popupSelector);
        this._form = form;
        this._handleSubmit = handleSubmit;
        this._inputs = this._form.querySelectorAll('.form__info');
        this._buttonSubmit = buttonEditPlace
    }

    _getInputValues() {
        //собирает данные всех полей формы.
        this._formValues = {};
        this._inputs.forEach(input => {
          this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }
    getValues() { 
        return this._getInputValues()
    };

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