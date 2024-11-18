import { eventBus } from '@/shared/common';

class NotiPopup {
  open(options) {
    eventBus.$emit('openNotiPopup', options);
  }

  close() {
    eventBus.$emit('closeNotiPopup');
  }
}

export const notiPopup = new NotiPopup();
