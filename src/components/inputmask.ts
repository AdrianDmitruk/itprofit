import Inputmask from 'inputmask';

export default function initializeInputMask() {
  Inputmask({ mask: '+375 (99) 999-99-99' }).mask(
    document.getElementById('phone') as HTMLInputElement
  );
}
