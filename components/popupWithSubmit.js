import Popup from "./popup.js";

export default  class PopupWithSubmit extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._form = popupElement;
    };

    setFormSubmitHandler(handleSubmit){
        this.setFormSubmitHandler = handleSubmit;
    };

    setEventListeners() {
        //добавлять обработчик сабмита формы.
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.setFormSubmitHandler();
        });
    }
}