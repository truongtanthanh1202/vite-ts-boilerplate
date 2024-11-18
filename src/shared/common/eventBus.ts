import emitter from 'tiny-emitter/instance';

export const eventBus = {
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => {
    try {
      return emitter.off(...args);
    } catch (e) {
      console.log(e);
    }
  },
  $emit: (...args) => emitter.emit(...args),
};
