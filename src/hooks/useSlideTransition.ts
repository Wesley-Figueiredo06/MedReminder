import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export type ModalPaneMode = "details" | "edit";

const SLIDE_DURATION_MS = 250;

interface UseSlideTransitionResult {
  style: {
    transform: { translateX: Animated.Value }[];
  };
}

export function useSlideTransition(mode: ModalPaneMode, paneWidth: number): UseSlideTransitionResult {
  const translateX = useRef(new Animated.Value(0)).current;
  const previousMode = useRef(mode);

  useEffect(() => {
    if (previousMode.current !== mode) {
      // Salta para fora da tela do lado de onde o novo pane "entra", antes de
      // animar até 0 — sem isso o pane apareceria já no lugar, sem deslizar.
      const enterFrom = mode === "edit" ? paneWidth : -paneWidth;
      translateX.setValue(enterFrom);

      Animated.timing(translateX, {
        toValue: 0,
        duration: SLIDE_DURATION_MS,
        useNativeDriver: true,
      }).start();

      previousMode.current = mode;
    }
  }, [mode, paneWidth, translateX]);

  return {
    style: {
      transform: [{ translateX }],
    },
  };
}
