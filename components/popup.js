export default class Popup {
    constructor(popupSelector) {
        this._document = document;
        this._popupSelector = popupSelector;
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        this._document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        this._document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
    }
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        };
    }
    _handleOverlayClose (evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        };
      };
    setEventListeners() {
        this._popupSelector.querySelector('.popup__close').addEventListener('click', () => this.close());
        this._document.addEventListener('click', (evt) => this._handleOverlayClose(evt));

    };
}