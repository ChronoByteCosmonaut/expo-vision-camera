import { View, Text, StyleSheet } from "react-native";
import {
  useCameraDevice,
  useCameraPermission,
  Camera,
} from "react-native-vision-camera";
import React from "react";

const CameraView = () => {
  const device = useCameraDevice("back");
  const { hasPermission } = useCameraPermission();

  if (!hasPermission) return;
  if (device == null) return;
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

export default CameraView;
