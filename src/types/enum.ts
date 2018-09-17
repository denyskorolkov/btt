export enum EActions {
  SAVE_SELECTED_TEXT = 256,
  TOGGLE_TRUE_TONE = 257,
  RUN_APPLESCRIPT_IN_BG = 172,
  SEND_SHORTCUT_TO_APP = 128,
  SEND_SHORTCUT = -1,
  NO_ACTION = -1,
  SHOW_HUD = 254,
  TOGGLE_DND = 200,
  TOGGLE_NIGHT_SHIFT = 201,
  VOLUME_UP = 24,
  VOLUME_UP_SLIGHTLY = 198,
  VOLUME_DOWN = 25,
  VOLUME_DOWN_SLIGHTLY = 199,
  TRIGGER_HAPTIC_ENGINE = 255,
  INSERT_TYPE_PASTE_TEXT = 118,
  LAUNCH_APPLICATION = 49,
  TOGGLE_APPLICATION = 177,
  MUTE = 22,
  START_SIRI = 173,
  TOGGLE_BTT = 101,
  DELAY_NEXT_ACTION = 129,
  MOVE_MOUSE = 153,
  TOGGLE_MOUSE_SPEED = 126,
  TOGGLE_MOUSE_CURSOR = 140,
  TOGGLE_MOUSE_SIZE = 123,
  KEYBOARD_BRIGHTNESS_UP = 31,
  KEYBOARD_BRIGHTNESS_DOWN = 32,
  TOGGLE_DARK_MODE = 197,
  SHOW_WEB_VIEW = 249,
  LOCK_SCREEN = 158,
  LOGOUT = 15,
  SLEEP_DISPLAY = 13,
  SLEEP_COMPUTER = 14,
  RESTART_BTT = 55,
  QUIT_BTT = 56,
  SWITCH_TO_PRESET = 139,
  EXECUTE_SCRIPT = 206,
}

// TRACKPAD RELATED TRIGGERS
export enum ETrackpadTriggers {
  // one finger gestures
  CORNER_CLICK_BOTTOM_LEFT = 157,
  CORNER_CLICK_BOTTOM_RIGHT = 158,
  CORNER_CLICK_TOP_LEFT = 182,
  CORNER_CLICK_TOP_RIGHT = 183,
  ONE_FINGER_TAP_TOP_LEFT = 122,
  ONE_FINGER_TAP_TOP_MIDDLE = 124,
  ONE_FINGER_TAP_TOP_RIGHT = 123,
  ONE_FINGER_TAP_BOTTOM_LEFT = 125,
  ONE_FINGER_TAP_BOTTOM_MIDDLE = 127,
  ONE_FINGER_TAP_BOTTOM_RIGHT = 126,
  ONE_FINGER_TAP_LEFT_SIDE_MIDDLE = 134,
  ONE_FINGER_TAP_RIGHT_SIDE_MIDDLE = 135,
  TRIANGLE_SWIPE_TOP_LEFT_CORNER = 147,
  TRIANGLE_SWIPE_TOP_RIGHT_CORNER = 148,
  TRIANGLE_SWIPE_BOTTOM_LEFT_CORNER = 149,
  TRIANGLE_SWIPE_BOTTOM_RIGHT_CORNER = 150,
  // two finger gestures
  TWO_FINGER_TAP = 173,
  TWO_FINGER_DOUBLE_TAP = 179,
  TWO_FINGER_CLICK = 174, 
  TIP_TAP_LEFT = 113,
  TIP_TAP_RIGHT = 114,
  PINCH_IN = 115,
  PINCH_OUT = 116,
  ROTATE_LEFT = 117,
  ROTATE_RIGHT = 118,
  SCROLL_UP = 119, // @TODO - modified key needed
  SCROLL_DOWN = 120, // @TODO - modifier key needed
  TWO_FINGER_SWIPE_UP = 161,
  TWO_FINGER_SWIPE_DOWN = 162,
  TWO_FINGER_SWIPE_LEFT = 159,
  TWO_FINGER_SWIPE_RIGHT = 160,
  TWO_FINGER_SWIPE_FROM_TOP_EDGE = 167,
  TWO_FINGER_SWIPE_FROM_BOTTOM_EDGE = 168,
  TWO_FINGER_SWIPE_FROM_LEFT_EDGE = 165,
  TWO_FINGER_SWIPE_FROM_RIGHT_EDGE = 166,
  // three finger gestures
  THREE_FINGER_TAP = 104,
  THREE_FINGER_DOUBLE_TAP = 163,
  THREE_FINGER_TAP_TOP = 140,
  THREE_FINGER_TAP_BOTTOM = 139,
  THREE_FINGER_CLICK = 112,
  THREE_FINGER_SWIPE_UP = 102,
  THREE_FINGER_SWIPE_DOWN = 103,
  THREE_FINGER_SWIPE_LEFT = 100,
  THREE_FINGER_SWIPE_RIGHT = 101,
  THREE_FINGER_CLICKSWIPE_UP = 155,
  THREE_FINGER_CLICKSWIPE_DOWN = 156,
  THREE_FINGER_CLICKSWIPE_LEFT = 153,
  THREE_FINGER_CLICKSWIPE_RIGHT = 154,
  THREE_FINGER_TIP_TAP_LEFT = 132,
  THREE_FINGER_TIP_TAP_RIGHT = 133,
  THREE_FINGER_TIP_TAP_MIDDLE = 138,
  THREE_FINGER_TIP_SWIPE_LEFT_FINGER_UP = 143,
  THREE_FINGER_TIP_SWIPE_LEFT_FINGER_DOWN = 142,
  THREE_FINGER_TIP_SWIPE_LEFT_FINGER_LEFT = 146,
  THREE_FINGER_TIP_SWIPE_LEFT_FINGER_RIGHT = 145,
  PINCH_WITH_THUMB_AND_TWO_FINGERS = 197,
  SPREAD_WITH_THUMB_AND_TWO_FINGERS = 198,
  // four finger gestures
  FOUR_FINGER_TAP = 110,
  FOUR_FINGER_DOUBLE_TAP = 169,
  FOUR_FINGER_CLICK = 121,
  FOUR_FINGER_SWIPE_UP = 108,
  FOUR_FINGER_SWIPE_DOWN = 107,
  FOUR_FINGER_SWIPE_LEFT = 105,
  FOUR_FINGER_SWIPE_RIGHT = 106,
  PINCH_WITH_THUMB_AND_THREE_FINGERS = 194,
  SPREAD_WITH_THUMB_AND_THREE_FINGERS = 195,
  FOUR_FINGER_TIP_TAP_LEFT = 136,
  FOUR_FINGER_TIP_TAP_RIGHT = 137,
  // five and more finger gestures
  FIVE_FINGER_TAP = 111,
  FIVE_FINGER_CLICK = 141,
  PINCH_WITH_THUMB_AND_FOUR_FINGERS = 200,
  SPREAD_WITH_THUMB_AND_FOUR_FINGERS = 201,
  FIVE_FINGER_SWIPE_UP = 131,
  FIVE_FINGER_SWIPE_DOWN = 130,
  FIVE_FINGER_SWIPE_LEFT = 128,
  FIVE_FINGER_SWIPE_RIGHT = 129,
  FIVE_FINGER_TOUCH_MOVE = 151,
  WHOLE_HAND = 199,
  // force touch related gestures
  ONE_FINGER_FORCE_CLICK = 203,
  CORNER_FORCE_CLICK_BOTTOM_LEFT = 186,
  CORNER_FORCE_CLICK_BOTTOM_RIGHT = 187,
  CORNER_FORCE_CLICK_TOP_LEFT = 184,
  CORNER_FORCE_CLICK_TOP_RIGHT = 185,
  TWO_FINGER_CLICK_LEFT_HARDER = 176,
  TWO_FINGER_CLICK_RIGHT_HARDER = 177,
  TWO_FINGER_FORCE_CLICK = 175,
  TWO_FINGER_FORCE_CLICK_LEFT_HARDER = 180,
  TWO_FINGER_FORCE_CLICK_RIGHT_HARDER = 181,
  THREE_FINGER_CLICK_LEFT_HARDER = 188,
  THREE_FINGER_CLICK_RIGHT_HARDER = 190,
  THREE_FINGER_FORCE_CLICK = 170,
  THREE_FINGER_FORCE_CLICK_LEFT_HARDER = 191,
  THREE_FINGER_FORCE_CLICK_RIGHT_HARDER = 193,
  FOUR_FINGER_FORCE_CLICK = 171,
  FIVE_FINGER_FORCE_CLICK = 172,
}

export enum EOtherTriggers {
  NAMED_TRIGGER = 643,// @TODO: add notice mechanism
  DOUBLE_CLICK_MAIN_MENUBAR = 613,
  DOUBLE_CLICK_WINDOW_TITLEBAR = 600,
  LEFT_CLICK_FULLSCREEN_BUTTON = 623,
  RIGHT_CLICK_FULLSCREEN_BUTTON = 614,
  MIDDLE_CLICK_FULLSCREEN_BUTTON = 627,
  LEFT_CLICK_RED_WINDOW_BUTTON = 622,
  LEFT_CLICK_ORANGE_WINDOW_BUTTON = 621,
  LEFT_CLICK_GREEN_WINDOW_BUTTON = 615,
  RIGHT_CLICK_RED_WINDOW_BUTTON = 601,
  RIGHT_CLICK_ORANGE_WINDOW_BUTTON = 602,
  RIGHT_CLICK_GREEN_WINDOW_BUTTON = 603,
  MIDDLE_CLICK_RED_WINDOW_BUTTON = 626,
  MIDDLE_CLICK_ORANGE_WINDOW_BUTTON = 625,
  MIDDLE_CLICK_GREEN_WINDOW_BUTTON = 628,
  LAUNCHING_ON_SERIAL_NUMBER = 641, // @TODO: add notice mechanism
  MOVE_MOUSE_TO_TOP_LEFT_CORNER = 609, // @TODO: add notice mechanism
  MOVE_MOUSE_TO_TOP_RIGHT_CORNER = 610, // @TODO: add notice mechanism
  MOVE_MOUSE_TO_BOTTOM_LEFT_CORNER = 611, // @TODO: add notice mechanism
  MOVE_MOUSE_TO_BOTTOM_RIGHT_CORNER = 612, // @TODO: add notice mechanism
  RECIEVED_DISTRIBUTED_NOTIFICATION_WITH_NAME = 607, // @TODO: add notice mechanism
  BLUETOOTH_DEVICE_CAME_CLOSE = 616, // @TODO: add notice mechanism
  BLUETOOTH_DEVICE_MOVED_AWAY = 617, // @TODO: add notice mechanism
  BLUETOOTH_DEVICE_OUT_OF_RANGE = 618, // @TODO: add notice mechanism
  BLUETOOTH_DEVICE_BACK_IN_RANGE = 619, // @TODO: add notice mechanism
  BEFORE_MAC_GOES_TO_SLEEP = 605,
  AFTER_MAC_WAKES_FROM_SLEEP = 606,
}

export enum ESiriRemoteTriggers {
  // siri remote - button related gestures
  SR_BUTTON_MENU = 325,
  SR_BUTTON_VOLUME_UP = 320,
  SR_BUTTON_VOLUME_DOWN = 321,
  SR_BUTTON_PLAY_PAUSE = 323,
  SR_BUTTON_MICROPHONE = 322,
  SR_BUTTON_TV_SCREEN = 324,
  SR_BUTTON_HOLD_MENU = 337,
  SR_BUTTON_HOLD_TV_SCREEN = 336,
  SR_BUTTON_HOLD_MICROPHONE = 334,
  SR_BUTTON_HOLD_PLAY_PAUSE = 335,
  SR_BUTTON_HOLD_VOLUME_UP = 332,
  SR_BUTTON_HOLD_VOLUME_DOWN = 333,
  // Siri remote - button related gestures
  SR_SWIPE_UP = 329,
  SR_SWIPE_DOWN = 330,
  SR_SWIPE_LEFT = 327,
  SR_SWIPE_RIGHT = 328,
  SR_TAP = 331,
  SR_TAP_LEFT = 343,
  SR_TAP_RIGHT = 344,
  SR_TAP_TOP = 345,
  SR_TAP_BOTTOM = 346,
  SR_CLICK = 326,
  SR_CLICK_LEFT = 339,
  SR_CLICK_RIGHT = 340,
  SR_CLICK_TOP = 341,
  SR_CLICK_BOTTOM = 342,
  SR_CLICK_HOLD = 338,
  SR_CLICK_HOLD_LEFT = 347,
  SR_CLICK_HOLD_RIGHT = 348,
  SR_CLICK_HOLD_TOP = 349,
  SR_CLICK_HOLD_BOTTOM = 350,
}

export enum ETouchBarWidgets {
  CREATE = 642,
}

export enum EMouseTriggers {
  
}

export enum EMagicMouseTriggers {

}