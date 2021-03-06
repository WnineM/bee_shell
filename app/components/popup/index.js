import React from 'react';
import TopView from '../TopView';
import PopupContainer from './PopupContainer';

let popupInstance;

export default {
  show(content, options = {
    animationType: 'slide-down',
    maskClosable: true,
    distanceOffset: 100,
    onMaskClose() {},
  }) {
    TopView.set(
      <PopupContainer
        ref={i => popupInstance = i}
        onMaskClose={options.onMaskClose}
        maskClosable={options.maskClosable}
        distanceOffset={options.distanceOffset}
        animationType={options.animationType}
        onAnimationEnd={visible => { if (!visible) { TopView.remove(); } }}
        visible
      >
        {content}
      </PopupContainer>,
    );
  },
  hide() {
    if (popupInstance) {
      popupInstance.hide();
    }
  },
};

//        maskClosable={options.maskClosable}

